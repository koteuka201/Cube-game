import { ReactNode } from 'react';
import styles from './styles/BetVariantCer.module.scss'

interface BetVariantCerBtnProps{
    onclick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void;
    selectComponent: ReactNode;
    selectedStyle: boolean
}

export const BetVariantCerBtn = (props:BetVariantCerBtnProps ) =>{
    
    return(
        <button 
            className={`${styles.btn} ${props.selectedStyle ? styles.selectedBtn : ''}`} 
            onClick={props.onclick}
        >
            Конкретное число
            {props.selectComponent}
        </button>
    )
    
}