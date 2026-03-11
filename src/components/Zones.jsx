import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, School, Users, ArrowRight, Star, Target, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const sportsZones = [
    {
        id: 'academies',
        title: 'Elite Academies',
        subtitle: 'Professional Training',
        description: 'CHALOO lists top-rated sports academies with verified facilities. Players can browse, compare, and send connection requests directly.',
        icon: <School size={24} />,
        color: '#3B82F6',
        image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=80&w=800',
        tag: 'VERIFIED ACADEMIES',
        points: ['Certified Infrastructure', 'Hostel Facilities', 'Nutrition Plans', 'Direct Admissions']
    },
    {
        id: 'coaches',
        title: 'Master Coaches',
        subtitle: 'Expert Mentorship',
        description: 'Find verified sports coaches for one-on-one training. Coaches set their schedule and fee — players connect after both agree.',
        icon: <Trophy size={24} />,
        color: '#10B981',
        image: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?auto=format&fit=crop&q=80&w=800',
        tag: 'VERIFIED COACHES',
        points: ['15+ Years Experience', 'Custom Skill Drills', 'Performance Reviews', 'Secure Contact']
    },
    {
        id: 'players',
        title: 'Pro Players',
        subtitle: 'Athletic Network',
        description: 'Players can build a profile, express interest in coaches or academies, and join an elite sporting community.',
        icon: <Users size={24} />,
        color: '#F59E0B',
        image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&q=80&w=800',
        tag: 'PLAYER NETWORK',
        points: ['Public Profile', 'Find Academies', 'Connect with Coaches', 'Track Progress']
    }
];

const Zones = () => {
    const navigate = useNavigate();

    return (
        <section id="zones" style={{
            background: 'var(--chalo-bg)',
            padding: '72px 8%'
        }}>
            <div style={{ maxWidth: '1400px', marginInline: 'auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: 'var(--chalo-blue)',
                            background: 'rgba(59,130,246,0.1)',
                            padding: '10px 24px',
                            borderRadius: '50px',
                            fontWeight: '800',
                            fontSize: '0.85rem',
                            marginBottom: '24px',
                            letterSpacing: '0.05em'
                        }}
                    >
                        <Target size={14} /> THE CHALOO PLATFORM
                    </motion.div>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: '950', color: 'var(--chalo-navy)', marginBottom: '20px', letterSpacing: '-0.03em' }}>
                        Who is CHALOO <span style={{ color: 'var(--chalo-blue)' }}>For?</span>
                    </h2>
                    <p style={{
                        fontSize: '1.15rem',
                        color: 'var(--chalo-slate)',
                        maxWidth: '700px',
                        marginInline: 'auto',
                        lineHeight: 1.6
                    }}>
                        CHALOO connects three key pillars of the sports world — Academies, Coaches, and Players — all in one trusted platform.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '32px'
                }}>
                    {sportsZones.map((zone, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            style={{
                                background: 'white',
                                borderRadius: '32px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
                                border: '1px solid rgba(0,0,0,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform 0.3s ease'
                            }}
                            whileHover={{ y: -8 }}
                        >
                            <div style={{ height: '170px', position: 'relative' }}>
                                <img src={zone.image} alt={zone.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '20px',
                                    background: 'white',
                                    padding: '6px 16px',
                                    borderRadius: '100px',
                                    color: zone.color,
                                    fontSize: '0.7rem',
                                    fontWeight: '900',
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                }}>
                                    {zone.tag}
                                </div>
                                <div style={{
                                    position: 'absolute',
                                    bottom: '20px',
                                    left: '20px',
                                    background: zone.color,
                                    padding: '12px',
                                    borderRadius: '16px',
                                    color: 'white',
                                    boxShadow: `0 10px 20px ${zone.color}33`
                                }}>
                                    {React.cloneElement(zone.icon, { size: 20 })}
                                </div>
                            </div>

                            <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <div style={{ marginBottom: '24px' }}>
                                    <h5 style={{ color: zone.color, fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>{zone.subtitle}</h5>
                                    <h3 style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--chalo-navy)', marginBottom: '12px', letterSpacing: '-0.02em' }}>{zone.title}</h3>
                                    <p style={{
                                        fontSize: '0.9rem',
                                        color: 'var(--chalo-slate)',
                                        lineHeight: 1.5,
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}>{zone.description}</p>
                                </div>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, 1fr)',
                                    gap: '16px 24px',
                                    marginBottom: '32px',
                                    flex: 1
                                }}>
                                    {zone.points.map((pt, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: 'var(--chalo-navy)', fontWeight: '700' }}>
                                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: zone.color, flexShrink: 0 }} />
                                            {pt}
                                        </div>
                                    ))}
                                </div>

                                <button
                                    style={{
                                        width: '100%',
                                        justifyContent: 'center',
                                        background: 'var(--chalo-navy)',
                                        color: 'white',
                                        padding: '13px',
                                        borderRadius: '14px',
                                        border: 'none',
                                        fontWeight: '800',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        fontSize: '0.85rem'
                                    }}
                                    onClick={() => navigate('/explore')}
                                >
                                    Learn More <ArrowRight size={14} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Zones;

