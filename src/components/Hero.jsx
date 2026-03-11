import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ArrowRight, Play, Sparkles, Shield, Target, Activity, Globe, CheckCircle, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section style={{
            minHeight: '90vh',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            padding: '0',
            background: '#020617',
            paddingTop: "40px"
        }}>
            {/* Cinematic Background Image (Basketball Focus) */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <img
                    src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80"
                    alt="Sports Excellence"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
                />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to right, rgba(2,6,23,0.95) 10%, rgba(2,6,23,0.3) 100%)'
                }} />
            </div>

            <div style={{
                maxWidth: '1300px',
                width: '100%',
                margin: '0 auto',
                position: 'relative',
                zIndex: 1,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '60px',
                alignItems: 'center',
                padding: '40px clamp(1.2rem, 6vw, 8%) 0'
            }}>
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        background: 'rgba(59,130,246,0.1)',
                        backdropFilter: 'blur(10px)',
                        padding: '8px 20px',
                        borderRadius: '50px',
                        color: 'var(--chalo-blue)',
                        fontWeight: '800',
                        fontSize: '0.85rem',
                        marginBottom: '28px',
                        border: '1px solid rgba(59,130,246,0.15)',
                        letterSpacing: '0.05em'
                    }}>
                        <Shield size={16} /> INDIA'S SPORTS PLATFORM
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
                        fontWeight: '950',
                        lineHeight: 1.05,
                        color: 'white',
                        marginBottom: '28px',
                        letterSpacing: '-0.04em'
                    }}>
                        Ready to <span style={{ color: 'var(--chalo-blue)' }}>Excel</span> <br /> in Sports?
                    </h1>

                    <p style={{
                        fontSize: '1.15rem',
                        color: 'rgba(255,255,255,0.65)',
                        lineHeight: 1.5,
                        marginBottom: '40px',
                        maxWidth: '550px',
                        fontWeight: '500'
                    }}>
                        Experience CHALOO — India's dedicated sports platform connecting <span style={{ color: 'white', fontWeight: '800' }}>Players, Coaches & Academies</span> in a secure, verified ecosystem.
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '56px' }}>
                        <button
                            className="btn-primary"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                background: 'var(--chalo-blue)',
                                color: 'white',
                                padding: '16px 36px',
                                borderRadius: '18px',
                                fontWeight: '900',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                boxShadow: '0 15px 30px rgba(59,130,246,0.25)'
                            }}
                            onClick={() => navigate('/explore')}
                        >
                            Explore Platform <ArrowRight size={18} />
                        </button>
                        <button
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(10px)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '16px 36px',
                                borderRadius: '18px',
                                color: 'white',
                                fontWeight: '900',
                                cursor: 'pointer',
                                fontSize: '1rem'
                            }}
                            onClick={() => {
                                const el = document.getElementById('features');
                                el?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            How It Works
                        </button>
                    </div>

                    {/* Refined Minimal Stats Row */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'clamp(20px, 4vw, 48px)',
                        marginTop: '12px',
                        flexWrap: 'wrap'
                    }}>
                        {[
                            { label: 'SPORTS', value: '50+' },
                            { label: 'COACHES', value: '1,000+' },
                            { label: 'ACADEMIES', value: '500+' }
                        ].map((stat, i) => (
                            <React.Fragment key={i}>
                                <div>
                                    <div style={{ fontSize: '1.6rem', fontWeight: '950', color: 'white', letterSpacing: '-0.02em', lineHeight: 1 }}>{stat.value}</div>
                                    <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', fontWeight: '800', letterSpacing: '0.1em', marginTop: '6px', textTransform: 'uppercase' }}>{stat.label}</div>
                                </div>
                                {i < 2 && (
                                    <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.15)' }} />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </motion.div>

                {/* Floating Verification Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{ perspective: '1000px', display: 'flex', justifyContent: 'center', position: 'relative' }}
                    className="hero-float-card"
                >
                    <div style={{
                        width: '340px',
                        background: 'rgba(255,255,255,0.03)',
                        backdropFilter: 'blur(50px)',
                        borderRadius: '32px',
                        padding: '40px',
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
                        textAlign: 'center'
                    }}>
                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(59,130,246,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px', border: '1px solid rgba(59,130,246,0.2)' }}>
                            <Shield size={40} color="var(--chalo-blue)" />
                        </div>

                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(16,185,129,0.1)', color: 'var(--chalo-emerald)', padding: '8px 20px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '950', marginBottom: '24px' }}>
                            <CheckCircle size={14} /> 100% VERIFIED
                        </div>

                        <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '950', marginBottom: '16px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>Identity & Skill Verification</h3>

                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', fontWeight: '500', lineHeight: 1.6, marginBottom: '24px' }}>
                            All players, coaches, and academies undergo mandatory background checks before joining our elite network.
                        </p>

                        <div style={{
                            background: 'rgba(255,255,255,0.03)',
                            padding: '16px',
                            borderRadius: '16px',
                            border: '1px solid rgba(255,255,255,0.05)',
                            fontSize: '0.9rem',
                            color: 'white',
                            fontWeight: '800',
                            letterSpacing: '0.02em'
                        }}>
                            Secure Sports Experience
                        </div>
                    </div>
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .hero-float-card { display: none !important; }
                    section { padding-top: 40px !important; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
