import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const AppLoader = () => {
  return (
    <View style={styles.loadContainer}>
      <Text style={styles.loadText}>FO0D!Z</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadText: {
    fontWeight: 'bold',
    fontSize: 48,
    color: '#444',
  },
});

export default AppLoader;
