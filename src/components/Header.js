import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Appbar, Title } from 'react-native-paper';



export default  Header = (props)=> {



  return (

    <Appbar.Header style={{ backgroundColor: '#00aaff' 
    
    }}>
      <View style={{flexDirection:'row',justifyContent:'center',flex:1}}>
      <Title style={{color:'#ffffff'}}>{props.name}</Title>

      </View>
   
   
    </Appbar.Header>
  )
}

const styles = StyleSheet.create({})