import React from "react";

import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.scss";

import ListHolder from "./components/ListHolder";
import Header from "./components/Header";


function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <ListHolder/>
      </div>
    </Provider>
  );
}

export default App;
