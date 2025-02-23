import { useState } from 'react'
import { Button } from './Button'

import styles from './Input.module.css'

export function Input({ onAddTask }) {
    const [newTaskText, setNewTaskText] = useState('')

    function handleNewTaskTextChange(event) {
        setNewTaskText(event.target.value)
    }

    function handleNewTaskSubmit(event) {
        event.preventDefault()

        onAddTask(newTaskText)
        setNewTaskText('')
    }

    return (
        <form onSubmit={handleNewTaskSubmit}>
            <input 
                className={styles.input} 
                type="text" 
                placeholder='Adicione uma nova tarefa'
                onChange={handleNewTaskTextChange}
                value={newTaskText}
            />
            
            <Button disabled={newTaskText.length === 0} />
        </form>
    )
}