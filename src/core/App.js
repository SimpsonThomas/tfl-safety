import React, { Component } from "react";
import { Route, Switch, Redirect} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

// Components to display
import Navigation from './navigation/navigation.js';

// state functions
import { saveState, loadState} from './components/persist';

import './components/App.css';
import { pageList } from "../constants/pages.js";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = loadState()
            // loads the state from storage, runs when the page reloads only
    }

    /**
     * This creates routes for the app, passing through the account and adminview properties, it is the route maker most apps will need
     * 
     * @param {*} item - an item containing all the details for a new route
     */
    routeMaker(item) {
        // returns routes
        return(
            <Route
                key={item.link}
                component={item.component}
                exact path={item.link}
            />
        )
    }

    render() {
      return (
            <Router>
                <>  
                  <>
                      <div className='body'>
                          <Navigation></Navigation>
                          <br/>
                          <Switch>
                              {/* Render page based on the constants*/}

                             
                              {pageList.map(page => this.routeMaker(page))}
                              <Route component={() => 
                                <center>
                                  <p>Sorry page not found</p>
                                </center>
                                } />
                          </Switch>
                      </div>
                  </>
                </>
            </Router>
        )
    }
}

export default App
