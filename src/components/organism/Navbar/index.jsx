import React, { Component } from 'react'
import PropTypes from 'prop-types'

import NavbarMenu from './../../organism/NavbarMenu'

export default class Navbar extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand mb-0 h1" href="/">COVID-19 STATUS <span class="oi oi-globe"></span></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <NavbarMenu />
            </nav>

        )
    }
}
