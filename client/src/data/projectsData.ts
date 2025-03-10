export type ProjectCategory = 'Grant-in-Aid' | 'Collaborative' | 'Ongoing';

export interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  mentors: string[];
  funding?: string;
  fundingAmount?: string;
  image: string;
  partner?: string;
  icon?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "AI-Powered Precision Medicine",
    description: "Developing machine learning algorithms to predict patient outcomes based on genomic data and clinical history.",
    category: "Grant-in-Aid",
    mentors: ["Dr. Sarah Mitchell", "Prof. James Wilson"],
    funding: "Government",
    fundingAmount: "₹45 Lakhs",
    image: "https://images.unsplash.com/photo-1583339793403-3d9b001b6008?auto=format&fit=crop&w=800&q=80",
    icon: "fas fa-coins text-yellow-500"
  },
  {
    id: 2,
    title: "Smart City Data Analytics",
    description: "Collaborative research with municipal authorities to optimize urban planning through real-time data analytics.",
    category: "Collaborative",
    mentors: ["Prof. David Chen", "Dr. Angela Robinson"],
    partner: "Industry Partner",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
    icon: "fas fa-handshake text-blue-500"
  },
  {
    id: 3,
    title: "Neural Network Optimization",
    description: "Investigating novel approaches to optimize training of deep neural networks for resource-constrained devices.",
    category: "Ongoing",
    mentors: ["Dr. Angela Robinson"],
    partner: "Internal Research",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    icon: "fas fa-flask text-green-500"
  },
  {
    id: 4,
    title: "Quantum Machine Learning",
    description: "Exploring applications of quantum computing paradigms to enhance machine learning algorithms.",
    category: "Grant-in-Aid",
    mentors: ["Prof. James Wilson", "Prof. David Chen"],
    funding: "Government",
    fundingAmount: "₹72 Lakhs",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    icon: "fas fa-coins text-yellow-500"
  },
  {
    id: 5,
    title: "Climate Data Analysis",
    description: "Analyzing climate patterns using satellite imagery and sensor data to predict environmental changes.",
    category: "Collaborative",
    mentors: ["Dr. Sarah Mitchell", "Dr. Angela Robinson"],
    partner: "International",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
    icon: "fas fa-globe-americas text-blue-500"
  },
  {
    id: 6,
    title: "NLP for Regional Languages",
    description: "Developing natural language processing tools for underrepresented Indian languages.",
    category: "Ongoing",
    mentors: ["Prof. David Chen"],
    partner: "Linguistic Focus",
    image: "https://images.unsplash.com/photo-1542903660-eedba2cda473?auto=format&fit=crop&w=800&q=80",
    icon: "fas fa-language text-purple-500"
  }
];
