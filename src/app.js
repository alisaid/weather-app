import React from "react";
import ReactDOM from "react-dom";
import WeatherApp from "./components/WeatherApp";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<WeatherApp />, document.getElementById("app"));
