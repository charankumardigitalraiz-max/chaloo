import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, School, Users, ArrowRight, Star, Target, Shield, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const sportsZones = [
    {
        id: 'academies',
        title: 'Elite Academies',
        subtitle: 'Pro Training',
        description: 'Discover top-tier sports academies with world-class facilities and verified coaching standards for serious athletes.',
        icon: <School size={22} />,
        accent: 'var(--chalo-blue)',
        image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=80&w=1200',
        tag: 'VERIFIED',
        points: ['Certified Infrastructure', 'Hostel Facilities', 'Performance Nutrition']
    },
    {
        id: 'coaches',
        title: 'Master Coaches',
        subtitle: 'Expert Mentorship',
        description: 'Connect with seasoned mentors who bring years of professional experience to help you master your game.',
        icon: <Trophy size={22} />,
        accent: '#10B981',
        image: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?auto=format&fit=crop&q=80&w=1200',
        tag: 'CERTIFIED',
        points: ['Tailored Drills', 'Strategic Mentorship', 'Progress Tracking']
    },
    {
        id: 'players',
        title: 'Pro Players',
        subtitle: 'Elite Network',
        description: 'Join a dynamic community of athletes. Build your sports identity and get noticed by the right scouts and mentors.',
        icon: <Users size={22} />,
        accent: 'var(--chalo-gold)',
        image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&q=80&w=1200',
        tag: 'JOIN NOW',
        points: ['Athlete Portfolio', 'Networking Events', 'Skill Endorsements']
    }
];

const Zones = () => {
    const navigate = useNavigate();

    return (
        <section id="zones" style={{
            background: 'var(--chalo-bg)',
            padding: '120px 6%',
            position: 'relative'
        }}>
            {/* Architectural Background Decoration */}
            <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '1px', background: 'linear-gradient(to left, var(--border-glass), transparent)' }} />

            <div style={{ maxWidth: '1400px', marginInline: 'auto' }}>
                <div style={{ marginBottom: '64px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'var(--chalo-blue)',
                            background: 'rgba(0, 210, 255, 0.1)',
                            padding: '8px 20px',
                            borderRadius: '50px',
                            fontWeight: '900',
                            fontSize: '0.75rem',
                            marginBottom: '20px',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase'
                        }}
                    >
                        <Target size={14} /> THE CHALOO PLATFORM
                    </motion.div>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: '950', color: 'white', marginBottom: '16px', letterSpacing: '-0.04em' }}>
                        Designed for <span className="text-gradient">Performance.</span>
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '650px',
                        lineHeight: 1.6,
                        fontWeight: '500'
                    }}>
                        Empowering the three pillars of excellence: Academies, Coaches, and Players.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: '32px'
                }}>
                    {sportsZones.map((zone, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: "circOut" }}
                            style={{
                                background: 'rgba(255, 255, 255, 0.02)',
                                borderRadius: '32px',
                                overflow: 'hidden',
                                border: '1px solid var(--border-glass)',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
                                position: 'relative'
                            }}
                            whileHover={{ y: -12, borderColor: 'rgba(255,255,255,0.15)', boxShadow: '0 40px 80px rgba(0,0,0,0.4)' }}
                        >
                            <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                                <img src={zone.image} alt={zone.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} className="zone-img" />
                                <div style={{
                                    position: 'absolute',
                                    top: '24px',
                                    right: '24px',
                                    background: 'rgba(0,0,0,0.6)',
                                    backdropFilter: 'blur(10px)',
                                    padding: '6px 16px',
                                    borderRadius: '100px',
                                    color: 'white',
                                    fontSize: '0.65rem',
                                    fontWeight: '900',
                                    letterSpacing: '0.1em',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    {zone.tag}
                                </div>
                                <div style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    left: '0',
                                    right: '0',
                                    height: '50%',
                                    background: 'linear-gradient(to top, rgba(2, 11, 25, 0.8), transparent)'
                                }} />
                            </div>

                            <div style={{ padding: '15px', display: 'flex', flexDirection: 'column', flex: 1, position: 'relative' }}>
                                {/* <div style={{ 
                                    width: '56px', 
                                    height: '56px', 
                                    background: 'rgba(255,255,255,0.03)', 
                                    borderRadius: '16px', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    marginBottom: '28px',
                                    color: zone.accent,
                                    border: '1px solid rgba(255,255,255,0.05)'
                                }}>
                                    {zone.icon}
                                </div> */}

                                <div style={{ marginBottom: '5px' }}>
                                    <h5 style={{ color: zone.accent, fontSize: '0.75rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>{zone.subtitle}</h5>
                                    <h3 style={{ fontSize: '1.8rem', fontWeight: '950', color: 'white', marginBottom: '12px', letterSpacing: '-0.03em' }}>{zone.title}</h3>
                                    <p style={{
                                        fontSize: '0.95rem',
                                        color: 'var(--text-secondary)',
                                        lineHeight: 1.6,
                                        fontWeight: '500'
                                    }}>{zone.description}</p>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '14px',
                                    marginBottom: '36px',
                                    flex: 1
                                }}>
                                    {zone.points.map((pt, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.85rem', color: 'white', fontWeight: '800' }}>
                                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: zone.accent }} />
                                            {pt}
                                        </div>
                                    ))}
                                </div>

                                {/* <button
                                    className="btn-zone"
                                    onClick={() => navigate('/explore')}
                                    style={{
                                        width: '100%',
                                        background: 'rgba(255,255,255,0.03)',
                                        color: 'white',
                                        padding: '16px',
                                        borderRadius: '18px',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        fontWeight: '900',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '10px',
                                        fontSize: '0.9rem',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    Learn More <ArrowUpRight size={16} style={{ opacity: 0.5 }} />
                                </button> */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                .btn-zone:hover {
                    background: white !important;
                    color: var(--chalo-navy) !important;
                    transform: translateY(-2px);
                }
                .zone-img {
                    transform: scale(1);
                }
                div[style*="transition: all 0.5s"]:hover .zone-img {
                    transform: scale(1.08);
                }
            `}</style>
        </section>
    );
};

export default Zones;

