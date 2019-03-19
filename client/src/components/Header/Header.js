import React from "react";
import './Header.css'
const Header = () => {
    return (
        <div className="row header" >
            <div className="col-1">Logo</div>
            <div className="col-8">Company name</div>
            <div className="col-3">User</div>
        </div>
    );
}

export default Header;