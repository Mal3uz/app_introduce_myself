import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function ProfileImage() {
  return (
    <Image
      source={require('../../assets/favicon.png')}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
