import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NavbarMenu extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/fullDetailsScreen">Global Report</a>
                    </li>
                    {/* <li class="nav-item">
                        <a class="nav-link" href="/viewIndiaDetailsScreen">India Report</a>
                    </li> */}
                </ul>
                {/* <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
            </div>

        )
    }
}
