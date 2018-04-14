import React from 'react';
import SalesConfig from "./../../../../config/SalesConfigChart";

import "./Charts.css"

const ReactHighcharts = require('react-highcharts');

class HomeSalesChart extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            dataReport : []
        }
    }

    componentWillMount(){
        fetch('/api/user/report/year', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'get'
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({
                    dataReport: res
                });
                let chart = this.refs.SalesConfig.getChart();
                chart.series[0].setData(this.state.dataReport, true);
            })
    }

    onChange = (e) => {
        if (e.target.value === "year") {
            fetch('/api/user/report/year', {
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'get'
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    this.setState({
                        dataReport: res
                    });
                    let chart = this.refs.SalesConfig.getChart();
                    chart.series[0].setData(this.state.dataReport, true);

                })
        } else if (e.target.value === "month") {

            fetch('/api/user/report/month', {
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'get'
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    this.setState({
                        dataReport: res
                    });
                    let chart = this.refs.SalesConfig.getChart();
                    chart.series[0].setData(this.state.dataReport, true);
                    chart.yAxis[0].update({

                        min: 0,
                        tickInterval: 3,
                    });
                })
        }
    };

    render() {
        return(
            <div className="HomeSalesChart">
                <div className="HeaderSalesChart">
                    <p>Sales report</p>

                    <div className="SelectStyle">
                        <p>Show :</p>

                        <select className="SelectPeriod"
                                onChange={this.onChange}
                                data={SalesConfig}>

                            <option value='year'>
                                This Year
                            </option>

                            <option value='month'>
                                Last Month
                            </option>
                        </select>
                    </div>
                </div>

                <ReactHighcharts config = {SalesConfig} ref='SalesConfig'/>
            </div>
        )
    }
}

export default HomeSalesChart;