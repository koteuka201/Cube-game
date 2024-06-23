import { ReactNode } from 'react';
import styles from './styles/BetVariantCer.module.scss'

interface BetVariantCerBtnProps{
    onclick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void;
    selectComponent: ReactNode;
}

export const BetVariantCerBtn = (props:BetVariantCerBtnProps ) =>{
    return(
        <button className={styles.btn} onClick={props.onclick}>
            Конкретное число
            {props.selectComponent}
        </button>
    )
    
}