import React from 'react';
import { Text, View, Image, TouchableHighlight, StyleSheet } from 'react-native';

import Rating from './Rating';

const ResultDetail = ({ name, image_url, rating, review_count }) => {
  return (
    <View style={s.container}>
      <Image source={{ uri: image_url }} style={s.image} />
      <Text style={s.name}>{name}</Text>
      <Rating stars={rating} reviews={review_count} />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    height: 180,
    width: 220,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    color: '#454851',
  },
  rating: {
    fontSize: 14,
    color: '#ccc',
  },
});

export default ResultDetail;
