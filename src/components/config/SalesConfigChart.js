const SalesConfig = {

    chart: {
        type: 'column', backgroundColor: {
            linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
            stops: [
                [0, 'transparent'],
                [1, 'transparent']
            ]
        },
        style: {
            fontFamily: '\'Unica One\', sans-serif'
        },

    },
    title: false,

    xAxis: [{lineColor: 'transparent',
        minorTickColor: 'transparent',
        tickColor:'transparent',

        categories: ['1', '2', '3', '4', '5', '6',
            '7', '8', '9', '10', '11', '12'],
        crosshair: false
    }],

    yAxis: [{ // Primary yAxis
        gridLineColor:'#ffffff24',
        labels: false,
        title: false,
    }, { // Secondary yAxis
        title: false,
        labels: false,
        opposite: false
    }],

    credits: {
        enabled: false
    },

    tooltip: {
        shared: true
    },

    series: [{
        name: 'Rainfall',
        type: 'column',
        showInLegend: false,
        data: [],
        tooltip: {
            valueSuffix: ' mm'
        }

    }]
};

export default SalesConfig;

