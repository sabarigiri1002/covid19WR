import React, { Component } from 'react';


import NavbarMenu from './../../organism/NavbarMenu';

export default class Navbar extends Component {

    constructor(props) {
        super(props)
    }



    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand mb-0 h1" href="/">COVID <span className="oi oi-globe"></span> Report</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavbarMenu />
            </nav>
        )
    }
}
