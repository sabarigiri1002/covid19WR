import React, { Component } from 'react'
import PropTypes from 'prop-types'


import SmallTextDangerComponent from './../../atom/SmallTextDangerComponent';

import { numberWithCommas } from './../../../config/helpers';



export default class CountryDetails extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        const countryReport = this.props.countryReport;
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-10 text-left">
                            <h5>Report details for {countryReport.country }  &nbsp;
                            {
                                countryReport.countryInfo ?
                                    <img src={`${countryReport.countryInfo.flag}`} alt={countryReport.country} width="30"></img> : ""
                            }</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div class="card text-center border-light">
                                <div class="card-body">
                                    <p class="card-text">Total reported cases</p>
                                    <h5 className="text-info">
                                        <SmallTextDangerComponent>{numberWithCommas(countryReport.todayCases)}</SmallTextDangerComponent>
                                        {numberWithCommas(countryReport.cases)}
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div class="card text-center border-light">
                                <div class="card-body">
                                    <p class="card-text">Total recovered cases</p>
                                    <h5 className="text-success">{numberWithCommas(countryReport.recovered)}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div class="card text-center border-light">
                                <div class="card-body">
                                    <p class="card-text">Total confirmed cases</p>
                                    <h5 className="text-active">{numberWithCommas(countryReport.active)}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div class="card text-center border-light">
                                <div class="card-body">
                                    <p class="card-text">Cases per Million</p>
                                    <h5 className="text-info">{numberWithCommas(countryReport.casesPerOneMillion)}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div class="card text-center border-light">
                                <div class="card-body">
                                    <p class="card-text">Total deaths cases</p>
                                    <h5 className="text-danger">
                                        <SmallTextDangerComponent>{numberWithCommas(countryReport.todayDeaths)}</SmallTextDangerComponent>
                                        {numberWithCommas(countryReport.deaths)}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div class="card text-center border-light">
                                <div class="card-body">
                                    <p class="card-text">Deaths per Million</p>
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