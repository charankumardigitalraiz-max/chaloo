import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Sparkles, Trophy, CreditCard, CheckCircle, Shield, Users } from 'lucide-react';

const ContactPage = () => {
    return (
        <div style={{ paddingBottom: '60px', background: '#F8FAFC' }}>
            <section style={{ paddingTop: '90px', paddingBottom: '40px', textAlign: 'center', background: 'var(--chalo-navy)', color: 'white' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'var(--chalo-blue)', background: 'rgba(59,130,246,0.1)', padding: '12px 28px', borderRadius: '50px', fontWeight: '800', fontSize: '0.9rem', marginBottom: '32px', border: '1px solid rgba(59,130,246,0.1)' }}
                >
                    <Mail size={16} /> CONTACT CHALOO
                </motion.div>
                <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '950', color: 'white', marginBottom: '20px', letterSpacing: '-0.04em', lineHeight: 1.1 }}>Get in <span style={{ color: 'var(--chalo-blue)' }}>Touch.</span></h1>
                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', margin: '0 auto', fontWeight: '500', lineHeight: 1.6 }}>Have questions about the Chaloo App, our platform, or partnership opportunities? Our team is ready to help.</p>
            </section>

            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '56px 8%' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '60px', marginBottom: '100px' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '3rem', fontWeight: '950', marginBottom: '40px', color: 'var(--chalo-navy)', letterSpacing: '-0.03em' }}>Support Channels</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                            {[
                                { icon: Mail, label: 'Email Support', value: 'chalosportsapp@gmail.com' },
                                { icon: Phone, label: 'Call Our Team', value: '+91 7995135561' },
                                { icon: MapPin, label: 'Headquarters', value: 'Thorredu, East Godavari - 533293' }
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <div style={{ width: '60px', height: '60px', borderRadius: '18px', background: 'white', boxShadow: '0 10px 20px rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--chalo-blue)', border: '1px solid rgba(0,0,0,0.05)' }}>
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--chalo-slate)', display: 'block', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>{item.label}</span>
                                        <span style={{ fontSize: '1.1rem', fontWeight: '900', color: 'var(--chalo-navy)' }}>{item.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ background: 'white', padding: '40px', borderRadius: '40px', boxShadow: '0 30px 60px rgba(15,23,42,0.05)', border: '1px solid rgba(0,0,0,0.04)' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <label style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--chalo-navy)', paddingLeft: '4px' }}>Full Name</label>
                                    <input type="text" placeholder="Mahendra Singh" style={{ padding: '22px', borderRadius: '20px', border: '1px solid #E2E8F0', outline: 'none', background: '#F8FAFC', fontSize: '1rem', fontWeight: '700' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <label style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--chalo-navy)', paddingLeft: '4px' }}>Email Address</label>
                                    <input type="email" placeholder="msd@example.com" style={{ padding: '22px', borderRadius: '20px', border: '1px solid #E2E8F0', outline: 'none', background: '#F8FAFC', fontSize: '1rem', fontWeight: '700' }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <label style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--chalo-navy)', paddingLeft: '4px' }}>How can we help?</label>
                                <textarea placeholder="I'm interested in joining the best cricket academy or connecting with a coach..." rows={5} style={{ padding: '22px', borderRadius: '20px', border: '1px solid #E2E8F0', outline: 'none', background: '#F8FAFC', resize: 'none', fontSize: '1rem', fontWeight: '700', lineHeight: 1.6 }} />
                            </div>
                            <button
                                style={{
                                    marginTop: '16px',
                                    padding: '12px',
                                    fontSize: '1rem',
                                    fontWeight: '950',
                                    background: 'var(--chalo-blue)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '24px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '12px',
                                    boxShadow: '0 20px 40px rgba(59,130,246,0.3)'
                                }}
                            >
                                Send Message <Send size={20} />
                            </button>
                        </div>
                    </motion.form>
                </div>

                {/* Connection Flow Section */}
                <div style={{ background: 'var(--chalo-navy)', borderRadius: '40px', padding: '60px 6%', color: 'white', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '950', marginBottom: '16px', letterSpacing: '-0.03em' }}>How CHALOO Works</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', maxWidth: '700px', margin: '0 auto 48px', lineHeight: 1.6, fontWeight: '500' }}>
                        CHALOO uses a secure Pay-to-Connect model — both parties confirm their intent and pay a small fee before contact details are shared.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
                        {[
                            { step: "01", title: "Select & Request", desc: "Players can choose their preferred coach or academy and send a connection request.", icon: <Users /> },
                            { step: "02", title: "Accept & Pay", desc: "Once the request is accepted, both the coach and player pay a small verification fee.", icon: <CreditCard /> },
                            { step: "03", title: "Connect Directly", desc: "Upon successful payment, contact numbers are revealed for direct communication.", icon: <CheckCircle /> }
                        ].map((step, i) => (
                            <div key={i} style={{ textAlign: 'left', background: 'rgba(255,255,255,0.03)', padding: '32px', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.06)' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: '950', color: 'var(--chalo-blue)', marginBottom: '20px', opacity: 0.3 }}>{step.step}</div>
                                <h4 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '12px', letterSpacing: '-0.01em' }}>{step.title}</h4>
                                <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.5, fontSize: '0.95rem', fontWeight: '500' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
