import styles from '../DiceEdge.module.scss'
import { Dot } from 'lucide-react'

export const DiceEdge_5=()=>{
    return(
        <div className={`${styles.diceEdge_5} ${styles.diceEdge}`}>
            <div className={styles.firstDot}>
                <Dot className={styles.dot}/>    
            </div>
            <div className={styles.secondDot}>
                <Dot className={styles.dot}/>    
            </div>
            <div className={styles.centralDot}>
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