import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import cart from '../../assets/icons/cart.jpg';

const PositionReactNative = () => {
  return (
    <View style={{padding: 20, alignItems: 'center'}}>
      <Text style={styles.text}> Keranjang Belanja </Text>
      <View>
        <Image
          source={cart}
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
  cartWrapper: {
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
