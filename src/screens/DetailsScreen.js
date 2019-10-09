import React, { useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import useResult from '../hooks/useResult';
import AppLoader from '../components/AppLoader';
import Rating from '../components/Rating';

import MapView from 'react-native-maps';

const DetailsScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [searchApi, result, setResult] = useResult();
  useEffect(() => {
    searchApi(id);
  }, []);
  console.info(result && result);
  return result ? (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.name}>{result.name}</Text>
        <Rating stars={result.rating} reviews={result.review_count} />
      </View>
      <View style={styles.imageContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={result.photos}
          keyExtractor={(pic) => pic}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
        />
      </View>

      <View style={styles.mainContainer}>
        <Text style={styles.phone}>{result.display_phone}</Text>
        <Text style={styles.adress}>
          {result.location.display_address[0]} {result.location.display_address[1]}
        </Text>
      </View>
      <MapView
        style={styles.map}
        region={{
          latitude: result.coordinates.latitude,
          longitude: result.coordinates.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}
        showsUserLocation={true}
      />
    </View>
  ) : (
    <AppLoader />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginHorizontal: 10,
  },
  mainContainer: {
    marginHorizontal: 10,
  },
  imageContainer: {
    height: 260,
  },
  name: {
    color: '#333',
    alignSelf: 'center',
    marginVertical: 30,
    fontSize: 30,
  },
  image: {
    height: 220,
    width: 300,
    borderRadius: 4,
    margin: 20,
  },
  phone: {
    alignSelf: 'flex-end',
    color: '#444',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  adress: {
    fontSize: 18,
    letterSpacing: 1.5,
    color: '#444',
    marginVertical: 10,
  },
  map: {
    height: 300,
    width: '100%',
    marginVertical: 10,
  },
});

export default DetailsScreen;
