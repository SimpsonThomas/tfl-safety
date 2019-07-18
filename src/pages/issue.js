import React, { Component } from "react";
import issues from "../constants/issues";
import iconList from "../constants/icons";

class Issue extends Component {
    render() {
        document.title = 'Issue'

        const data = window.location.pathname.substring(7)
        const issue = issues[data]

        const path = window.location

        const preImage = path.hostname === 'simpsonthomas.github.io' && path.pathname !== '/tfl-safety/' ? 'tfl-safety/'
            : '/'

        console.log(issue)

        const fakeNumber = 1427+parseInt(data)

        return (
            <div className='container text-center content-center'>
                <h3>{'Issue #'+fakeNumber}</h3>
                <hr/>
                <img src={preImage + 'icons/'+iconList[issue.type]} className='iconImage' alt={'Icon of '+issue.type}/>
            </div>
        )
    }
}

export default Issue