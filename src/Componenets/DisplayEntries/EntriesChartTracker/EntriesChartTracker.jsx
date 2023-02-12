import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

const EntriesChartTracker = (props) => {
    
    const [chartData, setChartData] = useState([]);
    
    useEffect(() => {
        let TempChartData = props.parentEntries.map(entry => {
            return [entry.date, entry.weight];
        });
        setChartData(TempChartData);
    }, [props.parentEntries])
    
    return ( 
        <Chart
        chartType='LineChart'
        data={[['Date', 'Weight'], ...chartData]}
        width='100%'
        height='400px'
        legendToggle
        options={{legend: {position: 'bottom'}}}
        />    
     );
}
 
export default EntriesChartTracker;