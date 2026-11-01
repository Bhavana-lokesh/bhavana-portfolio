
"use client";

import { useState, useEffect } from "react";

const skills = [
  "C", "C++", "Python", "HTML", "CSS", "JavaScript",
  "PHP", "Node.js", "MySQL", "Firebase", "Git",
  "GitHub", "AWS", "Software Testing",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  
useEffect(() => {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  elements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
}, []);



  return (
    <main className="portfolio">
      
{/* NAVIGATION */}
<nav className="navbar">
  <a href="#" className="logo">
    BL<span>.</span>
  </a>

  <button
    className="menu-toggle"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle navigation"
  >
    ☰
  </button>

  <div className={`nav-links ${menuOpen ? "open" : ""}`}>
    {["About", "Skills", "Projects", "Education", "Experience"].map(
      (item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
        >
          {item}
        </a>
      )
    )}

    <a
      href="#contact"
      onClick={() => setMenuOpen(false)}
    >
      Contact
    </a>

    <a
      className="nav-cta"
      href="#contact"
      onClick={() => setMenuOpen(false)}
    >
      Let's Connect <span>↗</span>
    </a>
  </div>
</nav>

      
{/* HERO */}
<section className="hero">
  <div className="hero-content">
    <div className="availability">
      <span className="status-dot" />
      OPEN TO JOB OPPORTUNITIES
    </div>

    <p className="eyebrow">HELLO, I'M BHAVANA LOKESH</p>

    <h1>
      Building
      <br />
      <span>Beyond Code.</span>
    </h1>

    <p className="hero-description">
      MCA student and aspiring Software Developer passionate
      about creating impactful web applications, exploring
      cloud technologies and building intelligent digital
      solutions through continuous learning.
    </p>

    
<div className="hero-buttons">
  <a href="#projects" className="primary-btn">
    Explore My Projects ↗
  </a>

  <a
    href="/documents/Bhavana-Lokesh-Resume.pdf"
    download="Bhavana-Lokesh-Resume.pdf"
    className="secondary-btn"
  >
    Download Resume ↓
  </a>

  <a href="#contact" className="secondary-btn">
    Let's Connect
  </a>
</div>


    <div className="hero-meta">
      <span>📍 Bengaluru, India</span>
      <span>🎓 MCA · 2027</span>
      <span>💻 Software Developer</span>
    </div>
  </div>

  <div className="hero-visual" aria-label="Decorative emerald visual">
    <div className="orb-center">
      <span>BL.</span>
    </div>

    <div className="orbit orbit-one" />
    <div className="orbit orbit-two" />
    <div className="orb-one" />
    <div className="orb-two" />

    <div className="floating-label label-one">
      01 DEVELOP
    </div>

    <div className="floating-label label-two">
      02 INNOVATE
    </div>
  </div>
</section>


      
{/* ABOUT */}
<section className="intro-strip reveal" id="about">
  <p className="section-label">01 / THE DEVELOPER BEHIND THE CODE</p>

  <h2>
    More than just <span>code.</span>
  </h2>

  <div className="about-layout">
    <div className="about-main">
      <p className="intro-subtitle">
        I'm Bhavana Lokesh, an MCA student and aspiring Software
        Developer based in Bengaluru, India. I enjoy transforming
        ideas into practical applications and exploring how
        technology can solve real-world problems.
      </p>

      <p className="intro-subtitle">
        From developing full-stack web applications to exploring
        cloud computing and artificial intelligence, I believe
        in learning by building. I'm always eager to take on
        challenges, strengthen my technical abilities and grow
        through meaningful development experiences.
      </p>

      <div className="skill-list">
        <span className="skill-chip">Problem Solving</span>
        <span className="skill-chip">Full-Stack Development</span>
        <span className="skill-chip">Cloud Computing</span>
        <span className="skill-chip">Continuous Learning</span>
      </div>
    </div>

    <div className="about-profile">
      <div className="about-profile-top">
        <span>DEVELOPER PROFILE</span>
        <span className="status-dot" />
      </div>

      <div className="about-initials">BL<span>.</span></div>

      <h3>Bhavana Lokesh</h3>
      <p>Computer Science Student</p>

      <div className="about-details">
        <div>
          <span>EDUCATION</span>
          <strong>MCA · 2027</strong>
        </div>
        <div>
          <span>LOCATION</span>
          <strong>Bengaluru, India</strong>
        </div>
        <div>
          <span>CAREER FOCUS</span>
          <strong>Software Development</strong>
        </div>
      </div>
    </div>
  </div>
</section>

      
{/* SKILLS */}
<section className="skills-preview reveal" id="skills">
  <p className="section-label">MY TECHNICAL EXPERTISE</p>

  <h2>
    Skills & <span>Technologies.</span>
  </h2>

  <p>
    A growing technical toolkit that helps me design,
    develop and build practical software solutions.
  </p>

  <div className="project-preview-grid">

    <article>
      <div className="project-topline">
        <span>01 / DEVELOPMENT</span>
      </div>
      <h3>Programming Languages</h3>
      <div className="project-tags">
        <span>C</span>
        <span>C++</span>
        <span>Python</span>
        <span>JavaScript</span>
        <span>PHP</span>
      </div>
    </article>

    <article>
      <div className="project-topline">
        <span>02 / INTERFACE</span>
      </div>
      <h3>Frontend Development</h3>
      <div className="project-tags">
        <span>HTML5</span>
        <span>CSS3</span>
        <span>Bootstrap</span>
        <span>jQuery</span>
        <span>AJAX</span>
      </div>
    </article>

    <article>
      <div className="project-topline">
        <span>03 / SERVER & DATA</span>
      </div>
      <h3>Backend & Database</h3>
      <div className="project-tags">
        <span>Node.js</span>
        <span>MySQL</span>
        <span>Firebase</span>
        <span>SQLite</span>
      </div>
    </article>

    <article>
      <div className="project-topline">
        <span>04 / INFRASTRUCTURE</span>
      </div>
      <h3>Cloud & Tools</h3>
      <div className="project-tags">
        <span>AWS EC2</span>
        <span>AWS RDS</span>
        <span>AWS S3</span>
        <span>Git</span>
        <span>GitHub</span>
        <span>VS Code</span>
      </div>
    </article>

    <article>
      <div className="project-topline">
        <span>05 / ADDITIONAL</span>
      </div>
      <h3>Other Technologies</h3>
      <div className="project-tags">
        <span>Software Testing</span>
        <span>Google Maps API</span>
        <span>Gemini API</span>
      </div>
    </article>

  </div>
</section>


      
{/* PROJECTS */}
<section className="projects-preview reveal" id="projects">
  <p className="section-label">SELECTED WORK / 03</p>

  <h2>
    Projects that <span>make an impact.</span>
  </h2>

  <p>
    Practical applications built through problem-solving,
    technical exploration and continuous learning.
  </p>

  <div className="project-preview-grid">

    {/* FEATURED PROJECT */}
    <article className="featured-project">
      <div className="project-topline">
        <span>01 / FLAGSHIP PROJECT</span>
        <span>FULL-STACK · AWS · AI</span>
      </div>

      
<div className="project-title-row">
  <h3>EstateScope</h3>
  <span className="project-status">
    <span className="status-dot" />
    WORKING PROJECT
  </span>
</div>


      <p className="project-description">
        An AWS-powered real estate platform that simplifies
        property discovery, comparison, buying, selling and
        rental management through intelligent features.
      </p>

      <ul>
        <li>AI-powered property finder using Gemini API</li>
        <li>Advanced property search, filters and comparison</li>
        <li>Property brochures and EMI calculator</li>
        <li>Google Maps integration and visit scheduling</li>
        <li>Buyer, agent and super admin dashboards</li>
        <li>Property listing approval and management</li>
        <li>AWS EC2, RDS and S3 integration</li>
      </ul>

      <div className="project-tags">
        <span>PHP</span>
        <span>MySQL</span>
        <span>JavaScript</span>
        <span>Bootstrap</span>
        <span>AWS EC2</span>
        <span>AWS RDS</span>
        <span>AWS S3</span>
        <span>Gemini API</span>
        <span>Google Maps API</span>
      </div>

      <a
        href="https://github.com/Bhavana-lokesh/AWS-based-Realestate-project.git"
        target="_blank"
        rel="noreferrer"
      >
        Explore on GitHub ↗
      </a>
    </article>

    {/* MEDICARE */}
    <article>
    
      <div className="project-topline">
        <span>02 / TEAM PROJECT</span>
        <span>WEB APPLICATION</span>
      </div>

      <h3>MediCare</h3>

      <p className="project-description">
        A hospital management system designed to streamline
        patient registration, doctor information and
        appointment management.
      </p>

      <ul>
        <li>Patient registration and management</li>
        <li>Doctor details management</li>
        <li>Online appointment booking</li>
        <li>QR-code payment functionality</li>
        <li>Administrative management</li>
      </ul>

      <div className="project-tags">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>Firebase</span>
      </div>
    </article>

    {/* EMPLOYEE MANAGEMENT */}
    <article>
      <div className="project-topline">
        <span>03 / INDIVIDUAL PROJECT</span>
        <span>DESKTOP APPLICATION</span>
      </div>

      <h3>Employee Management System</h3>

      <p className="project-description">
        A Python-based desktop application developed to
        efficiently manage employee records through a
        simple graphical interface.
      </p>

      <ul>
        <li>Add and view employee records</li>
        <li>Update employee information</li>
        <li>Delete existing records</li>
        <li>Search employee details</li>
      </ul>

      <div className="project-tags">
        <span>Python</span>
        <span>Tkinter</span>
        <span>SQLite</span>
      </div>
    </article>

  </div>
</section>


      
{/* EDUCATION */}
<section className="projects-preview reveal" id="education">
  <p className="section-label">04 / ACADEMIC JOURNEY</p>

  <h2>
    Learning. Growing. <span>Achieving.</span>
  </h2>

  <p>
    Building a strong foundation in computer science
    while continuously exploring new technologies.
  </p>

  <div className="project-preview-grid">

    {/* MCA */}
    <article className="featured-project">
      <div className="project-topline">
        <span>POSTGRADUATE DEGREE</span>
        <span>2025 — 2027</span>
      </div>

      <h3>Master of Computer Applications</h3>

      <p className="project-description">
        City Engineering College
      </p>

      <div className="education-score">
        <strong>9.5</strong>
        <span>CGPA</span>
      </div>

      <div className="project-tags">
        <span>Computer Science</span>
        <span>Software Development</span>
        <span>Technology</span>
      </div>
    </article>

    {/* BCA */}
    <article>
      <div className="project-topline">
        <span>UNDERGRADUATE DEGREE</span>
        <span>2022 — 2025</span>
      </div>

      <h3>Bachelor of Computer Applications</h3>

      <p className="project-description">
        Ramanashree Academy of Management
      </p>

      <div className="education-score">
        <strong>8.3</strong>
        <span>CGPA</span>
      </div>

      <div className="project-tags">
        <span>Computer Applications</span>
        <span>Programming</span>
      </div>
    </article>

    {/* NPTEL */}
    <article>
      <div className="project-topline">
        <span>ONLINE CERTIFICATION</span>
        <span>NPTEL</span>
      </div>

      <h3>Artificial Intelligence for Management</h3>

      <p className="project-description">
        National Programme on Technology Enhanced Learning
      </p>

      <div className="education-score">
        <strong>Silver</strong>
        <span>CERTIFICATE</span>
      </div>

      <div className="project-tags">
        <span>Artificial Intelligence</span>
        <span>Machine Learning</span>
        <span>Business Applications</span>
      </div>
    </article>

  </div>
</section>

{/* EXPERIENCE & CERTIFICATIONS */}
<section className="projects-preview reveal" id="experience">
  <p className="section-label">GROWTH & ACHIEVEMENTS</p>

  <h2>
    Experience & <span>Certifications.</span>
  </h2>

  <div className="project-preview-grid">

    <article>
      <div className="project-topline">
        <span>INTERNSHIP</span>
        <span>01</span>
      </div>

      <h3>Cybersecurity Intern</h3>

      <p className="project-description">
        Technofly Solutions
      </p>

      <p className="project-description">
        Developed foundational knowledge of cybersecurity,
        network security, common threats, vulnerabilities
        and data protection.
      </p>

      <div className="project-tags">
        <span>Cybersecurity</span>
        <span>Network Security</span>
        <span>Threat Identification</span>
        <span>Data Protection</span>
      </div>
    </article>

    <article>
      <div className="project-topline">
        <span>CERTIFICATION</span>
        <span>02</span>
      </div>

      <h3>Artificial Intelligence for Management</h3>

      <p className="project-description">
        NPTEL · Silver Certificate
      </p>

      <p className="project-description">
        Studied AI concepts, machine learning fundamentals,
        business applications of AI and data-driven
        decision-making.
      </p>

      <div className="project-tags">
        <span>Artificial Intelligence</span>
        <span>Machine Learning</span>
        <span>AI Applications in Management</span>
      </div>
    </article>

  </div>
</section>

      
{/* CONTACT */}
<footer id="contact">
  <p>HAVE AN OPPORTUNITY?</p>

  <h2>
    Let's build something meaningful<span>.</span>
  </h2>

  <p>
    I'm actively looking for software development opportunities
    where I can learn, contribute and grow.
  </p>

  <div className="hero-buttons">
    <a
      href="mailto:bhavanalokesh23@gmail.com?subject=Job%20Opportunity"
      className="primary-btn"
    >
      Hire Me ↗
    </a>

    <a
      href="/documents/Bhavana-Lokesh-Resume.pdf"
      download="Bhavana-Lokesh-Resume.pdf"
      className="secondary-btn"
    >
      Download Resume ↓
    </a>
  </div>

  <a href="mailto:bhavanalokesh23@gmail.com">
    bhavanalokesh23@gmail.com ↗
  </a>

  <div className="footer-links">
    <a href="https://github.com/Bhavana-lokesh" target="_blank" rel="noreferrer">
      GitHub ↗
    </a>

    <a href="https://www.linkedin.com/in/bhavana-lokesh-b5a847447/" target="_blank" rel="noreferrer">
      LinkedIn ↗
    </a>
  </div>

  <p className="copyright">
    © 2026 Bhavana Lokesh. All Rights Reserved.
  </p>
</footer>
   </main>
  );
}