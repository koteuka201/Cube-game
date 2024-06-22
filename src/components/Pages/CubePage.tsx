import styles from './CubePage.module.scss'
import { CubeTemplate } from '../Templates/CubeTemplate'

export const CubePage = ()=>{
    return(
        <div >
            <div className={styles.h1Module}>
                <h1 className={styles.h1}>Сделайте ставку</h1> 
            </div>
           <div className={styles.template}>
                <CubeTemplate/>
           </div>
        </div>
    )
}