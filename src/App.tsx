import './index.scss'
import styles from './App.module.scss'
import { CubePage } from './components/Pages/CubePage'

export const App = ()=>{
  return(
    <div className={styles.container}>
      <CubePage/>
    </div>
  )
}
