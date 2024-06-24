import styles from './CubePage.module.scss'
import { CubeTemplate } from '../Templates/CubeTemplate'
import { useBet } from '../../context/BetContext'
import { CheckWin } from '../../helpers/CheckWin'
import { useEffect, useState } from 'react'

export const CubePage = ()=>{

    const {isRollFinished}=useBet()
    const {selectedBet,finalNumber}=useBet()

    const [betVariant,setBetVariant]=useState<number[]>([0])
    

    useEffect(()=>{
        
        setBetVariant(selectedBet)
    },[finalNumber])
    console.log(betVariant)

    return(
        <div>
            <div className={styles.headingModule}>
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
            </div>
           <div className={styles.template}>
                <CubeTemplate />
           </div>
        </div>
    )
}