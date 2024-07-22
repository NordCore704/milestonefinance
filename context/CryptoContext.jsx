'use client'
import React, { createContext, useState } from 'react';

const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
    const [selectedCrypto, setSelectedCrypto] = useState({});
    const [selectedPlan, setSelectedPlan] = useState('');
    const [amount, setAmount] = useState('');

    return (
        <CryptoContext.Provider value={{ selectedCrypto, setSelectedCrypto, selectedPlan, setSelectedPlan, setAmount, amount, }}>
            {children}
        </CryptoContext.Provider>
    );
};

export default CryptoContext;