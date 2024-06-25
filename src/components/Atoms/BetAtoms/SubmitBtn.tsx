import styles from './styles/SubmitBtn.module.scss'
import { useBet } from '../../../context/BetContext'
import { useBetStore } from '../../../store/store'

export const SubmitBtn = ()=>{

    const {decreaseBalance, balance}=useBetStore()
    const {selectedBet,trigger, betValue ,setTrigger, rollDice}=useBet()

    const handleClick=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        if(balance-betValue>=0){
            rollDice()
            setTrigger(!trigger)
            decreaseBalance(betValue)
        }
        
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