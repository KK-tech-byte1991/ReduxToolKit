// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));


import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)