import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code2, FolderGit2 } from 'lucide-react';
import './projects.scss';

const projectData = [
  {
    id: 1,
    title: "EcoShop - MERN Marketplace",
    category: "MERN",
    image: "/project1.jpg", // তোমার প্রোজেক্ট স্ক্রিনশট এখানে দিবে
    desc: "A full-scale e-commerce platform with Stripe payment, Redux state management, and an admin dashboard.",
    tech: ["MongoDB", "Express", "React", "Node"],
    live: "#",
    github: "#"
  },
  {
    id: 2,
    title: "DevStream Dashboard",
    category: "Frontend",
    image: "/project2.jpg",
    desc: "A high-performance analytics dashboard featuring real-time charts and dark mode optimization.",
    tech: ["React", "Tailwind", "Chart.js"],
    live: "#",
    github: "#"
  },
  {
    id: 3,
    title: "TaskFlow API",
    category: "Backend",
    image: "/project3.jpg",
    desc: "Robust REST API for team collaboration with JWT authentication and documentation using Swagger.",
    tech: ["Node.js", "Express", "PostgreSQL"],
    live: "#",
    github: "#"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projectData 
    : projectData.filter(item => item.category === filter);

  return (
    <section className="projects-page" id="projects">
      <div className="container">
        <header className="section-header">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="badge">Portfolio</motion.span>
          <h2 className="title">My Creative <span className="purple">Showcase</span></h2>
          
          {/* Filter Buttons */}
          <div className="filter-btns">
            {['All', 'MERN', 'Frontend', 'Backend'].map((cat) => (
              <button 
                key={cat}
                className={filter === cat ? 'active' : ''} 
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <motion.div layout className="projects-grid">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="project-card"
              >
                <div className="image-box">
                  <div className="overlay">
                    <div className="links">
                      <a href={project.github} title="Source Code"><Github size={20} /></a>
                      <a href={project.live} title="Live Demo"><ExternalLink size={20} /></a>
                    </div>
                  </div>
                  {/* Image Placeholder */}
                  <div className="img-placeholder">
                     <FolderGit2 size={50} strokeWidth={1} />
                  </div>
                </div>

                <div className="content">
                  <span className="cat-tag">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="tech-stack">
                    {project.tech.map(t => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;