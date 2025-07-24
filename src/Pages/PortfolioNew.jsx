import React, { useState, useEffect } from "react";
import { 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone, 
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaTrophy,
  FaCertificate,
  FaDownload
} from "react-icons/fa";
import { 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiCsharp, 
  SiPostgresql,
  SiDotnet,
  SiAzuredevops,
  SiPython,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiMaterialui,
  SiGraphql,
  SiGit
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Portfolio.css";

const portfolioData = {
  name: "Sai Mahesh Korthiwada",
  title: "Senior Full Stack Developer",
  tagline: "Crafting Digital Experiences with Modern Technology",
  contact: {
    email: "ksaimahesh.98@gmail.com",
    phone: "+91 8919315182",
    linkedin: "https://www.linkedin.com/in/ksaimahesh",
    github: "https://github.com/saimahesh-k",
    resume: "/FullStackDeveloper_SaiMahesh.pdf",
  },
  about: `Passionate full-stack developer with 2+ years of experience building scalable web applications. 
  I specialize in React, TypeScript, and .NET technologies, with a keen eye for creating intuitive user 
  experiences and robust backend systems. I thrive in collaborative environments and love solving 
  complex technical challenges.`,
  skills: [
    { name: "React", icon: SiReact, level: 95 },
    { name: "TypeScript", icon: SiTypescript, level: 90 },
    { name: "JavaScript", icon: SiJavascript, level: 95 },
    { name: "C#", icon: SiCsharp, level: 85 },
    { name: ".NET", icon: SiDotnet, level: 85 },
    { name: "PostgreSQL", icon: SiPostgresql, level: 80 },
    { name: "HTML5", icon: SiHtml5, level: 95 },
    { name: "CSS3", icon: SiCss3, level: 90 },
    { name: "Redux", icon: SiRedux, level: 85 },
    { name: "Material UI", icon: SiMaterialui, level: 90 },
    { name: "GraphQL", icon: SiGraphql, level: 75 },
    { name: "Git", icon: SiGit, level: 90 },
    { name: "Azure DevOps", icon: SiAzuredevops, level: 80 },
    { name: "Python", icon: SiPython, level: 70 },
  ],
  experience: [
    {
      company: "vConstruct Pvt Ltd",
      location: "Pune, India",
      role: "Software Engineer",
      duration: "Jul 2023 – Present",
      type: "Full-time",
      achievements: [
        "Architected and developed 3 major web applications using React & TypeScript",
        "Implemented advanced virtualization techniques reducing render time by 40%",
        "Built scalable backend APIs using .NET Azure Functions serving 10k+ daily requests",
        "Led frontend performance optimization initiatives improving Core Web Vitals by 35%",
        "Collaborated with cross-functional teams in Agile environment delivering 15+ features",
        "Mentored 2 junior developers and contributed to coding standards documentation",
        "Achieved 98% bug-free release rate through comprehensive testing strategies"
      ],
      technologies: ["React", "TypeScript", "Material UI", "AG Grid", ".NET", "Azure Functions", "PostgreSQL"]
    },
  ],
  projects: [
    {
      name: "Schedule Viewer Platform",
      description: "Enterprise-grade construction schedule management system with real-time Gantt charts, resource allocation, and progress tracking. Features advanced data visualization and responsive design.",
      technologies: ["React", "TypeScript", "Material UI", "AG Grid", "Azure Functions", "PostgreSQL"],
      highlights: [
        "Real-time data synchronization across multiple users",
        "Advanced filtering and search capabilities",
        "Export functionality for various file formats",
        "Mobile-responsive design for field operations"
      ],
      link: "#",
      github: "#"
    },
    {
      name: "Estimation Portal",
      description: "Comprehensive construction cost estimation application with dynamic pricing models, automated calculations, and integration with external APIs for real-time material costs.",
      technologies: ["React", "Redux", "Material UI", ".NET Core", "Snowflake", "REST APIs"],
      highlights: [
        "Automated cost calculation algorithms",
        "Integration with supplier databases",
        "Historical data analysis and trending",
        "Multi-project comparison tools"
      ],
      link: "#",
      github: "#"
    },
    {
      name: "Smart Badging Application",
      description: "Modern workforce management solution with QR-based attendance, real-time location tracking, and comprehensive reporting dashboard for construction sites.",
      technologies: ["React", "TypeScript", "Material UI", ".NET", "PostgreSQL", "PWA"],
      highlights: [
        "QR code-based check-in/out system",
        "Geofencing for location verification",
        "Real-time attendance monitoring",
        "Progressive Web App functionality"
      ],
      link: "#",
      github: "#"
    },
  ],
  achievements: [
    {
      title: "Performance Excellence Award",
      description: "Achieved 98% bug-free releases through implementation of comprehensive testing strategies and code review processes.",
      icon: "🏆"
    },
    {
      title: "Innovation Leader", 
      description: "Led frontend optimization initiative resulting in 35% improvement in application performance and user experience.",
      icon: "⚡"
    },
    {
      title: "Team Collaboration", 
      description: "Improved delivery speed by 15% through effective agile collaboration and mentoring of junior developers.",
      icon: "🤝"
    },
    {
      title: "Technical Excellence",
      description: "Architected scalable solutions serving 10k+ daily users with 99.9% uptime across multiple applications.",
      icon: "🎯"
    }
  ],
  certifications: [
    {
      title: "React Developer Certification",
      issuer: "Udemy",
      date: "2023",
      credentialId: "UC-XXXXXX"
    },
    {
      title: "JavaScript Web Development Bootcamp", 
      issuer: "Udemy",
      date: "2022",
      credentialId: "UC-XXXXXX"
    },
    {
      title: "SQL Database Management",
      issuer: "Udemy", 
      date: "2022",
      credentialId: "UC-XXXXXX"
    }
  ]
};

export default function Portfolio() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowCopiedMessage(type);
      setTimeout(() => setShowCopiedMessage(false), 2000);
    } catch (err) {
      console.error(`Failed to copy ${type}:`, err);
    }
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="modern-portfolio">
      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {portfolioData.name}
            </motion.h1>
            
            <motion.h2 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {portfolioData.title}
            </motion.h2>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {portfolioData.tagline}
            </motion.p>

            <motion.div 
              className="contact-links"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href={`mailto:${portfolioData.contact.email}`}
                className="contact-link"
                whileHover={{ scale: 1.1, rotateY: 15 }}
                whileTap={{ scale: 0.95 }}
                title="Email me"
              >
                <FaEnvelope />
              </motion.a>
              
              <motion.a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
                whileHover={{ scale: 1.1, rotateY: 15 }}
                whileTap={{ scale: 0.95 }}
                title="LinkedIn Profile"
              >
                <FaLinkedin />
              </motion.a>
              
              <motion.a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
                whileHover={{ scale: 1.1, rotateY: 15 }}
                whileTap={{ scale: 0.95 }}
                title="GitHub Profile"
              >
                <FaGithub />
              </motion.a>
              
              <motion.div
                className="contact-link"
                onClick={() => copyToClipboard(portfolioData.contact.phone, 'phone')}
                whileHover={{ scale: 1.1, rotateY: 15 }}
                whileTap={{ scale: 0.95 }}
                title={`Click to copy: ${portfolioData.contact.phone}`}
                style={{ cursor: 'pointer', position: 'relative' }}
              >
                <FaPhone />
                <AnimatePresence>
                  {showCopiedMessage === 'phone' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.8 }}
                      animate={{ opacity: 1, y: -60, scale: 1 }}
                      exit={{ opacity: 0, y: -80, scale: 0.8 }}
                      style={{
                        position: 'absolute',
                        top: '0',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'var(--success)',
                        color: 'white',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        fontSize: '12px',
                        fontWeight: '600',
                        whiteSpace: 'nowrap',
                        boxShadow: 'var(--shadow-lg)',
                        zIndex: 1000
                      }}
                    >
                      Copied!
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
            
            <motion.a
              href={portfolioData.contact.resume}
              className="contact-link"
              style={{ 
                width: 'auto', 
                padding: '12px 24px', 
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: '600',
                gap: '8px',
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'white'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <FaDownload />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 100, rotateY: 45 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100, rotateY: isVisible ? 0 : 45 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="profile-image-container">
              <div className="profile-image-bg"></div>
              <div 
                className="profile-image"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  color: 'white',
                  fontWeight: 'bold'
                }}
              >
                {portfolioData.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="scroll-indicator"
          onClick={() => scrollToSection('about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span>Scroll to explore</span>
          <div className="scroll-arrow"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="content-section" id="about">
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">{portfolioData.about}</p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="content-section" id="skills">
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">Technologies I work with on a daily basis</p>
          </motion.div>

          <motion.div 
            className="skills-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
          >
            {portfolioData.skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={index}
                  className="skill-item"
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -10, rotateY: 10 }}
                  onHoverStart={() => setHoveredSkill(index)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <IconComponent 
                    style={{ 
                      fontSize: '1.5rem', 
                      marginBottom: '8px',
                      color: hoveredSkill === index ? 'white' : 'var(--primary)'
                    }} 
                  />
                  <span>{skill.name}</span>
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: '4px',
                      left: '8px',
                      right: '8px',
                      height: '2px',
                      background: 'var(--gray-200)',
                      borderRadius: '1px',
                      overflow: 'hidden'
                    }}
                  >
                    <motion.div
                      style={{
                        height: '100%',
                        background: hoveredSkill === index ? 'white' : 'var(--primary)',
                        borderRadius: '1px',
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="content-section" id="projects" style={{ background: 'var(--gray-50)' }}>
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">A showcase of my recent development work</p>
          </motion.div>

          <motion.div 
            className="projects-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
          >
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -15, rotateX: 5 }}
              >
                <div className="project-header" style={{ marginBottom: 'var(--space-4)' }}>
                  <h3 className="project-title">{project.name}</h3>
                  <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: 'var(--primary)',
                          fontSize: '1.2rem',
                          textDecoration: 'none'
                        }}
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        title="View Project"
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: 'var(--gray-600)',
                          fontSize: '1.2rem',
                          textDecoration: 'none'
                        }}
                        whileHover={{ scale: 1.2, rotate: -15 }}
                        title="View Code"
                      >
                        <FaCode />
                      </motion.a>
                    )}
                  </div>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                {project.highlights && (
                  <div style={{ marginBottom: 'var(--space-4)' }}>
                    <h4 style={{ 
                      fontSize: '0.9rem', 
                      fontWeight: '600', 
                      color: 'var(--gray-700)',
                      marginBottom: 'var(--space-2)'
                    }}>
                      Key Features:
                    </h4>
                    <ul style={{ 
                      listStyle: 'none', 
                      fontSize: '0.85rem',
                      color: 'var(--gray-600)'
                    }}>
                      {project.highlights.map((highlight, i) => (
                        <li key={i} style={{ 
                          paddingLeft: 'var(--space-4)', 
                          marginBottom: 'var(--space-1)',
                          position: 'relative'
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: 0,
                            color: 'var(--primary)',
                            fontWeight: 'bold'
                          }}>•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="content-section" id="experience">
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Professional Experience</h2>
            <p className="section-subtitle">My journey in software development</p>
          </motion.div>

          <div className="experience-timeline">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                className="experience-item"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ x: 20, scale: 1.02 }}
              >
                <div className="experience-header">
                  <h3 className="experience-role">{exp.role}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="experience-duration">{exp.duration}</span>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      background: 'var(--primary)', 
                      color: 'white',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: '500'
                    }}>
                      {exp.type}
                    </span>
                  </div>
                  {exp.location && (
                    <p style={{ 
                      fontSize: '0.875rem', 
                      color: 'var(--gray-500)',
                      margin: '4px 0 0 0'
                    }}>
                      📍 {exp.location}
                    </p>
                  )}
                </div>
                
                <ul className="experience-points">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
                
                {exp.technologies && (
                  <div style={{ marginTop: 'var(--space-4)' }}>
                    <h5 style={{ 
                      fontSize: '0.875rem', 
                      fontWeight: '600', 
                      color: 'var(--gray-700)',
                      marginBottom: 'var(--space-2)'
                    }}>
                      Technologies Used:
                    </h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          style={{
                            background: 'var(--gray-100)',
                            color: 'var(--gray-700)',
                            padding: '2px 8px',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.75rem',
                            fontWeight: '500'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="content-section" id="achievements" style={{ background: 'var(--gray-50)' }}>
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Achievements & Certifications</h2>
            <p className="section-subtitle">Recognition and continuous learning milestones</p>
          </motion.div>

          <div className="achievements-grid">
            <div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)'
              }}>
                <FaTrophy style={{ color: 'var(--warning)' }} />
                Key Achievements
              </h3>
              {portfolioData.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="achievement-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="achievement-icon" style={{ fontSize: '2rem' }}>
                    {achievement.icon}
                  </div>
                  <div className="achievement-text">
                    <h4 style={{ 
                      fontWeight: '600', 
                      marginBottom: 'var(--space-1)',
                      color: 'var(--gray-900)'
                    }}>
                      {achievement.title}
                    </h4>
                    <p>{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)'
              }}>
                <FaCertificate style={{ color: 'var(--primary)' }} />
                Certifications
              </h3>
              {portfolioData.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="certification-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="certification-icon">
                    <FaCertificate style={{ color: 'var(--primary)' }} />
                  </div>
                  <div className="certification-text">
                    <h4 style={{ 
                      fontWeight: '600', 
                      marginBottom: 'var(--space-1)',
                      color: 'var(--gray-900)'
                    }}>
                      {cert.title}
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                      {cert.issuer} • {cert.date}
                    </p>
                    {cert.credentialId && (
                      <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)', marginTop: '4px' }}>
                        ID: {cert.credentialId}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="footer-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: 'var(--space-4)' 
            }}>
              Let's Connect
            </h3>
            <p className="footer-text" style={{ marginBottom: 'var(--space-6)' }}>
              I'm always interested in hearing about new opportunities and exciting projects.
            </p>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: 'var(--space-6)',
              marginBottom: 'var(--space-8)'
            }}>
              <motion.a
                href={`mailto:${portfolioData.contact.email}`}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  padding: '12px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50px',
                  height: '50px'
                }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope />
              </motion.a>
              
              <motion.a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  padding: '12px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50px',
                  height: '50px'
                }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              
              <motion.a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  padding: '12px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50px',
                  height: '50px'
                }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                paddingTop: 'var(--space-6)',
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.875rem'
              }}
            >
              <p>&copy; {new Date().getFullYear()} {portfolioData.name}. Crafted with ❤️ and React.</p>
              <p style={{ marginTop: 'var(--space-2)' }}>
                Designed & developed from scratch • Built with modern web technologies
              </p>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
