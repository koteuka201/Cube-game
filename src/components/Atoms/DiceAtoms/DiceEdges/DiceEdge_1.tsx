import styles from '../DiceEdge.module.scss'
import { Dot } from 'lucide-react'

export const DiceEdge_1=()=>{
    return(
        <div className={styles.container}>
            <div className={`${styles.diceEdge_1} ${styles.diceEdge}`}>
                <div className={styles.centralDot}>
                    <Dot className={styles.dot}/>
                </div>
            </div>
        </div>
        
    )
}