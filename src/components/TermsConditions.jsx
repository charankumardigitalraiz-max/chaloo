import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, ArrowLeft, ChevronDown, CheckCircle, Search, ShieldAlert, Gavel, Scale, Copyright } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionItem = ({ title, icon: Icon, children, isOpen, onClick }) => {
    return (
        <div style={{
            marginBottom: '16px',
            background: isOpen ? 'var(--chalo-bg)' : 'white',
            borderRadius: '16px',
            border: `1px solid ${isOpen ? 'var(--chalo-blue)' : 'rgba(0,0,0,0.08)'}`,
            overflow: 'hidden',
            boxShadow: isOpen ? '0 10px 30px rgba(59,130,246,0.1)' : '0 2px 10px rgba(0,0,0,0.02)',
            transition: 'all 0.3s ease'
        }}>
            <button
                onClick={onClick}
                style={{
                    width: '100%',
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--chalo-navy)',
                    textAlign: 'left'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '12px',
                        background: isOpen ? 'var(--chalo-blue)' : 'rgba(59,130,246,0.1)',
                        color: isOpen ? 'white' : 'var(--chalo-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease'
                    }}>
                        <Icon size={20} />
                    </div>
                    <span style={{ fontSize: '1.05rem', fontWeight: '700', letterSpacing: '-0.01em' }}>{title}</span>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown size={24} color={isOpen ? 'var(--chalo-blue)' : 'var(--chalo-slate)'} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div style={{
                            padding: '0 24px 32px 80px',
                            color: 'var(--chalo-slate)',
                            fontSize: '1.05rem',
                            lineHeight: 1.7,
                            background: 'var(--chalo-bg)'
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
        <div style={{ minHeight: '100vh', background: 'white', paddingBottom: '120px' }}>

            {/* Tech Header */}
            <div style={{
                background: '#020617',
                color: 'white',
                padding: '30px 5% 80px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', top: -100, right: '20%', width: 300, height: 300, background: 'var(--chalo-blue)', filter: 'blur(150px)', opacity: 0.3 }} />
                <div style={{ position: 'absolute', bottom: -50, left: '10%', width: 250, height: 250, background: 'var(--chalo-emerald)', filter: 'blur(120px)', opacity: 0.2 }} />

                <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
                    <button
                        onClick={() => navigate('/')}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            padding: '8px 16px',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            color: 'white',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            transition: 'all 0.2s',
                            marginBottom: '40px'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                        }}
                    >
                        <ArrowLeft size={16} /> Back to Hub
                    </button>

                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: 'var(--chalo-blue)',
                        background: 'rgba(59, 130, 246, 0.1)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        padding: '6px 16px',
                        borderRadius: '50px',
                        fontWeight: '800',
                        fontSize: '0.8rem',
                        marginBottom: '20px'
                    }}>
                        <FileText size={16} /> EFFECTIVE MARCH 2024
                    </div>

                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '950', marginBottom: '20px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                        Terms of Service
                    </h1>

                    <p style={{ color: '#94A3B8', fontSize: '1.15rem', lineHeight: 1.6, maxWidth: '600px' }}>
                        By joining CHALOO, you agree to our code of conduct for sports excellence. Review the rules that govern your participation in our ecosystem.
                    </p>
                </div>
            </div>

            {/* Interactive Accordion Container */}
            <div style={{ maxWidth: '900px', margin: '-40px auto 0', padding: '0 5%', position: 'relative', zIndex: 20 }}>

                <AccordionItem
                    title="1. Platform Eligibility"
                    icon={CheckCircle}
                    isOpen={openSection === 0}
                    onClick={() => toggleSection(0)}
                >
                    <p style={{ marginBottom: '16px' }}>CHALOO is a professional network designed for athletes, coaches, and sports academies. To use our platform, you must meet the following criteria:</p>
                    <ul style={{ paddingLeft: '20px', margin: 0, listStyleType: 'none' }}>
                        <li style={{ paddingBottom: '12px', display: 'flex', gap: '12px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--chalo-blue)', marginTop: '8px', flexShrink: 0 }} />
                            <span><strong>Age Restriction:</strong> You must be at least 13 years old. Users under 18 require active parental or guardian consent.</span>
                        </li>
                        <li style={{ paddingBottom: '12px', display: 'flex', gap: '12px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--chalo-blue)', marginTop: '8px', flexShrink: 0 }} />
                            <span><strong>Verifiable Truth:</strong> Coaches and Academy representatives must provide accurate, verifiable credentials during onboarding.</span>
                        </li>
                        <li style={{ display: 'flex', gap: '12px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--chalo-blue)', marginTop: '8px', flexShrink: 0 }} />
                            <span><strong>Honest Profiles:</strong> You agree to provide honest information regarding your geographical location, skill level, and sporting history.</span>
                        </li>
                    </ul>
                </AccordionItem>

                <AccordionItem
                    title="2. Role of CHALOO"
                    icon={Search}
                    isOpen={openSection === 1}
                    onClick={() => toggleSection(1)}
                >
                    <p style={{ marginBottom: '16px' }}>CHALOO operates strictly as a digital facilitator. Our goal is to connect dedicated players with expert mentors.</p>
                    <ul style={{ paddingLeft: '20px', margin: 0, listStyleType: 'none', color: 'var(--chalo-slate)' }}>
                        <li style={{ paddingBottom: '12px', display: 'flex', gap: '12px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--chalo-slate)', marginTop: '8px', flexShrink: 0 }} />
                            <span>We are an intermediary—we do not directly employ the coaches or own the academies listed on our platform.</span>
                        </li>
                        <li style={{ paddingBottom: '12px', display: 'flex', gap: '12px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--chalo-slate)', marginTop: '8px', flexShrink: 0 }} />
                            <span>While we verify identities, we cannot guarantee the ultimate safety or outcome of in-person training sessions. Use standard precautions.</span>
                        </li>
                        <li style={{ display: 'flex', gap: '12px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--chalo-slate)', marginTop: '8px', flexShrink: 0 }} />
                            <span>Any professional contracts, training schedules, or long-term fee arrangements are solely between the involved parties.</span>
                        </li>
                    </ul>
                </AccordionItem>

                <AccordionItem
                    title="3. Pay-to-Connect Economics"
                    icon={Scale}
                    isOpen={openSection === 2}
                    onClick={() => toggleSection(2)}
                >
                    <p style={{ marginBottom: '16px' }}>To prevent spam and ensure high intent, CHALOO utilizes a specific payment model when sharing contact information.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div style={{ background: 'white', padding: '16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <strong style={{ display: 'block', color: 'var(--chalo-navy)', marginBottom: '4px' }}>Connection Requests</strong>
                            Players can browse and send initial requests to coaches or academies for free.
                        </div>
                        <div style={{ background: 'white', padding: '16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <strong style={{ display: 'block', color: 'var(--chalo-navy)', marginBottom: '4px' }}>Payment Trigger</strong>
                            A connection fee is only required if the receiving party accepts the request.
                        </div>
                        <div style={{ background: 'white', padding: '16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <strong style={{ display: 'block', color: 'var(--chalo-navy)', marginBottom: '4px' }}>Non-Refundable Status</strong>
                            Once contact info is successfully revealed to both parties, the connection fee is final.
                        </div>
                    </div>
                </AccordionItem>

                <AccordionItem
                    title="4. Community Conduct"
                    icon={ShieldAlert}
                    isOpen={openSection === 3}
                    onClick={() => toggleSection(3)}
                >
                    <p style={{ marginBottom: '16px' }}>We maintain a <strong>zero-tolerance policy</strong> against behavior that undermines the integrity of our sports community.</p>
                    <ul style={{ paddingLeft: '20px', margin: 0, listStyleType: 'none', color: 'var(--chalo-slate)' }}>
                        <li style={{ paddingBottom: '12px', display: 'flex', gap: '12px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', marginTop: '8px', flexShrink: 0 }} />
                            <span>Fake credentials, fake academy photos, or impersonating athletes is an instant ban.</span>
                        </li>
                        <li style={{ paddingBottom: '12px', display: 'flex', gap: '12px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', marginTop: '8px', flexShrink: 0 }} />
                            <span>Harassment, discrimination, or abusive language will result in immediate termination.</span>
                        </li>
                        <li style={{ display: 'flex', gap: '12px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', marginTop: '8px', flexShrink: 0 }} />
                            <span>Circumventing the Pay-to-Connect system by hiding phone numbers in public bios/photos is strictly prohibited.</span>
                        </li>
                    </ul>
                </AccordionItem>

                <AccordionItem
                    title="5. Intellectual Property"
                    icon={Copyright}
                    isOpen={openSection === 4}
                    onClick={() => toggleSection(4)}
                >
                    <p style={{ marginBottom: '16px' }}>All layout, design, branding (including the CHALOO logo), and proprietary algorithms of the platform are the exclusive intellectual property of CHALOO Sports.</p>
                    <p style={{ margin: 0 }}>However, specific training modules, playbooks, or video feedback shared by coaches remain the intellectual property of those individual coaches, subject to any direct agreements they make with players.</p>
                </AccordionItem>

                <AccordionItem
                    title="6. Termination Rules"
                    icon={Gavel}
                    isOpen={openSection === 5}
                    onClick={() => toggleSection(5)}
                >
                    <p style={{ margin: 0 }}>We reserve the right to suspend or terminate your account without prior notice if you are found to be in violation of these Terms of Service. You may request account deletion at any time by contacting support, handling your data in accordance with our Privacy Policy.</p>
                </AccordionItem>

                {/* Dispute Card */}
                <div style={{
                    marginTop: '40px',
                    padding: '32px',
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(2,6,23,0.05) 100%)',
                    borderRadius: '24px',
                    border: '1px solid rgba(226,232,240,0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px'
                }}>
                    <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '20px',
                        background: 'white',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                    }}>
                        <Gavel size={28} color="var(--chalo-navy)" />
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--chalo-navy)', marginBottom: '8px' }}>Dispute Resolution</h3>
                        <p style={{ margin: 0, color: 'var(--chalo-slate)' }}>
                            For any disputes regarding payments or connection quality, please contact our support team within 48 hours of your interaction via <a href="mailto:chalosportsapp@gmail.com" style={{ color: 'var(--chalo-blue)', fontWeight: '700', textDecoration: 'none' }}>chalosportsapp@gmail.com</a>.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TermsConditions;
