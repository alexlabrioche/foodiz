import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = ({ value, onChange, onTermSubmit }) => {
  return (
    <View style={styles.container}>
      <EvilIcons name="search" style={styles.searchIcon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Rechercher"
        onChangeText={onChange}
        value={value}
        style={styles.input}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: 5,
    margin: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  searchIcon: {
    fontSize: 42,
    margin: 5,
    alignSelf: 'center',
    transform: [{ rotate: '90deg' }],
  },
  textStyle: {},
});

export default SearchBar;
