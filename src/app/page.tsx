// "use client"
// import { useRef } from "react";
// import AboutMe from "./components/AboutMe";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Projects from "./components/Projects";
// import Projects from "./components/Certificatess";


// export default function Home() {
//   const sectionRefs = {
//     home: useRef<HTMLElement | null>(null),
//     about: useRef<HTMLElement | null>(null),
//     projects: useRef<HTMLElement | null>(null),
//     contact: useRef<HTMLElement | null>(null),
//   };

//   return (
//     <>
//       <Header sectionRefs={sectionRefs} />
//       <Hero ref={sectionRefs.home} />
//       <AboutMe ref={sectionRefs.about} />
//       <Projects ref={sectionRefs.projects} />
//       <Certificates />
//       <Contact ref={sectionRefs.contact} />
//       <Footer />
//     </>
//   );
// }




"use client";

import { useRef } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";  // ← fixed import

export default function Home() {
  const sectionRefs = {
    home: useRef<HTMLElement | null>(null),
    about: useRef<HTMLElement | null>(null),
    projects: useRef<HTMLElement | null>(null),
    certificates: useRef<HTMLElement | null>(null),    // ← added ref
    contact: useRef<HTMLElement | null>(null),
  };

  return (
    <>
      <Header sectionRefs={sectionRefs} />
      <Hero ref={sectionRefs.home} />
      <AboutMe ref={sectionRefs.about} />
      <Projects ref={sectionRefs.projects} />
      <Certificates ref={sectionRefs.certificates} />      {/* ← pass the ref */}
      <Contact ref={sectionRefs.contact} />
      <Footer />
    </>
  );
}
