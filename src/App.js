import "./App.css";
import React, { Component } from "react";
import Main from "./components/Container/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Reducer from "./redux/reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(Reducer, applyMiddleware(thunk, logger));

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Provider store={store}>
            <Main />
          </Provider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
