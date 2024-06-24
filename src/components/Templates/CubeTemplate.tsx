import { CubeForm } from '../Organisms/CubeForms/CubeForm'
import styles from './CubeTemplate.module.scss'
import { Dice } from '../Organisms/CubeElement/Dice'
import { DiceEdge_1 } from '../Atoms/DiceAtoms/DiceEdges/DiceEdge_1'
import { useBet } from '../../context/BetContext'


export const CubeTemplate = () =>{

    const {finalNumber}=useBet()

    return(
        <div className={styles.container}>
            <div className={styles.cubeModule}>
                {finalNumber!==0 ?
                    (
                    <Dice/>
                ) : (
                    <DiceEdge_1/>
                )    
                
                }
                
            </div>
            <div className={styles.formModule}>
                <CubeForm />
            </div>
        </div>
    )
}