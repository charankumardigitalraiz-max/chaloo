import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Coffee, MapPin, Users, Zap, Star, ShieldCheck, Gift, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const pricingPlans = [
    {
        name: 'Free',
        price: '₹0',
        period: '/ month',
        color: 'rgba(255,255,255,0.7)',
        border: 'rgba(0,0,0,0.05)',
        badge: null,
        features: [
            'Access to Hangout Zone',
            '3 hangout requests per day',
            'Browse local events',
            'Basic profile customization',
            'Standard messaging'
        ],
        cta: 'Get Started Free',
        ctaStyle: { background: 'white', color: 'var(--dark-text)', border: '1px solid rgba(0,0,0,0.1)' }
    },
    {
        name: 'Hangout Plus',
        price: '₹149',
        period: '/ month',
        color: 'rgba(255,94,0,0.03)',
        border: 'var(--vivid-orange)',
        badge: 'MOST POPULAR',
        features: [
            'Unlimited hangout requests',
            'Priority event discovery',
            'Send 10 Virtual Gifts/month',
            'Premium profile frame',
            'See who viewed your profile',
            'No-ad experience'
        ],
        cta: 'Start Hangout Plus',
        ctaStyle: { background: 'var(--vivid-orange)', color: 'white' }
    },
    {
        name: 'Social Pro',
        price: '₹299',
        period: '/ month',
        color: 'rgba(112,0,255,0.03)',
        border: 'var(--deep-purple)',
        badge: 'BEST VALUE',
        features: [
            'Everything in Hangout Plus',
            'Unlimited Virtual Gifts',
            'Exclusive Pro profile badges',
            'Early access to new events',
            'Priority support',
            'Access all 3 zones with premium'
        ],
        cta: 'Go Social Pro',
        ctaStyle: { background: 'var(--deep-purple)', color: 'white' }
    }
];

const virtualGifts = [
    { emoji: '☕', name: 'Coffee Cheers', price: '₹9', desc: 'Send a virtual coffee to your buddy.' },
    { emoji: '🍕', name: 'Pizza Party', price: '₹15', desc: 'A fun gift for foodie partners.' },
    { emoji: '🎮', name: 'Game Night', price: '₹19', desc: 'Perfect for gaming plans.' },
    { emoji: '🎉', name: 'Party Popper', price: '₹25', desc: 'Celebrate a great hangout.' },
];

