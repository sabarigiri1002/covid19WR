import React, { Component } from 'react'

import apiCalls from '../../../config/apiCalls';
import { numberWithCommas } from '../../../config/helpers';

import SmallTextDangerComponent from '../../atom/SmallTextDangerComponent';
import DistrictDetails from './../../template/DistrictDetails'

import "./index.css";


export default class IndiaDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAllStateReport: [],
            searchTest: "",
            backUpdata: [],
            allDistrictReport: [],
            selectedStateDistrictReport: null
        };
    }

    componentDidMount() {
        apiCalls.getAllIndiaStateDetails()
            .then(currentAllStateReportData => {
                let stateWiseData = currentAllStateReportData.statewise
                let backupData = stateWiseData
                delete stateWiseData[0];
                apiCalls.getAllIndiaDistrictDetails()
                    .then(allDistrictReportData => {
                        let selectedStateDistrictReportData = allDistrictReportData.filter(
                            (value) => { return value.statecode === stateWiseData[1].statecode }
                        )
                        this.setState({
                            currentAllStateReport: stateWiseData,
                            backUpdata: backupData,
                            allDistrictReport: allDistrictReportData,
                            selectedStateDistrictReport: selectedStateDistrictReportData[0]
                        });
                    })
            });
    }
    
    searchFilterData(event) {
        let searchValue = event.target.value.toLowerCase();
        const { backUpdata } = this.state;
        let filteredData = backUpdata.filter((value) => {
            return value.state.toLowerCase().match(searchValue)
        });
        this.setState({
            currentAllStateReport: searchValue ? filteredData : backUpdata,
            searchTest: searchValue
        })
    }
    
    changeStateReportByStateCode(event){
        let stateCode = event.target.value;
        this.getStateDetailsReport(stateCode);
    }

    getStateDetailsReport(statecode) {
        let selectedStateDistrictReportData = this.state.allDistrictReport.filter(
            (value) => { return value.statecode === statecode }
        );
        this.setState({
            selectedStateDistrictReport: selectedStateDistrictReportData[0]
        });

    }

    render() {
        const { currentAllStateReport, searchTest, selectedStateDistrictReport, backUpdata } = this.state;
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-4">
                            <a href="/" className="btn btn-sm btn-link"> Back</a>
                            <br />
                            <h5>State Report</h5>
                        </div>

                    </div>
                    {
                        currentAllStateReport &&

                            <div className="row">
                                <div className="col-lg-6 table-responsive table-verticalScroll-Ind d-none d-lg-block">
                                    <div className="col-lg-6 form-group float-right">
                                        <input className="form-control" placeholder="Search by State" value={searchTest} onChange={this.searchFilterData.bind(this)} />
                                    </div>
                                    <table id="datatable" className="table table-hover table-striped table-borderless  country-table table-fixed">
                                        <thead>
                                            <tr>
                                                <th className="text-left">State</th>
                                                <th className="text-right text-danger">
                                                    (<span className="oi oi-arrow-top small"></span>) Confirmed <span className="oi oi-sort-descending small"></span>
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
                                                currentAllStateReport.map((stateData, index) => {
                                                    const { state, active, confirmed, deaths,
                                                        deltaconfirmed, deltadeaths, recovered, statecode } = stateData
                                                    return (
                                                        <tr key={index}>
                                                            <td className="text-left">
                                                                <button className="btn-link btn-sm btn" onClick={this.getStateDetailsReport.bind(this, statecode)}>
                                                                    {state}
                                                                </button>
                                                            </td>
                                                            <td className="text-right">
                                                                {deltaconfirmed &&
                                                                    <SmallTextDangerComponent >{numberWithCommas(deltaconfirmed)} </SmallTextDangerComponent>
                                                                }
                                                                {numberWithCommas(confirmed)}
                                                            </td>
                                                            <td className="text-right">{numberWithCommas(recovered)}</td>
                                                            <td className="text-right">{numberWithCommas(active)}</td>
                                                            <td className="text-right">
                                                                {deltadeaths &&
                                                                    <SmallTextDangerComponent >{numberWithCommas(deltadeaths)} </SmallTextDangerComponent>
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
                                    <div className="form-group">
                                        <select className="form-control" name="stateName" id="stateName" 
                                        onChange={this.changeStateReportByStateCode.bind(this)}>
                                            {
                                                backUpdata.map((stateData, key) => {
                                                    return <option value={stateData.statecode} key={key}>{stateData.state}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    {
                                        selectedStateDistrictReport &&
                                            <DistrictDetails selectedStateDistrictReport={selectedStateDistrictReport} />
                                        
                                    }
                                </div>
                            </div>
                    }


                </div>
            </div>
        )
    }
}
