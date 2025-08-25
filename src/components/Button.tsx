import { PlusCircle } from '@phosphor-icons/react'
import { ButtonProps } from '../types'

import styles from './Button.module.css'

export function Button({ disabled }: ButtonProps) {
    return (
        <button disabled={disabled} className={styles.button}>
            Criar
            <PlusCircle size={20} />
        </button>
    )
}
