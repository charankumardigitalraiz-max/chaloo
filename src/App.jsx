import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ExplorePage from './components/ExplorePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';


const App = () => {
    const location = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const hideNavbarPaths = ['/privacy', '/terms'];
    const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

    return (
        <div style={{ background: 'var(--chalo-bg)', minHeight: '100vh' }}>
            {!shouldHideNavbar && <Navbar />}
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/explore" element={<ExplorePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<TermsConditions />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
};
//
export default App;
