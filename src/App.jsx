import { Header } from './components/Header'
import { Input } from './components/Input'
import { Task } from './components/Task'

import clipboardIcon from './assets/clipboard-icon.svg'

import styles from './App.module.css'

import './global.css'

const tasks = []

export function App() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <Input />
                <div className={styles.header}>
                    <div className={styles.leftHeader}>
                        <h2>Tarefas criadas</h2>
                        <p className={styles.tasksNumber}>5</p>
                    </div>
                    <div className={styles.rightHeader}>
                        <h2>Concluídas</h2>
                        <p className={styles.tasksNumber}>2 de 5</p>
                    </div>
                </div>
                {tasks.length === 0 ? (
                    <div className={styles.taskWrapper}>
                        <div className={styles.noTasksContainer}>
                            <div className={styles.noTasksContainerContent}>
                                <img src={clipboardIcon} />
                                <h2>Você ainda não tem tarefas cadastradas</h2>
                                <p>Crie tarefas e organize seus itens a fazer</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={styles.taskWrapper}>
                        {tasks.map((task) => (
                            <Task />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}