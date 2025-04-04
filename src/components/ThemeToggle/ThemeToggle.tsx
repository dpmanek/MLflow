import { HiOutlineLightBulb, HiLightBulb } from 'react-icons/hi';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './ThemeToggle.module.css';

export const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			className={styles.toggleButton}
			onClick={toggleTheme}
			aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
		>
			{theme === 'light' ? (
				<HiOutlineLightBulb className={styles.icon} />
			) : (
				<HiLightBulb className={styles.icon} />
			)}
		</button>
	);
};
