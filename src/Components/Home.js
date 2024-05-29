import React, { useState, useEffect } from 'react';

const Home = ({ setVisits }) => {
    useEffect(() => {
        setVisits(prev => prev + 1);
    }, [setVisits]);

    return (
        <div>
            <h1>Home Page</h1>
            <p>Banner ID: b00887629</p>
        </div>
    );
};

export default Home;
