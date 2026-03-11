import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Activity, Shield, Users, Star, Globe, ShieldCheck, Zap } from 'lucide-react';

const AboutPage = () => {
    return (
        <div style={{ background: 'var(--chalo-bg)', minHeight: '100vh', paddingBottom: '100px' }}>
            {/* Cinematic Header Section */}
            <section style={{
                paddingTop: '160px',
                paddingBottom: '120px',
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'center',
                background: 'linear-gradient(to bottom, rgba(2, 6, 23, 0.4) 0%, var(--chalo-bg) 100%)'
            }}>
                {/* Background Glows */}
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', height: '100%', background: 'radial-gradient(circle at 50% 0%, rgba(0, 210, 255, 0.08) 0%, transparent 70%)', zIndex: 0 }} />

                <div style={{ position: 'relative', zIndex: 1, paddingInline: '6%' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'var(--chalo-blue)',
                            background: 'rgba(0, 210, 255, 0.1)',
                            padding: '10px 24px',
                            borderRadius: '100px',
                            fontWeight: '900',
                            fontSize: '0.75rem',
                            marginBottom: '32px',
                            border: '1px solid rgba(0, 210, 255, 0.15)',
                            letterSpacing: '0.1em'
                        }}
                    >
                        <Star size={14} fill="var(--chalo-blue)" /> OUR MISSION
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: '950', color: 'white', marginBottom: '24px', letterSpacing: '-0.05em', lineHeight: 0.9 }}
                    >
                        Empowering India's <br />
                        <span className="text-gradient">Next Champions.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontWeight: '500', lineHeight: 1.6 }}
                    >
                        CHALOO is a sports-tech initiative dedicated to professionalizing the path from playground to podium through elite connectivity.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <div style={{ maxWidth: '1400px', margin: '-40px auto 0', padding: '0 6%', position: 'relative', zIndex: 2 }}>

                {/* Vision Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '60px',
                    alignItems: 'center',
                    marginBottom: '100px',
                    background: 'rgba(15, 23, 42, 0.4)',
                    backdropFilter: 'blur(30px)',
                    borderRadius: '48px',
                    padding: '80px clamp(2rem, 5vw, 4rem)',
                    border: '1px solid var(--border-glass)',
                    boxShadow: '0 50px 100px rgba(0,0,0,0.3)'
                }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div style={{ color: 'var(--chalo-blue)', fontWeight: '900', fontSize: '0.8rem', letterSpacing: '0.2em', marginBottom: '20px' }}>THE CHALLENGE</div>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '950', marginBottom: '32px', color: 'white', letterSpacing: '-0.04em', lineHeight: 1 }}>Our Digital <br /> Revolution</h2>
                        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px', fontWeight: '500' }}>
                            Accessing world-class sports mentorship in India has historically been fragmented. CHALOO bridges this gap by creating a unified network where talent meets expertise.
                        </p>
                        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: '500' }}>
                            We provide a secure, tech-enabled environment where athletes can focus on their performance while we handle the professional connections.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.4)', position: 'relative' }}
                    >
                        <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80" alt="Sports Dream" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(2, 6, 23, 0.8) 0%, transparent 60%)' }} />
                    </motion.div>
                </div>

                {/* Values / Features Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                    {[
                        { icon: Trophy, title: 'Expert Coaches', desc: 'Direct access to verified sports mentors and top-tier performance analysts.', color: '#00D2FF' },
                        { icon: Rocket, title: 'All Sports', desc: 'A multi-disciplinary platform covering everything from Cricket to Combat Sports.', color: '#EF4444' },
                        { icon: Globe, title: 'Verified Network', desc: 'Rigorous academy verification protocols to ensure trust and safety across the ecosystem.', color: '#FACC15' },
                        { icon: Users, title: 'High Intent', desc: 'A pay-to-connect model designed to facilitate serious and high-quality athletic interactions.', color: '#10B981' }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                                padding: '48px 40px',
                                background: 'rgba(255,255,255,0.015)',
                                borderRadius: '40px',
                                border: '1px solid var(--border-glass)',
                                transition: 'all 0.4s ease',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            className="about-card"
                        >
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '20px',
                                background: `${item.color}15`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: item.color,
                                marginBottom: '32px',
                                border: `1px solid ${item.color}30`
                            }}>
                                <item.icon size={28} />
                            </div>
                            <h3 style={{ fontSize: '1.6rem', fontWeight: '950', marginBottom: '16px', color: 'white', letterSpacing: '-0.02em' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1rem', fontWeight: '500' }}>{item.desc}</p>

                            <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', gap: '8px', color: item.color, fontSize: '0.75rem', fontWeight: '900', letterSpacing: '0.05em' }}>
                                <ShieldCheck size={16} /> ENTERPRISE CORE
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Custom Hover Effects */}
            <style>{`
                .about-card:hover {
                    background: rgba(255, 255, 255, 0.03) !important;
                    transform: translateY(-10px);
                    border-color: rgba(255, 255, 255, 0.12) !important;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.3);
                }
            `}</style>
        </div>
    );
};

const Rocket = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.71-2.13.09-2.91a2.18 2.18 0 0 0-3.09-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3" />
        <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5" />
    </svg>
);

export default AboutPage;
