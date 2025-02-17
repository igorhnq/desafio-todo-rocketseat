import { Header } from './components/Header'
import { Input } from './components/Input'

import styles from './App.module.css'

import './global.css'
import { Task } from './components/Task'

export function App() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <Input />
                <div className={styles.header}>
                    <div>
                        <h2>Tarefas criadas</h2>
                        <p>5</p>
                    </div>

                    <div>
                        <h2>Concluídas</h2>
                        <p>2 de 5</p>
                        <p>5</p>
                    </div>
                </div>
                <Task />
            </div>
        </div>
    )
}