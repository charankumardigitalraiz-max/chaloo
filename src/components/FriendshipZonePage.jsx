import React from 'react';
import { motion } from 'framer-motion';
import { Users, UserPlus, MessageCircle, ShieldCheck, ArrowLeft, Zap, Smartphone, Search, Heart, Sparkles, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GlassCard = ({ icon: Icon, title, children, delay = 0, accent = 'var(--bright-cyan)' }) => (
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
            background: `linear-gradient(135deg, ${accent}, #00d2ff)`,
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

const FriendshipZonePage = () => {
    const navigate = useNavigate();
    const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }) };

    return (
        <div style={{ minHeight: '100vh', background: 'var(--soft-bg)', paddingBottom: '100px', position: 'relative', overflow: 'hidden' }}>
            {/* Background Decorative Elements */}
            <div style={{ position: 'absolute', top: '15%', left: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(0,242,255,0.04) 0%, transparent 70%)', zIndex: 0 }} />
            <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(112,0,255,0.03) 0%, transparent 70%)', zIndex: 0 }} />

            {/* Hero Section */}
            <div style={{ position: 'relative', height: '480px', overflow: 'hidden', marginBottom: '60px' }}>
                <img src="/friendship_1.png" alt="Friendship Zone" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)' }} />
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
                            border: '1px solid rgba(0,242,255,0.3)',
                            padding: '8px 20px',
                            borderRadius: '50px',
                            color: 'var(--bright-cyan)',
                            fontWeight: '900',
                            fontSize: '0.85rem',
                            marginBottom: '20px',
                            width: 'fit-content',
                            boxShadow: '0 8px 20px rgba(0,242,255,0.1)',
                            letterSpacing: '0.05em'
                        }}
                    >
                        <Users size={16} /> FRIENDSHIP ZONE
                    </motion.div>

                    <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 4.5rem)', fontWeight: '950', lineHeight: 1, letterSpacing: '-0.04em', color: 'var(--dark-text)', marginBottom: '16px' }}>
                        New Perspectives, <span style={{ color: 'var(--bright-cyan)' }}>Real Connections</span>
                    </h1>
                    <p style={{ color: 'var(--light-text)', fontSize: '1.2rem', maxWidth: '650px', lineHeight: 1.6, fontWeight: '500' }}>
                        Connect with people from all walks of life. No labels, no pressure — just meaningful conversations and the chance to make life-long friends.
                    </p>
                </div>
            </div>

            <div style={{ padding: '0 8%', maxWidth: '1300px', marginInline: 'auto', position: 'relative', zIndex: 1 }}>

                {/* About Cards Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '24px', marginBottom: '80px' }}>
                    <GlassCard icon={UserPlus} title="Genuine Friendships" delay={0.1}>
                        <p>A safe harbor for people who value authenticity. Find companions who share your interests, energy, and values in a dedicated space.</p>
                    </GlassCard>
                    <GlassCard icon={ShieldCheck} title="Verified Profiles" delay={0.2}>
                        <p>Advanced AI verification keeps our community genuine. Interact with real people, always. We prioritize your safety and authenticity.</p>
                    </GlassCard>
                    <GlassCard icon={MessageCircle} title="Deep Conversations" delay={0.3}>
                        <p>Skip the small talk. Our icebreakers and prompt-based profiles help you dive into what really matters from the first message.</p>
                    </GlassCard>
                </div>

                {/* Features Section */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} style={{ marginBottom: '100px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h2 style={{ fontSize: '2.8rem', fontWeight: '950', marginBottom: '16px', color: 'var(--dark-text)' }}>Zone <span style={{ color: 'var(--bright-cyan)' }}>Features</span></h2>
                        <p style={{ color: 'var(--light-text)', fontSize: '1.1rem', maxWidth: '600px', marginInline: 'auto' }}>Tools designed to make connecting easier and more meaningful.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                        {[
                            { icon: <Zap size={22} />, title: 'Smart Connect', desc: 'Matches you based on deep-level compatibility and shared values.' },
                            { icon: <Smartphone size={22} />, title: 'Smooth UI', desc: 'Optimized for mobile-first interaction with tactile, haptic feedback.' },
                            { icon: <Search size={22} />, title: 'Interest Tags', desc: 'Search for friends using specific tags like "Gaming", "Philosophy", or "Travel".' },
                            { icon: <Heart size={22} />, title: 'Safety First', desc: '24/7 moderation and instant report tools for your peace of mind.' },
                        ].map((f, i) => (
                            <motion.div key={i} custom={i} variants={fadeUp}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '16px',
                                    background: 'white',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    borderRadius: '24px',
                                    padding: '32px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
                                }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '14px',
                                    background: 'rgba(0,242,255,0.08)',
                                    color: 'var(--bright-cyan)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '8px'
                                }}>{f.icon}</div>
                                <div>
                                    <h4 style={{ fontSize: '1.15rem', fontWeight: '900', marginBottom: '8px', color: 'var(--dark-text)' }}>{f.title}</h4>
                                    <p style={{ color: 'var(--light-text)', fontSize: '0.95rem', lineHeight: 1.6 }}>{f.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* How it Works - Timeline Style */}
                <div style={{ padding: '80px 40px', background: 'white', borderRadius: '40px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 20px 50px rgba(0,0,0,0.04)', marginBottom: '100px' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '950', marginBottom: '50px', color: 'var(--dark-text)', textAlign: 'center' }}>How it <span style={{ color: 'var(--bright-cyan)' }}>Works</span></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
                        {[
                            { step: '01', title: 'Switch to Friendship Zone', desc: 'Simply toggle the zone from your home screen to enter the friendship playground.' },
                            { step: '02', title: 'Complete your Vibe Profile', desc: 'Tell us about your interests, your music taste, and what makes you, you.' },
                            { step: '03', title: 'Discover Friends', desc: 'Our smart algorithm shows you profiles that align with your personality and energy.' },
                            { step: '04', title: 'Start a Chat', desc: 'Use our contextual "Icebreakers" to start a conversation that actually goes somewhere.' },
                        ].map((s, i) => (
                            <motion.div key={i} custom={i} variants={fadeUp} style={{ position: 'relative' }}>
                                <div style={{ fontSize: '3.5rem', fontWeight: '950', color: 'rgba(0,242,255,0.1)', lineHeight: 1, marginBottom: '20px' }}>{s.step}</div>
                                <h4 style={{ fontSize: '1.25rem', fontWeight: '900', marginBottom: '12px', color: 'var(--dark-text)' }}>{s.title}</h4>
                                <p style={{ color: 'var(--light-text)', fontSize: '1rem', lineHeight: 1.65 }}>{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: 'center',
                        padding: '80px 40px',
                        background: 'var(--gradient-neon)',
                        borderRadius: '40px',
                        color: 'white',
                        boxShadow: '0 30px 60px rgba(0,242,255,0.2)',
                        overflow: 'hidden',
                        position: 'relative'
                    }}
                >
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)', transform: 'translateX(-100%)', animation: 'shimmer 3s infinite' }} />
                    <Users size={64} color="white" style={{ marginBottom: '24px', opacity: 0.9 }} />
                    <h2 style={{ fontSize: '3rem', fontWeight: '950', marginBottom: '16px', letterSpacing: '-0.02em' }}>Ready to Meet Your Next Friend?</h2>
                    <p style={{ opacity: 0.9, marginBottom: '40px', fontSize: '1.2rem', maxWidth: '600px', marginInline: 'auto', fontWeight: '500' }}>Download Little Hearts and join the most vibrant community of genuine people.</p>
                    <button className="btn-primary" style={{ background: 'white', color: 'var(--dark-text)', padding: '18px 50px', fontSize: '1.1rem', borderRadius: '18px', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}>Download the App</button>

                    <style>{`
                        @keyframes shimmer {
                            0% { transform: translateX(-100%) skewX(-15deg); }
                            100% { transform: translateX(200%) skewX(-15deg); }
                        }
                    `}</style>
                </motion.div>
            </div>
        </div>
    );
};

export default FriendshipZonePage;
