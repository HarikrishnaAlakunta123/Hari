import React from "react";
import ReactDom from "react-router-dom";
import './index.css'
import App from './App'
import ShopContestProvider from "./src/assets/Context/ShopContext";

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <ShopContestProvider>
        <App/>
    </ShopContestProvider>
)