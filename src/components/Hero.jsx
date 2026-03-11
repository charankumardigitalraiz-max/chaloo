import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ArrowRight, Play, Sparkles, Shield, Target, Activity, Globe, CheckCircle, Star, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section style={{
            minHeight: '100vh',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            padding: '0',
            background: 'var(--chalo-navy)',
        }}>
            {/* Cinematic Background with Multi-layer Gradient */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <img
                    src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=2000"
                    alt="Sports Excellence"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}
                />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at 20% 50%, rgba(2, 11, 25, 0.95) 0%, rgba(2, 11, 25, 0.4) 100%)'
                }} />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, var(--chalo-navy) 0%, transparent 40%)'
                }} />
            </div>

            <div
                className="hero-content"
                style={{
                    maxWidth: '1400px',
                    width: '100%',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 1,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '80px',
                    alignItems: 'center',
                    padding: '120px 6% 60px'
                }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '12px',
                            background: 'rgba(0, 210, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            padding: '10px 24px',
                            borderRadius: '100px',
                            color: 'var(--chalo-blue)',
                            fontWeight: '900',
                            fontSize: '0.8rem',
                            marginBottom: '32px',
                            border: '1px solid rgba(0, 210, 255, 0.2)',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase'
                        }}
                    >
                        <Zap size={14} fill="var(--chalo-blue)" /> INDIA'S SPORTS DESTINATION
                    </motion.div>

                    <h1 style={{
                        fontSize: 'clamp(3rem, 7vw, 5rem)',
                        fontWeight: '950',
                        lineHeight: 0.95,
                        color: 'white',
                        marginBottom: '32px',
                        letterSpacing: '-0.05em'
                    }}>
                        UNLEASH YOUR <br />
                        <span className="text-gradient">SPORTS GENIUS.</span>
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        marginBottom: '48px',
                        maxWidth: '600px',
                        fontWeight: '500'
                    }}>
                        Connecting <span style={{ color: 'white', fontWeight: '850' }}>Players, Coaches & Academies</span> in a verified elite ecosystem designed for the next generation of Indian athletes.
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '64px' }}>
                        <button
                            className="btn-primary"
                            onClick={() => navigate('/explore')}
                        >
                            Explore Platform <ArrowRight size={20} />
                        </button>
                        <button
                            className="btn-secondary"
                            onClick={() => {
                                const el = document.getElementById('features');
                                el?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            View Features
                        </button>
                    </div>

                    {/* Stats Row with better structure */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'min(40px, 5vw)',
                        flexWrap: 'wrap',
                    }}>
                        {[
                            { label: 'SPORTS', value: '50+' },
                            { label: 'COACHES', value: '1K+' },
                            { label: 'ACADEMIES', value: '500+' }
                        ].map((stat, i) => (
                            <div key={i} style={{ position: 'relative' }}>
                                <div style={{ fontSize: '2rem', fontWeight: '950', color: 'white', letterSpacing: '-0.04em', lineHeight: 1 }}>{stat.value}</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '800', letterSpacing: '0.1em', marginTop: '8px', textTransform: 'uppercase' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Refined Floating Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "circOut" }}
                    style={{ perspective: '2000px', display: 'flex', justifyContent: 'center' }}
                    className="hero-anim-container"
                >
                    <div style={{
                        width: '380px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        backdropFilter: 'blur(30px)',
                        borderRadius: '40px',
                        padding: '48px',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        boxShadow: '0 50px 100px rgba(0,0,0,0.6)',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Inner Gradient Glow */}
                        <div style={{ position: 'absolute', top: '-20%', left: '-20%', width: '140%', height: '140%', background: 'radial-gradient(circle at center, rgba(0, 210, 255, 0.05) 0%, transparent 60%)', zIndex: -1 }} />

                        <div style={{ width: '88px', height: '88px', borderRadius: '24px', background: 'rgba(0, 210, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px', border: '1px solid rgba(0, 210, 255, 0.15)' }}>
                            <Shield size={44} color="var(--chalo-blue)" />
                        </div>

                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', padding: '10px 24px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: '900', marginBottom: '32px', border: '1px solid rgba(16, 185, 129, 0.15)' }}>
                            <CheckCircle size={16} /> ELITE VERIFIED
                        </div>

                        <h3 style={{ color: 'white', fontSize: '1.75rem', fontWeight: '950', marginBottom: '20px', lineHeight: 1.15, letterSpacing: '-0.03em' }}>Pro-Grade <br />Sports Network</h3>

                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: '500', lineHeight: 1.6, marginBottom: '32px' }}>
                            Every professional profile is rigorously vetted to ensure the highest standards of sports mentorship and training.
                        </p>

                        <div style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            padding: '20px',
                            borderRadius: '20px',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                            fontSize: '0.95rem',
                            color: 'white',
                            fontWeight: '850',
                            letterSpacing: '0.01em',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px'
                        }}>
                            <Globe size={18} color="var(--chalo-blue)" /> Global Standards
                        </div>
                    </div>
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 1100px) {
                    .hero-anim-container { display: none !important; }
                    section { min-height: auto !important; padding-top: 20px !important; }
                    .hero-content { padding-top: 60px !important; padding-bottom: 40px !important; }
                }
                .text-gradient {
                    background: var(--grad-primary);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
            `}</style>
        </section>
    );
};

export default Hero;
