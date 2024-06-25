import './index.scss'
import styles from './App.module.scss'
import { CubePage } from './components/Pages/CubePage'
import { BetProvider } from './context/BetContext'
import { Header } from './components/Molecules/Header/Header'

export const App = ()=>{
  return(
    <BetProvider>
    
      <Header/>
      <section className={styles.container}>
        <CubePage/>
      </section>
    </BetProvider>
  )
}
