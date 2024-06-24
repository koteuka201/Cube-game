import styles from './styles/SubmitBtn.module.scss'
import { useBet } from '../../../context/BetContext'

export const SubmitBtn = ()=>{

    const {rollDice}=useBet()
    const {trigger, setTrigger}=useBet()
    const {selectedBet,setSelectedBet}=useBet()
    
    const handleClick=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        rollDice()
        setTrigger(!trigger)
    }

    return(
        <button 
            className={styles.btn} 
            onClick={handleClick}
            disabled={selectedBet.length!==0 ? false : true}
        >
            Сделать ставку
        </button>
    )
}