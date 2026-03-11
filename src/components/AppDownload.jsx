import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, Shield, ChevronRight } from 'lucide-react';

const AppDownload = () => {
    return (
        <section id="download" style={{
            background: 'var(--chalo-bg)',
            padding: '120px 6%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Ambient cinematic glow */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: '1000px', height: '600px',
                background: 'radial-gradient(circle, rgba(0, 210, 255, 0.04) 0%, transparent 70%)',
                zIndex: 0, pointerEvents: 'none'
            }} />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '1200px',
                    borderRadius: '48px',
                    overflow: 'hidden',
                    background: 'rgba(2, 11, 25, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid var(--border-glass)',
                    boxShadow: '0 50px 100px rgba(0,0,0,0.4)',
                    zIndex: 1
                }}
            >
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    alignItems: 'center',
                }}>
                    {/* Content Section */}
                    <div style={{ padding: '80px 10%', color: 'white' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                color: 'var(--chalo-blue)',
                                background: 'rgba(0, 210, 255, 0.1)',
                                padding: '8px 20px',
                                borderRadius: '100px',
                                fontSize: '0.75rem',
                                fontWeight: '900',
                                marginBottom: '24px',
                                letterSpacing: '0.1em'
                            }}>
                                <Smartphone size={14} /> DOWNLOAD APP
                            </div>

                            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: '950', marginBottom: '24px', lineHeight: 1, letterSpacing: '-0.05em' }}>
                                Train like a <br />
                                <span className="text-gradient">Professional.</span>
                            </h2>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '450px', fontWeight: '500', lineHeight: 1.6 }}>
                                Get the CHALOO app for real-time connection requests and instant updates on your sports journey.
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                                <a href="#" style={{ textDecoration: 'none' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 24px', background: 'white', color: 'var(--chalo-navy)', borderRadius: '16px', fontWeight: '900', transition: 'all 0.3s ease' }} className="cta-store">
                                        <Smartphone size={20} /> App Store
                                    </div>
                                </a>
                                <a href="#" style={{ textDecoration: 'none' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 24px', background: 'rgba(255,255,255,0.05)', color: 'white', borderRadius: '16px', fontWeight: '900', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s ease' }} className="cta-store">
                                        <ChevronRight size={20} /> Play Store
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Section */}
                    <div style={{ height: '100%', minHeight: '400px', position: 'relative', overflow: 'hidden' }}>
                        <img
                            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1500"
                            alt="CHALOO App"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to right, rgba(2, 11, 25, 1) 0%, rgba(2, 11, 25, 0.4) 30%, transparent 100%)'
                        }} />
                    </div>
                </div>
            </motion.div>

            <style>{`
                .cta-store:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                }
                @media (max-width: 900px) {
                    div[style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; }
                    div[style*="padding: 80px 10%"] { padding: 60px 8% !important; }
                    div[style*="height: 100%"] { height: 300px !important; order: -1; }
                    div[style*="background: linear-gradient"] { 
                        background: linear-gradient(to bottom, rgba(2, 11, 25, 1) 0%, transparent 100%) !important; 
                    }
                }
            `}</style>
        </section>
    );
};

export default AppDownload;
