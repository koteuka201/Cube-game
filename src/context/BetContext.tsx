import React, { ReactNode, createContext, useContext, useState } from 'react';

interface BetContextProps {
    selectedBet: number[];
    setSelectedBet: (betType: number[]) => void;
    betValue: number;
    setBetValue: (betValue: number)=>void;
}

const BetContext = createContext<BetContextProps | undefined>(undefined)

export const useBet = () => {
    
    const context = useContext(BetContext);
    if (!context) {
        throw new Error('err')
    }
    return context
}

export const BetProvider =(props:{children:ReactNode})=>{
    const [selectedBet, setSelectedBet]=useState<number[]>([])
    const [betValue,setBetValue]=useState<number>(1.00)

    const value={
        selectedBet,
        setSelectedBet,
        betValue,
        setBetValue
    }

    return <BetContext.Provider value={value}>{props.children}</BetContext.Provider>
}