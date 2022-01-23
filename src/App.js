import "./App.css";
import React, { Component } from "react";
import Main from "./components/Container/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import staffReducer from "./redux/reducers";

const store = createStore(staffReducer);

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
