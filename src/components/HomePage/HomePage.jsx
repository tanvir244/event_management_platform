import React from 'react';
import Slider from './Slider';
import Footer from '../shared/Footer';
import OurProcess from './OurProcess';
import OfferPage from './OfferPage';
import TraditionalPage from './TraditionalPage';

const HomePage = () => {
    return (
        <div>
            <Slider />
            <TraditionalPage />
            <OurProcess />
            <OfferPage />
            <Footer />
        </div>
    );
};

export default HomePage;