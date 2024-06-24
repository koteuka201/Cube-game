import styles from '../DiceEdge.module.scss'
import { Dot } from 'lucide-react'

export const DiceEdge_4=()=>{
    return(
        <div className={`${styles.diceEdge_4} ${styles.diceEdge}`}>
            <div className={styles.firstDot}>
                <Dot className={styles.dot}/>    
            </div>
            <div className={styles.secondDot}>
                <Dot className={styles.dot}/>    
            </div>
            <div className={styles.fifthDot}>
                <Dot className={styles.dot}/>   
            </div>
            <div className={styles.sixthDot}>
                <Dot className={styles.dot}/>   
            </div>
        </div>
    )
}