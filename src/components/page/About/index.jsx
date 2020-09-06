import React, { Component } from 'react';
import labels from './labels'

export class About extends Component {


    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        {
                            labels.map((row, index) => {
                                return (
                                    <div className="row" key={index}>
                                        <div className="col-10 offset-1 text-justify">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h6><b>{index + 1}. {row.question}</b></h6>
                                                </div>
                                            </div>
                                            <div className="row" >
                                                <div className="col-10 offset-1">
                                                    <p dangerouslySetInnerHTML={{__html: row.answer}} className="text-secondary"></p>
                                                    <br />
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default About
