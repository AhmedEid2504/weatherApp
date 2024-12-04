import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import IconText from "../components/IconText";

const City = () => {
    const {
        container,
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

    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/city.jpg')} style={imageLayout}>
                <Text style={[cityName, cityText]}>London</Text>
                <Text style={[countryName, cityText]}>UK</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText 
                        iconName="users" 
                        iconColor="red"
                        bodyText="8.9M"
                        bodyTextStyles={populationText}
                    />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText 
                        iconName="sunrise" 
                        iconColor="white" 
                        bodyText="06:00" 
                        bodyTextStyles={riseSetText} 
                    />
                    <IconText 
                        iconName="sunset" 
                        iconColor="white" 
                        bodyText="18:00" 
                        bodyTextStyles={riseSetText} 
                    />
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
        color: 'red',
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
    }
});


export default City;