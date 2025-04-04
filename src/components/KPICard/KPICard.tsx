import styles from './KPICard.module.css';

interface KPICardProps {
	title: string;
	value: string | number;
}

export const KPICard = ({ title, value }: KPICardProps) => {
	return (
		<div className={styles.card}>
			<h3 className={styles.title}>{title}</h3>
			<div className={styles.value}>{value}</div>
		</div>
	);
};
