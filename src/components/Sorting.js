import React from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Sorting = ({ sort, isAlphaAsc, isRatingAsc, isAmountAsc }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => sort({ type: 'alpha' })} underlayColor="#fff">
        <FontAwesome
          style={styles.icon}
          color={isAlphaAsc !== undefined ? '#555' : '#ccc'}
          name={
            isAlphaAsc !== undefined
              ? `sort-alpha-${isAlphaAsc ? 'asc' : 'desc'}`
              : 'sort-alpha-asc'
          }
        />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sort({ type: 'amount' })} underlayColor="#fff">
        <FontAwesome
          color={isAmountAsc !== undefined ? '#555' : '#ccc'}
          style={styles.icon}
          name={
            isAmountAsc !== undefined
              ? `sort-amount-${!isAmountAsc ? 'asc' : 'desc'}`
              : 'sort-amount-desc'
          }
        />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sort({ type: 'rating' })} underlayColor="#fff">
        <FontAwesome
          color={isRatingAsc !== undefined ? '#555' : '#ccc'}
          style={styles.icon}
          name={
            isRatingAsc !== undefined
              ? `sort-numeric-${!isRatingAsc ? 'asc' : 'desc'}`
              : 'sort-numeric-asc'
          }
        />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
    fontSize: 14,
  },
});

export default Sorting;
