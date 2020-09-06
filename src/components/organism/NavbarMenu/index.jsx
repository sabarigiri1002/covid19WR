import React, { Component } from 'react';
import NavbarItemComponent from '../../atom/NavbarItemComponent'
export default class NavbarMenu extends Component {
    

    render() {
        return (
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <NavbarItemComponent to="/fullDetailsScreen">World status</NavbarItemComponent>
                    <NavbarItemComponent to="/viewIndiaDetailsScreen">India status</NavbarItemComponent>
                    <NavbarItemComponent to="/about">About</NavbarItemComponent>
                </ul>
                {/* <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
            </div>

        )
    }
}
