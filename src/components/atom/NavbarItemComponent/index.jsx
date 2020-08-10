import React, { Component } from 'react';

export class NavbarItemComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { to, children } = this.props;
        const isActive = window.location.pathname === to;
        const className = isActive ? "nav-link active" : "nav-link";
        
        return (
            <li className="nav-item">
                <a className={className} href={to}>{children}</a>
            </li>
        )
    }
}

export default NavbarItemComponent
