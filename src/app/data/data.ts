// Update this file with your personal information to customize your portfolio.
// Place all images in the "img" folder inside the "public" directory and reference them using the path: "/img/FILE_NAME".

import { FiHome, FiMail } from "react-icons/fi";
import { FaAws, FaGithub, FaLinkedinIn, FaMicrosoft, FaPython } from "react-icons/fa";
import { TbUserSquare } from "react-icons/tb";
import { FaReact, FaNodeJs, FaDatabase, FaServer } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiSocketdotio,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGit,
  FaFigma,
  FaCuttlefish,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiFramer,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { LuSquareCode } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io";
import { DiAws } from "react-icons/di";

// List your technical skills below
export const skills = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  // { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "ReactJS", icon: FaReact, color: "#61DAFB" },
  { name: "AWS", icon: FaAws, color: "#61DAFB" },
  { name: "MS Azure", icon: FaMicrosoft, color: "#61DAFB" },
  { name: "Python", icon: FaPython, color: "#89DBCK" },
  // { name: "NextJS", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  // { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "NodeJS", icon: FaNodeJs, color: "#83CD29" },
  // { name: "ExpressJS", icon: SiExpress, color: "#C9D1D9" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
  { name: "Git", icon: FaGit, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  // { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "C++", icon: FaCuttlefish, color: "#00599C" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
];

type NavbarItem = {
  name: string;
  type: "scroll" | "link";
  icon: React.ElementType;
  size: string;
  url?: string;
};
export const navbarData: NavbarItem[] = [
  { name: "Home", type: "scroll", icon: FiHome, size: "18px" },
  { name: "About", type: "scroll", icon: TbUserSquare, size: "18px" },
  { name: "Projects", type: "scroll", icon: LuSquareCode, size: "18px" },
  { name: "Contact", type: "scroll", icon: FiMail, size: "18px" },
  {
    name: "LinkedIn",
    type: "link",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/karthikpandey12/", // Replace "#" with your LinkedIn profile URL.
    size: "18px",
  },
  {
    name: "Github",
    type: "link",
    icon: IoLogoGithub,
    url: "https://github.com/kartikp12004", // Replace "#" with your Github profile URL.
    size: "18px",
  },
];

