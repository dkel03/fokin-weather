import React from 'react';
import axios from 'axios';
import { Alert } from 'react-native'
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';

const API_KEY = "415d40b671110fe964299e0a23a0487f"

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const { 
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    console.log(weather);
    this.setState({
      isLoading:false,
      condition: weather[0].main, 
      temp
    });
  }

  getLocation = async() => {
    try {
      const response = await Location.requestPermissionsAsync();
      console.log(response);
      const { 
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }
  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, condition, temp } = this.state;
    return isLoading ? <Loading /> : <Weather condition={condition} temp={Math.round(temp)} />;
  }
}
