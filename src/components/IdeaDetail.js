import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

const IdeaDetail = ({ name, onIdeaPress }) => {
  return (
    <TouchableHighlight onPress={() => onIdeaPress(name)} underlayColor="#fff">
      <View style={styles.ideaContainer}>
        <Text style={styles.ideaName}>{name.toUpperCase()}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  ideaContainer: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  ideaName: {
    fontSize: 14,
    borderColor: '#95D7AE',
    borderWidth: 3,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    alignSelf: 'center',
  },
});

export default IdeaDetail;
