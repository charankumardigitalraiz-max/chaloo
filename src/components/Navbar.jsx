import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Menu, X, ArrowRight, Shield } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const { scrollY } = useScroll();
    const navigate = useNavigate();
    const location = useLocation();

    const headerTop = useTransform(scrollY, [0, 100], ['0px', '16px']);
    const headerBorderRadius = useTransform(scrollY, [0, 100], ['0px', '100px']);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileMenuOpen]);

    const scrollToSection = (sectionId) => {
        setMobileMenuOpen(false);
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            }, 350);
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: 'Home', path: '/', action: () => { if (location.pathname === '/') { window.scrollTo({ top: 0, behavior: 'smooth' }); } else { navigate('/'); } } },
        { name: 'Platform', action: () => scrollToSection('zones') },
        { name: 'Features', action: () => scrollToSection('features') },
        { name: 'Explore', path: '/explore', action: () => navigate('/explore') },
        { name: 'About', path: '/about', action: () => navigate('/about') },
    ];

    // ── Mobile Command Center (rendered via Portal into document.body) ──
    const commandCenter = ReactDOM.createPortal(
        <AnimatePresence>
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '100%' }}
                    transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: '100vw',
                        height: '100vh',
                        background: '#020617',
                        zIndex: 99999,
                        padding: '32px 24px',
                        display: 'flex',
                        flexDirection: 'column',
                        overflowY: 'auto'
                    }}
                >
                    {/* Top bar */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '48px',
                        flexShrink: 0
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Shield size={24} color="#00D2FF" />
                            <span style={{
                                fontWeight: '900',
                                fontSize: '1.1rem',
                                color: 'white',
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase'
                            }}>Menu</span>
                        </div>
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            style={{
                                background: 'rgba(255,255,255,0.1)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                color: 'white',
                                width: '48px',
                                height: '48px',
                                borderRadius: '16px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}
                        >
                            <X size={22} />
                        </button>
                    </div>

                    {/* Nav links */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                        {navLinks.map((link, i) => {
                            const isActive = link.path && location.pathname === link.path;
                            return (
                                <motion.button
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.06 }}
                                    onClick={() => { link.action(); setMobileMenuOpen(false); }}
                                    style={{
                                        padding: '20px 24px',
                                        background: isActive
                                            ? 'rgba(0, 210, 255, 0.12)'
                                            : 'rgba(255, 255, 255, 0.05)',
                                        borderRadius: '18px',
                                        border: isActive
                                            ? '1px solid rgba(0, 210, 255, 0.3)'
                                            : '1px solid rgba(255, 255, 255, 0.08)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        cursor: 'pointer',
                                        width: '100%',
                                        textAlign: 'left'
                                    }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <span style={{
                                        fontSize: '1.35rem',
                                        fontWeight: '900',
                                        color: isActive ? '#00D2FF' : 'white',
                                        letterSpacing: '-0.02em'
                                    }}>{link.name}</span>
                                    <ArrowRight size={20} color={isActive ? '#00D2FF' : 'rgba(255,255,255,0.4)'} />
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Bottom CTA */}
                    <div style={{ marginTop: '32px', flexShrink: 0 }}>
                        <button
                            onClick={() => { navigate('/contact'); setMobileMenuOpen(false); }}
                            style={{
                                width: '100%',
                                padding: '18px',
                                background: 'linear-gradient(135deg, #00D2FF, #0066CC)',
                                color: '#020617',
                                borderRadius: '18px',
                                border: 'none',
                                fontWeight: '900',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                                letterSpacing: '0.02em'
                            }}
                        >
                            Get in Touch <ArrowRight size={18} />
                        </button>
                        <p style={{
                            textAlign: 'center',
                            color: 'rgba(255,255,255,0.25)',
                            fontSize: '0.7rem',
                            fontWeight: '700',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            marginTop: '20px'
                        }}>CHALOO SPORTS HQ · AP, INDIA</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );

    return (
        <>
            {/* ── Top Bar ── */}
            <motion.header
                style={{
                    position: 'fixed',
                    top: headerTop,
                    left: '50%',
                    x: '-50%',
                    zIndex: 1000,
                    width: isScrolled ? 'auto' : '100%',
                    maxWidth: '100vw',
                    padding: isScrolled ? '0' : '0 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'none'
                }}
            >
                <motion.nav
                    style={{
                        pointerEvents: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '8px',
                        background: isScrolled
                            ? 'rgba(10, 18, 40, 0.92)'
                            : 'rgba(2, 6, 23, 0.5)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        padding: isScrolled ? '10px 16px' : '14px 24px',
                        borderRadius: headerBorderRadius,
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        boxShadow: isScrolled
                            ? '0 20px 50px rgba(0,0,0,0.5)'
                            : 'none',
                        transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
                        width: isScrolled ? 'auto' : 'calc(100vw)',
                        minWidth: 0
                    }}
                >
                    {/* Logo */}
                    <div
                        onClick={() => navigate('/')}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            cursor: 'pointer',
                            flexShrink: 0
                        }}
                    >
                        <div style={{
                            width: isScrolled ? '30px' : '38px',
                            height: isScrolled ? '30px' : '38px',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            border: '1px solid rgba(255,255,255,0.12)',
                            transition: 'all 0.4s ease',
                            flexShrink: 0
                        }}>
                            <img src="/logo.jpeg" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <span style={{
                            fontSize: isScrolled ? '1rem' : '1.2rem',
                            fontWeight: '950',
                            color: 'white',
                            letterSpacing: '-0.04em',
                            transition: 'all 0.4s ease',
                            whiteSpace: 'nowrap'
                        }}>
                            CHALOO<span style={{ color: '#00D2FF' }}>.</span>
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                        {navLinks.map((link) => {
                            const isActive = link.path && location.pathname === link.path;
                            return (
                                <div
                                    key={link.name}
                                    onMouseEnter={() => setHoveredLink(link.name)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    onClick={link.action}
                                    style={{
                                        padding: '9px 16px',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        color: (isActive || hoveredLink === link.name) ? 'white' : 'rgba(255,255,255,0.6)',
                                        fontSize: '0.8rem',
                                        fontWeight: '800',
                                        letterSpacing: '0.04em',
                                        textTransform: 'uppercase',
                                        transition: 'color 0.3s ease'
                                    }}
                                >
                                    {link.name}
                                    {hoveredLink === link.name && (
                                        <motion.div
                                            layoutId="nav-hover"
                                            style={{
                                                position: 'absolute',
                                                inset: 0,
                                                background: 'rgba(255,255,255,0.06)',
                                                borderRadius: '50px',
                                                zIndex: -1
                                            }}
                                            transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                                        />
                                    )}
                                    {isActive && (
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '3px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: '4px',
                                            height: '4px',
                                            borderRadius: '50%',
                                            background: '#00D2FF'
                                        }} />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Right side actions */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                        {/* CTA button - hidden on very small screens, shown on tablet+ */}
                        <button
                            onClick={() => navigate('/contact')}
                            className="nav-cta"
                            style={{
                                padding: isScrolled ? '9px 18px' : '10px 22px',
                                background: '#00D2FF',
                                color: '#020617',
                                borderRadius: '100px',
                                fontWeight: '900',
                                fontSize: '0.8rem',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                whiteSpace: 'nowrap',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 8px 20px rgba(0,210,255,0.25)'
                            }}
                        >
                            {isScrolled ? 'Connect' : 'Get in Touch'} <ArrowRight size={14} />
                        </button>

                        {/* Mobile hamburger */}
                        <button
                            className="mobile-toggle"
                            onClick={() => setMobileMenuOpen(true)}
                            style={{
                                background: 'rgba(255,255,255,0.08)',
                                border: '1px solid rgba(255,255,255,0.12)',
                                color: 'white',
                                width: '40px',
                                height: '40px',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}
                        >
                            <Menu size={20} />
                        </button>
                    </div>
                </motion.nav>
            </motion.header>

            {/* Portal-rendered mobile overlay */}
            {commandCenter}

            <style>{`
                /* Desktop: hide hamburger, show nav */
                @media (min-width: 1024px) {
                    .desktop-nav { display: flex !important; }
                    .mobile-toggle { display: none !important; }
                    .nav-cta { display: flex !important; }
                }
                /* Tablet: hide desktop nav, show hamburger */
                @media (max-width: 1023px) {
                    .desktop-nav { display: none !important; }
                    .mobile-toggle { display: flex !important; }
                }
                /* Small mobile (Galaxy S8 = 360px): hide CTA text button, keep hamburger */
                @media (max-width: 480px) {
                    .nav-cta { display: none !important; }
                }
                .nav-cta:hover {
                    box-shadow: 0 12px 28px rgba(0, 210, 255, 0.4) !important;
                    transform: translateY(-1px);
                }
            `}</style>
        </>
    );
};

export default Navbar;
