import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, ChevronDown, User, Database, Lock, HelpCircle, EyeOff, Scale, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionItem = ({ title, icon: Icon, children, isOpen, onClick }) => {
    return (
        <div style={{
            marginBottom: '20px',
            background: isOpen ? 'rgba(255, 255, 255, 0.02)' : 'rgba(15, 23, 42, 0.4)',
            backdropFilter: 'blur(30px)',
            borderRadius: '24px',
            border: '1px solid',
            borderColor: isOpen ? 'var(--chalo-blue)' : 'var(--border-glass)',
            overflow: 'hidden',
            transition: 'all 0.4s cubic-bezier(0.19, 1, 0.22, 1)'
        }}>
            <button
                onClick={onClick}
                style={{
                    width: '100%',
                    padding: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'white',
                    textAlign: 'left'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '16px',
                        background: isOpen ? 'var(--chalo-blue)' : 'rgba(255, 255, 255, 0.03)',
                        color: isOpen ? 'white' : 'var(--chalo-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        border: isOpen ? 'none' : '1px solid rgba(255, 255, 255, 0.08)'
                    }}>
                        <Icon size={22} />
                    </div>
                    <span style={{ fontSize: '1.2rem', fontWeight: '800', letterSpacing: '-0.02em' }}>{title}</span>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown size={24} color={isOpen ? 'var(--chalo-blue)' : 'rgba(255, 255, 255, 0.3)'} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                    >
                        <div style={{
                            padding: '0 32px 40px 100px',
                            color: 'var(--text-secondary)',
                            fontSize: '1.05rem',
                            lineHeight: 1.7,
                            fontWeight: '500'
                        }}>
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const PrivacyPolicy = () => {
    const navigate = useNavigate();
    const [openSection, setOpenSection] = useState(0);

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? -1 : index);
    };

    return (
        <div style={{ minHeight: '100vh', background: 'var(--chalo-bg)', paddingBottom: '120px' }}>

            {/* Premium Header */}
            <section style={{ 
                paddingTop: '160px', 
                paddingBottom: '120px', 
                position: 'relative', 
                overflow: 'hidden',
                textAlign: 'center',
                background: 'linear-gradient(to bottom, rgba(2, 6, 23, 0.4) 0%, var(--chalo-bg) 100%)'
            }}>
                {/* Background Glows */}
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', height: '100%', background: 'radial-gradient(circle at 50% 0%, rgba(0, 210, 255, 0.08) 0%, transparent 70%)', zIndex: 0 }} />
                
                <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 10, paddingInline: '6%' }}>
                    <button
                        onClick={() => navigate('/')}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: 'rgba(255,255,255,0.03)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid var(--border-glass)',
                            padding: '10px 24px',
                            borderRadius: '100px',
                            cursor: 'pointer',
                            color: 'white',
                            fontWeight: '800',
                            fontSize: '0.85rem',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            marginBottom: '48px'
                        }}
                        className="btn-back-hub"
                    >
                        <ArrowLeft size={16} /> Back to Hub
                    </button>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '10px', 
                            color: 'var(--chalo-blue)', 
                            background: 'rgba(0, 210, 255, 0.1)', 
                            padding: '6px 20px', 
                            borderRadius: '100px', 
                            fontWeight: '900', 
                            fontSize: '0.75rem', 
                            marginBottom: '24px',
                            border: '1px solid rgba(0, 210, 255, 0.15)',
                            letterSpacing: '0.1em'
                        }}
                    >
                        <ShieldCheck size={14} /> UPDATED MARCH 2024
                    </motion.div>

                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '950', color: 'white', marginBottom: '24px', letterSpacing: '-0.04em', lineHeight: 1 }}>
                        Privacy <span className="text-gradient">Protocol.</span>
                    </h1>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto', fontWeight: '500' }}>
                        At CHALOO, absolute trust is the core of our enterprise. We secure your professional athletic data with architectural precision.
                    </p>
                </div>
            </section>

            {/* Accordion Container */}
            <div style={{ maxWidth: '950px', margin: '-60px auto 0', padding: '0 6%', position: 'relative', zIndex: 20 }}>

                <AccordionItem
                    title="1. Core Data Intelligence"
                    icon={Database}
                    isOpen={openSection === 0}
                    onClick={() => toggleSection(0)}
                >
                    <p style={{ marginBottom: '20px' }}>To facilitate elite sports connectivity, we mobilize localized data parameters across player, coach, and academy profiles.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {[
                            { label: 'Identity Clusters', desc: 'Secure encryption of names, contact protocols, and geographic coordinates.' },
                            { label: 'Performance Metrics', desc: 'Skill level data, verified achievements, and professional coaching credentials.' },
                            { label: 'Secure Ledger', desc: 'High-intent connection history and verified transaction logs for platform integrity.' }
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', gap: '16px' }}>
                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--chalo-blue)', marginTop: '10px', flexShrink: 0 }} />
                                <span><strong style={{ color: 'white' }}>{item.label}:</strong> {item.desc}</span>
                            </div>
                        ))}
                    </div>
                </AccordionItem>

                <AccordionItem
                    title="2. Strategic Data Application"
                    icon={User}
                    isOpen={openSection === 1}
                    onClick={() => toggleSection(1)}
                >
                    <p style={{ marginBottom: '20px' }}>Your data is strictly utilized to optimize the CHALOO ecosystem and facilitate professional matching.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {[
                            'High-precision matchmaking based on athletic discipline and geographic proximity.',
                            'Rigorous identity verification to maintain a verified network of elite experts.',
                            'Secure processing of connection fees via encrypted banking gateways.',
                            'Proactive dispute resolution and enterprise-tier support protocols.'
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', gap: '16px' }}>
                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--chalo-emerald)', marginTop: '10px', flexShrink: 0 }} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </AccordionItem>

                <AccordionItem
                    title="3. Encryption & Disclosure Control"
                    icon={Lock}
                    isOpen={openSection === 2}
                    onClick={() => toggleSection(2)}
                >
                    <p style={{ margin: 0 }}>CHALOO implements a strict <strong>Zero-Leak</strong> protocol. Direct contact credentials (VOIP/Email) are never publicly exposed. Data activation only occurs after mutual intent verification and successful connection protocol fulfillment. This eliminates unsolicited contact and ensures high-quality networking.</p>
                </AccordionItem>

                <AccordionItem
                    title="4. Architectural Security Standard"
                    icon={ShieldCheck}
                    isOpen={openSection === 3}
                    onClick={() => toggleSection(3)}
                >
                    <p style={{ margin: 0 }}>Our infrastructure employs military-grade encryption and strict tiered access controls. We maintain active monitoring systems to intercept unauthorized access attempts and preserve the integrity of India's premier sporting network.</p>
                </AccordionItem>

                <AccordionItem
                    title="5. User Rights & Data Autonomy"
                    icon={Scale}
                    isOpen={openSection === 4}
                    onClick={() => toggleSection(4)}
                >
                    <p style={{ marginBottom: '24px' }}>You maintain complete sovereignty over your athletic profile and historical data.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                        {[
                            { title: 'Real-time Updates', desc: 'Securely modify profile parameters via the Command Hub.' },
                            { title: 'Data Portability', desc: 'Request a full export of your interaction ledger at any time.' },
                            { title: 'Termination Protocol', desc: 'Initialize total account erasure from active servers permanently.', danger: true }
                        ].map((item, i) => (
                            <div key={i} style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <strong style={{ display: 'block', color: item.danger ? '#EF4444' : 'white', marginBottom: '8px', fontSize: '1rem' }}>{item.title}</strong>
                                <span style={{ fontSize: '0.85rem', opacity: 0.8 }}>{item.desc}</span>
                            </div>
                        ))}
                    </div>
                </AccordionItem>

                {/* Support Card */}
                <div style={{
                    marginTop: '60px',
                    padding: '48px',
                    background: 'rgba(15, 23, 42, 0.4)',
                    backdropFilter: 'blur(30px)',
                    borderRadius: '40px',
                    border: '1px solid var(--border-glass)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '32px',
                    boxShadow: '0 40px 80px rgba(0,0,0,0.3)'
                }}>
                    <div style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '24px',
                        background: 'rgba(0, 210, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--chalo-blue)',
                        flexShrink: 0,
                        border: '1px solid rgba(0, 210, 255, 0.2)'
                    }}>
                        <HelpCircle size={32} />
                    </div>
                    <div style={{ flex: 1, minWidth: '280px' }}>
                        <h3 style={{ fontSize: '1.6rem', fontWeight: '950', color: 'white', marginBottom: '12px', letterSpacing: '-0.02em' }}>Privacy Command Center</h3>
                        <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                            For sensitive data inquiries or security audit requests, contact our specialized protocol team at <a href="mailto:chalosportsapp@gmail.com" style={{ color: 'var(--chalo-blue)', fontWeight: '800', textDecoration: 'none' }}>chalosportsapp@gmail.com</a>.
                        </p>
                    </div>
                </div>

            </div>

            {/* Custom Styles */}
            <style>{`
                .btn-back-hub:hover {
                    background: rgba(255, 255, 255, 0.08) !important;
                    transform: translateX(-5px);
                    border-color: rgba(255, 255, 255, 0.2) !important;
                }
            `}</style>
        </div>
    );
};

export default PrivacyPolicy;
