import styles from './styles/BetVariant.module.scss'
import { BetVariantBtn } from '../../Atoms/BetAtoms/BetVariantBtn'
import { BetVariantCerBtnFull } from './BetVariantCerBtnFull'
import { useBet } from '../../../context/BetContext'

export const BetVariant=()=>{

    const {selectedBet, setSelectedBet}= useBet()

    const isSelected = (bet: number[]) => bet.every(num => selectedBet.includes(num))

    return(
        <div className={styles.container}>
            <div className={styles.pModule}>
                <p className={styles.p}>Варианты ставок</p>
            </div>
            <div className={styles.evenModule}>
                <BetVariantBtn
                    selectedStyle={isSelected([2, 4, 6])}
                    onClick={() => setSelectedBet([2, 4, 6])}
                    name='Четное'
                />
            </div>
            <div className={styles.oddModule}>
                <BetVariantBtn
                    selectedStyle={isSelected([1, 3, 5])}
                    onClick={() => setSelectedBet([1, 3, 5])}
                    name='Нечетное'
                />
            </div>
            <div className={styles.firstNumsModule}>
                <BetVariantBtn
                    selectedStyle={isSelected([1, 2, 3])}
                    onClick={() => setSelectedBet([1, 2, 3])}
                    name='От 1 до 3'
                />
            </div>
            <div className={styles.secondNumsModule}>
                <BetVariantBtn
                    selectedStyle={isSelected([4, 5, 6])}
                    onClick={() => setSelectedBet([4, 5, 6])}
                    name='От 4 до 6'
                />
            </div>
            <div className={styles.cerNumModule}>
                <BetVariantCerBtnFull
                    selectedStyle={selectedBet.length===1 ? true : false}
                />
            </div>
        </div>
    )
    
}