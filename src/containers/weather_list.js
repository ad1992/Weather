import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityData) {
        console.log(cityData)

    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    console.log(temps)
    return (
      <tr key={name}>
        <td> {name} </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th> City </th>
            <th> Temprature </th>
            <th> Pressure </th>
            <th> Humidity </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }; // {weather} === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
