import React, { Component } from "react";

class About extends Component {
    render() {
        document.title = 'About'
        return (
            <div className='container text-center content-center'>
                <h3>Safety Reporting</h3>
                <p>Hey, we're know it's a pain to report issues you on TfL services so we're building a web app to make it easier</p>
                <br/>
                <p>We are totally, completely and <b>UTTERLY UNOFFICIAL</b>, we are not TfL just some people building PoC</p>
                <p>Do NOT give us any personal data - we are just building something for a Hackathon</p>

                <p>Check us out on Twitter!</p>
                <a className="twitter-timeline" href="https://twitter.com/TfLSafety?ref_src=twsrc%5Etfw">Tweets by TfLSafety</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                
            </div>
        )
    }
}

export default About