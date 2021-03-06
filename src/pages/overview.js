import React, { Component } from "react";
import './overview.css'
import iconList from "../constants/icons";

import { NavLink } from 'react-router-dom'
import issues from "../constants/issues";

class Overview extends Component {
    render() {
        document.title = 'Overview'

        const path = window.location

        const preImage = path.hostname === 'simpsonthomas.github.io' && path.pathname !== '/tfl-safety/' ? 'tfl-safety/'
            : ''

        function boxMaker(type, where, when, what, number) {
            return(
                <>
                    <div className='box'>
                        <br/>
                        <div className='row'>
                            <div className='col-1'/>
                            <NavLink className='col-3' to={'/issue/'+number}>
                                <img src={preImage + 'icons/'+iconList[type]} className='iconImage' alt={'Icon of '+type}/>
                            </NavLink>
                            <div align='left'>
                                <p><b>Where: </b>{where}</p>
                                <p><b>When: </b>{when}</p>
                                <p><b>What: </b>{what}</p>
                            </div>
                        </div>

                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-danger">Police</button>
                            <button type="button" className="btn btn-outline-secondary">Station Control</button>
                            <button type="button" className="btn btn-outline-secondary">Long-term</button>
                            <button type="button" className="btn btn-outline-danger">Delete</button>
                        </div>
                        <br/><br/>
                    </div>
                    <br/>
                </>
            )
        }

        return (
            <div className='container text-center content-center'>
                <h3>Hermes Dashboard</h3>
                <div className='row'>
                    <img src={preImage + "london-map.png"} height='500px' className='col-5' alt='Map of London'/>
                    <div className='col-1'/>
                    <div align='center'>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-outline-info">Cycle</button>
                            <button type="button" className="btn btn-outline-info">Walking</button>
                            <button type="button" className="btn btn-outline-info">Bus</button>
                            <button type="button" className="btn btn-outline-info">Tube</button>
                        </div>

                        <br/><br/>
                        <div className='issueList'>
                            {Object.keys(issues).map(issueNo => {
                                const issue = issues[issueNo]
                                return boxMaker(issue.type, issue.where, issue.when, issue.what, issueNo)
                            })}
                        </div>

                    </div>

                    

                </div>
            </div>
        )
    }
}

export default Overview