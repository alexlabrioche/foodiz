import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SkeletonResultDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image} />
      <View style={styles.text} />
      <View style={styles.rating} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: 220,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 100,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  text: {
    width: '50%',
    height: 20,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  rating: {
    width: '100%',
    height: 20,
    backgroundColor: '#ccc',
  },
});

export default SkeletonResultDetail;
