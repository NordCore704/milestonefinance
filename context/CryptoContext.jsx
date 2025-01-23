'use client'
import React, { createContext, useState } from 'react';

const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
    const [selectedCrypto, setSelectedCrypto] = useState({});
    const [selectedPlan, setSelectedPlan] = useState('');
    const [amount, setAmount] = useState('');
    const [memo, setMemo] = useState('');

    return (
        <CryptoContext.Provider value={{ selectedCrypto, setSelectedCrypto, selectedPlan, setSelectedPlan, setAmount, amount, memo, setMemo }}>
            {children}
        </CryptoContext.Provider>
    );
};

export default CryptoContext;