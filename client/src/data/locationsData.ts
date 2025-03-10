export interface Location {
  id: number;
  name: string;
  description: string;
  address: string;
  contact: {
    phone: string;
    email: string;
  };
  icon: string;
  iconColor: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const locationsData: Location[] = [
  {
    id: 1,
    name: "Main Campus",
    description: "Data Science Building, University Main Campus",
    address: "Knowledge Park, New Delhi - 110001",
    contact: {
      phone: "+91-11-2345-6789",
      email: "main@datascience.edu"
    },
    icon: "fas fa-building",
    iconColor: "text-[#3A86FF]",
    coordinates: {
      lat: 28.6139,
      lng: 77.2090
    }
  },
  {
    id: 2,
    name: "Research Lab",
    description: "Advanced Computing Wing, Technology Park",
    address: "Sector 62, Noida - 201309",
    contact: {
      phone: "+91-120-4567-8901",
      email: "research@datascience.edu"
    },
    icon: "fas fa-flask",
    iconColor: "text-[#8338EC]",
    coordinates: {
      lat: 28.5355,
      lng: 77.3910
    }
  },
  {
    id: 3,
    name: "Innovation Hub",
    description: "Tech Incubator, Phase 3",
    address: "Electronics City, Bengaluru - 560100",
    contact: {
      phone: "+91-80-2345-6789",
      email: "hub@datascience.edu"
    },
    icon: "fas fa-laptop-code",
    iconColor: "text-[#FF006E]",
    coordinates: {
      lat: 12.8399,
      lng: 77.6770
    }
  }
];
