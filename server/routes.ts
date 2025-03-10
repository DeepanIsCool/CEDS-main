import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { facultyData, projectsData, eventsData, mentorsData, locationsData } from "./data";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for the Centre of Excellence for Data Science
  
  // Faculty data endpoint
  app.get('/api/faculty', (req, res) => {
    res.json(facultyData);
  });

  // Projects data endpoint
  app.get('/api/projects', (req, res) => {
    // Filter by category if query param is provided
    const category = req.query.category as string;
    
    if (category && category !== 'All') {
      const filtered = projectsData.filter(project => project.category === category);
      return res.json(filtered);
    }
    
    res.json(projectsData);
  });

  // Events data endpoint
  app.get('/api/events', (req, res) => {
    res.json(eventsData);
  });

  // Mentors data endpoint
  app.get('/api/mentors', (req, res) => {
    res.json(mentorsData);
  });

  // Locations data endpoint
  app.get('/api/locations', (req, res) => {
    res.json(locationsData);
  });

  // Single item endpoints
  app.get('/api/faculty/:id', (req, res) => {
    const faculty = facultyData.find(f => f.id === Number(req.params.id));
    if (faculty) {
      res.json(faculty);
    } else {
      res.status(404).json({ message: 'Faculty member not found' });
    }
  });

  app.get('/api/projects/:id', (req, res) => {
    const project = projectsData.find(p => p.id === Number(req.params.id));
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  });

  app.get('/api/events/:id', (req, res) => {
    const event = eventsData.find(e => e.id === Number(req.params.id));
    if (event) {
      res.json(event);
    } else {
      res.status(404).json({ message: 'Event not found' });
    }
  });

  app.get('/api/mentors/:id', (req, res) => {
    const mentor = mentorsData.find(m => m.id === Number(req.params.id));
    if (mentor) {
      res.json(mentor);
    } else {
      res.status(404).json({ message: 'Mentor not found' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
