import React, { Component } from "react";

class Report extends Component {
    render() {
        document.title = 'Report'
        return (
            <div className='container text-center content-center'>
                <h3>Report an Incident</h3>
                <br/>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-outline-secondary">Cycle</button>
                    <button type="button" class="btn btn-outline-secondary">Walking</button>
                    <button type="button" class="btn btn-outline-secondary">Bus</button>
                    <button type="button" class="btn btn-outline-secondary">Tube</button>
                </div>
                <br/><br/>
                <form className='container'>

                    <div class="dropdown">
                        <button class="btn btn-outline-tertiary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Type of Incident
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Antisocial Behaviour</a>
                            <a class="dropdown-item" href="#"></a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>

                    <br/>

                    <div class="form-group row">
                        <label for="otherComment" class="col-sm-2 col-form-label">Comment</label>
                        <div class="col-sm-10">
                            <textarea type="textarea" class="form-control" id="otherComment" placeholder="Any other comments"/>
                        </div>
                    </div>

                    <button type="button" class="btn btn-outline-primary">Find Me</button>
                    <br/><br/>

                    <div class="form-group row">
                        <label for="email" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="email" placeholder="someone@somewhere.co.uk"/>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                    
                </form>
            </div>
        )
    }
}

export default Report