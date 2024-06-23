import styles from './CubePage.module.scss'
import { CubeTemplate } from '../Templates/CubeTemplate'
import { useState } from 'react'

export const CubePage = ()=>{

    const [selectedBet, setSelectedBet]=useState('')

    const handleBetClick=(betType:string, e: React.MouseEvent<HTMLButtonElement>)=>{
        
        setSelectedBet(betType)
    }

    return(
        <div>
            <div className={styles.h1Module}>
                <h1 className={styles.h1}>Сделайте ставку</h1> 
            </div>
           <div className={styles.template}>
                <CubeTemplate selectedBet={selectedBet} setSelectedBet={handleBetClick} />
           </div>
        </div>
    )
}