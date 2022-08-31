import styles from './App.module.css'
import { Header } from './components/Header';
import { Main } from './components/Main';

import './global.css';

function App() {

  return (
    <div className="App">
        <Header />
        <Main />
    </div>
  )
}

export default App
