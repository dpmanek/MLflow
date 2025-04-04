import { NavLink } from 'react-router-dom';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './Navigation.module.css';
import lightLogo from '../../assets/light.png';
import darkLogo from '../../assets/dark.png';

export const Navigation = () => {
	const { theme } = useTheme();
	return (
		<nav className={styles.nav}>
			<img
				src={theme === 'light' ? lightLogo : darkLogo}
				alt="Mphasis Logo"
				className={styles.logo}
			/>
			<div className={styles.navLinks}>
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
					}
				>
					Home
				</NavLink>
				<NavLink
					to="/analytics"
					className={({ isActive }) =>
						isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
					}
				>
					Analytics
				</NavLink>
			</div>
			<ThemeToggle />
		</nav>
	);
};
