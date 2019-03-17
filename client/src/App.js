import React, { Component } from 'react'
import './App.css'
import Header from "./components/Header/Header"
import Navigation from "./components/Navigation/Navigation"
import SwitchMain from "./components/SwitchMain/SwitchMain"
import { BrowserRouter } from "react-router-dom";

class App extends Component {
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
