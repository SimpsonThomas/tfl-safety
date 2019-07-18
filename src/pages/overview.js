import React, { Component } from "react";
import './overview.css'
import iconList from "../constants/icons";

class Overview extends Component {
    render() {
        document.title = 'Report'

        const preImage = window.location.hostname === 'simpsonthomas.github.io' ? 'tfl-safety/'
            : '/'
        
        function boxMaker(type, where, when, what) {
            return(
                <>
                    <div className='box'>
                        <br/>
                        <div className='row'>
                            <div className='col-1'/>
                            <img src={preImage + 'icons/'+iconList[type]} className='col-3 iconImage' alt={'Icon of '+type}/>
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
                <h3>Inicident Dashboard</h3>
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

                        {boxMaker('dlr', 'Stratford', '19/07/19 13:02', 'Tripped over crooked floor tile')}
                        {boxMaker('elizabeth', 'Liverpool Street', '20/07/2032 13:02', 'Signal Problems')}
                        {boxMaker('emirates', 'Greenwich', '19/07/19 13:02', 'Fantastic everyday mode of transport')}

                    </div>

                    

                </div>
            </div>
        )
    }
}

export default Overview