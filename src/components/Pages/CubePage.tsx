import styles from './CubePage.module.scss'
import { CubeTemplate } from '../Templates/CubeTemplate'
import { HeadingDice } from '../Molecules/HeadingDice/HeadingDice'

export const CubePage = ()=>{
    return(
        <div>
            <div className={styles.headingModule}>
                <HeadingDice/>
            </div>
           <div className={styles.template}>
                <CubeTemplate />
           </div>
        </div>
    )
}