import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api'; // automatically searches for index.js file in api folder
import './App.css';

import covidImage from './images/image.png';



class App extends React.Component {
  state = {
    data: {},
    country: '',

  }

  // makes request to fetchData
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  // fetches data for specific country retrieved from CountryPicker nativeselect option
  handleCountryChange = async (country) => {
    // fetch the data
    const fetchedData = await fetchData(country);

    // set the state
    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={covidImage} alt="Covid-19"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    )
  }
}


export default App;
