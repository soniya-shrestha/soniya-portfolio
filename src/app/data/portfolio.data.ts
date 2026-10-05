// Edit this one file to update your whole portfolio.
export const PROFILE = {
  name: "Soniya Dangol",
  role: "Frontend Developer",
  email: "dangolsoniya24@gmail.com",
  location: "Kathmandu, Nepal",
  photo: "assets/soniya.jpg", // put your photo at src/assets/photo.jpg
  cv: "assets/Soniya_Dangol_CV.pdf",
  linkedin: "https://www.linkedin.com/in/soniya-dangol", // add your LinkedIn URL
  github: "https://github.com/soniya-shrestha", // add your GitHub URL
  intro:
    "I build responsive, user-friendly web interfaces with Angular and TypeScript.",
  about:
    "I am a BCA graduate from Aadim National College with hands-on Angular experience from my frontend internship. I learn quickly, adapt well, and enjoy taking on new challenges. I am looking for a role where I can grow professionally and apply what I know on a real team.",
};
export interface TimelineEntry {
  title: string;
  place: string;
  period: string;
  points?: string[];
}
export const EXPERIENCE: TimelineEntry[] = [
  {
    title: "Frontend Developer Intern",
    place: "Chabahil, Kathmandu",
    period: "03/2024 – 07/2024",
    points: [
      "Built basic Angular projects and learned component-based development",
      "Created responsive, user-friendly interfaces",
      "Integrated APIs and worked with backend services",
      "Used Git and GitLab for version control and teamwork",
    ],
  },
];
export const EDUCATION: TimelineEntry[] = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    place: "Aadim National College, Chabahil",
    period: "02/2022 – Present",
    points: [
      "All academic requirements completed",
      "8th semester result pending",
    ],
  },
  {
    title: "National Examination Board",
    place: "New Summit Higher Secondary School, Maitidevi",
    period: "2019 – 2022",
  },
  {
    title: "HSEB",
    place: "Serene Hill Secondary School, Sankhu",
    period: "2010 – 2018",
  },
];
export interface Project {
  name: string;
  context: string;
  type: string;
  description: string;
  tech: string[];
  link?: string;
}
export const PROJECTS: Project[] = [
  {
    name: "College Hub",
    context: "Aadim Innovation",
    type: "Web Application",
    description:
      "A platform that helps Nepalese students find colleges and courses, compare programs, and stay updated on admission openings.",
    tech: ["Angular", "SpringBoot", "PostgreSQL"],
  },
  {
    name: "Content Management System",
    context: "Aadim Innovation",
    type: "Web Application",
    description: "A content management system for managing site content.",
    tech: ["Angular", "SpringBoot", "PostgreSQL"],
  },
  {
    name: "VayuZen",
    context: "Semester Project",
    type: "Web Application",
    description:"Shows real-time air quality for Kathmandu and uses a Random Forest model to give personalized health-risk advice.",
    tech: ["Angular", "SpringBoot", "PostgreSQL", "Flask", "Machine Learning"],
  },
  {
    name: "Fit Her Way",
    context: "Semester Project",
    type: "Web Application",
    description:"A workout planner for women that builds a plan from BMI, goals, level and equipment, with progress tracking and nutrition advice.",
    tech: ["Angular", "SpringBoot", "PostgreSQL"],
  },
  {
    name: "ThriftClothing",
    context: "Semester Project",
    type: "Web Application",
    description: "A web application for buying used clothes.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
]; // Tip: edit descriptions/tech to match each project, and add link: 'https://...'
export const SKILLS = [
  { group: "Languages", items: ["TypeScript", "JavaScript"] },
  { group: "Framework", items: ["Angular"] },
  { group: "Web Development", items: ["HTML", "CSS", "SCSS", "Bootstrap"] },
  { group: "Tools", items: ["IntelliJ", "VS Code", "Git", "GitLab"] },
  {
    group: "Soft Skills",
    items: ["Fast learner", "Good communication", "Research", "Speed typing"],
  },
  { group: "Languages Spoken", items: ["Nepali", "English"] },
];

export const FACTS = [
  { label: "Location", value: "Sankhu, Kathmandu" },
  { label: "Education", value: "BCA, Aadim National College" },
  { label: "Experience", value: "Frontend Intern (2024)" },
  { label: "Languages", value: "Nepali, English" },
];