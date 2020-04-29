import React, { Component } from 'react';

import Navbar from './../../organism/Navbar';

import './style.css';

export default class PageLayout extends Component {
    constructor(props){
        super(props)
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
