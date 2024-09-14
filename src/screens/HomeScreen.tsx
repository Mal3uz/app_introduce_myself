import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ProfileImage from '../component/ProfileImage';

type HomeScreenProps = {
  setCurrentScreen: (screen: 'Home' | 'About') => void;
};

export default function HomeScreen({ setCurrentScreen }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <ProfileImage />
      <Text style={styles.text}>HI, Welcome to My Profile App!</Text>
      <Button title="Let's start" onPress={() => setCurrentScreen('About')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 20,
  },
});
