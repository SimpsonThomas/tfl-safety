import React, { Component } from "react";
import './overview.css'
import iconList from "../constants/icons";

class Overview extends Component {
    render() {
        document.title = 'Report'

        function boxMaker(type, where, when, what) {
            return(
                <>
                    <div className='box row'>
                        <img src={'icons/'+iconList[type]} height='110px' className='col-3'/>
                        <div>
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
                    <img src={"/london-map.png"} height='500px' className='col-5'/>
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
                        {boxMaker('emirates', 'Greenwich', '19/07/19 13:02', 'Just a fantastic everyday mode of transport')}

                    </div>

                    

                </div>
            </div>
        )
    }
}

export default Overview