import React, { Component } from 'react'

import apiCalls from '../../../config/apiCalls';
import { numberWithCommas } from './../../../config/helpers';

import CountryDetails from './../../template/CountryDetails';
import LineChartComponent from './../../organism/LineChartComponent';
import SmallTextDangerComponent from './../../atom/SmallTextDangerComponent'

import "./index.css";


export default class FullDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAllCountryReport: null,
            countryReport: null,
            searchTest: "",
            backUpdata: null,
            countriesList : null
        };
    }

    componentDidMount() {
        apiCalls.getAllCountreyReport()
            .then(currentAllCountryReportData => {
                this.setState({
                    currentAllCountryReport: currentAllCountryReportData,
                    backUpdata: currentAllCountryReportData,
                    countriesList : currentAllCountryReportData.map((value)=> value.country)
                })
                this.getCountreyReportByName(currentAllCountryReportData[0].country);
            });
    }
    changeCountryReportByName(event){
        let country = event.target.value;
        this.getCountreyReportByName(country);
    }
    getCountreyReportByName(country) {
        apiCalls.getCountreyReportByName(country)
            .then(countryReportData => {
                this.setState({
                    countryReport: countryReportData
                })
            });
    }
    searchFilterData(event) {
        let searchValue = event.target.value.toLowerCase();
        const { backUpdata } = this.state;
        let filteredData = backUpdata.filter((value) => {
            return value.country.toLowerCase().match(searchValue)
        });
        this.setState({
            currentAllCountryReport: searchValue ? filteredData : backUpdata,
            searchTest: searchValue
        })
    }

    render() {
        const { currentAllCountryReport, countryReport, searchTest,countriesList } = this.state;
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-4">
                            <a href="/" className="btn btn-sm btn-link"> Back</a>
                            <br />
                            <h5>Global Report</h5>
                        </div>

                    </div>
                    {
                        currentAllCountryReport &&
                            <div className="row mainSection">
                                <div className="col-lg-6 table-responsive table-verticalScroll d-none d-lg-block">
                                    <div className="col-lg-6 form-group float-right">
                                        <input className="form-control" placeholder="Search by Country" value={searchTest} onChange={this.searchFilterData.bind(this)} />
                                    </div>
                                    <table id="datatable" className="table table-hover table-striped table-borderless country-table table-fixed">
                                        <thead>
                                            <tr>
                                                <th className="text-left">Country</th>
                                                <th className="text-center">Flag</th>
                                                <th className="text-right text-danger">
                                                    (<span className="oi oi-arrow-top small"></span>) Total <span className="oi oi-sort-descending small"></span>
                                                </th>
                                                <th className="text-right text-success">
                                                    Recovered
                                                </th>
                                                <th className="text-right text-info">
                                                    Active
                                                </th>
                                                <th className="text-right text-dark">
                                                    (<span className="oi oi-arrow-top small"></span>) Deaths
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
                                                                {todayCases &&
                                                                    <SmallTextDangerComponent >{numberWithCommas(todayCases)} </SmallTextDangerComponent> 
                                                                }
                                                                {numberWithCommas(cases)}
                                                            </td>
                                                            <td className="text-right">{numberWithCommas(recovered)}</td>
                                                            <td className="text-right">{numberWithCommas(active)}</td>
                                                            <td className="text-right">
                                                                {todayCases &&
                                                                    <SmallTextDangerComponent >{numberWithCommas(todayDeaths)} </SmallTextDangerComponent> 
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
                                <div className="col-lg-6 d-block d-lg-none">
                                    {
                                        countriesList &&
                                        <div className="form-group">
                                            <select id="countrySelect" className="form-control" onChange={this.changeCountryReportByName.bind(this)}>
                                                {
                                                    countriesList.map((country, index) =>
                                                        <option value={country} key={index}>{country}</option>
                                                    )
                                                }
                                            </select>
                                        </div>
                                    }

                                </div>
                                <div className="col-lg-6">
                                    {
                                        countryReport &&
                                            <React.Fragment>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <CountryDetails countryReport={countryReport} />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <LineChartComponent countryName={countryReport.country} />

                                                    </div>
                                                </div>
                                            </React.Fragment>
                                    }
                                </div>
                            </div> 
                    }
                </div>
            </div>
        )
    }
}
