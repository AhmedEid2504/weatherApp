import React from 'react';
import { 
    View, 
    Text, 
    SafeAreaView,
    StyleSheet,
    FlatList,
    ImageBackground
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import ListItem from '../components/ListItem';
import { StatusBar } from 'expo-status-bar';

const DATA = [
    {
        dt_txt: '2023-02-18 15:00:00',
        main:{
            temp_max: 12.55,
            temp_min: 10.55,
        },
        weather: [
            {
                main: 'Rain',
            }
        ]
    },
    {
        dt_txt: '2023-02-18 18:00:00',
        main:{
            temp_max: 14.55,
            temp_min: 12.55,
        },
        weather: [
            {
                main: 'Clear',
            }
        ]
    },
    {
        dt_txt: '2023-02-18 21:00:00',
        main:{
            temp_max: 10.55,
            temp_min: 8.55,
        },
        weather: [
            {
                main: 'Clouds',
            }
        ]
    },
]

const UpcomingWeather = () => {
    const renderItem = ({ item }) => (
        <ListItem
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
            condition={item.weather[0].main}
        />
    );

    const { container, image} = styles;
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/clouds.jpg')}
                style={image}
            >
                <Text>Upcoming Weather</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'royalblue',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
    }
});

export default UpcomingWeather;