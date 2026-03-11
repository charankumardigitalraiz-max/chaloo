import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const navigate = useNavigate();
    const location = useLocation();

    const width = useTransform(scrollY, [0, 100], ['100%', '90%']);
    const top = useTransform(scrollY, [0, 100], ['0px', '15px']);
    const borderRadius = useTransform(scrollY, [0, 100], ['0px', '20px']);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const el = document.getElementById(sectionId);
                el?.scrollIntoView({ behavior: 'smooth' });
            }, 350);
        } else {
            const el = document.getElementById(sectionId);
            el?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: 'Home', action: () => { if (location.pathname === '/') { window.scrollTo({ top: 0, behavior: 'smooth' }); } else { navigate('/'); } } },
        { name: 'Platform', action: () => scrollToSection('zones') },
        { name: 'Features', action: () => scrollToSection('features') },
        { name: 'About Us', action: () => navigate('/about') },
    ];

    return (
        <motion.nav
            style={{
                width: width,
                top: top,
                borderRadius: borderRadius,
                height: '70px',
                left: '50%',
                x: '-50%',
                position: 'fixed',
                zIndex: 100,
                padding: '0 4%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.92)' : 'transparent',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
                boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.06)' : 'none',
                transition: 'all 0.3s ease'
            }}
        >
            {/* Branding */}
            <div
                style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
                onClick={() => navigate('/')}
            >
                <div style={{ width: '50px', height: '50px', borderRadius: '10px', overflow: 'hidden', }}>
                    <img src="/logo.jpeg" alt="Chaloo Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <span style={{
                    fontSize: 'clamp(1.1rem, 4vw, 1.5rem)',
                    fontWeight: '950',
                    color: isScrolled ? 'var(--chalo-navy)' : 'white',
                    transition: 'color 0.3s ease',
                    letterSpacing: '-0.04em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '3px'
                }}>
                    CHALOO<span style={{ color: 'var(--chalo-blue)' }}>.</span>
                </span>
            </div>

            {/* Desktop Navigation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="desktop-links">
                {navLinks.map((link) => (
                    <div
                        key={link.name}
                        onClick={link.action}
                        style={{
                            fontSize: '0.9rem',
                            fontWeight: '700',
                            color: 'var(--chalo-blue)',
                            // textShadow: isScrolled ? 'none' : '0 1px 4px rgba(0,0,0,0.4)',
                            cursor: 'pointer',
                            transition: 'color 0.2s ease'
                        }}
                    // onMouseEnter={e => e.currentTarget.style.color = 'var(--chalo-blue)'}
                    // onMouseLeave={e => e.currentTarget.style.color = isScrolled ? 'var(--chalo-slate)' : 'white'}
                    >
                        {link.name}
                    </div>
                ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <button
                    style={{
                        padding: '10px 22px',
                        fontSize: '0.85rem',
                        background: 'var(--chalo-blue)',
                        color: 'white',
                        borderRadius: '50px',
                        fontWeight: '800',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 8px 20px rgba(59,130,246,0.3)',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    className="nav-cta-button"
                    onClick={() => navigate('/contact')}
                >
                    Get in Touch
                </button>

                <div
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{ cursor: 'pointer', color: isScrolled ? 'var(--chalo-navy)' : 'white', transition: 'color 0.3s ease' }}
                    className="mobile-toggle"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        style={{
                            position: 'absolute',
                            top: '80px',
                            left: '5%',
                            right: '5%',
                            background: 'white',
                            borderRadius: '20px',
                            padding: '28px 32px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '18px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                            zIndex: 99
                        }}
                    >
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                onClick={() => { link.action(); setMobileMenuOpen(false); }}
                                style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--chalo-navy)', cursor: 'pointer' }}
                            >
                                {link.name}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 992px) { 
                    .desktop-links { display: none !important; }
                    .mobile-toggle { display: block !important; }
                }
                @media (min-width: 993px) { 
                    .mobile-toggle { display: none !important; }
                    .desktop-links { display: flex !important; }
                }
                @media (max-width: 480px) {
                    .nav-cta-button { 
                        display: none !important; 
                    }
                }
            `}</style>
        </motion.nav>
    );
};

export default Navbar;
