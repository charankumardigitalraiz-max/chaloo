import React from 'react';
import { motion } from 'framer-motion';

const AppDownload = () => {
    return (
        <section style={{
            background: 'var(--soft-bg)',
            padding: '60px 24px 80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Ambient glow */}
            <div style={{
                position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                width: '800px', height: '400px',
                background: 'radial-gradient(ellipse, rgba(255,0,127,0.06) 0%, transparent 70%)',
                filter: 'blur(60px)', pointerEvents: 'none'
            }} />

            {/* Wrapper: relative so buttons can be absolutely positioned over the image */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="app-download-wrapper"
                style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '900px',
                    borderRadius: '24px',
                    overflow: 'visible',
                }}
            >
                {/* Banner Image */}
                <div style={{
                    width: '100%',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 24px 80px -10px rgba(0,0,0,0.12)',
                }}>
                    <img
                        src="/banner.png"
                        alt="Little Hearts – hi there! Enjoy 30% off on every coin package"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </div>

                {/* Store Buttons — overlay top-right on desktop, below on mobile */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="store-buttons"
                    style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '12px',
                    }}
                >
                    {/* App Store */}
                    <a
                        href=""
                        aria-label="Download on the App Store"
                        className="store-btn"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '10px 20px',
                            background: 'rgba(0,0,0,0.82)',
                            backdropFilter: 'blur(12px)',
                            borderRadius: '14px',
                            textDecoration: 'none',
                            boxShadow: '0 6px 24px rgba(0,0,0,0.25)',
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                            whiteSpace: 'nowrap',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 14px 36px rgba(0,0,0,0.32)'; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.25)'; }}
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        <div>
                            <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.65)', fontWeight: '600', lineHeight: 1, marginBottom: '2px' }}>Download on the</div>
                            <div style={{ fontSize: '1rem', color: 'white', fontWeight: '800', lineHeight: 1 }}>App Store</div>
                        </div>
                    </a>

                    {/* Google Play */}
                    <a
                        href=""
                        aria-label="Get it on Google Play"
                        className="store-btn"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '10px 20px',
                            background: 'rgba(0,0,0,0.82)',
                            backdropFilter: 'blur(12px)',
                            borderRadius: '14px',
                            textDecoration: 'none',
                            boxShadow: '0 6px 24px rgba(0,0,0,0.25)',
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                            whiteSpace: 'nowrap',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 14px 36px rgba(0,0,0,0.32)'; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.25)'; }}
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.18 23.76c.37.21.78.24 1.16.1l12.37-7.14-2.68-2.69L3.18 23.76z" fill="#EA4335" />
                            <path d="M20.47 10.26 17.3 8.43 14.3 11.4l3 3 3.17-1.83c.9-.52.9-1.8 0-2.31z" fill="#FBBC04" />
                            <path d="M4.34.14C3.96 0 3.55.03 3.18.24L14.3 11.4l2.68-2.68L4.34.14z" fill="#4285F4" />
                            <path d="M3.18.24C2.45.66 2 1.47 2 2.4v19.2c0 .93.45 1.74 1.18 2.16l11.12-11.36L3.18.24z" fill="#34A853" />
                        </svg>
                        <div>
                            <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.65)', fontWeight: '600', lineHeight: 1, marginBottom: '2px' }}>Get it on</div>
                            <div style={{ fontSize: '1rem', color: 'white', fontWeight: '800', lineHeight: 1 }}>Google Play</div>
                        </div>
                    </a>
                </motion.div>
            </motion.div>

            <style>{`
                /* Mobile: pull buttons out of overlay, place them below banner */
                @media (max-width: 640px) {
                    .store-buttons {
                        position: static !important;
                        margin-top: 20px;
                        flex-direction: column !important;
                        width: 100%;
                        padding: 0 4px;
                    }
                    .store-btn {
                        justify-content: center;
                        width: 100% !important;
                    }
                    .app-download-wrapper {
                        overflow: visible !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default AppDownload;
