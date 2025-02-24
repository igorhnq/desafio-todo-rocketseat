import { Trash } from "@phosphor-icons/react";

import styles from './Task.module.css'

export function Task({ task, onDeleteTask, onToggleTaskCompletion }) {
    function handleDeleteTask() {
        onDeleteTask(task.id)
    }

    function handleToggleChange() {
        onToggleTaskCompletion(task.id)
    }

    return (
        <div className={styles.taskWrapper}>
            <div>
                <label className={styles.customCheckbox}>
                    <input
                        className={styles.checkbox}
                        type="checkbox"
                        checked={task.isCompleted}
                        onChange={handleToggleChange}
                    />
                    <span className={styles.checkmark}></span>
                </label>
                <p className={task.isCompleted ? styles.taskCompleted : ''}>
                    {task.text}
                </p>
            </div>

            <button className={styles.button} onClick={handleDeleteTask}>
                <Trash className={styles.trashIcon} size={22}/>
            </button>
        </div>
    )
}