import styles from './CubeForm.module.scss'
import { BetVariant } from '../../Molecules/BetVariants/BetVariant'
import { SubmitBtn } from '../../Atoms/BetAtoms/SubmitBtn'
import { BetSelect } from '../../Molecules/BetSelect/BetSelect'

export const CubeForm=()=>{
    return(
        <form className={styles.container}>
            <div className={styles.select}>
                <BetSelect/>
            </div>
            <div className={styles.betVariant}>
                <BetVariant/>
            </div>
            <div className={styles.submit}>
                <SubmitBtn/>
            </div>
        </form>
    )
}