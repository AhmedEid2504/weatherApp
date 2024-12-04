import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import Loading from './src/components/Loading';
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env';
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={c556cca43920bc6c591a5a23a6bb96ce}
const App= () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  const getWeather = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLon(location.coords.longitude);
      setLat(location.coords.latitude);
      if (lat && lon) {
        await getWeather();
      }
    })();
  }, [lat, lon]);

  if (weather) {
    console.log(lon);
    console.log(lat);
    console.log(weather);
  }


  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