// Add your projects here with their descriptions, features, and tech stack.
export const projects = [
  {
    name: "Prayagraj Kumbh Mela",
    description: "Travel Agency Website",
    points: [
      "Developed a tour and event managment platform for Kumbh Mela, offering seamless bookings.",
      "Provided a smooth and engaging experience for tourists.",
      "Featured user authentication, tour booking system, and an admin dashboard.",
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Node.js", icon: FaNodeJs, color: "#83CD29" },
      { name: "Express.js", icon: SiExpress, color: "#C9D1D9" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "Git", icon: FaGit, color: "#F05032" },
    ],
    liveLink: "https://www.prayagrajkumbhmela.com/",
    githubLink: "https://github.com/SHUBHAM-AGRAWAL-ALLAHABAD/Kumbh",
    image: "/img/kumbh.jpeg", // Update with the actual project image
  },

  {
    name: "Noteshub",
    description: "College resource sharing website",
    points: [
      "500+ daily visitors, primarily LPU B.Tech & BCA students",
      "Achieved 65000+ page visits in the first week.",
      "Google Adsense verified website.",
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#ffffff" },
      { name: "Node.js", icon: FaNodeJs, color: "#83CD29" },
      { name: "Express.js", icon: SiExpress, color: "#C9D1D9" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
    liveLink: "#",
    githubLink: "#",
    image: "/img/noteshub.jpeg", // Update with the actual project image
  },

  // {
  //   name: "Sample Project 3",
  //   description: "Description about sample project 3",
  //   points: [
  //     "Feature 1 of the sample project.",
  //     "Feature 2 of the sample project.",
  //     "Feature 3 of the sample project.",
  //   ],
  //   techStack: [
  //     { name: "React.js", icon: FaReact, color: "#61DAFB" },
  //     { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
  //     { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  //     { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  //   ],
  //   liveLink: "#",
  //   githubLink: "#",
  //   image: "/img/projectimage.jfif", // Update with the actual project image
  // },
  // {
  //   name: "Sample Project 4",
  //   description: "Description about sample project 4",
  //   points: [
  //     "Feature 1 of the sample project.",
  //     "Feature 2 of the sample project.",
  //     "Feature 3 of the sample project.",
  //   ],
  //   techStack: [
  //     { name: "React.js", icon: FaReact, color: "#61DAFB" },
  //     { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  //     { name: "Context API", icon: FaServer, color: "#6366F1" },
  //     { name: "OpenWeather API", icon: FaDatabase, color: "#0064a5" },
  //   ],
  //   liveLink: "#",
  //   githubLink: "#",
  //   image: "/img/projectimage.jfif", // Update with the actual project image
  // },
];

// Update your personal information
export const personalInfo = {
  pfp: "/img/kpp.jpeg",
  alt: "Sample Profile Pic",
  summary:
    "I'm a passionate Cloud architect who loves building cloud, user-friendly applications. I thrive on solving problems, creating seamless experiences, and continuously expanding my skills. Always eager to learn and grow, I'm currently looking for new opportunities to contribute and innovate.",
  location: "Prayagraj, Uttar Pradesh",
};

// Update your education details
// export const education = {
//   college: "Lovely Professional University",
//   course: "Bachelor of Technology",
//   cgpa: "7.95",
//   duration: "2022 - 2026",
// };

export interface EducationEntry {
  institution: string;
  qualification: string;
  date: string;
  scoreLabel: string; // e.g. "CGPA" or "Percentage"
  score: string;
  // location: string;
}

export const education: EducationEntry[] = [
  {
    institution: "Lovely Professional University",
    qualification: "Bachelor of Technology",
    date: "2022 – 2026",
    scoreLabel: "CGPA",
    score: "7.09",
    location: "Prayagraj, Uttar Pradesh",
  },
  {
    institution: "C.L.Inter Mediate College",
    qualification: "12th Standard",
    date: "2021 – 2022",
    scoreLabel: "Percentage",
    score: "65%",
    // location: "Prayagraj, Uttar Pradesh",
  },
  {
    institution: "C.L.Inter Mediate College",
    qualification: "10th Standard",
    date: "2019 – 2020",
    scoreLabel: "Percentage",
    score: "75%",
    // location: "Prayagraj, Uttar Pradesh",
  },
];
// Update your work experience
export const experience = {
  companyName: "Maxwoth Electronic Systems Pvt Ltd",
  title: "Cloud Architect Intern",
  duration: "Jun 2024 - July 2024",
  location: "Gurgaon",
  points: [
    "Developed a Ticket Managment System under the guidance of a senior developer and deployed in on AWS",
    "Utilized SQL server for efficient database managment and integration.",
    "Collaborated with cross-functional teams to enhance UI/UX.",
  ],
};

// 1) Define a Certificate type:
export interface Certificate {
  title: string;
  issuer: string;
  date: string; // e.g. "Mar 2025"
  downloadLink: string; // your Google Drive share link
  thumbnail?: string; // optional: "/img/cert1.png"
}

// 2) Append this array:
export const certificates: Certificate[] = [
  {
    title: "Azure Administrator Associate",
    issuer: "Microsoft",
    date: "Apr 2025",
    downloadLink:
      "https://drive.google.com/file/d/1a8Ycp6tXjWi8TyJyDP97eGnFNJpl5NI2/view?usp=drive_link",
    thumbnail: "/img/azure.jpeg",
  },
  {
    title: "Software Testing",
    issuer: "IITT Banglore",
    date: "Oct 2024",
    downloadLink:
      "https://drive.google.com/file/d/1TYfw0XSxGDTSiH4LwrapLY-JVXq9vU8y/view?usp=drive_link",
    thumbnail: "/img/nptel.jpeg",
  },

  {
    title: "AZ- 500",
    issuer: "Coursera",
    date: "March 2025",
    downloadLink:
      "https://www.coursera.org/account/accomplishments/professional-cert/U6FB60E8R2YB",
    thumbnail: "/img/500.jpeg",
  },
  {
    title: "Android App development Using Kotlin",
    issuer: "Utopia",
    date: "June 2024",
    downloadLink:
      "https://drive.google.com/file/d/1Gw9lLV7oi-Qph__zRpk1m9U_LQZgxzdx/view?usp=drive_link",
    thumbnail: "/img/and.jpeg",
  },
  {
    title: "Programming in C++",
    issuer: "Coursera",
    date: "Feb 2024",
    downloadLink:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/DFQTY7AT8DYZ",
    thumbnail: "/img/cppkp.jpeg",
  },
  // {
  //   title: "Leadership Through Social Influence",
  //   issuer: "Northwestern University",
  //   date: "Mar 2023",
  //   downloadLink:
  //     "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS02S3477001603014203",
  //   thumbnail: "/img/nw.jpeg",
  // },

  // {
  //   title: "Data Structures and Algorithims",
  //   issuer: "IIT Kharagpur",
  //   date: "Oct 2023",
  //   downloadLink:
  //     "https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs85/Course/NPTEL23CS85S83790023920061106.pdf",
  //   thumbnail: "/img/dsa.jpeg",
  // },
  // {
  //   title: "Programming in C++",
  //   issuer: "Coursera",
  //   date: "Feb 2024",
  //   downloadLink:
  //     "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS02S3477001603014203",
  //   thumbnail: "/img/cpp.jpeg",
  // },

  // {
  //   title: "Computer Architecture & Computer Organization",
  //   issuer: "Udemy",
  //   date: "Feb 2024",
  //   downloadLink:
  //     "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS02S3477001603014203",
  //   thumbnail: "/img/cod.jpeg",
  // },

  // …add more certificates here
];
