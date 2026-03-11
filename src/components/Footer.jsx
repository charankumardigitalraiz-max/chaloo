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
        color: 'var(--chalo-slate)',
        fontSize: '0.88rem',
        fontWeight: '600',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        padding: 0,
        textAlign: 'left',
        opacity: 0.75,
        transition: 'opacity 0.2s'
    };

    return (
        <footer style={{
            padding: '48px 8% 28px',
            background: 'var(--chalo-bg)',
            borderTop: '1px solid rgba(15,23,42,0.06)',
            borderTopLeftRadius: '40px',
            borderTopRightRadius: '40px',
            marginTop: '32px'
        }}>
            {/* Main Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '36px', marginBottom: '36px' }}>

                {/* Brand */}
                <div style={{ maxWidth: '340px' }}>
                    <div onClick={() => { navigate('/'); scrollToTop(); }} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', cursor: 'pointer' }}>
                        <Trophy size={24} fill="var(--chalo-blue)" color="var(--chalo-blue)" />
                        <span style={{ fontSize: '1.4rem', fontWeight: '950', color: 'var(--chalo-navy)', letterSpacing: '-0.05em' }}>
                            CHALOO<span style={{ color: 'var(--chalo-blue)' }}>.</span>
                        </span>
                    </div>
                    <p style={{ color: 'var(--chalo-slate)', lineHeight: 1.6, fontSize: '0.88rem', fontWeight: '500', opacity: 0.75, marginBottom: '16px' }}>
                        Connecting India's sports talent with the right coaches, academies, and opportunities.
                    </p>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        {[Instagram, Twitter, Facebook].map((Icon, i) => (
                            <motion.a key={i} href="#" whileHover={{ y: -3 }}
                                style={{ color: 'var(--chalo-navy)', background: 'white', padding: '8px', borderRadius: '10px', display: 'flex', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
                                <Icon size={16} />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Platform Links */}
                <div>
                    <h4 style={{ color: 'var(--chalo-navy)', fontSize: '0.95rem', marginBottom: '16px', fontWeight: '900' }}>Platform</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <li><button onClick={() => scrollToSection('zones')} style={linkStyle}>Academies & Coaches</button></li>
                        <li><button onClick={() => scrollToSection('features')} style={linkStyle}>Features</button></li>
                        <li><button onClick={() => { navigate('/explore'); scrollToTop(); }} style={linkStyle}>Explore Platform</button></li>
                        <li><button onClick={() => { navigate('/about'); scrollToTop(); }} style={linkStyle}>Our Mission</button></li>
                    </ul>
                </div>

                {/* Trust */}
                <div>
                    <h4 style={{ color: 'var(--chalo-navy)', fontSize: '0.95rem', marginBottom: '16px', fontWeight: '900' }}>Trust & Safety</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <li><button style={linkStyle} onClick={() => { navigate('/privacy'); scrollToTop(); }}>Privacy Policy</button></li>
                        <li><button style={linkStyle} onClick={() => { navigate('/terms'); scrollToTop(); }}>Terms of Service</button></li>
                        {/* <li><button onClick={() => { navigate('/contact'); scrollToTop(); }} style={linkStyle}>Secure Connection</button></li> */}
                        {/* <li><button style={linkStyle}>Partner Guidelines</button></li> */}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 style={{ color: 'var(--chalo-navy)', fontSize: '0.95rem', marginBottom: '16px', fontWeight: '900' }}>Contact</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <a href="mailto:chalosportsapp@gmail.com" style={{ color: 'var(--chalo-slate)', fontSize: '0.85rem', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.8 }}>
                            <Mail size={14} color="var(--chalo-blue)" /> chalosportsapp@gmail.com
                        </a>
                        <div style={{ color: 'var(--chalo-slate)', fontSize: '0.85rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.8 }}>
                            <Phone size={14} color="var(--chalo-blue)" /> +91 7995135561
                        </div>
                        <div style={{ color: 'var(--chalo-slate)', fontSize: '0.85rem', fontWeight: '600', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: 1.4, opacity: 0.8 }}>
                            <MapPin size={14} color="var(--chalo-blue)" style={{ marginTop: '2px', flexShrink: 0 }} />
                            <span>Thorredu, East Godavari - 533293</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{ borderTop: '1px solid rgba(15,23,42,0.06)', paddingTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', fontWeight: '700', color: 'var(--chalo-navy)', opacity: 0.7 }}>
                    <Activity size={13} color="var(--chalo-blue)" /> Bringing a Sporting Revolution across India
                </div>
                <p style={{ opacity: 0.5, fontSize: '0.82rem', color: 'var(--chalo-slate)', fontWeight: '600' }}>© 2024 CHALOO Sports. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
