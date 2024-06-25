import styles from '../DiceEdge.module.scss'
import { Dot } from 'lucide-react'

export const DiceEdge_3=()=>{
    return(
        <div className={styles.container}>
            <div className={`${styles.diceEdge_3} ${styles.diceEdge}`}>
                <div className={styles.firstDot}>
                    <Dot className={styles.dot}/>    
                </div>
                <div className={styles.centralDot}>
                    <Dot className={styles.dot}/>    
                </div>
                <div className={styles.sixthDot}>
                    <Dot className={styles.dot}/>   
                </div>
            </div>
        </div>
    )
}