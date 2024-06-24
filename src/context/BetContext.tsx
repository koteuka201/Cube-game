import React, { ReactNode, createContext, useContext, useState } from 'react';

interface BetContextProps {
    selectedBet: string;
    setSelectedBet: (betType: string) => void;
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
    const [selectedBet, setSelectedBet]=useState<string>('')

    const value={
        selectedBet,
        setSelectedBet
    }

    return <BetContext.Provider value={value}>{props.children}</BetContext.Provider>
}