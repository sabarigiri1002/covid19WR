import React, { Component } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import apiCalls from '../../../config/apiCalls';

export default class LineChartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dayWiseReport: {}
        };
    }

    componentDidUpdate(nextProps) {
        const { countryName } = this.props;
        if (nextProps.countryName !== countryName) {
            this.getDayWiseCountreyReportByName(countryName);
        }
    }

    componentDidMount() {
        const { countryName } = this.props;
        this.getDayWiseCountreyReportByName(countryName);
    }

    getDayWiseCountreyReportByName(countryName = "all") {

        apiCalls.getDayWiseCountreyReportByName(countryName)
            .then(dayWiseReportData => {
                this.setState({
                    dayWiseReport: dayWiseReportData.timeline ? dayWiseReportData.timeline : dayWiseReportData
                })
            });
    }

    render() {
        const { deaths, recovered, cases } = this.state.dayWiseReport;
        const options = {
            title: {
                text: this.props.title
            },

            subtitle: {
                text: 'Source: NovelCOVID'
            },

            yAxis: {
                title: {
                    text: 'Number of People'
                }
            },

            xAxis: {
                categories: cases ? Object.keys(cases) : [1, 2, 3, 4]
            },

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    // marker: {
                    //     enabled: false
                    // }
                }
            },

            series: [{
                name: 'Total cases',
                color: '#dc3545',
                data: cases ? Object.values(cases) : [1, 2, 3, 4]
            }, {
                name: 'Deaths',
                color: '#ffc107',
                data: deaths ? Object.values(deaths) : [1, 2, 3, 4]
            }, {
                name: 'Recovered',
                data: recovered ? Object.values(recovered) : [1, 2, 3, 4]
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
        return (

            <HighchartsReact highcharts={Highcharts} options={options} />
        )
    }
}
