import React, { Component } from 'react'
import PropTypes from 'prop-types';

import apiCalls from '../../../config/apiCalls';
import CountryDetails from '../../template/CountryDetails';
import { numberWithCommas } from './../../../config/helpers';
import LineChartComponent from './../../organism/LineChartComponent'


export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentGlobalStatus: {},
            countryStatus: {}
        };
    }

    componentDidMount() {
        apiCalls.getConsolidatedReport()
            .then(currentGlobalStatusData => {
                apiCalls.getCountreyReport("India")
                    .then(countryStatus => {
                        this.setState({
                            currentGlobalStatus: currentGlobalStatusData,
                            countryStatus: countryStatus
                        })
                    });
            });


    }

    render() {
        const currentGlobalStatus = this.state.currentGlobalStatus;
        const countryStatus = this.state.countryStatus;

        let asOfDate = currentGlobalStatus.updated ? (new Date(currentGlobalStatus.updated)) : '';
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 text-left">
                            <h5>Global status</h5>
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
                                            <h5 className="text-info">{numberWithCommas(currentGlobalStatus.cases)}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div class="card text-center border-light">
                                        <div class="card-body">
                                            <p class="card-text">Total recovered cases</p>
                                            <h5 className="text-success">{numberWithCommas(currentGlobalStatus.recovered)}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div class="card text-center border-light">
                                        <div class="card-body">
                                            <p class="card-text">Total active cases</p>
                                            <h5 className="text-active">{numberWithCommas(currentGlobalStatus.active)}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 offset-md-4">
                                    <div class="card text-center border-light">
                                        <div class="card-body">
                                            <p class="card-text">Total deaths cases</p>
                                            <h5 className="text-danger">{numberWithCommas(currentGlobalStatus.deaths)}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <CountryDetails countryStatus={countryStatus} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <LineChartComponent />
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
