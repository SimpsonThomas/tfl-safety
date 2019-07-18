import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

import "./navigation.css"; // navigation styles

import 'bootstrap'; // needs to be imported to enable collapsing navbar
import pageList from "../../constants/pages";

class Navigation extends Component {
    /*constructor(props) {
        super(props)
    }*/

    /**
     * Generates the buttons for the navbar
     * 
     * @param {*} item - the dictionary containing the name and link of the navbar item we are creating
     * @param {*} navClass - any special classes for this nav-item
     */
    navBut(item, navClass='') {
        return (
            <li className='nav-item' key={item.name}>
                <NavLink 
                    className={navClass+" nav-link "+item.name}
                    id={item.link.split('/')[1]+'NavLink'}
                    to={item.link}
                >
                    {item.name}
                </NavLink>
            </li>
        )
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark sticky-top">
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                    </button> 
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/*Elements that display in the collapsed menu and full width menu*/}
                        <ul className="navbar-nav mr-auto">

                            {pageList.map(page => {
                                if (page.nav && page.side === 'left') return this.navBut(page)
                                else return null
                            })}
                            &nbsp; {/*Spacer*/}
                        </ul>
                        <span>
                            {/*Right side of navbar*/}
                            <ul className="navbar-nav mr-auto">
                                
                            {pageList.map(page => {
                                if (page.nav && page.side === 'right') return this.navBut(page)
                                else return null
                            })}
                            </ul>
                        </span>

                    </div>


            </nav>
        )
    }
}

export default Navigation