export interface FacultyMember {
  id: number;
  name: string;
  position: string;
  specialty: string;
  image: string;
  links: {
    website?: string;
    linkedin?: string;
    github?: string;
  };
}

export const facultyData: FacultyMember[] = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    position: "Associate Professor",
    specialty: "Machine Learning & AI",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    links: {
      website: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: 2,
    name: "Prof. David Chen",
    position: "Professor",
    specialty: "Statistical Learning & Data Mining",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    links: {
      website: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: 3,
    name: "Dr. Angela Robinson",
    position: "Assistant Professor",
    specialty: "Computer Vision & NLP",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    links: {
      website: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: 4,
    name: "Prof. James Wilson",
    position: "Professor",
    specialty: "Big Data & Cloud Computing",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    links: {
      website: "#",
      linkedin: "#",
      github: "#"
    }
  }
];
