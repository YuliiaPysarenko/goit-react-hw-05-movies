import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
    return (
        <nav className={styles.Navigation}>
            <NavLink to="/" className={({ isActive }) => isActive ? `${styles.activeLink} ${styles.link}` : styles.link}>Home</NavLink>
            <NavLink to="/movies" className={({ isActive }) => isActive ? `${styles.activeLink} ${styles.link}` : styles.link}>Movies</NavLink>
            {/* <NavLink to="/movies" className={styles.link} activeClassName={styles.activeLink}>Movies</NavLink> */}
        </nav>
    )
}

export default Navigation;