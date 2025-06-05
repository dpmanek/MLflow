import Highcharts from 'highcharts';

// Sample data for different chart types
// New chart data for Row 2

// Pie chart data for Number of Questions by Topic
export const questionsByTopicData = {
	series: [
		{
			name: 'Questions',
			type: 'pie' as const,
			data: [
				{ name: 'Technical', y: 35, color: '#3498DB' }, // Blue
				{ name: 'Business', y: 20, color: '#2ECC71' }, // Green
				{ name: 'General', y: 25, color: '#E74C3C' }, // Red
				{ name: 'Industry', y: 15, color: '#F39C12' }, // Orange
				{ name: 'Other', y: 5, color: '#9B59B6' }, // Purple
			],
		},
	] as Highcharts.SeriesOptionsType[],
};

// Bar chart data for Pass Percentage with stacked reasons
export const passPercentageData = {
	categories: ['Yes', 'No'],
	series: [
		{
			name: 'Pass',
			type: 'column' as const,
			data: [75, 0],
			color: '#2E8B57', // Sea Green
		},
		{
			name: 'Incorrect Answer',
			type: 'column' as const,
			data: [0, 10],
			color: '#E74C3C', // Red
			stack: 'No',
			stacking: 'normal',
		},
		{
			name: 'Incomplete Response',
			type: 'column' as const,
			data: [0, 8],
			color: '#F39C12', // Orange
			stack: 'No',
			stacking: 'normal',
		},
		{
			name: 'Irrelevant Content',
			type: 'column' as const,
			data: [0, 7],
			color: '#9B59B6', // Purple
			stack: 'No',
			stacking: 'normal',
		},
	] as Highcharts.SeriesOptionsType[],
};

// Scatter plot data for Pass % distribution by Topic
export const passDistributionByTopicData = {
	series: [
		{
			name: 'Technical - Pass',
			type: 'scatter' as const,
			data: [
				[1, 80],
				[1.5, 82],
				[2, 78],
				[2.5, 85],
			],
			color: '#2980B9', // Blue
			marker: {
				symbol: 'circle',
			},
		},
		{
			name: 'Technical - Fail',
			type: 'scatter' as const,
			data: [
				[1.2, 40],
				[1.7, 35],
				[2.2, 30],
			],
			color: '#2980B9', // Blue
			marker: {
				symbol: 'triangle',
			},
		},
		{
			name: 'Business - Pass',
			type: 'scatter' as const,
			data: [
				[3, 75],
				[3.5, 78],
				[4, 72],
			],
			color: '#16A085', // Green
			marker: {
				symbol: 'circle',
			},
		},
		{
			name: 'Business - Fail',
			type: 'scatter' as const,
			data: [
				[3.2, 38],
				[3.7, 42],
			],
			color: '#16A085', // Green
			marker: {
				symbol: 'triangle',
			},
		},
		{
			name: 'General - Pass',
			type: 'scatter' as const,
			data: [
				[5, 70],
				[5.5, 75],
				[6, 68],
			],
			color: '#8E44AD', // Purple
			marker: {
				symbol: 'circle',
			},
		},
		{
			name: 'General - Fail',
			type: 'scatter' as const,
			data: [
				[5.2, 35],
				[5.7, 30],
				[6.2, 40],
			],
			color: '#8E44AD', // Purple
			marker: {
				symbol: 'triangle',
			},
		},
	] as Highcharts.SeriesOptionsType[],
	xAxisTitle: 'Topic Index',
	yAxisTitle: 'Pass Percentage (%)',
};

// Stacked column chart for Row 4 - Readability, Answer similarity, Toxicity
export const metricsComparisonData = {
	categories: ['Model A', 'Model B', 'Model C'],
	series: [
		{
			name: 'Readability',
			type: 'column' as const,
			data: [95, 88, 92],
			color: '#3498DB', // Blue
			stack: 'metrics',
			stacking: 'normal',
		},
		{
			name: 'Answer Similarity',
			type: 'column' as const,
			data: [84, 80, 78],
			color: '#27AE60', // Green
			stack: 'metrics',
			stacking: 'normal',
		},
		{
			name: 'Toxicity',
			type: 'column' as const,
			data: [32, 28, 35],
			color: '#E67E22', // Orange
			stack: 'metrics',
			stacking: 'normal',
		},
	] as Highcharts.SeriesOptionsType[],
};

// Scatter plot data for Readability vs Accuracy
export const readabilityAccuracyData = {
	series: [
		{
			name: 'Model Performance',
			type: 'scatter' as const,
			data: [
				[85, 78],
				[88, 80],
				[90, 85],
				[92, 88],
				[94, 90],
				[95, 91],
				[96, 92],
				[97, 93],
				[98, 94],
				[99, 95],
			],
			color: '#E74C3C', // Red
			marker: {
				radius: 6,
			},
		},
	] as Highcharts.SeriesOptionsType[],
	xAxisTitle: 'Readability (%)',
	yAxisTitle: 'Accuracy (%)',
};

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
			color: '#3498DB', // Blue
			lineWidth: 3,
		},
		{
			name: 'Correctness',
			type: 'line' as const,
			data: [92, 88, 95, 89, 93, 90],
			color: '#2ECC71', // Green
			lineWidth: 3,
		},
		{
			name: 'Completeness',
			type: 'line' as const,
			data: [80, 75, 88, 82, 85, 87],
			color: '#E74C3C', // Red
			lineWidth: 3,
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
			color: '#1ABC9C', // Turquoise
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
			color: '#9B59B6', // Purple
			fillOpacity: 0.5,
		},
		{
			name: 'Non-Toxicity',
			type: 'area' as const,
			data: [98, 97, 99, 96, 98, 99],
			color: '#F39C12', // Orange
			fillOpacity: 0.5,
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
			color: '#2980B9', // Blue
			marker: {
				radius: 6,
			},
		},
	] as Highcharts.SeriesOptionsType[],
	xAxisTitle: 'Latency (seconds)',
	yAxisTitle: 'Accuracy (%)',
};
