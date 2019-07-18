import React, { Component } from "react";

class Report extends Component {
    render() {
        document.title = 'Report'
        return (
            <div className='container text-center content-center'>
                <h3>Report an Incident</h3>
                <br/>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-outline-secondary">Cycle</button>
                    <button type="button" className="btn btn-outline-secondary">Walking</button>
                    <button type="button" className="btn btn-outline-secondary">Bus</button>
                    <button type="button" className="btn btn-outline-secondary">Tube</button>
                </div>
                <br/><br/>
                <form className='container'>

                    <div className="dropdown">
                        <button className="btn btn-outline-tertiary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Type of Incident
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="/report">Antisocial Behaviour</a>
                            <a className="dropdown-item" href="/report">Another thing</a>
                            <a className="dropdown-item" href="/report">Something else here</a>
                        </div>
                    </div>

                    <br/>

                    <div className="form-group row">
                        <label htmlFor="otherComment" className="col-sm-2 col-form-label">Comment</label>
                        <div className="col-sm-10">
                            <textarea type="textarea" className="form-control" id="otherComment" placeholder="Any other comments"/>
                        </div>
                    </div>

                    <button type="button" className="btn btn-outline-primary">Find Me</button>
                    <br/><br/>

                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="email" placeholder="someone@somewhere.co.uk"/>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    
                </form>
            </div>
        )
    }
}

export default Report