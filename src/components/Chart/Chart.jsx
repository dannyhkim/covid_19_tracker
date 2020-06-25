import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = () => {
    // hook - dailyData is state, setDailyData is setState function
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData()); // set dailyData to promise returned 
        }
        fetchAPI();
    });

    const lineChart = (
        // if dailyData first element is available, return line chart
        dailyData[0] 
        ? (
           <Line
            data={{
                labels: '',
                datasets: [{}, {}],
            }}
           />) : null
        
    );

    return (
        <h1>Chart</h1>
    )
}

export default Chart;