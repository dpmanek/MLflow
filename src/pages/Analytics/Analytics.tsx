import { KPICard } from '../../components/KPICard/KPICard';
import { ChartCard } from '../../components/ChartCard/ChartCard';
import { HighchartsComponent } from '../../components/HighchartsComponent/HighchartsComponent';
import styles from './Analytics.module.css';
import {
	llmJudgeData,
	latencyData,
	readabilityToxicityData,
	contentDistributionData,
	modelComparisonData,
	latencyAccuracyData,
} from '../../data/chartData';

export const Analytics = () => {
	return (
		<div className={styles.container}>
			<div className={styles.kpiSection}>
				<KPICard title="Answer Relevance" value="84%" />
				<KPICard title="Answer Correctness" value="93%" />
				<KPICard title="Latency" value="1.2s" />
				<KPICard title="Readability" value="95%" />
			</div>

			<div className={styles.chartSection}>
				<ChartCard title="Topic Level and Plot Scores (LLM as a judge metrics)">
					<HighchartsComponent
						chartType="line"
						title=""
						series={llmJudgeData.series}
						categories={llmJudgeData.categories}
						xAxisTitle="Topics"
						yAxisTitle="Score (%)"
						height="300px"
					/>
				</ChartCard>
				<ChartCard title="Topic Level and Plot Scores (Latency)">
					<HighchartsComponent
						chartType="column"
						title=""
						series={latencyData.series}
						categories={latencyData.categories}
						xAxisTitle="Topics"
						yAxisTitle="Response Time (seconds)"
						height="300px"
					/>
				</ChartCard>
				<ChartCard title="Topic Level and Plot Scores (Readability & Toxicity)">
					<HighchartsComponent
						chartType="area"
						title=""
						series={readabilityToxicityData.series}
						categories={readabilityToxicityData.categories}
						xAxisTitle="Topics"
						yAxisTitle="Score (%)"
						height="300px"
					/>
				</ChartCard>
				<ChartCard title="Content Distribution">
					<HighchartsComponent
						chartType="pie"
						title=""
						series={contentDistributionData.series}
						height="300px"
					/>
				</ChartCard>
				<ChartCard title="Model Comparison">
					<HighchartsComponent
						chartType="bar"
						title=""
						series={modelComparisonData.series}
						categories={modelComparisonData.categories}
						xAxisTitle="Metrics"
						yAxisTitle="Score (%)"
						height="300px"
					/>
				</ChartCard>
				<ChartCard title="Latency vs Accuracy">
					<HighchartsComponent
						chartType="scatter"
						title=""
						series={latencyAccuracyData.series}
						xAxisTitle={latencyAccuracyData.xAxisTitle}
						yAxisTitle={latencyAccuracyData.yAxisTitle}
						height="300px"
					/>
				</ChartCard>
			</div>
		</div>
	);
};
