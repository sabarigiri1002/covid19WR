import React, { Component } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default class BarChartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryFullReport: {}
        };
    }

    render() {
        const globalReport = this.props.globalReport;
        const countriesList = globalReport.map((value,key)=>{ return value.country }).slice(0,10);
        const countriesCount = globalReport.map((value,key)=>{ return value.cases }).slice(0,10);
        const options = {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Top 10 affected countries'
            },
            subtitle: {
                text: 'Source: NovelCOVID'
            },
            xAxis: {
                categories: countriesList,
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Cases',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' People'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 80,
                floating: true,
                borderWidth: 1,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
                shadow: true,
                enabled : false
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Total reported cases',
                data: countriesCount,
                color: '#dc3545',
            }]
        };
        return (

            <HighchartsReact highcharts={Highcharts} options={options} />
        )
    }
}
