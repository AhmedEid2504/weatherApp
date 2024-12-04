import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import IconText from "../components/IconText";
import moment from "moment";

const City = ({ weatherData }) => {
    const {
        container,
        content,
        cityText,
        cityName,
        countryName,
        populationWrapper,
        populationText,
        riseSetWrapper,
        riseSetText,
        rowLayout,
        imageLayout,
    }= styles;

    const { name, country, population, sunrise, sunset } = weatherData;

    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/city.jpg')} style={imageLayout}>
                <View style={content}>
                    <Text style={[cityName, cityText]}>{name}</Text>
                    <Text style={[countryName, cityText]}>{country}</Text>
                    <View style={[populationWrapper, rowLayout]}>
                        <IconText 
                            iconName="users" 
                            iconColor="white"
                            bodyText={`Population: ${population}`}
                            bodyTextStyles={populationText}
                        />
                    </View>
                    <View style={[riseSetWrapper, rowLayout]}>
                        <IconText 
                            iconName="sunrise" 
                            iconColor="white" 
                            bodyText={moment(sunrise).format('HH:mm:ss a')}
                            bodyTextStyles={riseSetText} 
                        />
                        <IconText 
                            iconName="sunset" 
                            iconColor="white" 
                            bodyText={moment(sunset).format('HH:mm:ss a')}
                            bodyTextStyles={riseSetText} 
                        />
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    city: {
        fontSize: 48,
        textAlign: 'center',
    },
    imageLayout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cityText:{
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30,
    },
    populationText: {
        fontSize: 25,
        color: 'white',
    },
    riseSetWrapper: {
        justifyContent: 'center',
        gap: 10,
        marginTop: 30,
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
});


export default City;