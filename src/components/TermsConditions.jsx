import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, ArrowLeft, ChevronDown, CheckCircle, Search, ShieldAlert, Gavel, Scale, Copyright, ShieldCheck, HelpCircle } from 'lucide-react';
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

const TermsConditions = () => {
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
                        <FileText size={14} /> EFFECTIVE MARCH 2024
                    </motion.div>

                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '950', color: 'white', marginBottom: '24px', letterSpacing: '-0.04em', lineHeight: 1 }}>
                        Terms of <span className="text-gradient">Service.</span>
                    </h1>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto', fontWeight: '500' }}>
                        Join the CHALOO ecosystem with a commitment to sporting excellence and professional conduct.
                    </p>
                </div>
            </section>

            {/* Accordion Container */}
            <div style={{ maxWidth: '950px', margin: '-60px auto 0', padding: '0 6%', position: 'relative', zIndex: 20 }}>

                <AccordionItem
                    title="1. Enterprise Eligibility"
                    icon={CheckCircle}
                    isOpen={openSection === 0}
                    onClick={() => toggleSection(0)}
                >
                    <p style={{ marginBottom: '20px' }}>CHALOO is a specialized network for professional athletes and verified sports entities.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {[
                            { label: 'Baseline Age', desc: 'Active users must be 13+. Legal minor participation requires verified parental bypass.' },
                            { label: 'Credential Audit', desc: 'Coaches and Academies must undergo periodic credential verification.' },
                            { label: 'Identity Integrity', desc: 'Prohibition of aliases; profiles must represent verified athletic entities.' }
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', gap: '16px' }}>
                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--chalo-blue)', marginTop: '10px', flexShrink: 0 }} />
                                <span><strong style={{ color: 'white' }}>{item.label}:</strong> {item.desc}</span>
                            </div>
                        ))}
                    </div>
                </AccordionItem>

                <AccordionItem
                    title="2. Facilitation Protocol"
                    icon={Search}
                    isOpen={openSection === 1}
                    onClick={() => toggleSection(1)}
                >
                    <p style={{ marginBottom: '20px' }}>Our role is strictly facilitative — connecting high-intent athletic talent with professional expertise.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {[
                            'CHALOO acts as a neutral intermediary; we do not employ individual coaches directly.',
                            'Users assume responsibility for in-person training dynamics outside the digital hub.',
                            'Platform agreements do not constitute direct sporting contracts between parties.'
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', gap: '16px' }}>
                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--chalo-emerald)', marginTop: '10px', flexShrink: 0 }} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </AccordionItem>

                <AccordionItem
                    title="3. Connection Economics"
                    icon={Scale}
                    isOpen={openSection === 2}
                    onClick={() => toggleSection(2)}
                >
                    <p style={{ marginBottom: '24px' }}>To preserve the elite nature of our network, we operate a selective connection model.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                        {[
                            { title: 'Intent Request', desc: 'Browse and send initial communication packets at zero initial cost.' },
                            { title: 'Activation Fee', desc: 'Required only upon mutual data release authorization.' },
                            { title: 'Finality Clause', desc: 'Protocol fulfillment fees are non-refundable once contact data is released.' }
                        ].map((item, i) => (
                            <div key={i} style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <strong style={{ display: 'block', color: 'white', marginBottom: '8px', fontSize: '1rem' }}>{item.title}</strong>
                                <span style={{ fontSize: '0.85rem', opacity: 0.8 }}>{item.desc}</span>
                            </div>
                        ))}
                    </div>
                </AccordionItem>

                <AccordionItem
                    title="4. Behavioral Termination"
                    icon={ShieldAlert}
                    isOpen={openSection === 3}
                    onClick={() => toggleSection(3)}
                >
                    <p style={{ marginBottom: '20px' }}>We maintain zero tolerance for behavior that compromises platform integrity.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {[
                            'Ban on falsification of athletic performance data or coaching credentials.',
                            'Zero tolerance for discriminatory conduct or non-professional interaction.',
                            'Prohibition of "Direct-Bypass" — hiding contact info in public profile assets.'
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', gap: '16px' }}>
                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', marginTop: '10px', flexShrink: 0 }} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </AccordionItem>

                {/* Dispute Card */}
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
                        background: 'rgba(255, 255, 255, 0.03)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        flexShrink: 0,
                        border: '1px solid var(--border-glass)'
                    }}>
                        <Gavel size={32} />
                    </div>
                    <div style={{ flex: 1, minWidth: '280px' }}>
                        <h3 style={{ fontSize: '1.6rem', fontWeight: '950', color: 'white', marginBottom: '12px', letterSpacing: '-0.02em' }}>Dispute Resolution</h3>
                        <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                            For payment anomalies or connection quality audits, contact our specialized protocol team within 48 hours at <a href="mailto:chalosportsapp@gmail.com" style={{ color: 'var(--chalo-blue)', fontWeight: '800', textDecoration: 'none' }}>chalosportsapp@gmail.com</a>.
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

export default TermsConditions;
