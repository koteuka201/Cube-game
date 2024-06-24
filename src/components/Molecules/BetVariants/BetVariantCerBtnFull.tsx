import { BetVariantSelect } from "../../Atoms/BetAtoms/BetVariantSelect"
import { BetVariantCerBtn } from "../../Atoms/BetAtoms/BetVariantCerBtn"
import { useBet } from '../../../context/BetContext'
import { useState } from "react"

interface BetVariantCerBtnFullProps{
    selectedStyle: boolean
}


export const BetVariantCerBtnFull=(props: BetVariantCerBtnFullProps)=>{
    
    const {selectedBet, setSelectedBet}= useBet()

    const [value,setValue]=useState(1)
    const handleClick=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        if(selectedBet.length!==1){
            setSelectedBet([value])
        }
    }
    const handleChange = (newValue: number) => {
        setSelectedBet([newValue]);
        setValue(newValue)
    }
    
    return(
        <BetVariantCerBtn 
            onclick={handleClick}
            selectComponent={
                <BetVariantSelect 
                    value={value}
                    onChange={handleChange} 
                    selectedStyle={props.selectedStyle}
                />
            } 
            selectedStyle={props.selectedStyle}
        />
    )
}