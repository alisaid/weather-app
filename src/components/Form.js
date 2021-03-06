import React from "react";

const Form = props => (
  <form onSubmit={props.getForecast}>
    <input type="text" name="city" placeholder="City" />
    <input type="text" name="country" placeholder="Country" />
    <div role="status">
      <span>
        <button>Get Forecast</button>
      </span>
    </div>
  </form>
);

export default Form;
