import { Trash } from "@phosphor-icons/react";

import styles from './Task.module.css'

export function Task({ task }) {
    return (
        <div className={styles.taskWrapper}>
            <div>
                <input
                    className={styles.checkbox}
                    type="checkbox"
                />
                <p>{task.text}</p>
            </div>

            <button className={styles.button}>
                <Trash className={styles.trashIcon} size={22}/>
            </button>
        </div>
    )
}