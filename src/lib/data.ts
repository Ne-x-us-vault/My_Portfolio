import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiTensorflow,
  SiDocker,
  SiMongodb,
  SiFirebase,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiFlask,
  SiFastapi,
  SiMysql,
  SiArduino,
  SiOpencv,
  SiCplusplus,
  SiC,
  SiBlender,
  SiGit,
  SiLinux,
  SiHtml5,
  SiCss,
  SiGooglecloud,
  SiNvidia,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import type { ComponentType } from "react";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  { label: "GitHub", url: "https://github.com/Ne-x-us-vault" },
  { label: "LinkedIn", url: "https://linkedin.com/in/jaswa-j-r" },
  { label: "Email", url: "mailto:jaswa.personal.3617@outlook.com" },
];

export const SKILL_CATEGORIES = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "REST APIs", icon: SiGooglecloud, color: "#4285F4" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    name: "IoT & Embedded",
    skills: [
      { name: "ESP32", icon: SiArduino, color: "#00979D" },
      { name: "Arduino", icon: SiArduino, color: "#00979D" },
      { name: "Sensors", icon: SiArduino, color: "#06B6D4" },
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
    ],
  },
  {
    name: "AI & ML",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
      { name: "CNN", icon: SiNvidia, color: "#10A37F" },
    ],
  },
  {
    name: "Other",
    skills: [
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "Blender", icon: SiBlender, color: "#EA7600" },
    ],
  },
];

export const PROJECTS = [
  {
    slug: "maternal-guard",
    title: "Maternal Guard",
    shortDescription: "Smart wearable belt detecting postpartum hemorrhage",
    description:
      "An IoT-powered smart wearable belt designed to detect postpartum hemorrhage in real-time using biomedical sensors. The system uses an ESP32 microcontroller with MAX30102 pulse oximetry and AD5933 impedance sensor to monitor vital signs and alert healthcare providers instantly.",
    techStack: ["ESP32", "Arduino", "Firebase", "MAX30102", "AD5933", "IoT"],
    category: "IoT",
    image: "/projects/maternal-guard.jpg",
    github: "https://github.com/Ne-x-us-vault/My_Portfolio",
    challenges: [
      "Accurate real-time biomedical signal processing on embedded hardware",
      "Power-efficient continuous monitoring",
      "Reliable wireless data transmission",
    ],
    solutions: [
      "Custom signal processing pipeline with noise filtering",
      "Low-power sleep modes with periodic wake-up",
      "MQTT protocol for reliable cloud sync",
    ],
    impact: "Potential to save lives by providing early detection of postpartum hemorrhage in resource-limited healthcare settings.",
    features: [
      "Real-time vital sign monitoring",
      "Cloud dashboard for healthcare providers",
      "Emergency alert system",
      "Low power consumption",
    ],
  },
  {
    slug: "smart-water-monitoring",
    title: "Smart Water Monitoring System",
    shortDescription: "IoT dashboard with real-time water quality monitoring",
    description:
      "A comprehensive IoT-based water monitoring system that tracks water quality parameters in real-time. Features a Firebase-powered dashboard for visualization, alerts, and historical data analysis.",
    techStack: ["ESP32", "Firebase", "React", "Node.js", "IoT", "DS18B20"],
    category: "IoT",
    image: "/projects/water-monitoring.jpg",
    github: "https://github.com/Ne-x-us-vault/My_Portfolio",
    live: "#",
    challenges: [
      "Handling multiple sensor data streams simultaneously",
      "Building a responsive real-time dashboard",
      "Ensuring data accuracy and reliability",
    ],
    solutions: [
      "Asynchronous data collection with buffer management",
      "WebSocket integration for live updates",
      "Data validation and calibration algorithms",
    ],
    impact: "Enables communities to monitor water quality and ensure safe drinking water access.",
    features: [
      "Real-time water quality metrics",
      "Historical data visualization",
      "Automated alert system",
      "Mobile-responsive dashboard",
    ],
  },
  {
    slug: "ai-plant-disease-detection",
    title: "AI Plant Disease Detection",
    shortDescription: "CNN model with Flask API for plant disease diagnosis",
    description:
      "An AI-powered plant disease detection system using Convolutional Neural Networks. The model analyzes plant leaf images and identifies diseases with high accuracy, served through a Flask REST API.",
    techStack: ["Python", "TensorFlow", "CNN", "Flask", "OpenCV", "Scikit-learn"],
    category: "AI/ML",
    image: "/projects/plant-disease.jpg",
    github: "https://github.com/Ne-x-us-vault/My_Portfolio",
    challenges: [
      "Training a CNN model with limited dataset",
      "Achieving high accuracy across multiple disease categories",
      "Optimizing model for real-time inference",
    ],
    solutions: [
      "Data augmentation and transfer learning techniques",
      "Fine-tuned pre-trained model architecture",
      "Model quantization for faster inference",
    ],
    impact: "Helps farmers diagnose plant diseases early, reducing crop loss and improving agricultural productivity.",
    features: [
      "Image-based disease diagnosis",
      "Multi-class disease classification",
      "REST API for integration",
      "Confidence scoring",
    ],
  },
  {
    slug: "telecura",
    title: "TeleCura",
    shortDescription: "Full-stack healthcare platform with authentication",
    description:
      "A comprehensive healthcare platform built with the MERN stack, featuring Firebase authentication, patient management, and telemedicine capabilities. Designed to bridge the gap between patients and healthcare providers.",
    techStack: ["React", "Node.js", "MongoDB", "Firebase", "Express", "REST APIs"],
    category: "Full Stack",
    image: "/projects/telecura.jpg",
    github: "https://github.com/Ne-x-us-vault/My_Portfolio",
    challenges: [
      "Secure patient data handling with HIPAA-like compliance",
      "Real-time communication between patients and doctors",
      "Scalable architecture for growing user base",
    ],
    solutions: [
      "Firebase Auth with role-based access control",
      "WebSocket integration for real-time messaging",
      "Microservices-ready modular architecture",
    ],
    impact: "Makes healthcare accessible to remote areas through telemedicine capabilities.",
    features: [
      "Patient-doctor communication",
      "Appointment scheduling",
      "Medical records management",
      "Secure authentication",
    ],
  },
  {
    slug: "fullstack-crud",
    title: "Full Stack CRUD Application",
    shortDescription: "JWT auth, Docker deployment, REST APIs, MongoDB",
    description:
      "A production-ready CRUD application featuring JWT authentication, Docker containerization, RESTful API design, and MongoDB database integration. Demonstrates full-stack engineering best practices.",
    techStack: ["React", "Node.js", "MongoDB", "Docker", "JWT", "Express"],
    category: "Full Stack",
    image: "/projects/crud-app.jpg",
    github: "https://github.com/Ne-x-us-vault/My_Portfolio",
    live: "#",
    challenges: [
      "Implementing secure JWT-based authentication",
      "Docker containerization for consistent deployments",
      "Writing clean, maintainable REST API code",
    ],
    solutions: [
      "JWT with refresh tokens for secure sessions",
      "Multi-stage Docker builds for optimization",
      "Express middleware architecture for clean separation",
    ],
    impact: "Serves as a reference architecture for production-ready full-stack applications.",
    features: [
      "JWT Authentication & Authorization",
      "Docker containerization",
      "RESTful API design",
      "CRUD operations with validation",
    ],
  },
];

