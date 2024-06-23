import { CubeForm } from '../Organisms/CubeForms/CubeForm'
import styles from './CubeTemplate.module.scss'

interface CubeTemplateProps{
    selectedBet: string;
    setSelectedBet: (betType:string,e: React.MouseEvent<HTMLButtonElement>)=>void
}

export const CubeTemplate = (props:CubeTemplateProps) =>{
    return(
        <div className={styles.container}>
            <div className={styles.cubeModule}>
                
            </div>
            <div className={styles.formModule}>
                <CubeForm selectedBet={props.selectedBet} setSelectedBet={props.setSelectedBet}/>
            </div>
        </div>
    )
}