import React, { Component } from 'react'
import axios from "axios"
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    this.getDataFromDb()
    console.log('mount')
  }

  getDataFromDb = async () => {
    let result = await axios("http://localhost:3001/getData")
    console.log('result:', result)
    this.setState({ data: result.data })
  };
  render() {
    console.log('state.data:',this.state.data)
    return (
      <div className="App">
          <p>
            Hello World
          </p>
      </div>
    );
  }
}

export default App
