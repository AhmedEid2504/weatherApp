import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UpcomingWeather from "../screens/UpcomingWeather";
import CurrentWeather from "../screens/CurrentWeather";
import City from "../screens/City";
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Tabs({weather}) {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'lightblue',
                tabBarStyle: { backgroundColor: 'white', height: 60},
                headerStyle: { 
                    backgroundColor: 'white',
                },
                headerTitleStyle: { 
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: 'black',
                },
                headerTitleAlign: 'center',
            }}
        >
            <Tab.Screen 
                name={'Current'} 
                options={{
                tabBarIcon: ({ focused }) => (
                    <Feather name="sun" size={24} color={ focused ? 'black' : 'lightblue'} />
                ),
                }}
            >
                {() => <CurrentWeather weatherData={weather.list[0]} />}
            </Tab.Screen>
            <Tab.Screen 
                name={'Upcoming'} 
                options={{
                    tabBarIcon: ({ focused }) => (
                    <Feather name="calendar" size={24} color={ focused ? 'black' : 'lightblue'} />
                    ),
                }}
            >
                {() => <UpcomingWeather weather={weather.list} />}
            </Tab.Screen>
            <Tab.Screen 
                name={'City'} 
                component={City} 
                options={{
                    tabBarIcon: ({ focused }) => (
                    <Feather name="map-pin" size={24} color={ focused ? 'black' : 'lightblue'} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}