export interface Mentor {
  id: number;
  name: string;
  position: string;
  specialty: string;
  bio: string;
  image: string;
  links: {
    email?: string;
    website?: string;
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  achievements: string[];
  publications: {
    title: string;
    year: number;
    journal?: string;
    url?: string;
  }[];
}

export const mentorsData: Mentor[] = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    position: "Associate Professor",
    specialty: "Machine Learning & AI",
    bio: "Dr. Mitchell specializes in deep learning algorithms and their applications in healthcare. She has published over 30 research papers in top journals.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    links: {
      email: "s.mitchell@datasciencelab.edu",
      website: "#",
      linkedin: "#",
      github: "#",
      twitter: "#"
    },
    achievements: [
      "Best Paper Award at ICML 2022",
      "Google Research Grant 2021",
      "Excellence in Teaching Award 2020"
    ],
    publications: [
      {
        title: "Deep Learning Applications in Medical Imaging",
        year: 2022,
        journal: "Nature Machine Intelligence",
        url: "#"
      },
      {
        title: "Neural Networks for Clinical Prediction Models",
        year: 2021,
        journal: "Journal of Biomedical Informatics",
        url: "#"
      }
    ]
  },
  {
    id: 2,
    name: "Prof. David Chen",
    position: "Professor",
    specialty: "Statistical Learning & Data Mining",
    bio: "Prof. Chen is an expert in statistical machine learning and data mining algorithms. His research focuses on developing new methods for analyzing large-scale datasets.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    links: {
      email: "d.chen@datasciencelab.edu",
      website: "#",
      linkedin: "#",
      github: "#"
    },
    achievements: [
      "Fellow of the Royal Statistical Society",
      "IBM Faculty Award 2019",
      "Outstanding Researcher Award 2018"
    ],
    publications: [
      {
        title: "Advanced Methods for High-Dimensional Data Analysis",
        year: 2022,
        journal: "Journal of Machine Learning Research",
        url: "#"
      },
      {
        title: "New Frontiers in Statistical Learning Theory",
        year: 2020,
        journal: "Statistical Science",
        url: "#"
      }
    ]
  },
  {
    id: 3,
    name: "Dr. Angela Robinson",
    position: "Assistant Professor",
    specialty: "Computer Vision & NLP",
    bio: "Dr. Robinson specializes in computer vision and natural language processing. Her research combines these fields to create multimodal AI systems.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    links: {
      email: "a.robinson@datasciencelab.edu",
      website: "#",
      linkedin: "#",
      github: "#",
      twitter: "#"
    },
    achievements: [
      "ACL Best Demo Paper 2021",
      "CVPR Young Researcher Fellowship",
      "IEEE Women in Engineering Award"
    ],
    publications: [
      {
        title: "Vision-Language Models for Medical Image Analysis",
        year: 2022,
        journal: "IEEE Transactions on Medical Imaging",
        url: "#"
      },
      {
        title: "Cross-Modal Learning for Automated Diagnosis",
        year: 2021,
        journal: "CVPR Proceedings",
        url: "#"
      }
    ]
  },
  {
    id: 4,
    name: "Prof. James Wilson",
    position: "Professor",
    specialty: "Big Data & Cloud Computing",
    bio: "Prof. Wilson is a leading researcher in large-scale data processing and cloud-based analytics. He has collaborated with several tech giants on big data projects.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    links: {
      email: "j.wilson@datasciencelab.edu",
      website: "#",
      linkedin: "#",
      github: "#"
    },
    achievements: [
      "Amazon Research Award 2022",
      "ACM Distinguished Member",
      "Best Teaching Award 2019"
    ],
    publications: [
      {
        title: "Scalable Deep Learning on Distributed Systems",
        year: 2022,
        journal: "IEEE Big Data Conference",
        url: "#"
      },
      {
        title: "Optimizing Resource Allocation for ML Workflows",
        year: 2020,
        journal: "ACM Transactions on Computing Systems",
        url: "#"
      }
    ]
  }
];
