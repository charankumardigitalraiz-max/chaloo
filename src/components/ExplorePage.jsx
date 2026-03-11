import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Search, Medal, Activity, Users, Zap, Award, ArrowUpRight, Filter } from 'lucide-react';

const listings = [
    {
        title: 'Cricket',
        subtitle: 'BATTING & BOWLING',
        description: 'Elite training, professional nets, and state-level coaching networks.',
        popularity: 'Most Popular',
        rating: 4.9,
        img: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800',
        tags: ['Outdoor', 'Professional'],
        accent: '#00D2FF'
    },
    {
        title: 'Football',
        subtitle: 'TACTICAL MASTERY',
        description: 'Modern academies and high-intensity tactical training centers.',
        popularity: 'Trending',
        rating: 4.8,
        img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800',
        tags: ['Outdoor', 'Tactical'],
        accent: '#FACC15'
    },
    {
        title: 'Basketball',
        subtitle: 'COURT DOMINANCE',
        description: 'Pro-grade courts and comprehensive skill development programs.',
        popularity: 'Rising',
        rating: 4.9,
        img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800',
        tags: ['Skills', 'Speed'],
        accent: '#F472B6'
    },
    {
        title: 'Badminton',
        subtitle: 'INDOR SPEED',
        description: 'World-class indoor facilities and specialized agility coaching.',
        popularity: 'Active',
        rating: 4.7,
        img: 'https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?auto=format&fit=crop&q=80&w=800',
        tags: ['Indoor', 'Reflexes'],
        accent: '#10B981'
    },
    {
        title: 'Tennis',
        subtitle: 'PRECISION PLAY',
        description: 'Premium clay and hard court listings for competitive play.',
        popularity: 'Elite',
        rating: 4.9,
        img: 'https://images.unsplash.com/flagged/photo-1576972405668-2d020a01cbfa?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['Technical', 'Precision'],
        accent: '#EAB308'
    },
    {
        title: 'Table Tennis',
        subtitle: 'REFLEX MASTERY',
        description: 'High-speed reflex training in professional club environments.',
        popularity: 'Focus',
        rating: 4.7,
        img: 'https://images.unsplash.com/photo-1461748659110-16121c049d52?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['Reflexes', 'Speed'],
        accent: '#A78BFA'
    },
    {
        title: 'Volleyball',
        subtitle: 'TEAM PERFORMANCE',
        description: 'Team performance clinics and competitive league networks.',
        popularity: 'Dynamic',
        rating: 4.8,
        img: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1000&auto=format&fit=crop',
        tags: ['Power', 'Teamwork'],
        accent: '#FF4E50'
    },
    // {
    //     title: 'Swimming',
    //     subtitle: 'AQUATIC ELITE',
    //     description: 'Olympic-size pools and specialized stroke correction facilities.',
    //     popularity: 'Premium',
    //     rating: 4.9,
    //     img: 'https://images.unsplash.com/photo-1519315530513-39908cf0a93c?auto=format&fit=crop&q=80&w=800',
    //     tags: ['Endurance', 'Professional'],
    //     accent: '#38BDF8'
    // },
    // {
    //     title: 'Kabaddi',
    //     subtitle: 'ANCIENT POWER',
    //     description: 'High-intensity wrestling and tactical team defense clinics.',
    //     popularity: 'Legendary',
    //     rating: 4.9,
    //     img: 'https://images.unsplash.com/photo-1626225453262-2ca51b0661ca?auto=format&fit=crop&q=80&w=800',
    //     tags: ['Power', 'Tactical'],
    //     accent: '#F97316'
    // }
];

