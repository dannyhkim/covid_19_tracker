import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api'; // automatically searches for index.js file in api folder
import './App.css';
import logo from './logo.svg';



class App extends React.Component {
  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
  }

  render() {
    return (
      <div className={styles.container}>
        <Cards/>
        <CountryPicker/>
        <Chart/>
      </div>
    )
  }
}


export default App;
