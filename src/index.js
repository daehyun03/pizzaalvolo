import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './mainpage/MainPage'
import reportWebVitals from './reportWebVitals';
import Basket from "./basket/Basket";
import {Provider} from "react-redux";
import store from "./store"
import Review from "./review/Review";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <Review />
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