const ExplorePage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'Outdoor', 'Indoor', 'Skills', 'Professional'];

    const filteredListings = listings.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesFilter = activeFilter === 'All' || item.tags.includes(activeFilter);
        return matchesSearch && matchesFilter;
    });

    return (
        <div style={{ background: 'var(--chalo-bg)', minHeight: '100vh', pb: '100px' }}>
            {/* Cinematic Header */}
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
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
                        <Award size={14} /> THE BATTLEGROUNDS
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: '950', color: 'white', marginBottom: '24px', letterSpacing: '-0.05em', lineHeight: 1.1 }}
                    >
                        Explore Your <br />
                        <span className="text-gradient">Empire.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontWeight: '500', lineHeight: 1.5 }}
                    >
                        Find world-class facilities and expert coaching tailored to your athletic discipline.
                    </motion.p>
                </div>
            </section>

            {/* Main Content Area */}
            <div style={{ maxWidth: '1400px', margin: '-60px auto 0', padding: '0 6%', position: 'relative', zIndex: 2 }}>

                {/* <div style={{
                    background: 'rgba(15, 23, 42, 0.6)',
                    backdropFilter: 'blur(30px)',
                    borderRadius: '32px',
                    padding: '24px',
                    border: '1px solid var(--border-glass)',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
                    marginBottom: '60px'
                }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
                        <div style={{ flex: 1, position: 'relative', minWidth: '300px' }}>
                            <Search size={18} style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--chalo-blue)', opacity: 0.7 }} />
                            <input
                                type="text"
                                placeholder="Search sports, tags, or styles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '16px 16px 16px 56px',
                                    borderRadius: '16px',
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    color: 'white',
                                    fontSize: '1rem',
                                    fontWeight: '500',
                                    outline: 'none',
                                    transition: 'all 0.3s ease'
                                }}
                                className="search-input"
                            />
                        </div>

        
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {filters.map(filter => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    style={{
                                        padding: '12px 20px',
                                        borderRadius: '14px',
                                        background: activeFilter === filter ? 'var(--chalo-blue)' : 'rgba(255,255,255,0.05)',
                                        color: activeFilter === filter ? 'white' : 'var(--text-secondary)',
                                        border: '1px solid',
                                        borderColor: activeFilter === filter ? 'transparent' : 'rgba(255,255,255,0.1)',
                                        fontSize: '0.85rem',
                                        fontWeight: '800',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                </div> */}

                {/* Results Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '32px',
                    marginBottom: '100px'
                }}>
                    <AnimatePresence mode="popLayout">
                        {filteredListings.length > 0 ? (
                            filteredListings.map((item, idx) => (
                                <motion.div
                                    layout
                                    key={item.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                    whileHover={{ y: -10 }}
                                    style={{
                                        background: 'rgba(15, 23, 42, 0.4)',
                                        borderRadius: '40px',
                                        overflow: 'hidden',
                                        border: '1px solid var(--border-glass)',
                                        boxShadow: '0 40px 80px rgba(0,0,0,0.3)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%'
                                    }}
                                >
                                    {/* Image Section */}
                                    <div style={{ height: '240px', position: 'relative', overflow: 'hidden' }}>
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            className="explore-img"
                                        />
                                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 0%, rgba(2, 6, 23, 0.8) 100%)' }} />

                                        <div style={{ position: 'absolute', top: '20px', left: '20px', background: 'var(--chalo-blue)', padding: '6px 14px', borderRadius: '100px', color: 'white', fontSize: '0.65rem', fontWeight: '900', letterSpacing: '0.1em' }}>
                                            {item.popularity}
                                        </div>

                                        <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <Star size={12} fill="#FACC15" color="#FACC15" />
                                            <span style={{ color: 'white', fontSize: '0.8rem', fontWeight: '900' }}>{item.rating}</span>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ marginBottom: '10px' }}>
                                            <h5 style={{ color: item.accent, fontSize: '0.75rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>{item.subtitle}</h5>
                                            <h3 style={{ fontSize: '1.8rem', fontWeight: '950', color: 'white', marginBottom: '12px', letterSpacing: '-0.04em' }}>{item.title}</h3>
                                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5, fontWeight: '500', marginBottom: '24px' }}>{item.description}</p>
                                        </div>

                                        <div style={{ marginTop: 'auto' }}>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                                                {item.tags.map(tag => (
                                                    <span key={tag} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '6px 14px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '800', color: 'var(--text-muted)' }}>{tag}</span>
                                                ))}
                                            </div>

                                            {/* <button
                                                style={{
                                                    width: '100%',
                                                    padding: '16px',
                                                    borderRadius: '16px',
                                                    background: 'white',
                                                    color: 'var(--chalo-navy)',
                                                    border: 'none',
                                                    fontSize: '0.95rem',
                                                    fontWeight: '900',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '8px',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                className="btn-explore-view"
                                            >
                                                Book Training <ArrowUpRight size={18} />
                                            </button> */}
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '100px 0' }}
                            >
                                <div style={{ fontSize: '4rem', marginBottom: '24px', filter: 'grayscale(1)' }}>🎯</div>
                                <h3 style={{ fontSize: '2rem', color: 'white', fontWeight: '950', marginBottom: '12px' }}>Ghost Protocol.</h3>
                                <p style={{ color: 'var(--text-secondary)', fontWeight: '500', maxWidth: '400px', margin: '0 auto' }}>No sports match your current search parameters. Try refining your filters.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Global Styles */}
            <style>{`
                .search-input:focus {
                    background: rgba(255,255,255,0.05) !important;
                    border-color: var(--chalo-blue) !important;
                    box-shadow: 0 0 0 4px rgba(0, 210, 255, 0.1) !important;
                }
                .btn-explore-view:hover {
                    background: var(--chalo-blue) !important;
                    color: white !important;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(0, 210, 255, 0.2);
                }
                .explore-img {
                    transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);
                }
                div[style*="height: 240px"]:hover .explore-img {
                    transform: scale(1.1);
                }
            `}</style>
        </div>
    );
};

export default ExplorePage;
