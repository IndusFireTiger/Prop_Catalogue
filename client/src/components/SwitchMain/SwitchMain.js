import React from "react"
import { Route, Switch } from "react-router-dom"
import All from "../AllProperties/AllProperties"
import Available from "../AvailableProperties/AvailableProperties"
import Saved from "../SavedProperties/SavedProperties"

const SwitchMain = () => {
    return (
    <div>
        <Switch>
              <Route exact path="/all" component={All} />
              <Route path="/available" component={Available} />
              <Route path="/saved" component={Saved} />
        </Switch>
    </div>
    );
}

export default SwitchMain;