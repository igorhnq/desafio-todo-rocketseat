import { Trash } from "@phosphor-icons/react";

import styles from './Task.module.css'

export function Task() {
    return (
        <div className={styles.taskWrapper}>
            <div>
                <input
                    className={styles.checkbox}
                    type="checkbox"
                />
                <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            </div>

            <button className={styles.button}>
                <Trash className={styles.trashIcon} size={22}/>
            </button>
        </div>
    )
}