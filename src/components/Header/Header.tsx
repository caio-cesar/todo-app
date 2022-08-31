import rocketLogo from '../../assets/rocket-logo.svg';

import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={rocketLogo} />
                <div className={styles.textContainer}>
                    <span className={styles.blueText}>to</span>
                    <span className={styles.purpleDark}>do</span>
                </div>
            </div>
        </header>
    )
}