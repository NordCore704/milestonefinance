'use client'
import React, { createContext, useState } from 'react';

const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
    const [selectedCrypto, setSelectedCrypto] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [amount, setAmount] = useState(null);

    return (
        <CryptoContext.Provider value={{ selectedCrypto, setSelectedCrypto, selectedPlan, setSelectedPlan, setAmount, amount, }}>
            {children}
        </CryptoContext.Provider>
    );
};

export default CryptoContext;