import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from "./nav/main-top-header/Header";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from "./mainpage/MainPage";
import MyPage from "./mypage/MyPage";
import PizzaPage from "./pizzapage/PizzaPage";
import Review from "./review/Review";
import Basket from "./basket/Basket";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}></Route>
                <Route path="/mypage" element={<MyPage/>}></Route>
                <Route path="/pizza" element={<PizzaPage/>}></Route>
                <Route path="/review/:id" element={<Review />}></Route>
                <Route path="/basket" element={<Basket/>}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();