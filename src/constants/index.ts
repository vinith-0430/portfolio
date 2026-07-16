// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
  project1,
  project2,
  project3,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Education",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "GitHub",
    link: "https://github.com/vinith-0430",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "AI/ML Enthusiast",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Education & Certifications (using experiences timeline)
export const EXPERIENCES = [
  {
    title: "B.E in Computer Science",
    company_name: "Alva's Institute of Engineering and Technology",
    icon: web,
    iconBg: "#383E56",
    date: "2022 - Present",
    points: [
      "CGPA: 7.2",
      "Building innovative and scalable applications driven by curiosity and creativity.",
      "Working on AI-powered projects including Resume Tailor & ATS Optimizer and Decision Coach AI.",
      "Actively participating in hackathons and tech events like Xypheria 2026.",
    ],
  },
  {
    title: "Java Full Stack Developer Specialization",
    company_name: "Board Infinity",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "Comprehensive full-stack development training with Java ecosystem.",
      "Built expertise in backend development, REST APIs, and database management.",
      "Hands-on experience with enterprise-level application architecture.",
      "Strengthened skills in server-side programming and deployment.",
    ],
  },
  {
    title: "Machine Learning Specialization",
    company_name: "University of Washington",
    icon: mobile,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "In-depth study of machine learning algorithms and techniques.",
      "Applied ML concepts to real-world problems including computer vision projects.",
      "Gained expertise in YOLO-based object detection for the Smart Hotel Monitoring System.",
      "Built a strong foundation in data-driven decision making and AI applications.",
    ],
  },
  {
    title: "Google Cloud Digital Leader",
    company_name: "Google Cloud",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "Certified in Google Cloud Platform fundamentals and cloud architecture.",
      "Understanding of cloud computing concepts, infrastructure, and services.",
      "Proficiency in deploying and managing cloud-based applications.",
      "Knowledge of cloud security, networking, and data management best practices.",
    ],
  },
] as const;

// Testimonials (Activities & Initiatives)
export const TESTIMONIALS = [
  {
    testimonial:
      "As a member of the Social Media Team at TEDx AIET, I was involved in event promotion and management, driving engagement and visibility for impactful ideas.",
    name: "TEDx AIET",
    designation: "Social Media Team",
    company: "Member",
    image: user1,
  },
  {
    testimonial:
      "Hosted Xypheria 2026, a national-level 24-hour hackathon, handling event coordination and execution — bringing together innovators from across the country.",
    name: "Xypheria 2026",
    designation: "Event Coordinator",
    company: "Hackathon",
    image: user2,
  },
  {
    testimonial:
      "Engaged in video editing and creative digital content production for college events, combining technical skills with creative storytelling.",
    name: "Digital Content",
    designation: "Content Creator",
    company: "College Events",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "AI Resume Tailor & ATS Optimizer",
    description:
      "AI-powered resume optimization platform that customizes resumes based on job descriptions while improving ATS compatibility through intelligent keyword matching, skill-gap detection, and ATS scoring.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/vinith-0430/AI-Resume-Tailor-ATS-Optimizer",
    live_site_link: "https://github.com/vinith-0430/AI-Resume-Tailor-ATS-Optimizer",
  },
  {
    name: "Decision Coach AI",
    description:
      "AI-assisted decision intelligence platform that helps users evaluate alternatives using SWOT analysis, weighted decision matrices, risk analysis, cost-benefit evaluation, and what-if simulations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "gemini-api",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/vinith-0430/demochatbot",
    live_site_link: "https://github.com/vinith-0430/demochatbot",
  },
  {
    name: "Smart Hotel Monitoring System",
    description:
      "Automated surveillance system for hotel kitchens using YOLO-based computer vision to detect hygiene violations (aprons, gloves, hairnets) and pest activity in real-time.",
    tags: [
      {
        name: "fastapi",
        color: "blue-text-gradient",
      },
      {
        name: "yolo",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/vinith-0430/Smart-hotel-monitoring-system",
    live_site_link: "https://github.com/vinith-0430/Smart-hotel-monitoring-system",
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://linkedin.com/in/vinith-m30",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/vinith-0430",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com",
  },
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com",
  },
] as const;
