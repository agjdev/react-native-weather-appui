import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { StatusBar } from 'react-native';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';


const Tabs = createMaterialBottomTabNavigator();


export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle='light-content' backgroundColor="#00aaff"/>

      <NavigationContainer>
        <Tabs.Screen name="home" component={Home}/>
        <Tabs.Screen name="search" component={Search}/>
      </NavigationContainer>

    

    </SafeAreaProvider>
  
    
    
      
     
      
    
  )
}

const styles = StyleSheet.create({})