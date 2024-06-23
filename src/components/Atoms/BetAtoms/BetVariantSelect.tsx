import styles from './styles/BetVariantCer.module.scss'

interface BetVariantSelectProps{
    valueVariant: number
    onChange: (newValue: number)=>void
}

export const BetVariantSelect = (props: BetVariantSelectProps)=>{
    return(
        <select 
            value={props.valueVariant}
            onChange={(e) => props.onChange(parseInt(e.target.value))}
            className={styles.select}
        >
            <option value={1} selected>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
        </select>
    )
}