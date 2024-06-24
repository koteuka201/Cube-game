import './index.scss'
import styles from './App.module.scss'
import { CubePage } from './components/Pages/CubePage'
import { BetProvider } from './context/BetContext'

export const App = ()=>{
  return(
    <BetProvider>
      <div className={styles.container}>
        <CubePage/>
      </div>
    </BetProvider>
  )
}
