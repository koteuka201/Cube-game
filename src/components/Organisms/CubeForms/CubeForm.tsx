import styles from './CubeForm.module.scss'
import { BetVariant } from '../../Molecules/BetVariants/BetVariant'
import { SubmitBtn } from '../../Atoms/BetAtoms/SubmitBtn'
import { BetSelect } from '../../Molecules/BetSelect/BetSelect'

interface CubeFormProps{
    selectedBet: string;
    setSelectedBet: (betType:string, e: React.MouseEvent<HTMLButtonElement>)=>void
}

export const CubeForm=(props: CubeFormProps)=>{
    return(
        <form className={styles.container}>
            <div className={styles.select}>
                <BetSelect/>
            </div>
            <div className={styles.betVariant}>
                <BetVariant selectedBet={props.selectedBet} setSelectedBet={props.setSelectedBet}/>
            </div>
            <div className={styles.submit}>
                <SubmitBtn/>
            </div>
        </form>
    )
}