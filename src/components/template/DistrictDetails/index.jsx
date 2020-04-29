import React, { Component } from 'react'

import SmallTextDangerComponent from '../../atom/SmallTextDangerComponent';

import { numberWithCommas } from '../../../config/helpers';

import "./index.css";


export default class DistrictDetails extends Component {
    sortDataBasedOnConfirmedCase(arrayData) {
        return arrayData.sort((a, b) => {
            return b.confirmed - a.confirmed;
        })
    }
    render() {
        const { state, districtData } = this.props.selectedStateDistrictReport;
        // const sortedData = this.sortDataBasedOnConfirmedCase(districtData);
        const sortedData = districtData;
        return (
            <div className="row">
                <div className="col-lg-11 state-details-section">
                    <div className="row">
                        <div className="col-lg-10 text-left"><br />
                            <h5 className="font-weight-bold">Report details for {state}</h5>
                        </div>
                    </div>
                    <br />
                    <div className="row district-section">
                        {
                            sortedData.map((value, key) => {
                                return (
                                    <div key={key} className="col-sm-4  district-detail">
                                        <div className="row">
                                            {/* <div className="col-lg-12">
                                                <b className="text-center">{value.confirmed}</b>
                                                &nbsp;&nbsp;&nbsp;
                                                <small>{value.district}</small>
                                                <SmallTextDangerComponent>{value.delta.confirmed}</SmallTextDangerComponent>

                                            </div> */}
                                            <div className="col-lg-3 p-0">
                                                <b className="text-center">{value.confirmed}</b>
                                            </div>
                                            <div className="col-lg-6 p-0">
                                                <small>{value.district}</small>
                                            </div>
                                            <div className="col-lg-3 p-0">
                                                <SmallTextDangerComponent>{value.delta.confirmed}</SmallTextDangerComponent>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        )
    }
}
