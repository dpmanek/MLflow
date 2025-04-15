import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useTheme } from '../../contexts/ThemeContext';

export type ChartType =
	| 'line'
	| 'area'
	| 'column'
	| 'bar'
	| 'pie'
	| 'scatter'
	| 'gauge'
	| 'arearange'
	| 'areaspline'
	| 'bubble';

interface HighchartsComponentProps {
	chartType: ChartType;
	title: string;
	subtitle?: string;
	xAxisTitle?: string;
	yAxisTitle?: string;
	series: Highcharts.SeriesOptionsType[];
	categories?: string[];
	height?: string;
}

export const HighchartsComponent: React.FC<HighchartsComponentProps> = ({
	chartType,
	title,
	subtitle,
	xAxisTitle,
	yAxisTitle,
	series,
	categories,
	height = '300px',
}) => {
	const { theme } = useTheme();

	// Define theme-based colors
	const backgroundColor = theme === 'dark' ? '#132f4c' : '#ffffff';
	const textColor = theme === 'dark' ? '#e6f0ff' : '#2c3e50';
	const gridLineColor = theme === 'dark' ? '#1e3a5f' : '#e0e0e0';
	const tooltipBackgroundColor = theme === 'dark' ? '#0a1929' : '#ffffff';
	const tooltipBorderColor = theme === 'dark' ? '#1e3a5f' : '#d8e2e9';

	// Configure chart options
	const options: Highcharts.Options = {
		chart: {
			type: chartType,
			backgroundColor: backgroundColor,
			height: height,
			style: {
				fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
			},
		},
		title: {
			text: title,
			style: {
				color: textColor,
				fontWeight: '500',
			},
		},
		subtitle: {
			text: subtitle,
			style: {
				color: theme === 'dark' ? '#b0bec5' : '#5d6d7e',
			},
		},
		xAxis: {
			categories: categories,
			title: {
				text: xAxisTitle,
				style: {
					color: textColor,
				},
			},
			labels: {
				style: {
					color: textColor,
				},
			},
			gridLineColor: gridLineColor,
			lineColor: gridLineColor,
			tickColor: gridLineColor,
		},
		yAxis: {
			title: {
				text: yAxisTitle,
				style: {
					color: textColor,
				},
			},
			labels: {
				style: {
					color: textColor,
				},
			},
			gridLineColor: gridLineColor,
		},
		tooltip: {
			backgroundColor: tooltipBackgroundColor,
			borderColor: tooltipBorderColor,
			style: {
				color: textColor,
			},
		},
		legend: {
			itemStyle: {
				color: textColor,
			},
			itemHoverStyle: {
				color: theme === 'dark' ? '#4a9eff' : '#0066cc',
			},
		},
		plotOptions: {
			series: {
				animation: {
					duration: 1000,
				},
			},
		},
		credits: {
			enabled: false,
		},
		series: series,
		exporting: {
			enabled: true,
			buttons: {
				contextButton: {
					menuItems: [
						'downloadPNG',
						'downloadJPEG',
						'downloadPDF',
						'downloadSVG',
					],
				},
			},
		},
	};

	return <HighchartsReact highcharts={Highcharts} options={options} />;
};
