import React, { Component } from 'react'

import SmallTextDangerComponent from './../../atom/SmallTextDangerComponent';

import { numberWithCommas } from './../../../config/helpers';



export default class CountryDetails extends Component {

    render() {
        const countryReport = this.props.countryReport;
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-10 text-left">
                            <h5>{countryReport.country} &nbsp;
                            {
                                    countryReport.countryInfo ?
                                        <img src={`${countryReport.countryInfo.flag}`} alt={countryReport.country} width="30"></img> : ""
                                }</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-4">
                            <div className="card text-center border-light">
                                <div className="card-body">
                                    <p className="card-text">Total reported cases</p>
                                    <h5 className="text-info">
                                        {countryReport.todayCases ?
                                            <SmallTextDangerComponent >{numberWithCommas(countryReport.todayCases)} </SmallTextDangerComponent> : ""
                                        }
                                        {numberWithCommas(countryReport.cases)}
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4">
                            <div className="card text-center border-light">
                                <div className="card-body">
                                    <p className="card-text">Total recovered cases</p>
                                    <h5 className="text-success">{numberWithCommas(countryReport.recovered)}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4">
                            <div className="card text-center border-light">
                                <div className="card-body">
                                    <p className="card-text">Total confirmed cases</p>
                                    <h5 className="text-active">{numberWithCommas(countryReport.active)}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4">
                            <div className="card text-center border-light">
                                <div className="card-body">
                                    <p className="card-text">Cases per Million</p>
                                    <h5 className="text-info">{numberWithCommas(countryReport.casesPerOneMillion)}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4">
                            <div className="card text-center border-light">
                                <div className="card-body">
                                    <p className="card-text">Total deaths cases</p>
                                    <h5 className="text-danger">
                                        {countryReport.todayDeaths ?
                                            <SmallTextDangerComponent >{numberWithCommas(countryReport.todayDeaths)} </SmallTextDangerComponent> : ""
                                        }
                                        {numberWithCommas(countryReport.deaths)}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4">
                            <div className="card text-center border-light">
                                <div className="card-body">
                                    <p className="card-text">Deaths per Million</p>
                                    <h5 className="text-danger">{numberWithCommas(countryReport.deathsPerOneMillion)}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
