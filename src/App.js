import React, { Component } from "react";
import FahrenheitCard from "./components/Fahrenheit";
import CelsiusCard from "./components/Celsius";

class App extends Component {
  state = {
    fahrenheit: 0,
    celsius: 0
  };

  /* getValue = value => {
     this.setState({
     temp: value
     });
   };*/

  getNewTempValue = (newCelsius, newFahrenheit) => {
    this.setState({
      fahrenheit: newFahrenheit,
      celsius: newCelsius
    });
  };

  /* getCelsius = value => {
     this.setState({
      celsius: value
     });
   };*/

  render() {
    return (
      <div className="App">
        {}
        <CelsiusCard
          celsius={this.state.celsius}
          getNewTempValue={this.getNewTempValue}
        />
        <FahrenheitCard
          fahrenheit={this.state.fahrenheit}
          getNewTempValue={this.getNewTempValue}
        />
      </div>
    );
  }
}

export default App;
