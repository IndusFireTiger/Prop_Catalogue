import React from "react"
import { Route, Switch } from "react-router-dom"
import All from "../AllProperties/AllProperties"
import Available from "../AvailableProperties/AvailableProperties"
import Saved from "../SavedProperties/SavedProperties"
import axios from "axios"
import './SwitchMain.css'

class SwitchMain extends React.Component {
    constructor() {
        super()
        this.state = {
            available: [],
            saved: [],
            dataFetched: true
        }
    }

    componentWillMount() {
        this.getData()
    }

    getData = async () => {
        try {
            let res = await axios("http://localhost:3001/getData") // todo: handle error
            this.setState({ available: res.data.results, saved: res.data.saved })
        } catch (err) {
            this.setState({ dataFetched: false })
        }
    };
    addProperty = (e, saved) => {
        if (!saved || saved.length == 0) {
            saved = this.state.saved
        }
        let exists = false
        for (let i = 0; i < saved.length; i++) {
            if (e.target.id == saved[i].id) {
                exists = true;
                break
            }
        }
        if (!exists) {
            saved.push(this.state.available[e.target.value])
        } else {
            alert('already saved')
        }
        return saved
    }
    removeProp = (e, saved) => {
        saved.splice(e.target.value, 1)
        return saved
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/all" render={(props) => <All {...props} available={this.state.available} saved={this.state.saved} addProperty={this.addProperty} removeProperty={this.removeProp} />} />
                    <Route path="/available" render={(props) => <Available {...props} available={this.state.available} saved={this.state.saved} addProperty={this.addProperty} />} />
                    <Route path="/saved" render={(props) => <Saved {...props} available={this.state.available} saved={this.state.saved} removeProperty={this.removeProp} />} />
                </Switch>

                {this.state.dataFetched ? '' :
                    <div className = 'error-msg'>
                        <p>Error: Couldn't fetch the property list.</p>
                    </div>}
            </div>
        );
    }
}

export default SwitchMain;