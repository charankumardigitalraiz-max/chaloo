import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, School, Zap, Shield, Star, CheckCircle2 } from 'lucide-react';

const sportsFeatures = [
    {
        icon: <Trophy size={22} />,
        title: "Verified Coaches",
        desc: "High-performance mentorship from certified professional coaches across all major sporting disciplines.",
        accent: "var(--chalo-blue)"
    },
    {
        icon: <School size={22} />,
        title: "Academy Directory",
        desc: "Surgical precision in finding the right academy based on facilities, location, and proven track records.",
        accent: "var(--chalo-emerald)"
    },
    {
        icon: <Zap size={22} />,
        title: "All Sports Coverage",
        desc: "From mainstream athletics to niche strategic games — CHALOO bridges the gap for every sports lover.",
        accent: "var(--chalo-gold)"
    },
    {
        icon: <Shield size={22} />,
        title: "Secure Ecosystem",
        desc: "A proprietary verification system that ensures absolute safety and transparency for the entire community.",
        accent: "#F43F5E" // Rose for security contrast
    }
];

const Features = () => {
    return (
        <section id="features" style={{
            padding: '90px 6%',
            background: 'var(--chalo-navy)',
            position: 'relative',
            overflow: 'hidden',
            borderTop: '1px solid var(--border-glass)'
        }}>
            {/* Background cinematic glows */}
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0, 210, 255, 0.05) 0%, transparent 70%)', zIndex: 0 }} />

            <div style={{ maxWidth: '1400px', marginInline: 'auto', position: 'relative', zIndex: 1 }}>
                <div style={{ marginBottom: '80px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'var(--chalo-blue)',
                            background: 'rgba(0, 210, 255, 0.1)',
                            padding: '8px 24px',
                            borderRadius: '100px',
                            fontWeight: '950',
                            fontSize: '0.75rem',
                            marginBottom: '24px',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase'
                        }}
                    >
                        <Star size={14} fill="var(--chalo-blue)" /> WHY CHOOSE CHALOO
                    </motion.div>

                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '950',
                        color: 'white',
                        marginBottom: '20px',
                        letterSpacing: '-0.04em',
                        lineHeight: 1
                    }}>
                        Platform <span className="text-gradient">Innovations.</span>
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '600px',
                        lineHeight: 1.6,
                        fontWeight: '500'
                    }}>
                        Engineered to provide a seamless, secure, and world-class sports connection experience for India's growing athletic community.
                    </p>
                </div>

                <div className="features-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '24px'
                }}>
                    {sportsFeatures.map((f, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.7 }}
                            className="feature-card"
                            style={{
                                padding: '40px 32px',
                                borderRadius: '32px',
                                background: 'rgba(255, 255, 255, 0.015)',
                                border: '1px solid var(--border-glass)',
                                transition: 'all 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
                                position: 'relative',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            whileHover={{
                                y: -10,
                                background: 'rgba(255, 255, 255, 0.03)',
                                borderColor: 'rgba(255, 255, 255, 0.12)',
                                boxShadow: '0 30px 60px rgba(0,0,0,0.3)'
                            }}
                        >
                            {/* Accent Glow on Hover */}
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: f.accent, opacity: 0.3 }} />

                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '18px',
                                background: 'rgba(255,255,255,0.03)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: f.accent,
                                marginBottom: '28px',
                                border: '1px solid rgba(255,255,255,0.06)'
                            }}>
                                {f.icon}
                            </div>

                            <h3 style={{ fontSize: '1.4rem', fontWeight: '950', color: 'white', marginBottom: '12px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>{f.title}</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: '500' }}>{f.desc}</p>

                            <div style={{ marginTop: 'auto', paddingTop: '24px', display: 'flex', alignItems: 'center', gap: '8px', color: f.accent, fontSize: '0.75rem', fontWeight: '900', letterSpacing: '0.05em' }}>
                                <CheckCircle2 size={16} /> ENTERPRISE READY
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (min-width: 1200px) {
                    .features-grid {
                        grid-template-columns: repeat(4, 1fr) !important;
                    }
                }
                @media (max-width: 1199px) and (min-width: 768px) {
                    .features-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Features;

