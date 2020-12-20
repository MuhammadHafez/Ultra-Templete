import React from 'react';
import './Index.css';

import About from '../About/About';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Portofolio from '../Portofolio/Portofolio';
import Profile from '../Profile/Profile';
import SocialMedia from '../SocialMedia/SocialMedia';
import Work from '../Work/Work';

const Index = () => {
    return (
        <div>
            <Home />
            <Work />
            <Portofolio />
            <Profile />
            <About />
            <SocialMedia />
            <Footer />
        </div>
    )
}

export default Index;