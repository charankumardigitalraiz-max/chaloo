import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ShieldCheck, Zap, ArrowLeft, Camera, Shield, Search, MessageSquare, Gamepad, Lock, Star, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GlassCard = ({ icon: Icon, title, children, delay = 0, accent = 'var(--neon-pink)' }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '32px',
            padding: '35px',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
        }}
    >
        <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '18px',
            background: `linear-gradient(135deg, ${accent}, #ff007f)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            boxShadow: `0 10px 20px ${accent}33`
        }}>
            <Icon size={26} />
        </div>
        <h3 style={{ fontSize: '1.4rem', fontWeight: '900', color: 'var(--dark-text)', letterSpacing: '-0.02em' }}>{title}</h3>
        <div style={{ color: 'var(--light-text)', lineHeight: 1.7, fontSize: '1rem', fontWeight: '500' }}>
            {children}
        </div>
    </motion.div>
);

const BuddyZonePage = () => {
    const navigate = useNavigate();
    const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }) };

    return (
        <div style={{ minHeight: '100vh', background: 'var(--soft-bg)', paddingBottom: '100px', position: 'relative', overflow: 'hidden' }}>
            {/* Background Decorative Elements */}
            <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(255,0,127,0.05) 0%, transparent 70%)', zIndex: 0 }} />

            <div style={{ position: 'relative', height: '480px', overflow: 'hidden', marginBottom: '60px' }}>
                <img src="/date.png" alt="Buddy Zone" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15,23,42,0.6) 0%, transparent 40%, var(--soft-bg) 100%)' }} />

                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8% 60px', zIndex: 2 }}>
                    <motion.button
                        onClick={() => navigate('/')}
                        whileHover={{ x: -10 }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            background: 'white',
                            border: 'none',
                            color: 'var(--dark-text)',
                            fontWeight: '800',
                            fontSize: '0.95rem',
                            cursor: 'pointer',
                            marginBottom: '32px',
                            padding: '12px 24px',
                            borderRadius: '50px',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                            width: 'fit-content'
                        }}
                    >
                        <ArrowLeft size={20} /> Back to Experience
                    </motion.button>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: 'white',
                            border: '1px solid rgba(255,0,127,0.3)',
                            padding: '8px 20px',
                            borderRadius: '50px',
                            color: 'var(--neon-pink)',
                            fontWeight: '900',
                            fontSize: '0.85rem',
                            marginBottom: '20px',
                            width: 'fit-content',
                            boxShadow: '0 8px 20px rgba(255,0,127,0.1)',
                            letterSpacing: '0.05em'
                        }}
                    >
                        <Heart size={16} fill="var(--neon-pink)" /> BUDDY ZONE
                    </motion.div>

                    <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 4.5rem)', fontWeight: '950', lineHeight: 1, letterSpacing: '-0.04em', color: 'var(--dark-text)', marginBottom: '16px' }}>
                        Intentional Connection for <span style={{ color: 'var(--neon-pink)' }}>Modern Hearts</span>
                    </h1>
                    <p style={{ color: 'var(--light-text)', fontSize: '1.2rem', maxWidth: '650px', lineHeight: 1.6, fontWeight: '500' }}>
                        An intentional, safe space for romantic connections. Every profile is verified. Every interaction is meant to be meaningful and respectful.
                    </p>
                </div>
            </div>

            <div style={{ padding: '0 8%', maxWidth: '1300px', marginInline: 'auto', position: 'relative', zIndex: 1 }}>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '24px', marginBottom: '80px' }}>
                    <GlassCard icon={Heart} title="Romantic Connections" delay={0.1}>
                        <p>A dedicated space for people seeking meaningful relationships — not just a swipe. We believe in quality over quantity and genuine attraction.</p>
                    </GlassCard>
                    <GlassCard icon={ShieldCheck} title="Verified & Safe" delay={0.2}>
                        <p>Every profile is verified. Advanced safety tools let you block, report, and stay in full control of your experience at all times.</p>
                    </GlassCard>
                    <GlassCard icon={Lock} title="No-Ghosting Policy" delay={0.3}>
                        <p>We believe every person deserves respect. Our built-in accountability ensures interactions stay dignified, real, and sincere.</p>
                    </GlassCard>
                </div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} style={{ marginBottom: '100px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h2 style={{ fontSize: '2.8rem', fontWeight: '950', marginBottom: '16px', color: 'var(--dark-text)' }}>Zone <span style={{ color: 'var(--neon-pink)' }}>Features</span></h2>
                        <p style={{ color: 'var(--light-text)', fontSize: '1.1rem', maxWidth: '600px', marginInline: 'auto' }}>Elevating your connection experience with thoughtful features.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                        {[
                            { icon: <ShieldCheck size={22} />, title: 'Safety Toolkit', desc: 'Profile verification, instant reporting, and a team that takes safety seriously.' },
                            { icon: <Zap size={22} />, title: 'Icebreaker Games', desc: 'Fun mini-games designed to spark meaningful conversations from the start.' },
                            { icon: <Heart size={22} />, title: 'No-Ghosting', desc: 'Built-in accountability so both people feel respected and valued.' },
                            { icon: <Gift size={22} />, title: 'Virtual Gifts', desc: 'Send thoughtful digital gifts to express how you feel in a unique way.' },
                            { icon: <Star size={22} />, title: 'Smart Matching', desc: 'AI-powered matches based on personality, values, and relationship goals.' },
                            { icon: <MessageSquare size={22} />, title: 'Private Messaging', desc: 'Secure, private chats visible only to you and your match.' },
                        ].map((f, i) => (
                            <motion.div key={i} custom={i} variants={fadeUp}
                                style={{
                                    display: 'flex',
                                    gap: '16px',
                                    background: 'white',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    borderRadius: '24px',
                                    padding: '24px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
                                }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '14px',
                                    background: 'rgba(255,0,127,0.08)',
                                    color: 'var(--neon-pink)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>{f.icon}</div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: '900', marginBottom: '6px', color: 'var(--dark-text)' }}>{f.title}</h4>
                                    <p style={{ color: 'var(--light-text)', fontSize: '0.9rem', lineHeight: 1.5 }}>{f.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div style={{ padding: '80px 40px', background: 'white', borderRadius: '40px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 20px 50px rgba(0,0,0,0.04)', marginBottom: '80px' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '950', marginBottom: '50px', color: 'var(--dark-text)', textAlign: 'center' }}>How It <span style={{ color: 'var(--neon-pink)' }}>Works</span></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
                        {[
                            { step: '01', title: 'Complete Profile', desc: 'Add verified photos and your sincere relationship goals.' },
                            { step: '02', title: 'Enter Buddy Zone', desc: 'Switch to the dedicated space for intentional connection.' },
                            { step: '03', title: 'Smart Match', desc: 'Receive curated suggestions based on deep compatibility.' },
                            { step: '04', title: 'Connect Sincerely', desc: 'Start a conversation that actually goes somewhere.' },
                        ].map((s, i) => (
                            <motion.div key={i} custom={i} variants={fadeUp}>
                                <div style={{ fontSize: '3rem', fontWeight: '950', color: 'rgba(255,0,127,0.1)', lineHeight: 1, marginBottom: '16px' }}>{s.step}</div>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: '900', marginBottom: '10px', color: 'var(--dark-text)' }}>{s.title}</h4>
                                <p style={{ color: 'var(--light-text)', fontSize: '0.95rem', lineHeight: 1.6 }}>{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: 'center',
                        padding: '80px 40px',
                        background: 'linear-gradient(135deg, var(--neon-pink), var(--vivid-orange))',
                        borderRadius: '40px',
                        color: 'white',
                        boxShadow: '0 30px 60px rgba(255,0,127,0.2)',
                    }}
                >
                    <Heart size={64} color="white" fill="white" style={{ marginBottom: '24px', opacity: 0.9 }} />
                    <h2 style={{ fontSize: '3rem', fontWeight: '950', marginBottom: '16px' }}>Find Your Person</h2>
                    <p style={{ opacity: 0.9, marginBottom: '40px', fontSize: '1.2rem', maxWidth: '600px', marginInline: 'auto' }}>Join the community of intentional hearts today.</p>
                    <button className="btn-primary" style={{ background: 'white', color: 'var(--dark-text)', padding: '18px 50px', fontSize: '1.1rem', borderRadius: '18px' }}>Download the App</button>
                </motion.div>
            </div>
        </div>
    );
};

export default BuddyZonePage;
