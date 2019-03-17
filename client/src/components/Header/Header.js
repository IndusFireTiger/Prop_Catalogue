import React from "react";

const Header = () => {
    return (
        <div>
            <div className="row" >
                <div className="col-2">
                    logo                    
                    {/* <NavLink to="/">Logo</NavLink> */}
                </div>
                <div className="col-7">
                    company name
                </div>
                <div className="col-3">
                    user
                </div>
            </div>
        </div>
    );
}

export default Header;