import React, { Component } from 'react'
import Available from '../AvailableProperties/AvailableProperties'
import Saved from '../SavedProperties/SavedProperties';

class AllProps extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props
        }
        this.addProperty = this.addProperty.bind(this);
        this.removeProperty = this.removeProperty.bind(this);
    }

    componentWillMount() {
        this.setState({ available: this.props.available, saved: this.props.saved })
    }
    
    addProperty = (e) => {
        this.setState({ saved: this.props.addProperty(e,this.state.saved) })
    }
    removeProperty = (e) => {
        this.setState({ saved: this.props.removeProperty(e,this.state.saved) })
    }
    render() {
        return (
            <div>
                <div className="row" style={{ display: "flex"}}>
                    <div  className="col-sm">
                        <Available {...this.props} addProperty = {this.addProperty}/>
                    </div>
                    <div  className="col-sm">                     
                        <Saved {...this.props} removeProperty = {this.removeProperty}/>
                    </div>
                </div>
            </div >
        );
    }
}

export default AllProps;

