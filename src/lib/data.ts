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
  SiNextdotjs,
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiPostgresql,
  SiGodotengine,
  SiRust,
  SiTauri,
  SiGnome,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import type { ComponentType } from "react";
import type { Project } from "@/types";

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
      { name: "React", icon: SiReact, color: "#61DAFB", level: 95 },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", level: 88 },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 88 },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 92 },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: 95 },
      { name: "CSS3", icon: SiCss, color: "#1572B6", level: 90 },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 90 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 88 },
      { name: "Express", icon: SiExpress, color: "#FFFFFF", level: 85 },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#FFFFFF", level: 78 },
      { name: "Python", icon: SiPython, color: "#3776AB", level: 90 },
      { name: "Flask", icon: SiFlask, color: "#FFFFFF", level: 82 },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748", level: 75 },
      { name: "REST APIs", icon: SiGooglecloud, color: "#4285F4", level: 90 },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", level: 78 },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 85 },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28", level: 88 },
      { name: "MySQL", icon: SiMysql, color: "#4479A1", level: 82 },
    ],
  },
  {
    name: "Game Dev & Desktop",
    skills: [
      { name: "Blender", icon: SiBlender, color: "#EA7600", level: 72 },
      { name: "Godot", icon: SiGodotengine, color: "#478CBF", level: 68 },
      { name: "GNOME Shell", icon: SiGnome, color: "#4A86CF", level: 70 },
      { name: "Rust", icon: SiRust, color: "#CE422B", level: 58 },
      { name: "Tauri", icon: SiTauri, color: "#24C8D8", level: 55 },
    ],
  },
  {
    name: "IoT & Embedded",
    skills: [
      { name: "ESP32", icon: SiArduino, color: "#00979D", level: 90 },
      { name: "Arduino", icon: SiArduino, color: "#00979D", level: 90 },
      { name: "Sensors", icon: SiArduino, color: "#06B6D4", level: 88 },
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED", level: 75 },
      { name: "Git", icon: SiGit, color: "#F05032", level: 90 },
      { name: "Linux", icon: SiLinux, color: "#FCC624", level: 82 },
    ],
  },
  {
    name: "AI & ML",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00", level: 80 },
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8", level: 82 },
      { name: "CNN", icon: SiNvidia, color: "#10A37F", level: 78 },
    ],
  },
  {
    name: "Other",
    skills: [
      { name: "C", icon: SiC, color: "#A8B9CC", level: 85 },
      { name: "C++", icon: SiCplusplus, color: "#00599C", level: 85 },
      { name: "Java", icon: FaJava, color: "#ED8B00", level: 75 },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "nexus-axis",
    title: "Nexus Axis",
    shortDescription: "Game-based 3D modeling learning platform",
    description:
      "A gamified learning platform that connects Blender to a live, playable Godot game. Users model 3D objects in Blender and watch them appear instantly in the game scene — orchestrated by a Tauri + React launcher that drives Blender's export and hot-swaps the GLB into the running game over WebSocket and TCP bridges.",
    techStack: ["Blender", "Godot 4", "GDScript", "Rust", "Tauri", "React", "TypeScript", "WebSocket"],
    category: "Game Dev",
    image: "/projects/nexus-axis.jpg",
    github: "https://github.com/Ne-x-us-vault/Nexus_Blend",
    challenges: [
      "Synchronizing three engines (Blender, Godot, launcher) in real-time",
      "Hot-swapping GLB models into a running game without restarts",
      "Orchestrating engine launches and the sync state across processes",
    ],
    solutions: [
      "A single Rust Hub actor owning every connection and the sync state machine",
      "WebSocket (:9876) / TCP (:9877) bridges exchanging structured JSON events",
      "Blender bridge script that exports the scene to GLB on command",
    ],
    impact: "Makes learning 3D modeling engaging by connecting hands-on practice directly to real-time, rewarding gameplay.",
    features: [
      "One-click Blender + Godot workspace launcher",
      "Live GLB export and hot-swap sync into the game",
      "Live status, sync progress and activity feed",
      "Data-driven levels with objectives and constraints",
    ],
  },
  {
    slug: "tether",
    title: "Tether",
    shortDescription: "Real-time communication app for close groups",
    description:
      "A personalised space for couples, families, and close groups — combining real-time chat, a shared calendar, task assignments, finance tracking, and bill splitting with live balances and suggested settlements, all in one app.",
    techStack: ["Next.js", "React", "TypeScript", "Express", "Socket.IO", "Prisma", "PostgreSQL"],
    category: "Full Stack",
    image: "/projects/tether.jpg",
    github: "https://github.com/Ne-x-us-vault/Tether",
    challenges: [
      "Real-time messaging with per-group rooms across the whole app",
      "Tracking shared expenses with equal/custom splits and settlements",
      "Secure authentication and role-based access control",
    ],
    solutions: [
      "Socket.IO real-time events for chat and group changes",
      "Prisma + PostgreSQL schema for users, groups, expenses and settlements",
      "JWT + bcrypt auth with zod-validated environment configuration",
    ],
    impact: "Keeps close-knit groups organised by combining communication, planning, tasks, and money management in one place.",
    features: [
      "Real-time chat with per-group rooms",
      "Shared calendar and task assignments",
      "Finance tracking with monthly and category filters",
      "Bill splitting with live balances and settle-ups",
    ],
  },
  {
    slug: "nexus-launcher",
    title: "Nexus Launcher",
    shortDescription: "Frost-glass, keyboard-first GNOME Shell launcher",
    description:
      "An open-source GNOME Shell extension (v1.0.0, MIT) providing a frost-glass application launcher with instant app search, arrow-key navigation, quick actions for Terminal, Files, GitHub and LinkedIn, and configurable hotkeys and opacity — supporting GNOME Shell 45–50 on Wayland and Xorg.",
    techStack: ["JavaScript", "GJS", "GNOME Shell", "GTK", "Clutter", "Linux"],
    category: "Open Source",
    image: "/projects/nexus-launcher.jpg",
    github: "https://github.com/Ne-x-us-vault/custom-launcher-nexus",
    challenges: [
      "Building fast, ranked search across installed applications",
      "Full keyboard-first navigation within GNOME's St API",
      "Supporting GNOME Shell 45 through 50 on Wayland and Xorg",
    ],
    solutions: [
      "Ranked search over name, description, executable and keywords",
      "Frost-glass overlay with dimmed backdrop and click-outside close",
      "Configurable hotkey, opacity and quick-action destinations",
    ],
    impact: "A production-quality open-source extension that streamlines app launching for GNOME users.",
    features: [
      "Instant ranked app search",
      "Keyboard-first controls (Super + Enter, arrows, Tab)",
      "Quick actions: Terminal, Files, GitHub, LinkedIn",
      "Configurable hotkey and opacity",
    ],
  },
  {
    slug: "my-portfolio",
    title: "My Portfolio",
    shortDescription: "This immersive 3D portfolio website",
    description:
      "A premium, immersive personal portfolio built with Next.js 15, React Three Fiber, and Framer Motion — featuring a 3D particle scene, command palette, scroll progress indicator, and a fully responsive dark-mode design.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
    category: "Web",
    image: "/projects/my-portfolio.jpg",
    github: "https://github.com/Ne-x-us-vault/My_Portfolio",
    challenges: [
      "Balancing an immersive 3D scene with fast performance",
      "Delivering smooth Framer Motion animations throughout",
      "Building a keyboard-driven command palette",
    ],
    solutions: [
      "Dynamically imported, SSR-disabled 3D scene",
      "Viewport-triggered animations with framer-motion",
      "Command palette for quick navigation",
    ],
    impact: "Showcases my work and skills through a memorable, immersive experience.",
    features: [
      "3D landing scene with particles",
      "Command palette (Ctrl+K)",
      "Scroll progress indicator",
      "Responsive and SEO optimized",
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
  SiNextdotjs,
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiPostgresql,
  SiGodotengine,
  SiRust,
  SiTauri,
  SiGnome,
  FaJava,
};
