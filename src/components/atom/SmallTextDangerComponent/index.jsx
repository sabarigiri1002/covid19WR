import React, { Component } from 'react';

export default class SmallTextDangerComponent extends Component {
    render() {
        const { children } = this.props
        return (
            <span className="small text-danger"> ( <span className="oi oi-arrow-top" ></span>{(children && children != null) ? children : 0}) </span >
        )
    }
}
