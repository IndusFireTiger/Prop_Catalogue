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
        this.addProperty = this.addProperty.bind(this);
        this.removeProperty = this.removeProperty.bind(this);
    }

    componentWillMount() {
        this.getData()
    }

    getData = async () => {
        let res = await axios("http://localhost:3001/getData") // todo: handle error
        this.setState({ available: res.data.results, saved: res.data.saved })
    };
    addProperty = (e) => {
        console.log('parent')
        console.log('this:', this)
        let saved = this.state.saved
        console.log('exists:', this.state.saved)
        console.log('target:', e.target)
        let exists = false
        for (let i = 0; i < saved.length; i++) {
            if (e.target.id == saved[i].id) {
                exists = true;
                break
            }
        }
        if (!exists) {
            console.log('push:', this.state.available["0"])
            saved.push(this.state.available[e.target.value])
            this.setState({ saved })
        } else {
            alert('already saved')
        }
        console.log('saved:', this.state.saved)
    }
    removeProperty = (e) => {
        let saved = this.state.saved
        saved.splice(e.target.value, 1)
        this.setState({ saved })
    }
    render() {
        const { available, saved } = this.state;
        return (
            <div>
                <div className="row" style={{ display: "flex"}}>
                    <div  className="col-sm">
                        <div className='available'>
                            <h3>Available Houses</h3>
                            {available.length <= 0
                                ? "List Empty"
                                : available.map((house, idx) => <House details={house} idx={idx} op={'Add'} opOnClick={this.addProperty}/>)}
                        </div>
                    </div>
                    <div  className="col-sm">
                        <div className='saved'>
                            <h3>Saved Houses</h3>
                            {saved.length <= 0
                                ? "List Empty"
                                : saved.map((house, idx) => <House details={house} idx={idx} op={'Remove'} opOnClick={this.removeProperty}/>)}
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default AllProps;

