import React, { Component } from "react";
import issues from "../constants/issues";
import iconList from "../constants/icons";

import Plot from 'react-plotly.js';

class Issue extends Component {
    render() {
        document.title = 'Issue'

        const issueNo = window.location.pathname.substring(7)
        const issue = issues[issueNo]

        const path = window.location

        const preImage = path.hostname === 'simpsonthomas.github.io' ? '../tfl-safety'
            : '/'

        console.log('Test')

        const fakeNumber = 1427+parseInt(issueNo)
        
        var layout= {
            margin: {l:'auto',r:0,b:15,t:0,pad:0},
            paper_bgcolor: '#868F98',
            plot_bgcolor: '#868F98',
            font : {
                color: 'white'
            },
            barmode : 'stack'
        }
        
        const graphLine = [
            {
                name: 'Incidence Over Time',
                y: [5, -2, 0, -1, 3, 4],
                x: [-3, 0, 2, 3, 4, 7],
                type: 'scatter',
                mode: 'lines+points',
                marker: {color: 'white'},
                name: 'Lower Bound',
                orientation: 'h',
            },
        ];

        var x1 = [];
        var x2 = [];
        for (var i = 0; i < 500; i ++) {
            x1[i] = Math.random();
            x2[i] = Math.random();
        }

        var trace1 = {
            x: x1,
            type: "histogram",
        };
        var trace2 = {
            x: x2,
            type: "histogram",
        };
        var graphHist = [trace1, trace2];
        //var layout = {barmode: "stack"};

        return (
            <div className='container text-center content-center'>
                <h3>{'Issue #'+fakeNumber}</h3>
                <hr color='white'/>
                <img src={preImage + 'icons/'+iconList[issue.type]} className='iconImage' alt={'Icon of '+issue.type}/>
                <br/><br/>

                <div align='center'>
                    <p><b>Where: </b>{issue.where}</p>
                    <p><b>When: </b>{issue.when}</p>
                    <p><b>What: </b>{issue.what}</p>
                </div>

                <div className='row'>
                    <Plot 
                        data={graphLine} 
                        layout={layout}
                        config={{scrollZoom: false, staticPlot: true}}
                        className='col-6'
                    />

                    <Plot 
                        data={graphHist} 
                        layout={layout}
                        config={{scrollZoom: false, staticPlot: true}}
                        className='col-6'
                    />
                </div>
                
            </div>
        )
    }
}

export default Issue