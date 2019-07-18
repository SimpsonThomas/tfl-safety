import React, { Component } from "react";

class Overview extends Component {
    render() {
        document.title = 'Report'
        return (
            <div className='container text-center content-center'>
                <h3>Inicident Dashboard</h3>
                <div className='row'>
                    <img src='%PUBLIC_URL%/london-map.png' className='col-6'/>
                    <div>
                        <button>test</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Overview