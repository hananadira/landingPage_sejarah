import React from 'react';

import Section from '../components/Section';
import Landing from '../components/Landing';
import Tokoh from '../components/Tokoh';
import Footer from '../components/Footer';

function Home(props) {
    return (
        <div className="container">
            <Landing />
            <Section />
            <Tokoh />
            <Footer />
        </div>
    );
}

export default Home;