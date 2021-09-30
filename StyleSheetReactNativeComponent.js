import React from  'react';
import {StyleSheet, View, Text, Image} from  'react-native';
import rumah from './assets/rumah.jpg';

const styles = StyleSheet.create({
    text: {
      fontSize: 30,
      fontWeight: 'bold',
      alignSelf: 'center',
      marginTop: 5,
    },
  });
  
  const StylingReactNativeComponent = () => {
    return (
      <View>
        <Text style={styles.text}>Styling Component</Text>
        <Barang />
      </View>
    );
  };
  
  const Barang = () => {
    return (
      <View style={{marginTop: 10, alignItems: 'center', padding:20, backgroundColor: '#d1d8e0', marginHorizontal: 20, borderRadius: 15}}>
        <Image source={rumah} style={{width: 200, height: 100}} />
        <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 10}}> Rumah Mewah 3 Miliar </Text>
        <Text style={{fontSize: 20, fontStyle: 'italic'}}> Purbalingga </Text>
        <View style={{backgroundColor:'#45aaf2', width: 200, padding: 15, alignItems: 'center', borderRadius: 30, marginTop: 20}}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}> Detail </Text>
        </View>
      </View>
    );
  };


  export default StylingReactNativeComponent;
