import styles from './CubeForm.module.scss'
import { BetVariant } from '../../Molecules/BetVariants/BetVariant'
export const CubeForm=()=>{
    return(
        <form className={styles.container}>
            <div className={styles.select}>
                
            </div>
            <div className={styles.betVariant}>
                <BetVariant/>
            </div>
            <div className={styles.submit}>
                
            </div>
        </form>
    )
}