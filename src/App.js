import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import MainContainer from "./containers/MainContainer/MainContainer";
import "../node_modules/antd/dist/antd.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <React.Fragment>
              <MainContainer />
            </React.Fragment>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
