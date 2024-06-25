import { useBet } from "../../../context/BetContext";
import { CheckWin } from "../../../helpers/CheckWin";
import { CalculateProfit } from "../../../helpers/CalculateProfit";
import { useEffect, useState } from "react";
import styles from './HeadingDice.module.scss'

export const HeadingDice = ()=>{

    const {selectedBet,finalNumber,isRollFinished, betValue}=useBet()
    const [betVariant,setBetVariant]=useState<number[]>([0])
    const [betValueFix,setBetValueFix]=useState(0)

    useEffect(()=>{
        setBetValueFix(betValue)        
        setBetVariant(selectedBet)
    },[finalNumber])

    return(
            <>
                {isRollFinished ? 
                    (
                        <div>
                            <div className={styles.h1}>Результат броска кубика: {finalNumber}</div>
                            {CheckWin(betVariant,finalNumber) ? (
                                    <div className={styles.h2}>Вы выиграли {CalculateProfit(betValueFix,betVariant,finalNumber)} TND!</div>
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