"use strict";
import "./home.sass";
import React from "react";
import ReactDOM from "react-dom";
import HomeOrderForm from "./homeOrderForm.js";
import HomeOrderList from "./homeOrderList.js";
import LoadingScreen from "../loading/loading.js";

export default class HomePage extends React.Component {
    render() {
        return (
            <div id="view-home">
                <h1>Shake Shack Order Manager</h1>
                <HomeOrderForm />
                <HomeOrderList />
                <LoadingScreen />
            </div>
        );
    }
}
