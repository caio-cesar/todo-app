
import { TaskList } from '../TaskList';

import styles from './Main.module.css';

export function Main() {
    return (
        <main className={styles.main}>
            <TaskList />
        </main>
    )
}