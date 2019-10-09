import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, View, StyleSheet } from 'react-native';

const Rating = ({ stars, reviews }) => {
  const starsArray = (stars) => {
    switch (stars) {
      case 0.5:
        return ['-half', '-border', '-border', '-border', '-border'];
      case 1:
        return ['', '-border', '-border', '-border', '-border'];
      case 1.5:
        return ['', '-half', '-border', '-border', '-border'];
      case 2:
        return ['', '', '-border', '-border', '-border'];
      case 2.5:
        return ['', '', '-half', '-border', '-border'];
      case 3:
        return ['', '', '', '-border', '-border'];
      case 3.5:
        return ['', '', '', '-half', '-border'];
      case 4:
        return ['', '', '', '', '-border'];
      case 4.5:
        return ['', '', '', '', '-half'];
      case 5:
        return ['', '', '', '', ''];
      default:
        return ['-border', '-border', '-border', '-border', '-border'];
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.starsContainer}>
        {starsArray(stars).map((item, i) => (
          <MaterialIcons key={i} style={styles.starIcon} name={`star${item}`} />
        ))}
      </View>

      <Text style={styles.reviews}>{`${reviews} notes`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  starsContainer: {
    flexDirection: 'row',
  },
  starIcon: {
    color: '#95D7AE',
    fontSize: 18,
    alignSelf: 'center',
  },
  reviews: {
    color: '#ccc',
  },
});

export default Rating;
