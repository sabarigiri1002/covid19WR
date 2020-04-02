import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {numberWithCommas} from './../../../config/helpers';

export default class CountryDetails extends Component {
    static propTypes = {
        prop: PropTypes 
    }
    
    render() {
        const countryStatus = this.props.countryStatus;
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-10 text-left">
                            <h5>Status in {countryStatus.country} {
                                countryStatus.countryInfo ?
                                    <img src={`${countryStatus.countryInfo.flag}`} alt={countryStatus.country} width="30"></img> : ""
                            }</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div class="card text-center border-light">
                                <div class="card-body">
                                    <p class="card-text">Total reported cases</p>
                                    <h5 className="text-info">
                                        <small className="text-danger">(+{numberWithCommas(countryStatus.todayCases)}) </small>
                                        {numberWithCommas(countryStatus.cases)}
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div class="card text-center border-light">
                                <div class="card-body">
                                    <p class="card-text">Total recovered cases</p>
                                    <h5 className="text-success">{numberWithCommas(countryStatus.recovered)}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div class="card text-center border-light">
                                <div class="card-body">
                                    <p class="card-text">Total active cases</p>
                                    <h5 className="text-active">{numberWithCommas(countryStatus.active)}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div class="card text-center border-light">
                                <div class="card-body">
                                    <p class="card-text">Cases per Million</p>
                                    <h5 className="text-info">{numberWithCommas(countryStatus.casesPerOneMillion)}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div class="card text-center border-light">
                                <div class="card-body">
                                    <p class="card-text">Total deaths cases</p>
                                    <h5 className="text-danger">
                                        <small className="text-danger" > (+{numberWithCommas(countryStatus.todayDeaths)}) </small>
                                        {numberWithCommas(countryStatus.deaths)}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div class="card text-center border-light">
                                <div class="card-body">
                                    <p class="card-text">Deaths per Million</p>
                                    <h5 className="text-danger">{numberWithCommas(countryStatus.deathsPerOneMillion)}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
