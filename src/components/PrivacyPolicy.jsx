import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, ChevronDown, User, Database, Lock, EyeOff, Scale, HelpCircle } from 'lucide-react';
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

const PrivacyPolicy = () => {
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
                {/* Tech Gradients/Glow */}
                <div style={{ position: 'absolute', top: -100, left: '20%', width: 300, height: 300, background: 'var(--chalo-blue)', filter: 'blur(150px)', opacity: 0.3 }} />
                <div style={{ position: 'absolute', bottom: -50, right: '10%', width: 250, height: 250, background: 'var(--chalo-emerald)', filter: 'blur(120px)', opacity: 0.2 }} />

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
                        color: 'var(--chalo-emerald)',
                        background: 'rgba(16, 185, 129, 0.1)',
                        border: '1px solid rgba(16, 185, 129, 0.2)',
                        padding: '6px 16px',
                        borderRadius: '50px',
                        fontWeight: '800',
                        fontSize: '0.8rem',
                        marginBottom: '20px'
                    }}>
                        <ShieldCheck size={16} /> UPDATED MARCH 2024
                    </div>

                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '950', marginBottom: '20px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                        Privacy Policy
                    </h1>

                    <p style={{ color: '#94A3B8', fontSize: '1.15rem', lineHeight: 1.6, maxWidth: '600px' }}>
                        At CHALOO, trust is the foundation of every successful sports connection. Learn how we secure your data and optimize your athletic journey.
                    </p>
                </div>
            </div>

            {/* Interactive Accordion Container */}
            <div style={{ maxWidth: '900px', margin: '-40px auto 0', padding: '0 5%', position: 'relative', zIndex: 20 }}>

                <AccordionItem
                    title="1. Information We Collect"
                    icon={Database}
                    isOpen={openSection === 0}
                    onClick={() => toggleSection(0)}
                >
                    <p style={{ marginBottom: '16px' }}>When you create a profile on CHALOO—whether as a player, coach, or academy—we collect information necessary to facilitate genuine sports connections.</p>
                    <ul style={{ paddingLeft: '20px', margin: 0, listStyleType: 'none' }}>
                        <li style={{ paddingBottom: '12px', display: 'flex', gap: '12px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--chalo-blue)', marginTop: '8px', flexShrink: 0 }} />
                            <span><strong>Profile Data:</strong> Name, contact details, date of birth, and location.</span>
                        </li>
                        <li style={{ paddingBottom: '12px', display: 'flex', gap: '12px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--chalo-blue)', marginTop: '8px', flexShrink: 0 }} />
                            <span><strong>Sports Experience:</strong> Skill level, sporting achievements, coaching credentials, and academy certifications.</span>
                        </li>
                        <li style={{ display: 'flex', gap: '12px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--chalo-blue)', marginTop: '8px', flexShrink: 0 }} />
                            <span><strong>Transactional Data:</strong> Connection requests, accepted invites, and payment history (we do not store full credit card details on our servers).</span>
                        </li>
                    </ul>
                </AccordionItem>

                <AccordionItem
                    title="2. How We Use Your Information"
                    icon={User}
                    isOpen={openSection === 1}
                    onClick={() => toggleSection(1)}
                >
                    <p style={{ marginBottom: '16px' }}>We use your data purely to optimize the CHALOO ecosystem. Our primary uses include:</p>
                    <ul style={{ paddingLeft: '20px', margin: 0, listStyleType: 'none', color: 'var(--chalo-slate)' }}>
                        <li style={{ paddingBottom: '12px', display: 'flex', gap: '12px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--chalo-emerald)', marginTop: '8px', flexShrink: 0 }} />
                            <span>Matching players with appropriate coaches and academies based on skill, location, and sport.</span>
                        </li>
                        <li style={{ paddingBottom: '12px', display: 'flex', gap: '12px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--chalo-emerald)', marginTop: '8px', flexShrink: 0 }} />
                            <span>Verifying the identity and credentials of coaches and academies to ensure player safety.</span>
                        </li>
                        <li style={{ paddingBottom: '12px', display: 'flex', gap: '12px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--chalo-emerald)', marginTop: '8px', flexShrink: 0 }} />
                            <span>Processing the "Pay-to-Connect" fees through our secure payment gateways.</span>
                        </li>
                        <li style={{ display: 'flex', gap: '12px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--chalo-emerald)', marginTop: '8px', flexShrink: 0 }} />
                            <span>Resolving disputes and providing customer support.</span>
                        </li>
                    </ul>
                </AccordionItem>

                <AccordionItem
                    title="3. The Pay-to-Connect Protocol"
                    icon={Lock}
                    isOpen={openSection === 2}
                    onClick={() => toggleSection(2)}
                >
                    <p style={{ margin: 0 }}>CHALOO operates on a secure connection model. Your direct contact information (phone number, email) is <strong>never</strong> publicly displayed on your profile. It is only revealed to another party after a connection request has been mutually accepted and the required connection fee has been successfully processed by both parties. This ensures high-intent, spam-free networking.</p>
                </AccordionItem>

                <AccordionItem
                    title="4. Data Protection and Security"
                    icon={ShieldCheck}
                    isOpen={openSection === 3}
                    onClick={() => toggleSection(3)}
                >
                    <p style={{ margin: 0 }}>We implement professional-grade security measures to protect your athletic and personal data. All data transmissions are encrypted, and our databases employ strict access controls. While no digital system is 100% impenetrable, we actively monitor our platform to prevent unauthorized access, fraud, and data breaches.</p>
                </AccordionItem>

                <AccordionItem
                    title="5. Third-Party Sharing"
                    icon={EyeOff}
                    isOpen={openSection === 4}
                    onClick={() => toggleSection(4)}
                >
                    <p style={{ margin: 0 }}>We do not sell your personal data to advertisers. Information may be shared with trusted third-party service providers (like payment processors and identity verification services) solely for the purpose of operating the CHALOO platform. These providers are strictly bound by confidentiality agreements.</p>
                </AccordionItem>

                <AccordionItem
                    title="6. Your Rights"
                    icon={Scale}
                    isOpen={openSection === 5}
                    onClick={() => toggleSection(5)}
                >
                    <p style={{ marginBottom: '16px' }}>You have full control over your sporting profile. You can:</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div style={{ background: 'white', padding: '16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <strong style={{ display: 'block', color: 'var(--chalo-navy)', marginBottom: '4px' }}>Access & Update</strong>
                            Access and update your profile information at any time directly through the app settings.
                        </div>
                        <div style={{ background: 'white', padding: '16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <strong style={{ display: 'block', color: 'var(--chalo-navy)', marginBottom: '4px' }}>Export Data</strong>
                            Request a complete export of your interaction history on the platform.
                        </div>
                        <div style={{ background: 'white', padding: '16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <strong style={{ display: 'block', color: '#EF4444', marginBottom: '4px' }}>Account Deletion</strong>
                            Request permanent deletion of your account and securely erase associated data from our active servers.
                        </div>
                    </div>
                </AccordionItem>

                {/* Support Card */}
                <div style={{
                    marginTop: '40px',
                    padding: '32px',
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(16,185,129,0.05) 100%)',
                    borderRadius: '24px',
                    border: '1px solid rgba(59,130,246,0.1)',
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
                        <HelpCircle size={28} color="var(--chalo-blue)" />
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--chalo-navy)', marginBottom: '8px' }}>Contact our Privacy Team</h3>
                        <p style={{ margin: 0, color: 'var(--chalo-slate)' }}>
                            If you have questions about this policy, please email us directly at <a href="mailto:chalosportsapp@gmail.com" style={{ color: 'var(--chalo-blue)', fontWeight: '700', textDecoration: 'none' }}>chalosportsapp@gmail.com</a>.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PrivacyPolicy;
