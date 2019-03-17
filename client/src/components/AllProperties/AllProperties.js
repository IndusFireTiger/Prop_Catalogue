import React, { Component } from 'react'
import axios from 'axios'
import House from '../House/House'

class AllProps extends Component {
    constructor() {
        super()
        this.state = {
            available: [],
            saved: []
        }
    }

    componentWillMount() {
        this.getData()
    }

    getData = async () => {
        let res = await axios("http://localhost:3001/getData")
        this.setState({ available: res.data.results, saved: res.data.saved })
    };

    render() {
        const { available, saved } = this.state;
        return (
            <div>
                <div className="row" >
                    <div className="col-sm">
                        <div className='available'>
                            <h3>Available Houses</h3>
                            {available.length <= 0
                                ? "List Empty"
                                : available.map((house, idx) => <House details={house} idx={idx} />)}
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className='available'>
                            <h3>Saved Houses</h3>
                            {saved.length <= 0
                                ? "List Empty"
                                : saved.map((house, idx) => <House details={house} idx={idx} />)}
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default AllProps;

