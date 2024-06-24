import { CubeForm } from '../Organisms/CubeForms/CubeForm'
import styles from './CubeTemplate.module.scss'
import { Dice } from '../Organisms/CubeElement/Dice'

export const CubeTemplate = () =>{
    
    return(
        <div className={styles.container}>
            <div className={styles.cubeModule}>
                <Dice/>
            </div>
            <div className={styles.formModule}>
                <CubeForm />
            </div>
        </div>
    )
}