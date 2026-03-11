import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, School, Zap, Shield, Target, Activity, Star, Users } from 'lucide-react';

const sportsFeatures = [
    {
        icon: <Trophy size={24} />,
        title: "Verified Coaches",
        desc: "Browse certified, experienced sports mentors. Review their profile, sports speciality, and fee before connecting.",
        color: "var(--chalo-blue)"
    },
    {
        icon: <School size={24} />,
        title: "Academy Directory",
        desc: "Search top sports academies near you. View facilities, available spots, training programs, and connect instantly.",
        color: "var(--chalo-emerald)"
    },
    {
        icon: <Zap size={24} />,
        title: "All Sports Covered",
        desc: "Cricket, Badminton, Football, Chess, Athletics and more — CHALOO covers every major sport across India.",
        color: "var(--chalo-gold)"
    },
    {
        icon: <Shield size={24} />,
        title: "Pay-to-Connect",
        desc: "When a player and coach agree to connect, both pay a small fee. Only then are contact numbers shared — 100% secure.",
        color: "var(--chalo-navy)"
    }
];

const Features = () => {
    return (
        <section id="features" style={{
            padding: '72px 8%',
            background: 'white',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{ maxWidth: '1400px', marginInline: 'auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: 'var(--chalo-blue)',
                            background: 'rgba(59,130,246,0.05)',
                            padding: '10px 24px',
                            borderRadius: '50px',
                            fontWeight: '800',
                            fontSize: '0.9rem',
                            marginBottom: '24px'
                        }}
                    >
                        <Star size={16} fill="var(--chalo-blue)" color="var(--chalo-blue)" /> KEY FEATURES
                    </motion.div>
                    <h2 style={{
                        fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
                        fontWeight: '950',
                        color: 'var(--chalo-navy)',
                        marginBottom: '20px',
                        letterSpacing: '-0.03em'
                    }}>
                        What CHALOO <span style={{ color: 'var(--chalo-blue)' }}>Provides.</span>
                    </h2>
                    <p style={{
                        fontSize: '1.05rem',
                        color: 'var(--chalo-slate)',
                        maxWidth: '700px',
                        marginInline: 'auto',
                        lineHeight: 1.6
                    }}>
                        CHALOO is a platform for connecting players, coaches, and academies in a secure, trusted sports ecosystem.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '40px'
                }}>
                    {sportsFeatures.map((f, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            style={{
                                padding: '32px',
                                borderRadius: '32px',
                                background: 'var(--chalo-bg)',
                                border: '1px solid rgba(0,0,0,0.03)',
                                transition: 'all 0.3s ease'
                            }}
                            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.04)', background: 'white', borderColor: f.color + '33' }}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '18px',
                                background: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: f.color,
                                marginBottom: '24px',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.03)'
                            }}>
                                {React.cloneElement(f.icon, { size: 20 })}
                            </div>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: '900', color: 'var(--chalo-navy)', marginBottom: '12px', letterSpacing: '-0.02em' }}>{f.title}</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--chalo-slate)', lineHeight: 1.5, opacity: 0.9 }}>{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background elements */}
            <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, var(--chalo-blue)05 0%, transparent 70%)' }} />
            <div style={{ position: 'absolute', bottom: '10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, var(--chalo-emerald)05 0%, transparent 70%)' }} />
        </section>
    );
};

export default Features;

