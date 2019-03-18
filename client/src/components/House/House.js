import React, { Component } from 'react'
import './House.css'

class House extends Component {
    constructor() {
        super()        
        this.opOnClick = this.opOnClick.bind(this)
    }
    opOnClick (e) {
        console.log('child')
        this.props.opOnClick(e)
    }
     
    render() {
        let data = this.props.details
        return (
            <div key={this.props.idx}>
                <div className="card house">                
                    <div style={{ backgroundColor: data.agency.brandingColors.primary }}>
                        <img className="card-img-top brand-img" src={data.agency.logo} alt='agency'></img>
                    </div>
                    <img style={{ height: "200px" }} src={data.mainImage}></img>
                    <div className="card-body">
                        <span style={{ float: "left" }}> price: {data.price} </span>
                        <button style={{ float: "right" }} className="btn btn-success" onClick={this.opOnClick} value={this.props.idx} id={data.id}>{this.props.op}</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default House;