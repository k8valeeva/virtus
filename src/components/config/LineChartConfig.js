import React, {Component} from 'react';
import ProgressBar from "./../../components/pages/Home/components/charts/ProgressBar";
import {renderToString} from 'react-dom/server';

const configLineChart = {
    colors: ['#2196f3', '#2196f3', '#2196f3', '#2196f3', '#2196f3', '#2196f3',
        '#2196f3', '#2196f3', '#2196f3', '#2196f3', '#2196f3'],

    chart: {
        marginTop: 110,
        marginBottom: 10,
        marginLeft: 0,
        paddingLeft:0,
        paddingRight:0,
        marginRight: 0,
        type: 'areaspline', backgroundColor: {
            linearGradient: {x1: 0, y1: 0, x2: 0, y2: 0},
            stops: [
                [0, 'transparent'],

                [1, 'transparent']
            ]
        },

    },
    title: null,
    legend: {

        align: 'left',
        verticalAlign: 'top',
        x: 20,
        enabled: true,
        y: 20,
        layout:'horizontal',
        itemDistance:110,
        floating: true,
        maxHeight:200,

        backgroundColor: 'transparent',
        useHTML: true,

        labelFormatter: function ( ) {
            if(this.name==0){
                return renderToString(<ProgressBar id={0} />)
            }
            if(this.name==1){
                return renderToString(<ProgressBar id={1} />)
            }
            if(this.name==2){
                return renderToString(<ProgressBar id={2} />)
            }
        }
    },

    xAxis: {
        floor:1,
        max:5,minorTickLength:0,
        lineColor: 'transparent',minorTickColor: 'transparent',tickColor:'transparent',
        gridLineWidth: 1,

        gridLineColor:'#ffffff24',minorTickPosition:'inside',
        categories: [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun'
        ],


        minPadding: 0,
        maxPadding: 0
    },

    yAxis: {minPadding: 0,maxPadding: 0,
        labels:false,
        gridLineWidth: 0,
        title: {
            text:false
        }
    },
    tooltip: {
        shared: false,
        valueSuffix: ' units'
    },
    credits: {
        enabled: false
    },
    series: [{
        minPadding: 0,
        maxPadding: 0,
        name: "0",
        data: [2, 0, 1, 2, 3, 2, 1]
    }, {
        name: "1",
        data: [0, 0, 2, 3, 3, 2, 4],
        visible: false

    }, {
        name: "2",
        data: [0, 0, 2, 3, 3, 5, 6],
        visible: false

    },],
    plotOptions: {
        areaspline: {
            fillOpacity: 0.4
        },
    },
};

export default configLineChart;

