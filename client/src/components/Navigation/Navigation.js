import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
    return (
        <div className="row navigation">
            <div className="col-sm">
                <NavLink to="/all">All Properties</NavLink><br />
                <NavLink to="/available">Available</NavLink><br />
                <NavLink to="/saved">Saved</NavLink>
            </div>
        </div>
    );
}

export default Navigation;