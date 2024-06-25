import { useBet } from "../../../context/BetContext";
import { CheckWin } from "../../../helpers/CheckWin";
import { useEffect, useState } from "react";
import styles from './Heading.module.scss'

export const Heading = ()=>{

    const {isRollFinished}=useBet()
    const {selectedBet,finalNumber}=useBet()

    const [betVariant,setBetVariant]=useState<number[]>([0])
    

    useEffect(()=>{
        
        setBetVariant(selectedBet)
    },[finalNumber])

    return(
            <>
                {isRollFinished ? 
                    (
                        <div>
                            <div className={styles.h1}>Результат броска кубика: {finalNumber}</div>
                            {CheckWin(betVariant,finalNumber) ? (
                                    <div className={styles.h2}>Вы выиграли</div>
                                ) : (
                                    <div className={styles.h2}>Повезет в следующий раз!</div>
                                )
                                
                            }
                        </div>
                        
                    ) : (
                        <div>
                            <div className={styles.h1}>Сделайте ставку</div>
                            <div className={styles.h2}></div>
                        </div>
                        
                    )
                }
            </>

    )
}