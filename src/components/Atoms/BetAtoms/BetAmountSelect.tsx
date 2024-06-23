import { useState } from 'react'
import styles from './styles/BetAmountSelect.module.scss'

export const BetAmountSelect = ()=>{

    const [isOpen, setIsOpen] = useState(false);

    return(
        <select 
            className={`${styles.select} ${isOpen ? styles.open : ''}`}
            id='BetSelect'
            onMouseDown={()=>setIsOpen(!isOpen)}
            onBlur={()=>setIsOpen(false)}
        >
            <option value={1.00}>1.00</option>
            <option value={2.00}>2.00</option>
            <option value={3.00}>3.00</option>
            <option value={5.00}>5.00</option>
            <option value={10.00}>10.00</option>
            <option value={25.00}>25.00</option>
            <option value={60.00}>60.00</option>
            <option value={100.00}>100.00</option>
        </select>
    )
}