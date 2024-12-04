import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import { useGetWeather } from './src/hooks/useGetWeather';
import Loading from './src/components/Loading';

const App= () => {
  const { loading, weather } = useGetWeather();

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <Tabs 
        weather={weather}
      />
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
