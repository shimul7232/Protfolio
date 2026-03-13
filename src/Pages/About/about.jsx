import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, GraduationCap, Award } from 'lucide-react';
import './about.scss';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          
          {/* Left Side: Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="about-image-wrapper"
          >
            <div className="image-frame">
              {/* এখানে তোমার ছবির পাথ দিবে */}
              <img src="/your-photo.jpg" alt="MD SHIMUL HOSSEN" />
              <div className="frame-border"></div>
              <div className="experience-badge">
                <h3>2+</h3>
                <p>Years of <br /> Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="about-content"
          >
            <span className="badge">
              <User size={14} /> About Me
            </span>
            <h2 className="name-title">
              I am <span className="highlight">MD SHIMUL HOSSEN</span>
            </h2>
            <p className="description">
              A passionate Full-Stack MERN Developer dedicated to crafting high-performance 
              web applications. I blend technical expertise with creative problem-solving 
              to build digital solutions that make an impact.
            </p>

            <div className="info-cards">
              <div className="info-card">
                <Code2 className="icon" />
                <div>
                  <h4>Development</h4>
                  <p>MERN Stack Expert</p>
                </div>
              </div>
              <div className="info-card">
                <GraduationCap className="icon" />
                <div>
                  <h4>Education</h4>
                  <p>Computer Science</p>
                </div>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="download-btn"
            >
              <Award size={18} /> Download CV
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;