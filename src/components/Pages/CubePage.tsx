import styles from './CubePage.module.scss'
import { CubeTemplate } from '../Templates/CubeTemplate'
import { Heading } from '../Molecules/Heading/Heading'

export const CubePage = ()=>{


    return(
        <div>
            <div className={styles.headingModule}>
                <Heading/>
            </div>
           <div className={styles.template}>
                <CubeTemplate />
           </div>
        </div>
    )
}