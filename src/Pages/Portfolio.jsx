import React, { useState } from "react";
import { FaLinkedin, FaEnvelope, FaPhone, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Portfolio.css";

const portfolioData = {
  name: "Sai Mahesh Korthiwada",
  title: "Full Stack Developer",
  contact: {
    email: "ksaimahesh.98@gmail.com",
    phone: "+91 8919315182",
    linkedin: "https://www.linkedin.com/in/ksaimahesh",
    resume: "/SaiMahesh_FullStackDeveloper.pdf",
  },
  about: `I'm a full-stack developer passionate about crafting intuitive, efficient web applications. I enjoy working across the stack with a special interest in front-end development, UI/UX, and performance optimization.`,
  skills: [
    "React",
    "TypeScript",
    "JavaScript",
    "C#",
    "SQL",
    "HTML",
    "CSS",
    ".NET",
    "Azure Functions",
    "PostgreSQL",
    "Redux",
    "Context API",
    "Material UI",
    "AG Grid",
    "REST APIs",
    "GraphQL",
    "Git",
    "Azure DevOps",
    "Python",
  ],
  experience: [
    {
      company: "vConstruct Pvt Ltd, Pune",
      role: "Software Engineer",
      duration: "Jul 2023 – Present",
      points: [
        "Built responsive apps with React & TypeScript integrating REST APIs.",
        "Created planning tools with redux and virtualization.",
        "Developed backend APIs using .NET Azure Functions and PostgreSQL.",
        "Improved front-end performance by optimizing React rendering logic.",
        "Collaborated with QA for bug-free releases and regression testing.",
        "Participated in Agile rituals and delivered features under tight deadlines.",
        "Contributed to reusable UI components and shared design systems.",
      ],
    },
  ],
  certifications: [
    "React Developer Certification – Udemy",
    "JavaScript Web Development Bootcamp – Udemy",
    "SQL Bootcamp – Udemy",
  ],
  projects: [
    {
      name: "Schedule Viewer",
      description:
        "Web interface for construction schedules with Gantt charts and real-time updates.",
      tech: [
        "React",
        "TypeScript",
        "Material UI",
        "AG Grid",
        "Azure Functions",
      ],
    },
    {
      name: "Estimation Portal",
      description:
        "App for managing construction estimations using lazy loading and cloud APIs.",
      tech: ["React", "Redux", "Material UI", ".NET", "Snowflake"],
    },
    {
      name: "Badging Application",
      description:
        "Worker management tool with QR-based check-in/out and responsive design.",
      tech: ["React", "TypeScript", "Material UI", ".NET", "PostgreSQL"],
    },
  ],
  achievements: [
    "98% bug-free releases through unit testing and best practices.",
    "Improved delivery speed by 15% via agile collaboration.",
    "Optimized React rendering, reducing UI load time by 20%.",
  ],
};

export default function Portfolio() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
  const navigate = useNavigate();

  // Function to copy phone number to clipboard
  const copyPhoneToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.contact.phone);
      setShowCopiedMessage(true);
      // Hide message after 2 seconds
      setTimeout(() => {
        setShowCopiedMessage(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy phone number: ', err);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      y: -5,
      boxShadow: "0 10px 25px rgba(0, 51, 102, 0.15)",
      transition: {
        duration: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, rotateY: -15 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      color: "#00509e",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="container py-5 bg-light-blue"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="text-center mb-5"
        variants={itemVariants}
      >
        <motion.h1 
          className="display-4 fw-bold text-corporate"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {portfolioData.name}
        </motion.h1>
        <motion.p 
          className="lead text-muted"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {portfolioData.title}
        </motion.p>
        <motion.div 
          className="mt-3 d-flex justify-content-center gap-4 fs-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ color: "#333" }} // Changed to darker color
        >
          <motion.a 
            href={`mailto:${portfolioData.contact.email}`}
            variants={iconVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <FaEnvelope />
          </motion.a>
          <motion.a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            variants={iconVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.div
            onClick={copyPhoneToClipboard}
            variants={iconVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
            style={{ 
              cursor: "pointer",
              color: "inherit",
              position: "relative"
            }}
            title={`Click to copy: ${portfolioData.contact.phone}`}
          >
            <FaPhone />
            <AnimatePresence>
              {showCopiedMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.8 }}
                  animate={{ opacity: 1, y: -40, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#28a745",
                    color: "white",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    fontSize: "12px",
                    whiteSpace: "nowrap",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    zIndex: 1000
                  }}
                >
                  Copied!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.section className="mb-5" variants={itemVariants}>
        <h2 className="h5 text-corporate border-bottom pb-2">
          About Me
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {portfolioData.about}
        </motion.p>
      </motion.section>

      <motion.section className="mb-5" variants={itemVariants}>
        <h2 className="h5 text-corporate border-bottom pb-2">
          Skills
        </h2>
        <motion.div 
          className="d-flex flex-wrap gap-2"
          variants={containerVariants}
        >
          {portfolioData.skills.map((skill, idx) => (
            <motion.span
              key={idx}
              className="badge badge-outline px-3 py-2 me-1 mb-2"
              variants={skillVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredSkill(idx)}
              onHoverEnd={() => setHoveredSkill(null)}
              style={{
                cursor: "pointer",
                background: hoveredSkill === idx ? "linear-gradient(45deg, #003366, #00509e)" : "",
                color: hoveredSkill === idx ? "white" : ""
              }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="mb-5" variants={itemVariants}>
        <h2 className="h5 text-corporate border-bottom pb-2">
          Projects
        </h2>
        <motion.div 
          className="row g-3"
          variants={containerVariants}
        >
          {portfolioData.projects.map((proj, idx) => (
            <motion.div key={idx} className="col-md-6" variants={itemVariants}>
              <motion.div 
                className="card border-0 shadow-sm h-100"
                variants={cardVariants}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <div className="card-body">
                  <h5 className="card-title text-corporate">{proj.name}</h5>
                  <p className="card-text small">{proj.description}</p>
                  <div className="mt-3 p-3 bg-light rounded">
                    <h6 className="text-corporate">Technologies Used:</h6>
                    <div className="d-flex flex-wrap gap-1">
                      {proj.tech.map((t, i) => (
                        <motion.span
                          key={i}
                          className="badge bg-secondary-subtle text-dark"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="mb-5" variants={itemVariants}>
        <h2 className="h5 text-corporate border-bottom pb-2">
          Experience
        </h2>
        {portfolioData.experience.map((exp, idx) => (
          <motion.div 
            key={idx} 
            className="mb-3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <motion.h6 
              className="fw-semibold"
              whileHover={{ 
                color: "#00509e",
                scale: 1.02
              }}
              transition={{ duration: 0.2 }}
              style={{ 
                cursor: "pointer",
                color: "#333" // Dark default color
              }}
            >
              {exp.role} – {exp.company}
            </motion.h6>
            <p className="text-muted small">{exp.duration}</p>
            <ul className="list-unstyled">
              {exp.points.map((p, i) => (
                <li 
                  key={i} 
                  className="mb-1"
                >
                  ▪️ {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.section>

      <motion.section className="mb-5" variants={itemVariants}>
        <h2 className="h5 text-corporate border-bottom pb-2">
          Achievements
        </h2>
        <ul className="list-unstyled">
          {portfolioData.achievements.map((ach, i) => (
            <li 
              key={i} 
              className="mb-1"
            >
              🏆 {ach}
            </li>
          ))}
        </ul>
      </motion.section>

      <motion.section className="mb-5" variants={itemVariants}>
        <h2 className="h5 text-corporate border-bottom pb-2">
          Certifications
        </h2>
        <ul className="list-unstyled">
          {portfolioData.certifications.map((cert, i) => (
            <li 
              key={i} 
              className="mb-1"
            >
              ✔️ {cert}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Navigation to Other Pages */}
      <motion.section 
        className="text-center mb-4" 
        variants={itemVariants}
      >
        <div className="d-flex justify-content-center gap-3 align-items-center">
          <motion.button
            onClick={() => navigate('/news')}
            className="btn btn-outline-secondary btn-sm"
            whileHover={{ 
              scale: 1.05,
              borderColor: "#003366",
              color: "#003366"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              borderRadius: "20px",
              fontSize: "12px",
              padding: "4px 12px",
              fontWeight: "500"
            }}
          >
            📰 News
          </motion.button>
          
          <motion.button
            onClick={() => navigate('/home')}
            className="btn btn-sm"
            whileHover={{ 
              scale: 1.1,
              opacity: 0.8
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            style={{
              backgroundColor: "transparent",
              color: "#6c757d",
              fontSize: "10px",
              padding: "2px 6px",
              border: "1px solid #e9ecef",
              borderRadius: "12px",
              fontWeight: "400",
              opacity: 0.4
            }}
          >
            •••
          </motion.button>
        </div>
      </motion.section>

      <motion.footer 
        className="text-center pt-4 border-top mt-5 text-muted small"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        &copy; {new Date().getFullYear()} {portfolioData.name}
      </motion.footer>
    </motion.div>
  );
}
