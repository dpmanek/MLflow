import { KPICard } from '../../components/KPICard/KPICard';
import { ChartCard } from '../../components/ChartCard/ChartCard';
import { HighchartsComponent } from '../../components/HighchartsComponent/HighchartsComponent';
import styles from './Analytics.module.css';
import {
	llmJudgeData,
	latencyData,
	readabilityToxicityData,
	latencyAccuracyData,
	questionsByTopicData,
	passPercentageData,
	passDistributionByTopicData,
	metricsComparisonData,
	readabilityAccuracyData,
} from '../../data/chartData';

export const Analytics = () => {
	return (
		<div className={styles.container}>
			<div className={styles.kpiSection}>
				<KPICard title="High Answer Relevance" value="84%" />
				<KPICard title="High Answer Correctness" value="93%" />
				<KPICard title="Average Latency" value="1.3s" />
				<KPICard title="High Readability" value="95%" />
				<KPICard title="Low Toxicity Response" value="32%" />
			</div>

			{/* Row 2 - New charts */}
			<div className={styles.chartSection}>
				<ChartCard title="Number of Questions by Topic">
					<HighchartsComponent
						chartType="pie"
						title=""
						series={questionsByTopicData.series}
						height="300px"
					/>
				</ChartCard>
				<ChartCard title="Pass Percentage">
					<HighchartsComponent
						chartType="column"
						title=""
						series={passPercentageData.series}
						categories={passPercentageData.categories}
						xAxisTitle="Result"
						yAxisTitle="Percentage (%)"
						height="300px"
					/>
				</ChartCard>
				<ChartCard title="Pass % Distribution by Topic">
					<HighchartsComponent
						chartType="scatter"
						title=""
						series={passDistributionByTopicData.series}
						xAxisTitle={passDistributionByTopicData.xAxisTitle}
						yAxisTitle={passDistributionByTopicData.yAxisTitle}
						height="300px"
					/>
				</ChartCard>
			</div>

			{/* Row 3 - Original Row 2 charts */}
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
			</div>

			{/* Row 4 - New and rearranged charts */}
			<div className={styles.chartSection}>
				<ChartCard title="Metrics Comparison">
					<HighchartsComponent
						chartType="column"
						title=""
						series={metricsComparisonData.series}
						categories={metricsComparisonData.categories}
						xAxisTitle="Models"
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
				<ChartCard title="Readability vs Accuracy">
					<HighchartsComponent
						chartType="scatter"
						title=""
						series={readabilityAccuracyData.series}
						xAxisTitle={readabilityAccuracyData.xAxisTitle}
						yAxisTitle={readabilityAccuracyData.yAxisTitle}
						height="300px"
					/>
				</ChartCard>
			</div>
		</div>
	);
};
