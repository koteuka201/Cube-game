import { BetAmountSelect } from "../../Atoms/BetAtoms/BetAmountSelect"
import styles from './BetSelect.module.scss'

export const BetSelect=()=>{
    return(
        <div>
            <label htmlFor="BetSelect" className={styles.label}>Размер ставки</label>
            <BetAmountSelect/>
        </div>
    )
}