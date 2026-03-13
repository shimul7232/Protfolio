import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './navbar.scss';

export default function Navbar({ navlinks }) {
    const [active, setActive] = useState("#home");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="logo">
                    <motion.h2 whileHover={{ scale: 1.05 }}>
                        <span>MERN</span>DEV
                    </motion.h2>
                </div>

                {/* Desktop Menu */}
                <ul className="nav-menu">
                    {navlinks.map((link) => (
                        <li key={link.label} onClick={() => setActive(link.path)}>
                            <a href={link.path} className={active === link.path ? 'active' : ''}>
                                {link.label}
                            </a>
                            {active === link.path && (
                                <motion.div 
                                    layoutId="nav-underline" 
                                    className="underline"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </li>
                    ))}
                </ul>

                <div className="nav-right">
                    <motion.button 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                        className="cta-btn"
                    >
                        Hire Me
                    </motion.button>
                    <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <HiX /> : <HiMenuAlt3 />}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mobile-nav"
                    >
                        {navlinks.map((link) => (
                            <a key={link.label} href={link.path} onClick={() => setIsOpen(false)}>
                                {link.label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}