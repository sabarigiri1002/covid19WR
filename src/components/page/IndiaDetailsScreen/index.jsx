import React, { Component } from 'react'

import apiCalls from '../../../config/apiCalls';
import { numberWithCommas } from '../../../config/helpers';

import CountryDetails from '../../template/CountryDetails';
import LineChartComponent from '../../organism/LineChartComponent';
import SmallTextDangerComponent from '../../atom/SmallTextDangerComponent'

import "./index.css";


export default class IndiaDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAllCountryReport: null,
            countryReport: null,
        };
    }

    componentDidMount() {
        apiCalls.getAllCountreyReport()
            .then(currentAllCountryReportData => {
                this.setState({
                    currentAllCountryReport: currentAllCountryReportData
                })
                this.getCountreyReportByName(currentAllCountryReportData[0].country);
            });
    }
    getCountreyReportByName(country) {
        apiCalls.getCountreyReportByName(country)
            .then(countryReportData => {
                this.setState({
                    countryReport: countryReportData
                })
            });
    }

    render() {
        const { currentAllCountryReport, countryReport } = this.state;
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-12">
                            <a href="/" className="btn btn-sm btn-link"> Back</a>
                            <br />
                            <h5>India Report</h5>
                        </div>
                    </div>
                    {
                        currentAllCountryReport ?

                            <div className="row">
                                <div className="col-lg-6 table-responsive table-verticalScroll">
                                    <table id="datatable" className="table table-hover table-striped table-bordered country-table table-fixed">
                                        <thead>
                                            <tr>
                                                <th className="text-left">Country</th>
                                                <th className="text-center">Flag</th>
                                                <th className="text-right text-danger">
                                                    (<span class="oi oi-arrow-top small"></span>) Total <span class="oi oi-sort-descending small"></span>
                                                    {/* <br />
                                                    <small>(+{numberWithCommas(worldReport.todayCases)}) </small>
                                                    {numberWithCommas(worldReport.cases)} */}
                                                </th>
                                                <th className="text-right text-success">
                                                    Recovered
                                                    {/* <br />
                                                    {numberWithCommas(worldReport.recovered)} */}
                                                </th>
                                                <th className="text-right text-info">
                                                    Active
                                                    {/* <br />
                                                    {numberWithCommas(worldReport.active)} */}
                                                </th>
                                                <th className="text-right text-dark">
                                                    (<span class="oi oi-arrow-top small"></span>) Deaths
                                                    {/* <br />
                                                    <small className="text-danger ">(+{numberWithCommas(worldReport.todayDeaths)}) </small>
                                                    {numberWithCommas(worldReport.deaths)} */}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                currentAllCountryReport.map((countryData, index) => {
                                                    const { country, countryInfo, deaths, todayDeaths,
                                                        cases, todayCases,
                                                        recovered, active } = countryData
                                                    return (
                                                        <tr key={index}>
                                                            <td className="text-left">
                                                                <button className="btn-link btn-sm btn" onClick={this.getCountreyReportByName.bind(this, country)}>
                                                                    {country}
                                                                </button>
                                                            </td>
                                                            <td className="text-center"><img src={`${countryInfo.flag}`} alt={`${countryInfo.flag}`} width="20"></img></td>
                                                            <td className="text-right">
                                                                {todayCases ?
                                                                    <SmallTextDangerComponent >{numberWithCommas(todayCases)} </SmallTextDangerComponent> : ""
                                                                }
                                                                {numberWithCommas(cases)}
                                                            </td>
                                                            <td className="text-right">{numberWithCommas(recovered)}</td>
                                                            <td className="text-right">{numberWithCommas(active)}</td>
                                                            <td className="text-right">
                                                                {todayCases ?
                                                                    <SmallTextDangerComponent >{numberWithCommas(todayDeaths)} </SmallTextDangerComponent> : ""
                                                                }
                                                                {numberWithCommas(deaths)}
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-lg-6">
                                    {
                                        countryReport ?
                                            <React.Fragment>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <CountryDetails countryReport={countryReport} />
                                                    </div>
                                                </div>
                                                <div className="row d-sm-none d-md-block">
                                                    <div className="col-lg-12">
                                                        <LineChartComponent countryName={countryReport.country} />

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
