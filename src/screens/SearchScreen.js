import React, { useState, useEffect } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import useResults from '../hooks/useResults';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import Welcome from '../components/Welcome';
import IdeasList from '../components/IdeasList';

const SearchScreen = () => {
  const [welcomeMsg, setWelcomeMsg] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setWelcomeMsg(false);
    }, 1500);
  }, []);
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMsg] = useResults();
  useEffect(() => {
    searchApi('pizza');
  }, []);
  const filterByPrice = (price) => {
    return results.filter((res) => res.price && res.price.length === price);
  };
  return (
    <ScrollView style={styles.container}>
      {welcomeMsg ? (
        <Welcome />
      ) : (
        <>
          <SearchBar value={term} onChange={setTerm} onTermSubmit={() => searchApi(term)} />
          {errorMsg.length >= 1 && <Text style={styles.errorMsg}>{errorMsg}</Text>}
          <ResultsList results={filterByPrice(1)} title="Pas cher frère" />
          <ResultsList results={filterByPrice(2)} title="Ni cher ni bon" />
          <ResultsList results={filterByPrice(3)} title="On s'ruine ?" />
          <IdeasList title="En panne d'idées ?" onIdeaPress={searchApi} />
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  errorMsg: {
    marginVertical: 3,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#d91437',
  },
});

export default SearchScreen;
