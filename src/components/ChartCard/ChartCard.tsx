import React from 'react';
import styles from './ChartCard.module.css';

interface ChartCardProps {
	title: string;
	children?: React.ReactNode;
}

export const ChartCard = ({ title, children }: ChartCardProps) => {
	return (
		<div className={styles.card}>
			<h3 className={styles.title}>{title}</h3>
			<div className={styles.content}>
				{children ? (
					<div className={styles.chart}>{children}</div>
				) : (
					<div className={styles.placeholder}>Chart will be displayed here</div>
				)}
			</div>
		</div>
	);
};
