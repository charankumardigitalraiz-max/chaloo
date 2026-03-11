import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Globe, Target, Rocket } from 'lucide-react';

const Community = () => {
    return (
        <section id="mission" style={{
            background: 'var(--chalo-navy)',
            color: 'white',
            borderRadius: '40px',
            margin: '0 2% 40px',
            padding: '56px 8%',
            overflow: 'hidden',
            position: 'relative'
        }}>
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'center', position: 'relative', zIndex: 1 }}>

                {/* Left — Text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--chalo-blue)', background: 'rgba(59,130,246,0.1)', padding: '8px 20px', borderRadius: '50px', fontWeight: '800', fontSize: '0.8rem', marginBottom: '20px', border: '1px solid rgba(59,130,246,0.15)' }}>
                        <Globe size={14} /> OUR MISSION
                    </div>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: '950', lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-0.035em' }}>
                        The Dream is Yours, <br />
                        <span style={{ color: 'var(--chalo-blue)' }}>The Path is Ours!</span>
                    </h2>
                    <p style={{ fontSize: '1rem', opacity: 0.7, marginBottom: '36px', lineHeight: 1.6, maxWidth: '480px', fontWeight: '500' }}>
                        Our mission is to build a sporting revolution across India — connecting talent with opportunity through a trusted, transparent platform.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {[
                            { title: "Pan-India Network", desc: "Connect with top academies and mentors across the country.", icon: <Globe size={18} color="var(--chalo-blue)" /> },
                            { title: "All Sports, One App", desc: "Cricket, Football, Athletics and more — all in a single platform.", icon: <Target size={18} color="var(--chalo-blue)" /> }
                        ].map((item, id) => (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: id * 0.15 }}
                                style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}
                            >
                                <div style={{ background: 'rgba(255,255,255,0.04)', padding: '12px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>{item.icon}</div>
                                <div>
                                    <h4 style={{ fontSize: '1rem', fontWeight: '900', marginBottom: '4px' }}>{item.title}</h4>
                                    <p style={{ opacity: 0.55, fontSize: '0.88rem', lineHeight: 1.5 }}>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right — CTA Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{
                        padding: '48px 40px',
                        borderRadius: '36px',
                        textAlign: 'center',
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        backdropFilter: 'blur(20px)',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.3)'
                    }}
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ color: 'var(--chalo-blue)', marginBottom: '28px', display: 'flex', justifyContent: 'center' }}
                    >
                        <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Activity size={36} strokeWidth={1.5} color="var(--chalo-blue)" />
                        </div>
                    </motion.div>

                    <h3 style={{ fontSize: '2.4rem', marginBottom: '12px', fontWeight: '950', letterSpacing: '-0.03em' }}>500K+ Champions</h3>
                    <p style={{ marginBottom: '36px', opacity: 0.6, fontSize: '0.95rem', maxWidth: '320px', marginInline: 'auto', lineHeight: 1.6 }}>Join the movement turning India into a global sporting powerhouse.</p>

                    <motion.button
                        whileHover={{ scale: 1.04, y: -3 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => window.location.href = '#zones'}
                        style={{
                            padding: '16px 48px',
                            fontSize: '1rem',
                            fontWeight: '900',
                            background: 'var(--chalo-blue)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '18px',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            boxShadow: '0 15px 30px rgba(59,130,246,0.25)'
                        }}
                    >
                        <Rocket size={18} /> Explore CHALOO
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Community;
