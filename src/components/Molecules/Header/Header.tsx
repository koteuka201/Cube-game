import styles from './Header.module.scss'
import { useBetStore } from '../../../store/store'

export const Header=()=>{

    const {balance}=useBetStore()

    return(
        <header className={styles.container}>
            <div className={styles.name}>Dice game</div>
            <div className={styles.balance}>{balance} (TDN)</div>
        </header>
    )
}