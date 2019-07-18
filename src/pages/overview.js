import React, { Component } from "react";

class Overview extends Component {
    render() {
        document.title = 'Report'
        return (
            <div className='container text-center content-center'>
                <h3>Report an Incident</h3>
            </div>
        )
    }
}

export default Overview