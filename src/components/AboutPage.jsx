import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Activity, Shield, Users, Star, Globe } from 'lucide-react';

const AboutPage = () => {
    return (
        <div style={{ paddingBottom: '60px', background: '#F8FAFC' }}>
            {/* Header Section */}
            <section style={{ textAlign: 'center', background: 'var(--chalo-navy)', paddingTop: '90px', paddingBottom: '40px', color: 'white' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'var(--chalo-blue)', background: 'rgba(59,130,246,0.1)', padding: '12px 28px', borderRadius: '50px', fontWeight: '800', fontSize: '0.9rem', marginBottom: '32px', border: '1px solid rgba(59,130,246,0.1)' }}
                >
                    <Star size={16} fill="var(--chalo-blue)" color="var(--chalo-blue)" /> OUR MISSION
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: '950', color: 'white', marginBottom: '24px', letterSpacing: '-0.04em', lineHeight: 1.1 }}
                >
                    Empowering India's <br /><span style={{ color: 'var(--chalo-blue)' }}>Next Champions.</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6, fontWeight: '500' }}
                >
                    The Chaloo App connects aspiring sports players with elite academies and master coaches, turning sporting dreams into reality across India.
                </motion.p>
            </section>

            {/* Content Section */}
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '56px clamp(1.2rem, 6vw, 8%)' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '40px',
                    alignItems: 'center',
                    marginBottom: '60px'
                }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.6rem)', fontWeight: '950', marginBottom: '24px', color: 'var(--chalo-navy)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>Our Mission with the App</h2>
                        <p style={{ fontSize: '1.05rem', color: 'var(--chalo-slate)', lineHeight: 1.7, marginBottom: '16px', fontWeight: '500' }}>
                            Finding quality sports mentorship was harder than it should be. The Chaloo App was built to solve exactly that — connecting you with the right coach or academy in minutes.
                        </p>
                        <p style={{ fontSize: '1.05rem', color: 'var(--chalo-slate)', lineHeight: 1.7, fontWeight: '500' }}>
                            Cricket, Badminton, Football, Chess, Athletics — whatever your sport, Chaloo provides the platform. The dream is yours, the path is ours!
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{ borderRadius: '40px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(15,23,42,0.1)', position: 'relative' }}
                    >
                        <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80" alt="Sports Dream" style={{ width: '100%', height: '450px', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.4) 0%, transparent 50%)' }} />
                    </motion.div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
                    {[
                        { icon: Trophy, title: 'Expert Coaches', desc: 'The app gives you direct access to elite sports mentors and professional athletes.', color: 'var(--chalo-blue)' },
                        { icon: Target, title: 'All Sports', desc: 'The app covers Cricket, Football, Chess and many more disciplines in one place.', color: 'var(--chalo-emerald)' },
                        { icon: Globe, title: 'Academy Network', desc: 'Easily discover and connect with top-rated sports academies through the app.', color: 'var(--chalo-gold)' },
                        { icon: Activity, title: 'Secure & Verified', desc: 'Every coach, player and academy in the app is verified before listing.', color: '#6366F1' }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{ padding: '40px 32px', background: 'white', borderRadius: '32px', boxShadow: '0 10px 40px rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.04)' }}
                        >
                            <div style={{ width: '60px', height: '60px', borderRadius: '18px', background: `${item.color}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color, marginBottom: '24px' }}>
                                <item.icon size={28} />
                            </div>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: '950', marginBottom: '12px', color: 'var(--chalo-navy)', letterSpacing: '-0.02em' }}>{item.title}</h3>
                            <p style={{ color: 'var(--chalo-slate)', lineHeight: 1.5, fontSize: '1rem', fontWeight: '500' }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
