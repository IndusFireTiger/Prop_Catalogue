import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        // stateless component containing 3 divs in the ratio 1:8:3 of width in a single row
        <div className="row header" >
            <div className="col-1"><NavLink exact to="/">Logo</NavLink></div>
            <div className="col-8">Company name</div>
            <div className="col-3">User</div>
        </div>
    );
}

export default Header;