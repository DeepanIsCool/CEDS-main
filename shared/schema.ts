import { pgTable, text, serial, integer, jsonb, timestamp, array } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Faculty table
export const faculty = pgTable("faculty", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  position: text("position").notNull(),
  specialty: text("specialty").notNull(),
  image: text("image").notNull(),
  links: jsonb("links").notNull()
});

// Project table
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  mentors: array(text("mentors")).notNull(),
  funding: text("funding"),
  fundingAmount: text("funding_amount"),
  image: text("image").notNull(),
  partner: text("partner"),
  icon: text("icon")
});

// Events table
export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  dateMonth: text("date_month").notNull(),
  dateDay: text("date_day").notNull(),
  dateYear: text("date_year").notNull(),
  time: text("time").notNull(),
  location: text("location").notNull(),
  status: text("status").notNull(),
  position: text("position")
});

// Mentors table
export const mentors = pgTable("mentors", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  position: text("position").notNull(),
  specialty: text("specialty").notNull(),
  bio: text("bio").notNull(),
  image: text("image").notNull(),
  links: jsonb("links").notNull(),
  achievements: array(text("achievements")).notNull(),
  publications: jsonb("publications").notNull()
});

// Locations table
export const locations = pgTable("locations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  address: text("address").notNull(),
  contactPhone: text("contact_phone").notNull(),
  contactEmail: text("contact_email").notNull(),
  icon: text("icon").notNull(),
  iconColor: text("icon_color").notNull(),
  coordinatesLat: integer("coordinates_lat").notNull(),
  coordinatesLng: integer("coordinates_lng").notNull()
});

// Users table (keep as is)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Insert schemas
export const insertFacultySchema = createInsertSchema(faculty).omit({ id: true });
export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });
export const insertEventSchema = createInsertSchema(events).omit({ id: true });
export const insertMentorSchema = createInsertSchema(mentors).omit({ id: true });
export const insertLocationSchema = createInsertSchema(locations).omit({ id: true });
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertFaculty = z.infer<typeof insertFacultySchema>;
export type Faculty = typeof faculty.$inferSelect;

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;

export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof events.$inferSelect;

export type InsertMentor = z.infer<typeof insertMentorSchema>;
export type Mentor = typeof mentors.$inferSelect;

export type InsertLocation = z.infer<typeof insertLocationSchema>;
export type Location = typeof locations.$inferSelect;
