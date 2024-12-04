import UpcomingWeather from './src/screens/UpcomingWeather';
import CurrentWeather from './src/screens/CurrentWeather';
import City from './src/screens/City';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen 
            name={'Current'} 
            component={CurrentWeather} 
            options={{
              tabBarIcon: ({ focused }) => (
                <Feather name="sun" size={24} color={ focused ? 'black' : 'grey'} />
              ),
            }}
          />
        <Tab.Screen 
          name={'Upcoming'} 
          component={UpcomingWeather} 
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather name="calendar" size={24} color={ focused ? 'black' : 'grey'} />
            ),
          }}
        />
        <Tab.Screen 
          name={'City'} 
          component={City} 
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather name="map-pin" size={25} color={ focused ? 'black' : 'grey'} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
