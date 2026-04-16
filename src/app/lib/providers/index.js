'use client';
import CardContext from '../../../context/cardContext';
import React from 'react';

const Providers = ({ children }) => {
    return (
        <CardContext>
            {children}
        </CardContext>
    );
};

export default Providers;