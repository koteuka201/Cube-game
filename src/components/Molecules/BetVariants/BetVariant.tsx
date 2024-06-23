import styles from './styles/BetVariant.module.scss'
import { BetVariantBtn } from '../../Atoms/BetAtoms/BetVariantBtn'
import { BetVariantCerBtnFull } from './BetVariantCerBtnFull'

interface BetVariantProps{
    selectedBet: string;
    setSelectedBet: (betType:string,e: React.MouseEvent<HTMLButtonElement>)=>void
}

export const BetVariant=(props: BetVariantProps)=>{

    return(
        <div className={styles.container}>
            <div className={styles.pModule}>
                <p className={styles.p}>Варианты ставок</p>
            </div>
            <div className={styles.evenModule}>
                <BetVariantBtn
                    selectedStyle={props.selectedBet === 'Четное' ? true : false}
                    onClick={(e) => props.setSelectedBet('Четное',e)}
                    name='Четное'
                />
            </div>
            <div className={styles.oddModule}>
                <BetVariantBtn
                    selectedStyle={props.selectedBet === 'Нечетное' ? true : false}
                    onClick={(e) => props.setSelectedBet('Нечетное',e)}
                    name='Нечетное'
                />
            </div>
            <div className={styles.firstNumsModule}>
                <BetVariantBtn
                    selectedStyle={props.selectedBet === '1-3' ? true : false}
                    onClick={(e) => props.setSelectedBet('1-3',e)}
                    name='От 1 до 3'
                />
            </div>
            <div className={styles.secondNumsModule}>
                <BetVariantBtn
                    selectedStyle={props.selectedBet === '4-6' ? true : false}
                    onClick={(e) => props.setSelectedBet('4-6',e)}
                    name='От 4 до 6'
                />
            </div>
            <div className={styles.cerNumModule}>
                <BetVariantCerBtnFull/>
            </div>
        </div>
    )
    
}