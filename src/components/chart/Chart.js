import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPointS }) => {
	return (
		<div className='chart'>
			{dataPointS.map((dataPoint) => (
				<ChartBar
					key={dataPoint.id}
					value={dataPoint.value}
					maxValue={null}
					labe={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
