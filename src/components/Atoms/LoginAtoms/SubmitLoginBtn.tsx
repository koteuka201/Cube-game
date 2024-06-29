import styles from './styles/SubmitLoginBtn.module.scss'

interface SubmitLoginBtnProps{
    data: string,
    onClick: ()=>void
}

export const SubmitLoginBtn =(props: SubmitLoginBtnProps)=>{
    
    const handleClick=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        props.onClick()
    }

    return(
        <button
            className={styles.btn}
            onClick={handleClick}
        >Войти</button>
    )
}