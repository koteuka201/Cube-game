import styles from './BetVariant.module.scss'
import { BetVariantBtn } from '../../Atoms/BetAtoms/BetVariantBtn'

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
                    name='Четное'
                />
            </div>
            <div className={styles.firstNumsModule}>
                <BetVariantBtn
                    selectedValue="selectedValue"
                    onClick={() => handleBetClick('От 1 до 3')}
                    name='Четное'
                />
            </div>
            <div className={styles.secondNumsModule}>
                <BetVariantBtn
                    selectedValue="selectedValue"
                    onClick={() => handleBetClick('От 4 до 6')}
                    name='Четное'
                />
            </div>
            <div className={styles.cerNumModule}>
                
            </div>
        </div>
    )
    
}