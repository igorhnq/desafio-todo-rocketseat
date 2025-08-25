import { useState, FormEvent, ChangeEvent } from 'react'
import { Button } from './Button'
import { InputProps } from '../types'

import styles from './Input.module.css'

export function Input({ onAddTask }: InputProps) {
    const [newTaskText, setNewTaskText] = useState('')

    function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskText(event.target.value)
    }

    function handleNewTaskSubmit(event: FormEvent<HTMLFormElement>) {
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
