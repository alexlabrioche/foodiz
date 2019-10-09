import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

import IdeaDetail from './IdeaDetail';

const ideasList = ({ title, onIdeaPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={['Indien', 'Japonais', 'Burger', 'Vegan', 'Coréen']}
        keyExtractor={(res) => res}
        renderItem={({ item }) => <IdeaDetail name={item} onIdeaPress={onIdeaPress} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 28,
    marginLeft: 10,
    marginBottom: 4,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default ideasList;
