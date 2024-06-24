import styles from './styles/BetVariant.module.scss'
import { BetVariantBtn } from '../../Atoms/BetAtoms/BetVariantBtn'
import { BetVariantCerBtnFull } from './BetVariantCerBtnFull'
import { useBet } from '../../../context/BetContext'

export const BetVariant=()=>{

    const {selectedBet, setSelectedBet}= useBet()

    return(
        <div className={styles.container}>
            <div className={styles.pModule}>
                <p className={styles.p}>Варианты ставок</p>
            </div>
            <div className={styles.evenModule}>
                <BetVariantBtn
                    selectedStyle={selectedBet === 'Четное' ? true : false}
                    onClick={(e) => setSelectedBet('Четное')}
                    name='Четное'
                />
            </div>
            <div className={styles.oddModule}>
                <BetVariantBtn
                    selectedStyle={selectedBet === 'Нечетное' ? true : false}
                    onClick={(e) => setSelectedBet('Нечетное')}
                    name='Нечетное'
                />
            </div>
            <div className={styles.firstNumsModule}>
                <BetVariantBtn
                    selectedStyle={selectedBet === '1-3' ? true : false}
                    onClick={(e) => setSelectedBet('1-3')}
                    name='От 1 до 3'
                />
            </div>
            <div className={styles.secondNumsModule}>
                <BetVariantBtn
                    selectedStyle={selectedBet === '4-6' ? true : false}
                    onClick={(e) => setSelectedBet('4-6')}
                    name='От 4 до 6'
                />
            </div>
            <div className={styles.cerNumModule}>
                <BetVariantCerBtnFull/>
            </div>
        </div>
    )
    
}