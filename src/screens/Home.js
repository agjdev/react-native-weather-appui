import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';

export default Home = () => {
    const [info,setInfo ] = useState({
        name:"loading",
        temp:"loading",
        humidity:"loading",
        desc:"loading",
        icon:"loading"
    })


    useEffect(()=>{

        getWeather()
        
    },[])

    const getWeather = async ()=>{
        let MyCity = await AsyncStorage.getItem("newcity")
        if(!MyCity){
           const {city} = props.route.params
           MyCity = city  
        }
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${MyCity}&APPID=a736ec0b24a67e2ba3a7df9762235007&units=metric`)
        .then(data=>data.json())
        .then(results=>{
            setInfo({
              name: results.name,
              temp: results.main.temp,
              humidity: results.main.humidity,
              desc: results.weather[0].description,
              icon: results.weather[0].icon
            });
        })
    } 

    return (
      <View style={{flex:1}}>
    
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.cityName}>{info.name}</Text>
            <Text style={styles.temperature}>{info.temp}°C</Text>
            <Image style={styles.icon} source={{ uri: `http://openweathermap.org/img/w/${info.icon}.png` }} />
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.bottomContainerItem}>
              <Text style={styles.bottomContainerLabel}>Humidity</Text>
              <Text style={styles.bottomContainerValue}>{info.humidity}%</Text>
            </View>
            <View style={styles.bottomContainerItem}>
              <Text style={styles.bottomContainerLabel}>Description</Text>
              <Text style={styles.bottomContainerValue}>{info.desc}</Text>
            </View>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bottomContainerItem: {
    alignItems: 'center',
  },
  bottomContainerLabel: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  bottomContainerValue: {
    fontSize: 16,
    fontWeight: '400',
  },
  cityName: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 10,
  },
  temperature: {
    fontSize: 48,
    fontWeight: '600',
    marginBottom: 10,
  },
  icon: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
});
