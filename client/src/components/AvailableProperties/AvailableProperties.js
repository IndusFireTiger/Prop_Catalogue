import React from "react";
import House from "../House/House"

class Available extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props
        }
    }

    addProperty = (e) => {
        this.setState({ saved: this.props.addProperty(e, this.state.saved) })
    }
    render() {
        let available = []
        if (this.props.available) {
            available = this.props.available
        }
        return (
            <div className='available'>
                <div className="row">
                    <div className="col-sm">
                        <h3>Available Houses</h3>
                    </div>
                </div>
                    {available.length <= 0
                        ? "List Empty"
                        : available.map((house, idx) => <House details={house} idx={idx} op={'Add'} opOnClick={this.addProperty} />)}
                </div>
        );
    }
}

export default Available;

