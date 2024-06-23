import styles from './styles/BetVariantBtn.module.scss'

interface BetVariantBtnProps{
    selectedStyle: boolean,
    onClick: (e: React.MouseEvent<HTMLButtonElement>)=>void,
    name: string
}

export const BetVariantBtn = (props: BetVariantBtnProps)=>{
    const handleClick=(e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        props.onClick(e)
    }
    return(
        <button 
            className={`${styles.btn} ${props.selectedStyle ? styles.selectedBtn : ''}`} 
            onClick={handleClick}
        >
            {props.name}
        </button>
    )
}