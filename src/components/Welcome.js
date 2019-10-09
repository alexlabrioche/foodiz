import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import anim from '../../assets/Animations/splash_loader.json';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <LottieView style={styles.animation} source={anim} autoPlay />
      <Text style={styles.textStyle}>FO0D!Z</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 48,
    color: '#333',
  },
  animation: {
    height: 160,
    width: 160,
    marginBottom: 120,
  },
});

export default Welcome;
