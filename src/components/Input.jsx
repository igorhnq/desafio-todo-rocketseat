import { PlusCircle } from '@phosphor-icons/react'
import styles from './Input.module.css'

export function Input() {
    return (
        <form>
            <input 
                className={styles.input} 
                type="text" 
                placeholder='Adicione uma nova tarefa'
            />
            
            <button>
                Criar
                <PlusCircle size={20} />
            </button>
        </form>
    )
}