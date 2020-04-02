import React, { Component } from 'react'
import PropTypes from 'prop-types';


import apiCalls from '../../../config/apiCalls';
import { numberWithCommas } from './../../../config/helpers';

import CountryDetails from './../../template/CountryDetails';
import LineChartComponent from './../../organism/LineChartComponent'

import "./index.css";


export default class FullDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAllCountryStatus: null,
            countryStatus: null
        };
    }

    componentDidMount() {
        apiCalls.getAllCountreyReport()
            .then(currentAllCountryStatusData => {
                this.setState({
                    currentAllCountryStatus: currentAllCountryStatusData
                })
            });
    }
    getCountreyReportByName(country) {
        apiCalls.getCountreyReportByName(country)
            .then(countryStatusData => {
                this.setState({
                    countryStatus: countryStatusData
                })
            });
    }

    render() {
        const currentAllCountryStatus = this.state.currentAllCountryStatus;
        const countryStatus = this.state.countryStatus;
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-1">
                            <a href="/" className="btn btn-sm btn-link"> Back</a>
                        </div>
                    </div>
                    <br />

                    <div className="row">
                        <div className="col-lg-12 text-left">
                            <h5>Global Status</h5>
                        </div>
                    </div>
                    {
                        currentAllCountryStatus ?

                            <div className="row">
                                <div className="col-lg-6 table-responsive table-verticalScroll">
                                    <table id="datatable" className="table table-hover table-striped table-bordered country-table">
                                        <thead>
                                            <tr>
                                                <th className="text-left">Country</th>
                                                <th className="text-center">Flag</th>
                                                <th className="text-right text-danger">Total</th>
                                                <th className="text-right text-success">Recovered</th>
                                                <th className="text-right text-info">Active</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                currentAllCountryStatus.map((countryData, index) => {
                                                    const { country, countryInfo,
                                                        cases, todayCases,
                                                        recovered, active } = countryData
                                                    return (
                                                        <tr key={index}>
                                                            <td className="text-left">
                                                                <button className="btn-link btn-sm btn" onClick={this.getCountreyReportByName.bind(this, country)}>
                                                                    {country}
                                                                </button>
                                                            </td>
                                                            <td className="text-center"><img src={`${countryInfo.flag}`} width="20"></img></td>
                                                            <td className="text-right">
                                                                <small className="text-danger ">(+{numberWithCommas(todayCases)}) </small>
                                                                {numberWithCommas(cases)}
                                                            </td>
                                                            <td className="text-right">{numberWithCommas(recovered)}</td>
                                                            <td className="text-right">{numberWithCommas(active)}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-lg-6">
                                    {
                                        countryStatus ?
                                            <React.Fragment>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <LineChartComponent />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <CountryDetails countryStatus={countryStatus} />
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                            : ""
                                    }
                                </div>
                            </div> : ""
                    }


                </div>
            </div>
        )
    }
}
