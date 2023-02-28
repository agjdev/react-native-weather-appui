import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import Header from './Header';
import { TextInput, Button, Card } from 'react-native-paper';

export default Search = () => {

  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);

  const fetchCities = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${MyCity}&appid={a736ec0b24a67e2ba3a7df9762235007}`)
      .then(response => response.json())
      .then(cityData => {
        setCities([cityData]);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <Header name="Search Bar" />
      <TextInput
        label="city name"
        value={city}
        theme={{ colors: { primary: '#00aaff' } }}
        onChangeText={(text) => setCity(text)}
      />

      <Button
        icon="content-save"
        theme={{ colors: { primary: '#00aaff' } }}
        style={{ margin: 20 }}
        mode="contained"
        onPress={() => fetchCities()}
      >
        Search
      </Button>

      <FlatList
        data={cities}
        renderItem={({ item }) => {
          return (
            <Card style={{ margin: 2, padding: 12 }}>
              <Text>{item.name}</Text>
            </Card>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
