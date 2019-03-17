import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <div className="row">
                <div className="col-sm">
                    <NavLink to="/all">All Properties</NavLink>
                    <br/>
                    <NavLink to="/available">Available</NavLink>
                    <br/>
                    <NavLink to="/saved">Saved</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navigation;