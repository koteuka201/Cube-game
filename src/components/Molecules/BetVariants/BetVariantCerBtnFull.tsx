import { BetVariantSelect } from "../../Atoms/BetAtoms/BetVariantSelect"
import { BetVariantCerBtn } from "../../Atoms/BetAtoms/BetVariantCerBtn"
import { useState } from "react"

export const BetVariantCerBtnFull=()=>{

    const [value, setValue]=useState(1)

    const handleClick=(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        event.preventDefault()
    }
    const handleChange = (newValue: number) => {
        setValue(newValue);
    }
    return(
        <BetVariantCerBtn 
            onclick={handleClick}
            selectComponent={<BetVariantSelect onChange={handleChange}/>} 
        />
    )
}