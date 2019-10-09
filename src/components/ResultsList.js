import React, { useEffect, useReducer } from 'react';
import { Text, View, FlatList, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import ResultDetail from './ResultDetail';
import SkeletonResultDetail from './SkeletonResultDetail';
import Sorting from './Sorting';
import sortReducer from '../reducer/Sort.reducer';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ title, results, navigation }) => {
  const [sorted, dispatch] = useReducer(sortReducer, {
    isAlphaAsc: undefined,
    isRatingAsc: undefined,
    isAmountAsc: undefined,
    results,
  });
  useEffect(() => {
    dispatch({ type: 'new-search', data: results });
  }, [results]);
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Sorting sort={dispatch} {...sorted} />
      </View>
      {results.length === 0 ? (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={['0', '1', '2']}
          keyExtractor={(res) => res}
          renderItem={() => <SkeletonResultDetail />}
        />
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={sorted.results}
          keyExtractor={(res) => res.id}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => navigation.navigate('Details', { id: item.id })}
              onLongPress={() => console.info('Looong Pressed', item.name)}
              underlayColor="#fff"
            >
              <ResultDetail {...item} />
            </TouchableHighlight>
          )}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 28,
    marginBottom: 4,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default withNavigation(ResultsList);
