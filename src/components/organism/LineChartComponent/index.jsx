import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2017'
        },
        categories: ["1/22/20","1/22/21","1/22/22","1/22/23"]
    },

    // legend: {
    //     layout: 'vertical',
    //     align: 'right',
    //     verticalAlign: 'middle'
    // },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            }
        }
    },

    series: [{
        name: 'cases',
        data: [123, 123123, 143345, 123123]
    }, {
        name: 'deaths',
        data: [13123, 2, 23123, 5]
    }, {
        name: 'recovered',
        data: [1, 2, 4, 5]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
};


export default class LineChartComponent extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <HighchartsReact highcharts={Highcharts} options={options} />
        )
    }
}
