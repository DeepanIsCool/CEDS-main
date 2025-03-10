export interface Event {
  id: number;
  title: string;
  description: string;
  date: {
    month: string;
    day: string;
    year: string;
  };
  time: string;
  location: string;
  status: string;
  position?: 'left' | 'right';
}

export const eventsData: Event[] = [
  {
    id: 1,
    title: "AI in Healthcare Symposium",
    description: "A one-day symposium exploring the latest applications of artificial intelligence in healthcare and medical diagnostics.",
    date: {
      month: "OCT",
      day: "15",
      year: "2023"
    },
    time: "9:00 AM - 5:00 PM",
    location: "Main Auditorium",
    status: "Registration Open",
    position: "right"
  },
  {
    id: 2,
    title: "Data Science Workshop Series",
    description: "A hands-on workshop series covering machine learning, data visualization, and statistical analysis using Python.",
    date: {
      month: "NOV",
      day: "03",
      year: "2023"
    },
    time: "10:00 AM - 4:00 PM",
    location: "Computing Lab 2",
    status: "Limited Seats",
    position: "left"
  },
  {
    id: 3,
    title: "Annual Research Conference",
    description: "Our flagship event showcasing research achievements, featuring keynote speakers from industry and academia.",
    date: {
      month: "DEC",
      day: "10",
      year: "2023"
    },
    time: "9:00 AM - 6:00 PM",
    location: "Conference Center",
    status: "Call for Papers",
    position: "right"
  },
  {
    id: 4,
    title: "Industry Connect Program",
    description: "A networking event connecting students with industry professionals for potential internships and research collaborations.",
    date: {
      month: "JAN",
      day: "22",
      year: "2024"
    },
    time: "2:00 PM - 7:00 PM",
    location: "Main Hall",
    status: "Coming Soon",
    position: "left"
  }
];
