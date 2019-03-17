import React, { Component } from 'react'

class House extends Component {
    constructor() {
        super()
    }
    render () { 
        let data = this.props.details
        return (
            <div key = {this.props.idx}>
                <div className="card house">
                    <div style={{ backgroundColor: data.agency.brandingColors.primary }}>
                        <img className="card-img-top brand-img" src={data.agency.logo} alt='agency'></img>
                    </div>
                    <img style={{ height: "200px" }} src={data.mainImage}></img>
                    <div className="card-body">
                        <span style={{ float: "left" }}> price: {data.price} </span>
                        <button style={{ float: "right" }} className="btn btn-success" onClick={this.addProperty} value={this.props.idx} id={data.id}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default House;