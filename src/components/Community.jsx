import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Globe, Target, Rocket, Users, ShieldCheck } from 'lucide-react';

const Community = () => {
    return (
        <section id="mission" style={{
            background: 'var(--chalo-navy)',
            color: 'white',
            borderRadius: '48px',
            margin: '0 4% 60px',
            padding: '50px 8%',
            overflow: 'hidden',
            position: 'relative',
            border: '1px solid var(--border-glass)'
        }}>
            {/* Cinematic Background Glows */}
            <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0, 210, 255, 0.08) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0 }} />
            <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(234, 179, 8, 0.05) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0 }} />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'center', position: 'relative', zIndex: 1 }}>

                {/* Left — Mission & Vision */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        color: 'var(--chalo-blue)',
                        background: 'rgba(0, 210, 255, 0.1)',
                        padding: '10px 24px',
                        borderRadius: '100px',
                        fontWeight: '900',
                        fontSize: '0.75rem',
                        marginBottom: '32px',
                        border: '1px solid rgba(0, 210, 255, 0.2)',
                        letterSpacing: '0.1em'
                    }}>
                        <Globe size={14} /> OUR MISSION
                    </div>

                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '950', lineHeight: 0.95, marginBottom: '24px', letterSpacing: '-0.05em' }}>
                        The Dream is Yours, <br />
                        <span className="text-gradient">The Path is Ours.</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '48px', lineHeight: 1.6, maxWidth: '520px', fontWeight: '500' }}>
                        CHALOO is more than a platform; it's a movement to professionalize sports recruitment and mentorship across India.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                        {[
                            { title: "National Sports Ecosystem", desc: "Access the most comprehensive network of verified sports professionals across 28 states.", icon: <Globe size={20} /> },
                            { title: "Transparency First", desc: "A pay-to-connect model that ensures every interaction is serious and secured.", icon: <ShieldCheck size={20} /> }
                        ].map((item, id) => (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: id * 0.2 }}
                                style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}
                            >
                                <div style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    padding: '14px',
                                    borderRadius: '18px',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                    flexShrink: 0,
                                    color: 'var(--chalo-blue)'
                                }}>{item.icon}</div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: '950', color: 'white', marginBottom: '6px' }}>{item.title}</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5, fontWeight: '500' }}>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right — Impact Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    style={{
                        padding: '60px',
                        borderRadius: '40px',
                        textAlign: 'center',
                        background: 'rgba(255,255,255,0.01)',
                        border: '1px solid var(--border-glass)',
                        backdropFilter: 'blur(30px)',
                        boxShadow: '0 50px 100px rgba(0,0,0,0.5)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(45deg, rgba(0, 210, 255, 0.05) 0%, transparent 100%)', zIndex: -1 }} />

                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ color: 'var(--chalo-blue)', marginBottom: '32px', display: 'flex', justifyContent: 'center' }}
                    >
                        <div style={{ width: '88px', height: '88px', borderRadius: '24px', background: 'rgba(0, 210, 255, 0.1)', border: '1px solid rgba(0, 210, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Activity size={44} strokeWidth={1.5} color="var(--chalo-blue)" />
                        </div>
                    </motion.div>

                    <h3 style={{ fontSize: '2.8rem', marginBottom: '16px', fontWeight: '950', letterSpacing: '-0.04em', color: 'white' }}>1M+ Talents</h3>
                    <p style={{ marginBottom: '48px', color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '340px', marginInline: 'auto', lineHeight: 1.6, fontWeight: '500' }}>
                        Building the world's most vibrant community of future champions and elite sport mentors.
                    </p>

                    <button
                        className="btn-primary"
                        onClick={() => {
                            const el = document.getElementById('zones');
                            el?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        style={{ width: '100%', justifyContent: 'center' }}
                    >
                        Explore Platform
                    </button>

                    <div style={{
                        marginTop: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        color: 'var(--chalo-blue)',
                        fontSize: '0.8rem',
                        fontWeight: '900',
                        letterSpacing: '0.05em'
                    }}>
                        <Users size={16} /> UNIFIED SPORTS NETWORK
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Community;
