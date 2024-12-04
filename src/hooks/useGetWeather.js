import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env';
import { useEffect, useState } from 'react';

export const useGetWeather = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState([]);
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);

    const getWeather = async () => {
        try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
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

        return { loading, error, weather };
}