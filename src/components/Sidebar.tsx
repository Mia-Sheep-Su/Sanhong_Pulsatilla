import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import styles from "../styles/Sidebar.module.css";

const sections = [
    { label: "白頭翁的特性", path: "/" },
    { label: "白頭翁的故事", path: "/story" },
    { label: "白頭翁的美照", path: "/photo" },
    { label: "白頭翁的危機", path: "/crisis" },
];

export default function Sidebar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    return (<>
        {/* Sidebar */}
        <div className={styles.sidebar}>
            <div className={styles["sidebar-header"]}>
                <button className={styles["menu-button"]}
                    onClick={() => setMenuOpen((prev) => !prev)}>
                    {menuOpen ? <X /> : <Menu />}
                </button>
                <h1 className={styles.title}>白頭翁不吃小米</h1>
                <div className={styles.logo}>
                    <Logo /></div>
            </div>

            <nav className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
                <ul>
                    {sections.map(({ label, path }) => (
                        <li key={path}>
                            <Link
                                to={path}
                                className={isActive(path) ? styles.selected : styles.noselected}
                                onClick={() => setMenuOpen(false)}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </>
    )
}