const GlassCard = ({ icon: Icon, title, children, delay = 0, accent = 'var(--vivid-orange)' }) => (
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
            background: `linear-gradient(135deg, ${accent}, #ff8c00)`,
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

const HangoutZonePage = () => {
    const navigate = useNavigate();
    const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }) };

    return (
        <div style={{ minHeight: '100vh', background: 'var(--soft-bg)', paddingBottom: '100px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '15%', left: '-5%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(255,94,0,0.04) 0%, transparent 70%)', zIndex: 0 }} />

            <div style={{ position: 'relative', height: '480px', overflow: 'hidden', marginBottom: '60px' }}>
                <img src="/hangout.png" alt="Hangout Zone" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)' }} />
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
                            border: '1px solid rgba(255,94,0,0.3)',
                            padding: '8px 20px',
                            borderRadius: '50px',
                            color: 'var(--vivid-orange)',
                            fontWeight: '900',
                            fontSize: '0.85rem',
                            marginBottom: '20px',
                            width: 'fit-content',
                            boxShadow: '0 8px 20px rgba(255,94,0,0.1)',
                        }}
                    >
                        <Coffee size={16} /> HANGOUT ZONE
                    </motion.div>

                    <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 4.5rem)', fontWeight: '950', lineHeight: 1, letterSpacing: '-0.04em', color: 'var(--dark-text)', marginBottom: '16px' }}>
                        Your City is Your <span style={{ color: 'var(--vivid-orange)' }}>Playground</span>
                    </h1>
                    <p style={{ color: 'var(--light-text)', fontSize: '1.2rem', maxWidth: '650px', lineHeight: 1.6, fontWeight: '500' }}>
                        Meet for coffee, explore local events, or plan spontaneous adventures. A casual, zero-pressure zone built for fun.
                    </p>
                </div>
            </div>

            <div style={{ padding: '0 8%', maxWidth: '1300px', marginInline: 'auto', position: 'relative', zIndex: 1 }}>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '24px', marginBottom: '80px' }}>
                    <GlassCard icon={MapPin} title="Local & Live" delay={0.1}>
                        <p>Discover events and meetups happening around you right now. Your next city adventure is just around the corner.</p>
                    </GlassCard>
                    <GlassCard icon={Users} title="Zero Pressure" delay={0.2}>
                        <p>No romantic expectations, no awkward situations. Just casual meetups with interesting people in your own city.</p>
                    </GlassCard>
                    <GlassCard icon={Zap} title="Spontaneous Plans" delay={0.3}>
                        <p>Organize or join events in minutes — coffee, lunch, hikes, board game nights, cinema runs, and more.</p>
                    </GlassCard>
                </div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} style={{ marginBottom: '100px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h2 style={{ fontSize: '2.8rem', fontWeight: '950', marginBottom: '16px', color: 'var(--dark-text)' }}>Simple, Transparent <span style={{ color: 'var(--vivid-orange)' }}>Pricing</span></h2>
                        <p style={{ color: 'var(--light-text)', fontSize: '1.1rem', maxWidth: '500px', marginInline: 'auto' }}>Start for free, upgrade when you're ready to do more.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                        {pricingPlans.map((plan, i) => (
                            <motion.div key={i} custom={i} variants={fadeUp}
                                whileHover={{ y: -10 }}
                                style={{
                                    background: plan.color,
                                    border: `1px solid ${plan.border}`,
                                    borderRadius: '40px',
                                    padding: '40px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                {plan.badge && (
                                    <div style={{ position: 'absolute', top: '24px', right: '24px', background: 'var(--vivid-orange)', color: 'white', fontSize: '0.7rem', fontWeight: '950', padding: '6px 16px', borderRadius: '50px', letterSpacing: '0.08em' }}>{plan.badge}</div>
                                )}
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '12px', color: 'var(--dark-text)' }}>{plan.name}</h3>
                                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', marginBottom: '32px' }}>
                                    <span style={{ fontSize: '3.5rem', fontWeight: '950', color: 'var(--vivid-orange)', lineHeight: 1 }}>{plan.price}</span>
                                    <span style={{ color: 'var(--light-text)', fontSize: '1rem', marginBottom: '8px', fontWeight: '600' }}>{plan.period}</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px', flex: 1 }}>
                                    {plan.features.map((f, j) => (
                                        <div key={j} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'var(--light-text)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                                            <CheckCircle size={18} color="var(--vivid-orange)" style={{ flexShrink: 0, marginTop: '2px' }} /> {f}
                                        </div>
                                    ))}
                                </div>
                                <button style={{ width: '100%', padding: '18px', borderRadius: '18px', border: 'none', fontWeight: '900', fontSize: '1.05rem', cursor: 'pointer', ...plan.ctaStyle }}>{plan.cta}</button>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div style={{ marginBottom: '100px' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '950', marginBottom: '40px', color: 'var(--dark-text)' }}>Virtual <span style={{ color: 'var(--vivid-orange)' }}>Gifts</span></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                        {virtualGifts.map((g, i) => (
                            <motion.div key={i} custom={i} variants={fadeUp}
                                whileHover={{ scale: 1.05 }}
                                style={{ background: 'white', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '24px', padding: '30px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{g.emoji}</div>
                                <h4 style={{ fontWeight: '900', fontSize: '1.2rem', marginBottom: '8px', color: 'var(--dark-text)' }}>{g.name}</h4>
                                <p style={{ color: 'var(--light-text)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '20px' }}>{g.desc}</p>
                                <div style={{ color: 'var(--vivid-orange)', fontWeight: '950', fontSize: '1.4rem' }}>{g.price}</div>
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
                        background: 'linear-gradient(135deg, var(--vivid-orange), #ff8c00)',
                        borderRadius: '40px',
                        color: 'white',
                        boxShadow: '0 30px 60px rgba(255,94,0,0.2)',
                    }}
                >
                    <Coffee size={64} color="white" style={{ marginBottom: '24px', opacity: 0.9 }} />
                    <h2 style={{ fontSize: '3rem', fontWeight: '950', marginBottom: '16px' }}>Ready to Hang Out?</h2>
                    <p style={{ opacity: 0.9, marginBottom: '40px', fontSize: '1.2rem', maxWidth: '600px', marginInline: 'auto' }}>Download Little Hearts and enter the Hangout Zone today.</p>
                    <button className="btn-primary" style={{ background: 'white', color: 'var(--dark-text)', padding: '18px 50px', fontSize: '1.1rem', borderRadius: '18px' }}>Download the App</button>
                </motion.div>
            </div>
        </div>
    );
};

export default HangoutZonePage;
