import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Sparkles, Trophy, CreditCard, CheckCircle, Shield, Users, ArrowRight, MessageSquare, Globe } from 'lucide-react';

const ContactPage = () => {
    return (
        <div style={{ background: 'var(--chalo-bg)', minHeight: '100vh', paddingBottom: '100px' }}>
            {/* Cinematic Header Section */}
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
                
                <div style={{ position: 'relative', zIndex: 1, paddingInline: '6%' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '10px', 
                            color: 'var(--chalo-blue)', 
                            background: 'rgba(0, 210, 255, 0.1)', 
                            padding: '10px 24px', 
                            borderRadius: '100px', 
                            fontWeight: '900', 
                            fontSize: '0.75rem', 
                            marginBottom: '32px',
                            border: '1px solid rgba(0, 210, 255, 0.15)',
                            letterSpacing: '0.1em'
                        }}
                    >
                        <MessageSquare size={14} fill="var(--chalo-blue)" /> GLOBAL SUPPORT
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: '950', color: 'white', marginBottom: '24px', letterSpacing: '-0.05em', lineHeight: 0.9 }}
                    >
                        Get in <br />
                        <span className="text-gradient">Touch.</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontWeight: '500', lineHeight: 1.5 }}
                    >
                        Our specialized team is ready to assist with high-intent sport inquiries and corporate partnerships.
                    </motion.p>
                </div>
            </section>

            <div style={{ maxWidth: '1400px', margin: '-40px auto 0', padding: '0 6%', position: 'relative', zIndex: 10 }}>
                
                {/* Main Grid: Info & Form */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '60px', marginBottom: '120px' }}>
                    
                    {/* Info Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '950', marginBottom: '48px', color: 'white', letterSpacing: '-0.04em' }}>Corporate <br />Channels</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                            {[
                                { icon: Mail, label: 'Enterprise Email', value: 'chalosportsapp@gmail.com', color: '#00D2FF' },
                                { icon: Phone, label: 'Direct Hotline', value: '+91 7995135561', color: '#FACC15' },
                                { icon: Globe, label: 'Global HQ', value: 'East Godavari, AP - 533293', color: '#10B981' }
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                                    <div style={{ 
                                        width: '72px', 
                                        height: '72px', 
                                        borderRadius: '24px', 
                                        background: 'rgba(255,255,255,0.02)', 
                                        border: '1px solid var(--border-glass)', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center', 
                                        color: item.color,
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                                    }}>
                                        <item.icon size={28} />
                                    </div>
                                    <div>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--chalo-blue)', display: 'block', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '6px' }}>{item.label}</span>
                                        <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'white' }}>{item.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ 
                            background: 'rgba(15, 23, 42, 0.4)', 
                            backdropFilter: 'blur(40px)', 
                            padding: '50px', 
                            borderRadius: '48px', 
                            border: '1px solid var(--border-glass)',
                            boxShadow: '0 50px 100px rgba(0,0,0,0.3)'
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: '900', color: 'var(--text-secondary)', paddingLeft: '4px', letterSpacing: '0.05em' }}>FULL NAME</label>
                                    <input type="text" placeholder="John Smith" className="contact-input" />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: '900', color: 'var(--text-secondary)', paddingLeft: '4px', letterSpacing: '0.05em' }}>EMAIL ADDRESS</label>
                                    <input type="email" placeholder="john@company.com" className="contact-input" />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: '900', color: 'var(--text-secondary)', paddingLeft: '4px', letterSpacing: '0.05em' }}>MESSAGE DETAILS</label>
                                <textarea placeholder="How can we help you achieve your sporting goals?" rows={6} className="contact-input" style={{ resize: 'none' }} />
                            </div>
                            <button
                                style={{
                                    marginTop: '16px',
                                    padding: '20px',
                                    fontSize: '1.1rem',
                                    fontWeight: '950',
                                    background: 'white',
                                    color: 'var(--chalo-navy)',
                                    border: 'none',
                                    borderRadius: '20px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '12px',
                                    transition: 'all 0.3s ease'
                                }}
                                className="contact-btn"
                            >
                                Dispatch Protocol <Send size={20} />
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Secure Protocol Section */}
                <div style={{ 
                    background: 'rgba(255, 255, 255, 0.015)', 
                    borderRadius: '56px', 
                    padding: '80px clamp(2rem, 6%, 4rem)', 
                    border: '1px solid var(--border-glass)',
                    textAlign: 'center' 
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '950', marginBottom: '20px', color: 'white', letterSpacing: '-0.04em' }}>The CHALOO Protocol</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '750px', margin: '0 auto 60px', lineHeight: 1.6, fontWeight: '500' }}>
                            We use a secure Pay-to-Connect model to ensure high-intent interactions and protect the integrity of our professional sporting network.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                        {[
                            { step: "01", title: "Select & Intent", desc: "Browse verified listings and send a connection request with your specific intent.", icon: <Users size={24} /> },
                            { step: "02", title: "Verify & Authorize", desc: "Upon acceptance, use our secure gateway to fulfill the connection protocol.", icon: <CreditCard size={24} /> },
                            { step: "03", title: "Direct Activation", desc: "Unlock direct encrypted channels for uninterrupted sporting professional contact.", icon: <CheckCircle size={24} /> }
                        ].map((step, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{ 
                                    textAlign: 'left', 
                                    background: 'rgba(255,255,255,0.02)', 
                                    padding: '40px', 
                                    borderRadius: '40px', 
                                    border: '1px solid rgba(255,255,255,0.06)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                className="protocol-card"
                            >
                                <div style={{ fontSize: '3rem', fontWeight: '950', color: 'var(--chalo-blue)', marginBottom: '24px', opacity: 0.2 }}>{step.step}</div>
                                <div style={{ color: 'var(--chalo-blue)', marginBottom: '20px' }}>{step.icon}</div>
                                <h4 style={{ fontSize: '1.6rem', fontWeight: '900', marginBottom: '16px', color: 'white', letterSpacing: '-0.02em' }}>{step.title}</h4>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1rem', fontWeight: '500' }}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Global Styles */}
            <style>{`
                .contact-input {
                    background: rgba(255, 255, 255, 0.03) !important;
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                    border-radius: 18px !important;
                    padding: 20px !important;
                    color: white !important;
                    font-weight: 600 !important;
                    font-size: 1rem !important;
                    transition: all 0.3s ease !important;
                    outline: none !important;
                }
                .contact-input:focus {
                    border-color: var(--chalo-blue) !important;
                    background: rgba(255, 255, 255, 0.05) !important;
                    box-shadow: 0 0 0 4px rgba(0, 210, 255, 0.1);
                }
                .contact-btn:hover {
                    background: var(--chalo-blue) !important;
                    color: white !important;
                    transform: translateY(-2px);
                    box-shadow: 0 15px 30px rgba(0, 210, 255, 0.2);
                }
                .protocol-card:hover {
                    background: rgba(255, 255, 255, 0.04) !important;
                    transform: translateY(-8px);
                    border-color: rgba(255, 255, 255, 0.12) !important;
                }
            `}</style>
        </div>
    );
};

export default ContactPage;
