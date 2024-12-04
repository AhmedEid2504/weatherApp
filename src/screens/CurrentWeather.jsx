import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utilities/weatherType';

const CurrentWeather = ({weatherData}) => {
    const {
        wrapper,
        container,
        tempStyle,
        feels,
        highLowWrapper,
        highLow,
        bodyWrapper,
        descriptionStyle,
        messageStyle,
    } = styles;

    const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData;
    const weatherCondition = weather[0].main


    return (
        <SafeAreaView style={[wrapper, {backgroundColor: weatherType[weatherCondition].backgroundColor}]}>
            <View style={container}>
                <Feather name={weatherType[weatherCondition].icon} size={100} color="black" />
                <Text style={tempStyle}>{temp}</Text>
                <Text style={feels}>Feels like {feels_like}</Text>
                <View style={highLowWrapper}>
                    <Text style={highLow}>High: {temp_max}</Text>
                    <Text style={highLow}>Low: {temp_min}</Text>
                </View>
            </View>
            <View style={bodyWrapper}>
                <Text style={descriptionStyle}>
                    {weather[0].description}
                </Text>
                <Text style={messageStyle}>
                    {weatherType[weatherCondition].message}
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tempStyle: {
        color: 'black',
        fontSize: 48,
    },
    feels: {
        color: 'black',
        fontSize: 30,
    },
    highLowWrapper: {
        flexDirection: 'row',
    },
    highLow: {
        color: 'black',
        fontSize: 20,
    },
    bodyWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 25,
        marginBottom: 40,
    },
    descriptionStyle: {
        color: 'black',
        fontSize: 48,
    },
    messageStyle: {
        color: 'black',
        fontSize: 30,
    },

});


export default CurrentWeather;