import { DiceEdge_1 } from "../../Atoms/DiceAtoms/DiceEdges/DiceEdge_1";
import { DiceEdge_2 } from "../../Atoms/DiceAtoms/DiceEdges/diceEdge_2";
import { DiceEdge_3 } from "../../Atoms/DiceAtoms/DiceEdges/DiceEdge-3";
import { DiceEdge_4 } from "../../Atoms/DiceAtoms/DiceEdges/DiceEdge_4";
import { DiceEdge_5 } from "../../Atoms/DiceAtoms/DiceEdges/DiceEdge_5";
import { DiceEdge_6 } from "../../Atoms/DiceAtoms/DiceEdges/DiceEdge_6";
import { useBet } from "../../../context/BetContext";
import { useEffect, useState } from "react";

export const Dice = ()=>{

    const diceEdges = [
        <DiceEdge_1 key={1} />,
        <DiceEdge_2 key={2} />,
        <DiceEdge_3 key={3} />,
        <DiceEdge_4 key={4} />,
        <DiceEdge_5 key={5} />,
        <DiceEdge_6 key={6} />
    ]

    const {finalNumber}=useBet()
    const {trigger,setTrigger}=useBet()
    const [currentEdge, setCurrentEdge]=useState<React.ReactNode>(diceEdges[0])

    useEffect(()=>{
        let iteration=0
        let delay=5
        let timeoutId: ReturnType<typeof setTimeout>
        const roll=()=>{
            if (iteration<30){
                const index=Math.floor(Math.random()* diceEdges.length)
                setCurrentEdge(diceEdges[index])
                iteration++
                delay+=10
                timeoutId=setTimeout(roll, delay)
            }
            else{
                setCurrentEdge(diceEdges[finalNumber-1])
            }
        }

        roll()

        return ()=> clearTimeout(timeoutId)

    },[trigger])

    return(
        <div>
            {currentEdge}
        </div>
    )
}