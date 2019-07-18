import React, { Component } from "react";

class Report extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode : '',
            type : '',
            comments : '',
            where : 'Stratford',
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitTwitter = this.submitTwitter.bind(this)
    }

    handleChange(event) {
        event.preventDefault()
        const target = event.target
        this.setState({ [target.name] : target.value});
    }

    handleMode(event, mode) {
        event.preventDefault()
        this.setState({mode : mode})
    }
    
    submitTwitter(event) {
        event.preventDefault()
        console.log(this.state)
        const state = this.state
        window.open(
            'https://twitter.com/intent/tweet?text=@TfLSafety I was in an incident at '+state.where+
            ' on '+state.mode+
            ' the inicident was '+state.type+
            ' other details are '+state.comment+
            '&hastags=reportissue'+
            '&related=SimpsonThomas_,TfLSafety')
    }

    render() {
        document.title = 'Report'
        const state = this.state
        const modes = ['Cycle', 'Walking', 'Bus', 'Tube']
        return (
            <div className='container text-center content-center'>
                <h3>Report an Incident</h3>
                <br/>
                <div className="btn-group" role="group" aria-label="Basic example">
                    {modes.map(mode => <button 
                        type="button"
                        key={mode}
                        className={'btn ' + (state.mode === mode ? 'btn-outline-primary' : "btn-outline-secondary")}
                        onClick={(event) => this.handleMode(event, mode)}>
                            {mode}
                    </button>)}
                </div>
                <br/><br/>
                <form className='container'>

                    <div className='form-group row'>
                        <label htmlFor='dropdown' className="col-sm-2 col-form-label">Type of Inicident</label>
                        <select
                            name='type'
                            className="col-sm-10"
                            value={this.state.type}
                            onChange={e => this.handleChange(e)}
                        >
                            <option value='' disabled>Pick a type</option>
                            <option value='Antisocial Behaviour'>Antisocial Behaviour</option>
                            <option value='Another thing'>Another thing</option>
                            <option value='Something else here'>Something else here</option>
                        </select>
                    </div>

                    <br/>

                    <div className="form-group row">
                        <label htmlFor="otherComment" className="col-sm-2 col-form-label">Comment</label>
                        <div className="col-sm-10">
                            <textarea name='comment' value={this.state.comment} type="textarea" className="form-control" 
                                id="otherComment" placeholder="Any other comments" onChange={this.handleChange}/>
                        </div>
                    </div>

                    <button type="button" className="btn btn-secondary">Find Me</button>
                    <br/><br/>

                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input name='email' type="email" className="form-control" value={this.state.email}
                                id="email" placeholder="someone@somewhere.co.uk" onChange={this.handleChange}/>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" disabled>Submit</button> <br/><br/>
                    <button type="button" className="btn btn-info" onClick={this.submitTwitter}>Submit to Twitter</button>
                    
                </form>
            </div>
        )
    }
}

export default Report