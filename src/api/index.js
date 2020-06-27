// Fetching api data
import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = url;

    // if there is a country, url is changed to fetch data for specific country
    // if there is no country param, changeableUrl is by default for global stats
    if (country) {
        changeableUrl = `${url}/countries/${country}`;
    }

    try {
        // destructuring data 
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
        
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        // map data
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
        return modifiedData;

    } catch (error) {

    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries }} = await axios.get(`${url}/countries`);
        
        // return only country names 
        return countries.map((country) => country.name);
        
    } catch (error) {
        console.log(error);
    }
}