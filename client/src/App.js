import React, { Component } from 'react'
import './App.css'
import Header from "./components/Header/Header"
import Navigation from "./components/Navigation/Navigation"
import SwitchMain from "./components/SwitchMain/SwitchMain"
import { BrowserRouter } from "react-router-dom";


// Parent to all the components in this app
class App extends Component {
  render() {
    // BrowserRoute for client-side routing to display different views using React NavLink
    // NavLink are used inside Header and SwitchMain components
    // Bootstrap container of type fluid for full viewport and responsive layout containing rows and columns
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
