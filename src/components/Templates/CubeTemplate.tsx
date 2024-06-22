import { CubeForm } from '../Organisms/CubeForms/CubeForm'
import styles from './CubeTemplate.module.scss'

export const CubeTemplate = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.cubeModule}>
                
            </div>
            <div className={styles.formModule}>
                <CubeForm/>
            </div>
        </div>
    )
}