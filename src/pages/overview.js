import React, { Component } from "react";
import './overview.css'
import iconList from "../constants/icons";

class Overview extends Component {
    render() {
        document.title = 'Report'

        function boxMaker(title, image, where, when, what) {
            return(
                <>
                    <div className='box row'>
                        <img src={'icons/'+image} height='100px'  className='col-3'/>
                        <div>
                            <h5>{title}</h5>
                            <hr/>
                            <p><b>Where: </b>{where}</p>
                            <p><b>When: </b>{when}</p>
                            <p><b>What: </b>{what}</p>
                        </div>
                    </div>
                    <br/>
                </>
            )
        }

        return (
            <div className='container text-center content-center'>
                <h3>Inicident Dashboard</h3>
                <div className='row'>
                    <img src={"/london-map.png"} className='col-5'/>
                    <div className='col-1'/>
                    <div align='center'>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-outline-info">Cycle</button>
                            <button type="button" className="btn btn-outline-info">Walking</button>
                            <button type="button" className="btn btn-outline-info">Bus</button>
                            <button type="button" className="btn btn-outline-info">Tube</button>
                        </div>

                        <br/><br/>

                        {boxMaker('Twitter', iconList.cycles, 'Stratford International', '19/07/19 13:02', 'Tripped over crooked floor tile')}

                    </div>

                    

                </div>
            </div>
        )
    }
}

export default Overview