import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Sudoku Stack
          </h1>
          <LambdaDemo />
        </header>
      </div>
    )
  }
}

export default App
