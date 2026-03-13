import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Trophy, MapPin, Phone, Mail, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const scrollToSection = (id) => {
        navigate('/');
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 300);
    };

    const linkStyle = {
        color: 'var(--text-secondary)',
        fontSize: '0.88rem',
        fontWeight: '600',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        padding: 0,
        textAlign: 'left',
        transition: 'all 0.3s ease',
        opacity: 0.8
    };

    return (
        <footer style={{
            padding: '80px 8% 40px',
            background: 'var(--chalo-bg)',
            borderTop: '1px solid var(--border-glass)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Subtle Gradient Glow */}
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', height: '100%', background: 'radial-gradient(circle at 50% 100%, rgba(0, 210, 255, 0.03) 0%, transparent 70%)', zIndex: 0 }} />

            {/* Main Grid */}
            <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', marginBottom: '60px', position: 'relative', zIndex: 1 }}>

                {/* Brand */}
                <div style={{ maxWidth: '360px' }}>
                    <div onClick={() => { navigate('/'); scrollToTop(); }} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', cursor: 'pointer' }}>
                        <div style={{ width: '38px', height: '38px', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.12)', flexShrink: 0 }}>
                            <img src="/logo.jpeg" alt="Chaloo Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <span style={{ fontSize: '1.6rem', fontWeight: '950', color: 'white', letterSpacing: '-0.04em' }}>
                            CHALOO<span style={{ color: 'var(--chalo-blue)' }}>.</span>
                        </span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem', fontWeight: '500', marginBottom: '28px' }}>
                        Connecting India's elite sports talent with authorized coaches, premium academies, and enterprise opportunities.
                    </p>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        {[Instagram, Twitter, Facebook].map((Icon, i) => (
                            <motion.a key={i} href="#"
                                whileHover={{ y: -5, background: 'rgba(255,255,255,0.08)', borderColor: 'var(--chalo-blue)' }}
                                style={{
                                    color: 'white',
                                    background: 'rgba(255,255,255,0.03)',
                                    padding: '12px',
                                    borderRadius: '14px',
                                    display: 'flex',
                                    border: '1px solid var(--border-glass)',
                                    transition: 'all 0.3s ease'
                                }}>
                                <Icon size={18} />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Platform Links */}
                <div>
                    <h4 style={{ color: 'var(--chalo-blue)', fontSize: '0.8rem', marginBottom: '24px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Platform</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        <li><button onClick={() => scrollToSection('zones')} className="footer-link" style={linkStyle}>Academies & Coaches</button></li>
                        <li><button onClick={() => scrollToSection('features')} className="footer-link" style={linkStyle}>Premium Features</button></li>
                        <li><button onClick={() => { navigate('/explore'); scrollToTop(); }} className="footer-link" style={linkStyle}>Global Exploration</button></li>
                        <li><button onClick={() => { navigate('/about'); scrollToTop(); }} className="footer-link" style={linkStyle}>The Mission</button></li>
                    </ul>
                </div>

                {/* Trust */}
                <div>
                    <h4 style={{ color: 'var(--chalo-blue)', fontSize: '0.8rem', marginBottom: '24px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Governance</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        <li><button style={linkStyle} className="footer-link" onClick={() => { navigate('/privacy'); scrollToTop(); }}>Privacy Protocol</button></li>
                        <li><button style={linkStyle} className="footer-link" onClick={() => { navigate('/terms'); scrollToTop(); }}>Terms of Service</button></li>
                        <li><button style={linkStyle} className="footer-link" onClick={() => { navigate('/contact'); scrollToTop(); }}>Enterprise Support</button></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 style={{ color: 'var(--chalo-blue)', fontSize: '0.8rem', marginBottom: '24px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Reach Us</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <a href="mailto:umanalli.123@gmail.com" style={{ color: 'white', fontSize: '0.9rem', textDecoration: 'none', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '12px', transition: 'all 0.3s ease' }} className="footer-link">
                            <Mail size={16} color="var(--chalo-blue)" /> umanalli.123@gmail.com
                        </a>
                        <div style={{ color: 'white', fontSize: '0.9rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Phone size={16} color="var(--chalo-blue)" /> +91 8688047634
                        </div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '600', display: 'flex', alignItems: 'flex-start', gap: '12px', lineHeight: 1.5 }}>
                            <MapPin size={16} color="var(--chalo-blue)" style={{ marginTop: '2px', flexShrink: 0 }} />
                            <span>H No-8-1-106/A/43, Vinobha Nagar, Shaikpet, Nagamma Temple,
                                Golconda, Hyderabad - 500008, Telangana.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', fontWeight: '800', color: 'var(--chalo-blue)' }}>
                    <Activity size={16} /> A New Era of Indian Sports
                </div>
                <p style={{ opacity: 0.5, fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
                    © 2024 CHALOO Sports HQ. All rights reserved.
                </p>
            </div>

            <style>{`
                .footer-link:hover {
                    color: white !important;
                    opacity: 1 !important;
                    transform: translateX(5px);
                }
                @media (max-width: 900px) {
                    .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
                @media (max-width: 480px) {
                    .footer-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
