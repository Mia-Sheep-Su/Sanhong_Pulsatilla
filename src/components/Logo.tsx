import styles from "../styles/Logo.module.css"
import { Link } from 'react-router-dom';

export default function Logo() {
    return (
        <Link to="/" className={styles.logo} aria-label="回到首頁">
            <div className={styles["logo-hand"]}></div>
            <div className={styles["logo-eye"]}></div>
        </Link>
    )
}