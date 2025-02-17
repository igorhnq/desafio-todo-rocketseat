import { Button } from './Button'

import styles from './Input.module.css'

export function Input() {
    return (
        <form>
            <input 
                className={styles.input} 
                type="text" 
                placeholder='Adicione uma nova tarefa'
            />
            
            <Button />
        </form>
    )
}