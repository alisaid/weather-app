import React from "react";
import Description from "./Description";
import Form from "./Form";
import Details from "./Details";

const Api_key = "ed89f6fe37812395b00cb5cf80fe3c64";

export default class WeatherApp extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=${Api_key}`
    );
    const response = await api_call.json();

    if (city && country) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        error: "Please input both city and country name!"
      });
    }
  };

  render() {
    return (
      <div>
        <div className="background">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="description">
                  <Description />
                </div>
                <div className="form-container">
                  <Form getForecast={this.getWeather} />
                  <Details
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