export const EXPERIENCE = [
  {
    title: "Founder & Managing Director",
    company: "JR Tunes",
    period: "2020 - Present",
    description:
      "Founded and managed a music education enterprise, combining entrepreneurship with technical leadership and creative direction.",
    highlights: [
      "Managed a team of 20+ students and instructors",
      "Prepared students for Trinity music examinations",
      "Achieved 85%+ pass rate across all examinations",
      "Handled business operations, marketing, and growth strategy",
      "Composed original music pieces for curriculum development",
      "Demonstrated leadership, strategic thinking, and operational excellence",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Integrated M.Tech Computer Science & Engineering",
    institution: "University in Coimbatore",
    period: "2022 - Present",
    details:
      "Specializing in Full Stack Development, IoT, and AI/ML. Actively involved in research projects combining embedded systems with web technologies.",
    cgpa: "Pursuing",
  },
  {
    degree: "Higher Secondary Education",
    institution: "School in Tamil Nadu",
    period: "2020 - 2022",
    details:
      "Focused on Computer Science and Mathematics. Participated in various technical competitions and hackathons.",
  },
];

export const CERTIFICATIONS = [
  {
    name: "AI Certification",
    issuer: "IBM SkillBuild",
    date: "2024",
    icon: "IBM",
  },
  {
    name: "Python Programming",
    issuer: "HackerRank",
    date: "2024",
    icon: "HackerRank",
  },
  {
    name: "Blender 3D",
    issuer: "Infosys",
    date: "2024",
    icon: "Infosys",
  },
  {
    name: "CSI Member",
    issuer: "Computer Society of India",
    date: "2023",
    icon: "CSI",
  },
  {
    name: "Computer Engineering Association",
    issuer: "College Technical Body",
    date: "2023",
    icon: "CEA",
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Leadership",
    description:
      "Led a team of 20+ students as Founder & Managing Director of JR Tunes, demonstrating organizational and people management skills.",
    icon: "leadership",
  },
  {
    title: "Entrepreneurship",
    description:
      "Built and scaled a music education business from the ground up, managing operations, finances, and growth strategy.",
    icon: "entrepreneurship",
  },
  {
    title: "Problem Solving",
    description:
      "Solved complex engineering challenges combining hardware and software, from biomedical sensors to AI systems.",
    icon: "problem-solving",
  },
  {
    title: "Teaching & Mentoring",
    description:
      "Trained 20+ students in music and technology, with an 85%+ success rate in professional examinations.",
    icon: "teaching",
  },
  {
    title: "Strategic Thinking",
    description:
      "Developed and executed business strategies that grew JR Tunes into a respected music education institution.",
    icon: "strategy",
  },
  {
    title: "Music Composition",
    description:
      "Composed original music pieces and prepared comprehensive curricula for Trinity examination preparation.",
    icon: "music",
  },
];

export const SKILL_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiTensorflow,
  SiDocker,
  SiMongodb,
  SiFirebase,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiFlask,
  SiFastapi,
  SiMysql,
  SiArduino,
  SiOpencv,
  SiCplusplus,
  SiC,
  SiBlender,
  SiGit,
  SiLinux,
  SiHtml5,
  SiCss,
  SiGooglecloud,
  SiNvidia,
  FaJava,
};
