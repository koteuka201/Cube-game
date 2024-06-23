import styles from './styles/SubmitBtn.module.scss'

interface SubmitBtnProps{
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void;
}

export const SubmitBtn = ()=>{
    return(
        <button className={styles.btn}>
            Сделать ставку
        </button>
    )
}