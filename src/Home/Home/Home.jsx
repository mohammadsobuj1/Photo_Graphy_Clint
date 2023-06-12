import React from 'react';
import Banner from '../Banner/Banner';
import PopulerClasses from '../PopulerClasses/PopulerClasses';
import Exhibition from '../Exhibition/Exhibition';
import PopulerInstractor from '../PopulerInstractor/PopulerInstractor';

const Home = () => {
    return (
        <div >
            <Banner />
            <PopulerClasses />
           <PopulerInstractor/>
            <Exhibition/>
        </div>
    );
};

export default Home;