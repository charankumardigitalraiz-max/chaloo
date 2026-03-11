import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';

const AppPromo = () => {
    return (
        <section id="app" style={{
            background: 'var(--soft-bg)',
            padding: '60px 8%',
            overflow: 'hidden'
        }}>
            <div style={{
                maxWidth: '1100px',
                marginInline: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '40px',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
            }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{ 
                        width: '100%', 
                        position: 'relative',
                        borderRadius: '32px',
                        overflow: 'hidden',
                        boxShadow: '0 40px 80px -20px rgba(0,0,0,0.15)',
                    }}
                    className="promo-container"
                >
                    <img
                        src="https://images.unsplash.com/photo-1530549387634-e53529c7abd6?auto=format&fit=crop&q=80&w=1500"
                        alt="CHALOO Sports Platform"
                        style={{
                            width: '100%',
                            height: '450px',
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    />

                    {/* Banner Text Overlay */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(45deg, rgba(2,6,23,0.9) 0%, rgba(2,6,23,0.3) 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: '0 60px',
                        textAlign: 'left'
                    }}>
                        <h2 style={{ color: 'white', fontSize: '2.8rem', fontWeight: '950', marginBottom: '12px', letterSpacing: '-0.03em' }}>
                            Elevate Your <br /> <span style={{ color: 'var(--chalo-blue)' }}>Sports Journey</span>
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '500px', fontWeight: '500' }}>
                            Experience India's most advanced sports ecosystem. Verified talent, professional guidance.
                        </p>
                    </div>

                    {/* Store Buttons - Responsive Positioning */}
                    <div className="promo-buttons" style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '12px',
                        zIndex: 10
                    }}>
                        <motion.button
                            whileHover={{ scale: 1.05, x: -5 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'rgba(0, 0, 0, 0.8)',
                                backdropFilter: 'blur(10px)',
                                color: 'white',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '10px 18px',
                                borderRadius: '14px',
                                display: 'flex',
                                gap: '10px',
                                alignItems: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                            }}
                        >
                            <Apple fill="white" size={20} />
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '0.65rem', opacity: 0.7 }}>App Store</div>
                                <div style={{ fontWeight: '800', fontSize: '0.85rem' }}>Download</div>
                            </div>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, x: -5 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'rgba(0, 0, 0, 0.8)',
                                backdropFilter: 'blur(10px)',
                                color: 'white',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '10px 18px',
                                borderRadius: '14px',
                                display: 'flex',
                                gap: '10px',
                                alignItems: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                            }}
                        >
                            <Play fill="white" size={20} />
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '0.65rem', opacity: 0.7 }}>Google Play</div>
                                <div style={{ fontWeight: '800', fontSize: '0.85rem' }}>Get it on</div>
                            </div>
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            <style>{`
                .promo-buttons {
                    position: absolute;
                    top: 25px;
                    right: 25px;
                }
                @media (max-width: 768px) {
                    .promo-buttons {
                        position: relative !important;
                        top: 0 !important;
                        right: 0 !important;
                        margin-top: 20px;
                        justify-content: center;
                        flex-wrap: wrap;
                    }
                    .promo-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default AppPromo;
