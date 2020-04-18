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
            currentAllStateReport: null,
            searchTest: "",
            backUpdata : null
        };
    }

    componentDidMount() {
        apiCalls.getAllIndiaStateDetails()
            .then(currentAllStateReportData => {
                let stateWiseData = currentAllStateReportData.statewise
                let backupData = stateWiseData
                delete stateWiseData[0];
                this.setState({
                    currentAllStateReport: stateWiseData,
                    backUpdata: backupData,
                    stateDetails : null
                })
                //this.getCountreyReportByName(currentAllCountryReportData[0].country);
            });
    }
    getCountreyReportByName(stateName) {
        let stateData = this.state.currentAllStateReport.filter((value)=>{ return value.state == stateName ? value : false });
        console.log(stateData)
    }
    searchFilterData(event) {
        let searchValue = event.target.value;
        const { backUpdata } = this.state;
        let filteredData = backUpdata.filter((value) => {
            return value.state.toLowerCase().match(searchValue)
        });
        this.setState({
            currentAllStateReport: searchValue ? filteredData : backUpdata,
            searchTest: searchValue
        })
    }

    render() {
        const { currentAllStateReport, searchTest } = this.state;
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
                        currentAllStateReport ?

                            <div className="row">
                                <div className="col-lg-6 table-responsive table-verticalScroll-Ind">
                                    {/* <div className="col-lg-6 form-group float-right">
                                        <input className="form-control" placeholder="Search by State" value={searchTest} onChange={this.searchFilterData.bind(this)} />
                                    </div> */}
                                    <table id="datatable" className="table table-hover table-striped table-bordered country-table table-fixed">
                                        <thead>
                                            <tr>
                                                <th className="text-left">State</th>
                                                <th className="text-right text-danger">
                                                    (<span class="oi oi-arrow-top small"></span>) Confirmed <span class="oi oi-sort-descending small"></span>
                                                </th>
                                                <th className="text-right text-success">
                                                    Recovered
                                                </th>
                                                <th className="text-right text-info">
                                                    Active
                                                </th>
                                                <th className="text-right text-dark">
                                                    (<span class="oi oi-arrow-top small"></span>) Deaths
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                currentAllStateReport.map((stateData, index) => {
                                                    const { state, active, confirmed, deaths,
                                                        deltaconfirmed, deltadeaths, recovered } = stateData
                                                    return (
                                                        <tr key={index}>
                                                            <td className="text-left">
                                                                <button className="btn-link btn-sm btn" onClick={this.getCountreyReportByName.bind(this, state)}>
                                                                    {state}
                                                                </button>
                                                            </td>
                                                            <td className="text-right">
                                                                {deltaconfirmed ?
                                                                    <SmallTextDangerComponent >{numberWithCommas(deltaconfirmed)} </SmallTextDangerComponent> : ""
                                                                }
                                                                {numberWithCommas(confirmed)}
                                                            </td>
                                                            <td className="text-right">{numberWithCommas(recovered)}</td>
                                                            <td className="text-right">{numberWithCommas(active)}</td>
                                                            <td className="text-right">
                                                                {deltadeaths ?
                                                                    <SmallTextDangerComponent >{numberWithCommas(deltadeaths)} </SmallTextDangerComponent> : ""
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
                                {/* <div className="col-lg-6">
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
                                </div> */}
                            </div> : ""
                    }


                </div>
            </div>
        )
    }
}
