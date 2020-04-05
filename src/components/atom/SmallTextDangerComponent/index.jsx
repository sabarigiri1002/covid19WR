import React, { Component } from 'react';

import { numberWithCommas } from './../../../config/helpers'

export default class SmallTextDangerComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props

        return (
            <span className="small text-danger">
                ( <span class="oi oi-arrow-top" ></span>{children ? children : 0})
            </span >
        )
    }
}
