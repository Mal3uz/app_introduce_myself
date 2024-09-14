import React, { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'Home' | 'About'>('Home');

  return (
    <View style={styles.container}>
      {currentScreen === 'Home' ? (
        <HomeScreen setCurrentScreen={setCurrentScreen} />
      ) : (
        <AboutScreen setCurrentScreen={setCurrentScreen} />
      )}
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
