import styles from './styles/BetVariantCer.module.scss'

interface BetVariantSelectProps{
    onChange: (newValue: number)=>void
}

export const BetVariantSelect = (props: BetVariantSelectProps)=>{
    return(
        <select 
            defaultValue={1}
            onChange={(e) => props.onChange(parseInt(e.target.value))}
            className={styles.select}
            
        >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
        </select>
    )
}