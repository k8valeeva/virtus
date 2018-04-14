import React from 'react';
import ReactHighcharts from 'react-highcharts';

import configLineChart from "./../../../../config/LineChartConfig";
import "./Charts.css";


class HomeLineChart extends React.Component {
    render() {
        return(
            <div className="HomeLineChart" id="ChartContainer">
                <ReactHighcharts config={configLineChart}>
                </ReactHighcharts>
            </div>
        );
    }
 }

export default HomeLineChart;