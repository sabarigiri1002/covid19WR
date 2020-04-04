import React, { Component } from 'react'
import PropTypes from 'prop-types';

import apiCalls from '../../../config/apiCalls';
import CountryDetails from '../../template/CountryDetails';
import { numberWithCommas } from './../../../config/helpers';

import LineChartComponent from './../../organism/LineChartComponent';
import BarChartComponent from './../../organism/BarChartComponent';


export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentGlobalReport: {},
            countryReport: {},
            globalReport: {}
        };
    }

    componentDidMount() {
        apiCalls.getConsolidatedReport()
            .then(currentGlobalReportData => {
                apiCalls.getAllCountreyReport()
                    .then(countryReport => {
                        const IndiaReport = countryReport.filter((value) => value.country == "India");
                        this.setState({
                            currentGlobalReport: currentGlobalReportData,
                            countryReport: IndiaReport[0],
                            globalReport: countryReport
                        })
                    });
            });
    }

    render() {
        const { currentGlobalReport, countryReport, globalReport } = this.state;
        let asOfDate = currentGlobalReport.updated ? (new Date(currentGlobalReport.updated)) : '';
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 text-left">
                            <h5>Global report summary</h5>
                        </div>
                        <div className="col-lg-6 col-sm-12 text-right">
                            <a href="/fullDetailsScreen">View Details</a>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div class="card text-center border-light">
                                        <div class="card-body">
                                            <p class="card-text">Total reported cases</p>
                                            <h5 className="text-info">{numberWithCommas(currentGlobalReport.cases)}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div class="card text-center border-light">
                                        <div class="card-body">
                                            <p class="card-text">Total recovered cases</p>
                                            <h5 className="text-success">{numberWithCommas(currentGlobalReport.recovered)}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div class="card text-center border-light">
                                        <div class="card-body">
                                            <p class="card-text">Total confirmed cases</p>
                                            <h5 className="text-active">{numberWithCommas(currentGlobalReport.active)}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 offset-md-4">
                                    <div class="card text-center border-light">
                                        <div class="card-body">
                                            <p class="card-text">Total deaths cases</p>
                                            <h5 className="text-danger">{numberWithCommas(currentGlobalReport.deaths)}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {
                                    countryReport.country ? <CountryDetails countryReport={countryReport} /> : ""
                                }

                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            {
                                globalReport.length > 0 ? <BarChartComponent globalReport={globalReport} /> : ""
                            }
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 text-right">
                            <h6>Last update on <b>{asOfDate.toString()}</b></h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}