import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, ArrowLeft, Baby, Lock, Heart, Eye, Bell, ShieldCheck, LifeBuoy, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
            width: '50px',
            height: '50px',
            borderRadius: '16px',
            background: `linear-gradient(135deg, ${accent}, #ffae00)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            boxShadow: `0 8px 16px ${accent}33`
        }}>
            <Icon size={24} />
        </div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--dark-text)', letterSpacing: '-0.02em' }}>{title}</h3>
        <div style={{ color: 'var(--light-text)', lineHeight: 1.6, fontSize: '0.95rem', fontWeight: '500' }}>
            {children}
        </div>
    </motion.div>
);

const ChildSafetyPolicy = () => {
    const navigate = useNavigate();

    return (
        <div style={{ minHeight: '100vh', background: 'var(--soft-bg)', paddingTop: '120px', paddingBottom: '100px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-5%', right: '-5%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(255,108,0,0.05) 0%, transparent 70%)', zIndex: 0 }} />

            <div style={{ maxWidth: '1200px', marginInline: 'auto', padding: '0 5%', position: 'relative', zIndex: 1 }}>
                <motion.button
                    onClick={() => navigate('/')}
                    whileHover={{ x: -8 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        background: 'white',
                        border: '1px solid rgba(0,0,0,0.05)',
                        cursor: 'pointer',
                        color: 'var(--dark-text)',
                        fontWeight: '800',
                        fontSize: '0.9rem',
                        marginBottom: '40px',
                        padding: '12px 24px',
                        borderRadius: '50px',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.03)'
                    }}
                >
                    <ArrowLeft size={18} /> Back to Home
                </motion.button>

                <header style={{ marginBottom: '60px' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'var(--vivid-orange)',
                            background: 'white',
                            padding: '10px 24px',
                            borderRadius: '50px',
                            fontWeight: '900',
                            fontSize: '0.8rem',
                            marginBottom: '24px',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.02)',
                            letterSpacing: '0.05em'
                        }}
                    >
                        <ShieldAlert size={18} /> SAFETY FIRST
                    </motion.div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '950', color: 'var(--dark-text)', marginBottom: '20px', letterSpacing: '-0.04em', lineHeight: 1 }}>
                        Protecting Our <span style={{ color: 'var(--vivid-orange)' }}>Youngest Hearts</span>
                    </h1>
                    <p style={{ color: 'var(--light-text)', fontSize: '1.2rem', maxWidth: '750px', lineHeight: 1.6, fontWeight: '500' }}>
                        Safety isn't just a feature; it's our foundation. We've implemented rigorous standards to ensure a secure environment for everyone in our community.
                    </p>
                </header>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '24px'
                }}>
                    <GlassCard icon={Baby} title="1. Age Restrictions" delay={0.1}>
                        <p>
                            Little Hearts is intended for users 13 years and older (or the minimum legal age in your country).
                            Users under the required minimum age are strictly prohibited from creating an account.
                            If we discover an underage account, it will be immediately suspended or permanently removed.
                        </p>
                    </GlassCard>

                    <GlassCard icon={ShieldCheck} title="2. Zero Tolerance for Child Sexual Abuse & Exploitation (CSAE)" delay={0.2}>
                        <p>We strictly prohibit:</p>
                        <ul style={{ paddingLeft: '18px', marginTop: '8px' }}>
                            <li>Sharing or requesting sexual content involving minors</li>
                            <li>Grooming behavior</li>
                            <li>Exploitation or abuse of children</li>
                            <li>Any content that depicts minors in a sexual manner</li>
                        </ul>
                        <p style={{ marginTop: '10px' }}>
                            Accounts involved in such activities will be immediately banned,
                            reported to relevant law enforcement authorities,
                            and reported to appropriate child safety organizations where required.
                        </p>
                    </GlassCard>

                    <GlassCard icon={Eye} title="3. Monitoring & Reporting" delay={0.3} accent="#ff4b2b">
                        <p>
                            Little Hearts provides tools to report inappropriate messages or behavior,
                            block users, and flag suspicious content.
                            We review reports promptly and take appropriate action.
                        </p>
                    </GlassCard>

                    <GlassCard icon={Bell} title="4. Moderation Measures" delay={0.4}>
                        <p>
                            To protect minors and users, we monitor reported content,
                            remove harmful or inappropriate material,
                            and take action against violators, including permanent bans.
                        </p>
                    </GlassCard>

                    <GlassCard icon={Lock} title="5. Parental Concerns" delay={0.5}>
                        <p>
                            If a parent or guardian believes a child has created an account in violation
                            of our age policy, please contact us immediately.
                            We will take swift action to remove the account and associated data.
                        </p>
                        <p style={{ marginTop: '10px', fontWeight: '700' }}>
                            📧 Contact:
                            <a href="mailto:littleheartsapp@gmail.com" style={{ color: 'var(--vivid-orange)', marginLeft: '5px' }}>
                                littleheartsapp@gmail.com
                            </a>
                        </p>
                    </GlassCard>

                    <GlassCard icon={Users} title="6. Cooperation with Authorities" delay={0.6}>
                        <p>
                            We cooperate fully with law enforcement and child protection agencies
                            in cases involving child safety violations.
                        </p>
                    </GlassCard>

                    <GlassCard icon={Heart} title="7. Ongoing Commitment" delay={0.7}>
                        <p>
                            We continuously improve our safety systems to ensure Little Hearts
                            remains a safe space for making friends and positive social interactions.
                        </p>
                    </GlassCard>
                </div>

                {/* <footer style={{ marginTop: '80px', textAlign: 'center', color: 'var(--light-text)', fontSize: '0.9rem' }}>
                    <p>© 2024 Little Hearts Tech. Safe hearts are happy hearts.</p>
                </footer> */}
            </div>
        </div>
    );
};

export default ChildSafetyPolicy;
