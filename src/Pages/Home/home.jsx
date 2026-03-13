import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Terminal, Cpu, Layers, Sparkles } from 'lucide-react';
import Navbar from '../../Components/Navbar/Navbar';
import './home.scss';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="hero-section" id="home">

      <div className="ambient-glow"></div>

      <motion.div 
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="badge">
          <Sparkles size={14} className="icon" />
          <span>Available for New Projects</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="hero-title">
          Building Digital <span className="gradient-text">Experiences</span> <br />
          with MERN Stack Excellence.
        </motion.h1>

        <motion.p variants={itemVariants} className="hero-subtitle">
          Hi, I'm a Full-Stack Developer specializing in building scalable web applications. 
          From robust backend architecture to pixel-perfect frontend interfaces.
        </motion.p>

        <motion.div variants={itemVariants} className="hero-btns">
          <button className="btn-primary">View My Work</button>
          <button className="btn-secondary">
            <Github size={18} /> 
            Source Code
          </button>
        </motion.div>

        {/* Stats Section */}
        <motion.div variants={itemVariants} className="hero-stats">
          <div className="stat-item">
            <Terminal size={20} />
            <div>
              <h3>50+</h3>
              <p>Projects Done</p>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <Cpu size={20} />
            <div>
              <h3>15+</h3>
              <p>Technologies</p>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <Layers size={20} />
            <div>
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Hero Socials */}
      <motion.div 
        className="hero-socials"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <a href="#"><Github size={20} /></a>
        <a href="#"><Linkedin size={20} /></a>
      </motion.div>
    </section>
  );
};

export default Hero;