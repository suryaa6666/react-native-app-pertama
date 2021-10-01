import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import chart from './assets/chart.jpg';

const PositionReactNative = () => {
  return (
    <View style={{padding: 20, alignItems: 'center'}}>
      <Text style={styles.text}> Keranjang Belanja </Text>
      <View>
        <Image
          source={chart}
          style={{width: 100, height: 100, marginTop: 10}}
        />
        <Text style={styles.notif}> 3 </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  chartWrapper: {
    position: 'relative',
    borderColor: 'black',
    borderWidth: 1,
  },
  notif: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 5,
    borderRadius: 100,
    backgroundColor: 'green',
    color: 'white',
  },
});

export default PositionReactNative;
