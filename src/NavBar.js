import React from 'react';
import './NavBar.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function NavBar(){

    return(
        <header className="Navbar">
            <nav className="Navbar_nav"> 
                <div className="spacer">
                    <div className="Navbar_items">
                        <ul>          
                            <Link to='/favorites'>Favorites</Link>
                            <Link to='/'>Home</Link>
                         </ul>  
                    </div>
                </div>                  
            </nav>
        </header>
    )
}

export default NavBar