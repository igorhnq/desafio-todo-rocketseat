import { PlusCircle } from '@phosphor-icons/react'

import styles from './Button.module.css'

export function Button({ disabled }) {
    return (
        <button disabled={disabled} className={styles.button}>
            Criar
            <PlusCircle size={20} />
        </button>
    )
}