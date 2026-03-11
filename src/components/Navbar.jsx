import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const navigate = useNavigate();
    const location = useLocation();

    const width = useTransform(scrollY, [0, 100], ['100%', '92%']);
    const top = useTransform(scrollY, [0, 100], ['0px', '20px']);
    const borderRadius = useTransform(scrollY, [0, 100], ['0px', '24px']);
    const shadow = useTransform(scrollY, [0, 100], ['none', '0 20px 40px rgba(0,0,0,0.3)']);

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
        { name: 'Explore', action: () => navigate('/explore') },
        { name: 'About', action: () => navigate('/about') },
    ];

    return (
        <motion.nav
            style={{
                width: width,
                top: top,
                borderRadius: borderRadius,
                height: '76px',
                left: '50%',
                x: '-50%',
                position: 'fixed',
                zIndex: 100,
                padding: '0 5%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.8)' : 'transparent',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: isScrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
                boxShadow: shadow,
                transition: 'background-color 0.4s ease, border 0.4s ease'
            }}
        >
            {/* Branding */}
            <div
                style={{ display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer' }}
                onClick={() => navigate('/')}
            >
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <img src="/logo.jpeg" alt="Chaloo Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <span style={{
                    fontSize: '1.4rem',
                    fontWeight: '950',
                    color: 'white',
                    letterSpacing: '-0.05em',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    CHALOO<span style={{ color: 'var(--chalo-blue)' }}>.</span>
                </span>
            </div>

            {/* Desktop Navigation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }} className="desktop-links">
                {navLinks.map((link) => (
                    <div
                        key={link.name}
                        onClick={link.action}
                        style={{
                            fontSize: '0.85rem',
                            fontWeight: '800',
                            color: 'rgba(255,255,255,0.7)',
                            cursor: 'pointer',
                            transition: 'color 0.3s ease',
                            letterSpacing: '0.02em',
                            textTransform: 'uppercase'
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = 'white'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                    >
                        {link.name}
                    </div>
                ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <button
                    style={{
                        padding: '12px 24px',
                        fontSize: '0.85rem',
                        background: 'var(--chalo-blue)',
                        color: 'var(--chalo-navy)',
                        borderRadius: '50px',
                        fontWeight: '900',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 10px 25px rgba(0,210,255,0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'all 0.3s ease'
                    }}
                    className="nav-cta-button"
                    onClick={() => navigate('/contact')}
                >
                    Get in Touch <ArrowRight size={14} />
                </button>

                <div
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{ cursor: 'pointer', color: 'white' }}
                    className="mobile-toggle"
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        style={{
                            position: 'absolute',
                            top: '90px',
                            left: '4%',
                            right: '4%',
                            background: 'rgba(15, 23, 42, 0.98)',
                            backdropFilter: 'blur(20px)',
                            borderRadius: '24px',
                            padding: '32px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            zIndex: 99
                        }}
                    >
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                onClick={() => { link.action(); setMobileMenuOpen(false); }}
                                style={{ 
                                    fontSize: '1.2rem', 
                                    fontWeight: '900', 
                                    color: 'white', 
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                {link.name}
                                <ArrowRight size={18} style={{ opacity: 0.3 }} />
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
                @media (max-width: 580px) {
                    .nav-cta-button { 
                        display: none !important; 
                    }
                }
                .nav-cta-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 15px 30px rgba(0,210,255,0.4);
                }
            `}</style>
        </motion.nav>
    );
};

export default Navbar;
