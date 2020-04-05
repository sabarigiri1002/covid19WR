import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Navbar from './../../organism/Navbar';

import './style.css';

export default class PageLayout extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="ncontainer-fluid">
                    <div className="main-section">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
