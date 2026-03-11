import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, RefreshCcw, AlertTriangle, Globe, Clock, ShieldCheck, HelpCircle, FileCheck } from 'lucide-react';
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
            width: '50px',
            height: '50px',
            borderRadius: '16px',
            background: `linear-gradient(135deg, ${accent}, #ff007f)`,
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

const RefundPolicy = () => {
    const navigate = useNavigate();

    return (
        <div style={{ minHeight: '100vh', background: 'var(--soft-bg)', paddingTop: '120px', paddingBottom: '100px', position: 'relative', overflow: 'hidden' }}>
            {/* Decorative backgrounds */}
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(255,0,127,0.05) 0%, transparent 70%)', zIndex: 0 }} />

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
                            color: 'var(--neon-pink)',
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
                        <CreditCard size={18} /> PAYMENT & REFUNDS
                    </motion.div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '950', color: 'var(--dark-text)', marginBottom: '20px', letterSpacing: '-0.04em', lineHeight: 1 }}>
                        Refund <span className="text-gradient">Policy</span>
                    </h1>
                    <p style={{ color: 'var(--light-text)', fontSize: '1.2rem', maxWidth: '750px', lineHeight: 1.6, fontWeight: '500' }}>
                        Please read our refund policy carefully before making any purchases on the Little Hearts platform.
                    </p>
                </header>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '24px'
                }}>
                    <GlassCard icon={CreditCard} title="1. Digital Products & Virtual Items" delay={0.1}>
                        <p>Little Hearts may offer:</p>
                        <ul style={{ marginTop: '5px', paddingLeft: '20px', listStyle: 'disc' }}>
                            <li>Virtual Gifts</li>
                            <li>Profile Frames</li>
                            <li>Premium Features</li>
                            <li>In-App Currency (if applicable)</li>
                        </ul>
                        <p style={{ marginTop: '10px' }}>All items are digital and have no real-world monetary value.</p>
                    </GlassCard>

                    <GlassCard icon={RefreshCcw} title="2. General Refund Policy" delay={0.2}>
                        <p>Due to the nature of digital products:</p>
                        <ul style={{ marginTop: '5px', paddingLeft: '20px', listStyle: 'disc' }}>
                            <li>All purchases are final and non-refundable</li>
                            <li>Virtual gifts sent to other users cannot be reversed</li>
                            <li>Used profile frames or activated premium features are non-refundable</li>
                        </ul>
                    </GlassCard>

                    <GlassCard icon={AlertTriangle} title="3. Exceptions" delay={0.3} accent="#ff4b2b">
                        <p>Refunds may be considered in the following cases:</p>
                        <ul style={{ marginTop: '5px', paddingLeft: '20px', listStyle: 'disc' }}>
                            <li>Accidental duplicate charges</li>
                            <li>Unauthorized transactions</li>
                            <li>Technical errors causing failed delivery of purchased items</li>
                        </ul>
                        <p style={{ marginTop: '10px', fontWeight: '700' }}>Refund requests must be submitted within 7 days of the transaction.</p>
                    </GlassCard>

                    <GlassCard icon={Globe} title="4. Platform-Based Purchases" delay={0.4}>
                        <p>If your purchase was made through Google Play Store, refunds are subject to the respective platform’s refund policies.</p>
                        <p style={{ marginTop: '10px' }}>Users must request refunds directly through the platform where the purchase was made. Little Hearts does not control platform payment processing decisions.</p>
                    </GlassCard>

                    <GlassCard icon={Clock} title="5. Processing Time" delay={0.5}>
                        <p>If a refund is approved:</p>
                        <ul style={{ marginTop: '5px', paddingLeft: '20px', listStyle: 'disc' }}>
                            <li>It may take 5–10 business days to reflect in your account</li>
                            <li>The refund will be issued to the original payment method</li>
                        </ul>
                    </GlassCard>

                    <GlassCard icon={ShieldCheck} title="6. Fraud Prevention" delay={0.6}>
                        <p>We reserve the right to deny refund requests if:</p>
                        <ul style={{ marginTop: '5px', paddingLeft: '20px', listStyle: 'disc' }}>
                            <li>There is evidence of misuse</li>
                            <li>Multiple refund claims are made</li>
                            <li>The purchase has already been consumed</li>
                        </ul>
                    </GlassCard>

                    <GlassCard icon={HelpCircle} title="7. Contact Us" delay={0.7}>
                        <p>For refund-related inquiries, contact <strong>Little Hearts Support</strong>:</p>
                        <div style={{ marginTop: '10px', padding: '15px', background: 'rgba(255,0,127,0.05)', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <p style={{ fontSize: '0.85rem' }}>📧 <a href="mailto:littleheartsapp@gmail.com" style={{ color: 'var(--neon-pink)', fontWeight: '800' }}>littleheartsapp@gmail.com</a></p>
                            <p style={{ fontSize: '0.85rem', color: 'var(--neon-pink)', fontWeight: '800' }}>📞 7995135561</p>
                            <p style={{ fontSize: '0.8rem', color: 'var(--light-text)', fontWeight: '600', lineHeight: 1.4 }}>
                                Address:<br />
                                1-209, Near by Chervu , Thorredu,<br />
                                East Godavari, Andhra Pradesh-533293
                            </p>
                        </div>
                        <p style={{ marginTop: '10px', fontSize: '0.85rem' }}>Include: Username, Transaction ID, Date of purchase, Description of issue.</p>
                    </GlassCard>
                </div>

                <footer style={{ marginTop: '80px', textAlign: 'center', color: 'var(--light-text)', fontSize: '0.9rem' }}>
                    <p>© 2024 Little Hearts Tech. Honesty is our only policy.</p>
                </footer>
            </div>
        </div>
    );
};

export default RefundPolicy;
