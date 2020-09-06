import React, { Component } from 'react';

import Navbar from './../../organism/Navbar';

import './style.css';

export default class PageLayout extends Component {
    
    render() {
        return (
            <div>
                <Navbar />
                <div className="ncontainer-fluid">
                    <div className="main-section">
                        {this.props.children}
                    </div>
                </div>
                <footer className="footer blockquote-footer text-right">
                    <p>By <a target="_blank" href="https://www.linkedin.com/in/sabarigiri1002/">Sabari Giri Balakrishnan</a>. Code: <a href="https://github.com/sabarigiri1002/covid19WR">GitHub</a></p>
                </footer>
            </div>
        )
    }
}
