import styles from './styles/BetVariant.module.scss'
import { BetVariantBtn } from '../../Atoms/BetAtoms/BetVariantBtn'
import { BetVariantCerBtnFull } from './BetVariantCerBtnFull'

export const BetVariant=()=>{

    const handleBetClick = (betType: string) => {
        
    };

    return(
        <div className={styles.container}>
            <div className={styles.pModule}>
                <p className={styles.p}>Варианты ставок</p>
            </div>
            <div className={styles.evenModule}>
                <BetVariantBtn
                    selectedValue="selectedValue"
                    onClick={() => handleBetClick('Четное')}
                    name='Четное'
                />
            </div>
            <div className={styles.oddModule}>
                <BetVariantBtn
                    selectedValue="selectedValue"
                    onClick={() => handleBetClick('Нечетное')}
                    name='Нечетное'
                />
            </div>
            <div className={styles.firstNumsModule}>
                <BetVariantBtn
                    selectedValue="selectedValue"
                    onClick={() => handleBetClick('От 1 до 3')}
                    name='От 1 до 3'
                />
            </div>
            <div className={styles.secondNumsModule}>
                <BetVariantBtn
                    selectedValue="selectedValue"
                    onClick={() => handleBetClick('От 4 до 6')}
                    name='От 4 до 6'
                />
            </div>
            <div className={styles.cerNumModule}>
                <BetVariantCerBtnFull/>
            </div>
        </div>
    )
    
}