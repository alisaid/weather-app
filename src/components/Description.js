import React from "react";

class Description extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>{this.props.likedCityName}</div>
        <h1 className="description__title">Weather App</h1>
        <p className="description__subtitle">
          Helps you find weather forecast in cities all around the world
        </p>
      </div>
    );
  }
}

export default Description;
