import styles from '../DiceEdge.module.scss'
import { Dot } from 'lucide-react'

export const DiceEdge_2=()=>{
    return(
        <div className={styles.container}>
            <div className={`${styles.diceEdge_2} ${styles.diceEdge}`}>
                <div className={styles.firstDot}>
                    <Dot className={styles.dot}/>    
                </div>
                <div className={styles.sixthDot}>
                    <Dot className={styles.dot}/>   
                </div>
            </div>
        </div>
    )
}