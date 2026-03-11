import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, School, Users, Sparkles, Shield, Zap, CreditCard, ChevronRight, Star, Search } from 'lucide-react';

const marketCategories = [
    { id: 'academies', label: 'Academies', icon: <School size={20} /> },
    { id: 'coaches', label: 'Coaches', icon: <Trophy size={20} /> },
    { id: 'players', label: 'Players', icon: <Users size={20} /> }
];

const listings = [
    {
        category: 'academies',
        title: 'Pro Basketball Academy',
        location: 'Hyderabad, India',
        rating: 4.9,
        reviews: 180,
        tags: ['Basketball', 'Pro Training'],
        img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80',
        fee: '₹399 to connect'
    },
    {
        category: 'academies',
        title: 'Elite Cricket Academy',
        location: 'Mumbai, India',
        rating: 4.9,
        reviews: 250,
        tags: ['Cricket', 'Professional'],
        img: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80',
        fee: '₹499 to connect'
    },
    {
        category: 'coaches',
        title: 'Coach Arjun Dev',
        location: 'Bangalore, India',
        rating: 5.0,
        reviews: 120,
        tags: ['Basketball', 'National Coach'],
        img: 'https://images.unsplash.com/photo-1519861531473-9200362f48b3?auto=format&fit=crop&q=80',
        fee: '₹299 to connect'
    },
    {
        category: 'players',
        title: 'Rohan Sharma',
        location: 'Delhi, India',
        rating: 4.7,
        reviews: 45,
        tags: ['Basketball', 'Point Guard'],
        img: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&q=80',
        fee: '₹199 to connect'
    }
];

const ExplorePage = () => {
    const [activeCat, setActiveCat] = useState('academies');

    const filteredListings = listings.filter(item => item.category === activeCat);

    return (
        <div style={{ paddingBottom: '60px', background: '#F8FAFC' }}>
            <section style={{ paddingTop: '90px', paddingBottom: '40px', textAlign: 'center', background: 'var(--chalo-navy)', color: 'white' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--chalo-blue)', background: 'rgba(59,130,246,0.1)', padding: '10px 24px', borderRadius: '50px', fontWeight: '800', fontSize: '0.9rem', marginBottom: '32px', border: '1px solid rgba(59,130,246,0.1)' }}
                >
                    <Star size={16} fill="var(--chalo-blue)" /> SPORTS MARKETPLACE
                </motion.div>
                <h1 style={{ fontSize: 'clamp(3rem, 7vw, 4.5rem)', fontWeight: '950', color: 'white', marginBottom: '24px', letterSpacing: '-0.04em', lineHeight: 1 }}>Browse the <span style={{ color: 'var(--chalo-blue)' }}>CHALOO Platform.</span></h1>
                <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto', fontWeight: '500', lineHeight: 1.6 }}>Find coaches, academies, and talented players listed on CHALOO — your gateway to India's trusted sports network.</p>
            </section>

            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 8%' }}>
                {/* Search & Filters */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {marketCategories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCat(cat.id)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '16px 32px',
                                    borderRadius: '50px',
                                    border: 'none',
                                    background: activeCat === cat.id ? 'var(--chalo-blue)' : 'white',
                                    color: activeCat === cat.id ? 'white' : 'var(--chalo-navy)',
                                    fontWeight: '800',
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {cat.icon} {cat.label}
                            </button>
                        ))}
                    </div>

                    <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
                        <Search size={24} style={{ position: 'absolute', left: '24px', top: '50%', transform: 'translateY(-50%)', color: 'var(--chalo-slate)' }} />
                        <input
                            type="text"
                            placeholder={`Search ${activeCat}...`}
                            style={{
                                width: '100%',
                                padding: '24px 24px 24px 64px',
                                borderRadius: '24px',
                                border: '1px solid rgba(0,0,0,0.08)',
                                outline: 'none',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.04)'
                            }}
                        />
                    </div>
                </div>

                {/* Listings Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
                    {filteredListings.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -8 }}
                            style={{ background: 'white', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.04)' }}
                        >
                            <div style={{ height: '220px', position: 'relative' }}>
                                <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.9)', padding: '8px 16px', borderRadius: '50px', fontWeight: '900', color: 'var(--chalo-navy)', display: 'flex', alignItems: 'center', gap: '6px', backdropFilter: 'blur(10px)', fontSize: '0.85rem' }}>
                                    <Star size={16} fill="var(--chalo-gold)" color="var(--chalo-gold)" /> {item.rating}
                                </div>
                            </div>
                            <div style={{ padding: '32px' }}>
                                <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                                    {item.tags.map(tag => (
                                        <span key={tag} style={{ background: 'var(--chalo-bg)', padding: '6px 16px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '800', color: 'var(--chalo-blue)' }}>{tag}</span>
                                    ))}
                                </div>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: '900', color: 'var(--chalo-navy)', marginBottom: '8px', letterSpacing: '-0.02em' }}>{item.title}</h3>
                                <p style={{ color: 'var(--chalo-slate)', fontSize: '0.95rem', fontWeight: '600', marginBottom: '24px' }}>{item.location}</p>

                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '32px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--chalo-slate)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Connection Fee</span>
                                        <span style={{ fontSize: '1.3rem', fontWeight: '950', color: 'var(--chalo-emerald)' }}>{item.fee}</span>
                                    </div>
                                    <button
                                        style={{
                                            background: 'var(--chalo-navy)',
                                            color: 'white',
                                            padding: '14px 24px',
                                            borderRadius: '16px',
                                            border: 'none',
                                            fontWeight: '900',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            fontSize: '0.9rem'
                                        }}
                                    >
                                        Connect <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Pay-to-Connect Explanation Banner */}
            <div style={{ maxWidth: '1400px', margin: '80px auto 0', padding: '0 8%' }}>
                <div style={{ background: 'var(--chalo-emerald)', borderRadius: '50px', padding: '60px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
                    <div style={{ maxWidth: '600px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                            <Shield size={24} />
                            <span style={{ fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Secure Network</span>
                        </div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '950', marginBottom: '16px', letterSpacing: '-0.02em' }}>Pay only when you connect.</h2>
                        <p style={{ fontSize: '1.2rem', fontWeight: '600', opacity: 0.9 }}>Your payment is only processed once both parties agree to connect. Safety and value, guaranteed.</p>
                    </div>
                    <CreditCard size={120} style={{ opacity: 0.2 }} />
                </div>
            </div>
        </div>
    );
};

export default ExplorePage;
