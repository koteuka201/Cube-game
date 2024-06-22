import styles from './styles/BetVariantBtn.module.scss'

interface BetVariantBtnProps{
    selectedValue: string,
    onClick: ()=>void,
    name: string
}

export const BetVariantBtn = (props: BetVariantBtnProps)=>{
    
    return(
        <button className={styles.btn} onClick={props.onClick}>
            {props.name}
        </button>
    )
}