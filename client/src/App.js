import React, { Component } from 'react'
import axios from "axios"
import './App.css'
import Header from "./components/Header/Header"
import Navigation from "./components/Navigation/Navigation"
import SwitchMain from "./components/SwitchMain/SwitchMain"
import { BrowserRouter } from "react-router-dom";

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
    this.setState({ data: result.data })
  };
  render() {
    return (
      <div className="App container-fluid">
        <BrowserRouter>
          <Header />
          <Navigation />
          <SwitchMain />
        </BrowserRouter>
      </div>
    );
  }
}

export default App
