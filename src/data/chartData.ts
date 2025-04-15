import Highcharts from 'highcharts';

// Sample data for different chart types

// Line chart data for Topic Level and Plot Scores (LLM as a judge metrics)
export const llmJudgeData = {
	categories: [
		'Topic 1',
		'Topic 2',
		'Topic 3',
		'Topic 4',
		'Topic 5',
		'Topic 6',
	],
	series: [
		{
			name: 'Relevance',
			type: 'line' as const,
			data: [85, 78, 92, 84, 89, 91],
			color: '#0066cc',
		},
		{
			name: 'Correctness',
			type: 'line' as const,
			data: [92, 88, 95, 89, 93, 90],
			color: '#4a9eff',
		},
		{
			name: 'Completeness',
			type: 'line' as const,
			data: [80, 75, 88, 82, 85, 87],
			color: '#66b3ff',
		},
	] as Highcharts.SeriesOptionsType[],
};

// Column chart data for Topic Level and Plot Scores (Latency)
export const latencyData = {
	categories: [
		'Topic 1',
		'Topic 2',
		'Topic 3',
		'Topic 4',
		'Topic 5',
		'Topic 6',
	],
	series: [
		{
			name: 'Response Time (seconds)',
			type: 'column' as const,
			data: [1.2, 1.5, 0.9, 1.3, 1.1, 1.0],
			color: '#4a9eff',
		},
	] as Highcharts.SeriesOptionsType[],
};

// Area chart data for Topic Level and Plot Scores (Readability & Toxicity)
export const readabilityToxicityData = {
	categories: [
		'Topic 1',
		'Topic 2',
		'Topic 3',
		'Topic 4',
		'Topic 5',
		'Topic 6',
	],
	series: [
		{
			name: 'Readability',
			type: 'area' as const,
			data: [95, 88, 92, 90, 94, 93],
			color: '#0066cc',
			fillOpacity: 0.3,
		},
		{
			name: 'Non-Toxicity',
			type: 'area' as const,
			data: [98, 97, 99, 96, 98, 99],
			color: '#4a9eff',
			fillOpacity: 0.3,
		},
	] as Highcharts.SeriesOptionsType[],
};

// Pie chart data for Content Distribution
export const contentDistributionData = {
	series: [
		{
			name: 'Content Type',
			type: 'pie' as const,
			data: [
				{ name: 'Technical', y: 45, color: '#0066cc' },
				{ name: 'Business', y: 25, color: '#4a9eff' },
				{ name: 'General', y: 15, color: '#66b3ff' },
				{ name: 'Industry', y: 10, color: '#99ccff' },
				{ name: 'Other', y: 5, color: '#cce6ff' },
			],
		},
	] as Highcharts.SeriesOptionsType[],
};

// Bar chart data for Model Comparison
export const modelComparisonData = {
	categories: [
		'Relevance',
		'Correctness',
		'Latency',
		'Readability',
		'Non-Toxicity',
	],
	series: [
		{
			name: 'Model A',
			type: 'bar' as const,
			data: [85, 92, 78, 95, 98],
			color: '#0066cc',
		},
		{
			name: 'Model B',
			type: 'bar' as const,
			data: [82, 88, 85, 90, 97],
			color: '#4a9eff',
		},
		{
			name: 'Model C',
			type: 'bar' as const,
			data: [78, 85, 90, 88, 99],
			color: '#66b3ff',
		},
	] as Highcharts.SeriesOptionsType[],
};

// Scatter plot data for Latency vs Accuracy
export const latencyAccuracyData = {
	series: [
		{
			name: 'Model Performance',
			type: 'scatter' as const,
			data: [
				[0.8, 78],
				[1.0, 80],
				[1.2, 85],
				[1.4, 88],
				[1.6, 90],
				[1.8, 91],
				[2.0, 92],
				[2.2, 93],
				[2.4, 94],
				[2.6, 94],
				[2.8, 95],
				[3.0, 95],
			],
			color: '#0066cc',
		},
	] as Highcharts.SeriesOptionsType[],
	xAxisTitle: 'Latency (seconds)',
	yAxisTitle: 'Accuracy (%)',
};
