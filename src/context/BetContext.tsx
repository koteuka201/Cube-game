import React, { ReactNode, createContext, useContext, useState } from 'react';

interface BetContextProps {
    selectedBet: number[];
    setSelectedBet: (betType: number[]) => void;

    betValue: number;
    setBetValue: (betValue: number)=>void;

    finalNumber: number;
    rollDice: () => void;

    trigger: boolean;
    setTrigger: (trigger:boolean)=>void;

    isRollFinished: boolean;
    setIsRollFinished: (isRollFinished: boolean)=>void
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
    const [finalNumber, setFinalNumber] = useState<number>(0)
    const [trigger,setTrigger]=useState<boolean>(false)
    const [isRollFinished, setIsRollFinished]=useState(false)


    const rollDice = () => {
        const newNumber = Math.floor(Math.random() * 6) + 1
        setFinalNumber(newNumber)
    }

    const value={
        selectedBet,
        setSelectedBet,

        betValue,
        setBetValue,

        finalNumber,
        rollDice,

        trigger,
        setTrigger,

        isRollFinished,
        setIsRollFinished
    }

    return <BetContext.Provider value={value}>{props.children}</BetContext.Provider>
}