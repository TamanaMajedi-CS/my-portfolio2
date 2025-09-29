
const base = import.meta.env.BASE_URL; 

export const projects = [
  {
    id: "Resturant-Website",
    name: "ResturantWebsite",
    image: `${base}assets/ResturantWebsite.png`,
    description: "A Resturant Website made just only with html and css.",
    live: "https://tamanamajedi-cs.github.io/Resturant-Website/",
    repo: "https://github.com/TamanaMajedi-CS/Resturant-Website.git",
    tech: ["HTML","CSS"],
    featured: true,
    status: "In Progress",
    priority: "Medium",
    progress: 100
  },
  {
    id: "Freelance-App",
    name: "Freelance-App",
    image: `${base}assets/freelance.png`,
    description: "Invoice and Client Management App that helps freelancers manage their clients and track invoices. .",
    live: "https://tamanamajedi-cs.github.io/freelance/",
    repo: "https://github.com",
    tech: ["React"," API","CSS"], // keep as you had it
    featured: false,
    status: "Completed",
    priority: "High",
    progress: 100
  },
  {
    id: "School-Portal",
    name: "School-Portal",
    image: `${base}assets/School.png`,
    description: "multi-page school website that allows interaction with a student profile, course listings, and contact form.",
    live: "https://tamanamajedi-cs.github.io/new-school/",
    repo: "https://github.com/TamanaMajedi-CS/new-school.git",
    tech: ["React","CSS"],
    featured: true,
    status: "Featured",
    priority: "High",
    progress: 80
  }
];
