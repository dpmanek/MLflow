import { KPICard } from '../../components/KPICard/KPICard';
import { ChartCard } from '../../components/ChartCard/ChartCard';
import styles from './Analytics.module.css';

export const Analytics = () => {
	return (
		<div className={styles.container}>
			<div className={styles.kpiSection}>
				<KPICard title="Answer Relevance" value="85%" />
				<KPICard title="Answer Correctness" value="92%" />
				<KPICard title="Latency" value="1.2s" />
				<KPICard title="Readability" value="95%" />
			</div>

			<div className={styles.chartSection}>
				<ChartCard title="Topic Level and Plot Scores (LLM as a judge metrics)" />
				<ChartCard title="Topic Level and Plot Scores (Latency)" />
				<ChartCard title="Topic Level and Plot Scores (Readability & Toxicity)" />
				<ChartCard title="Chart 4" />
				<ChartCard title="Chart 5" />
				<ChartCard title="Chart 6" />
			</div>
		</div>
	);
};
