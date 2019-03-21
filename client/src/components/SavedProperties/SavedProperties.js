import React from "react";
import House from "../House/House"

class Saved extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            ...props
        }
    }
    
    //event handler thet invokes function in the parent and updates the state with new list
    removeProperty = (e) => {
        this.setState({ saved: this.props.removeProperty(e,this.state.saved) })
    }
    
    render () {        
        let saved = []
        if (this.props.saved) {
            saved = this.props.saved
        }
        return (
            <div className='saved'>
                <div className="row">
                    <div className="col-sm">
                        <h3>Saved Houses</h3>
                    </div>
                </div>
                {saved.length <= 0
                    ? "List Empty"
                    : saved.map((house, idx) => <House details={house} key={idx} idx={idx} op={'Remove'} opOnClick={this.removeProperty} />)}
            </div>
        );
    }
}

export default Saved;

