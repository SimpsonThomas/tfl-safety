import React, { Component } from "react";
import './overview.css'

class Overview extends Component {
    render() {
        document.title = 'Report'

        function boxMaker(title, text, image) {
            return(
                <>
                    <div className='box row'>
                        <img src={image} height='100px' width='auto' className='col-3'/>
                        <div>
                            <h5>{title}</h5>
                            <hr/>
                            <p>{text}</p>
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

                        {boxMaker('Twitter', 'Test', '/icons/twitter.png')}
                        {boxMaker('Twitter', 'Test', '/icons/twitter.png')}
                        {boxMaker('Twitter', 'Test', '/icons/twitter.png')}
                        {boxMaker('Twitter', 'Test', '/icons/twitter.png')}

                    </div>

                    

                </div>
            </div>
        )
    }
}

export default Overview