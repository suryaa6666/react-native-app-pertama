import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import cart from '../../assets/icons/cart.jpg';

const Cart = (props) => {
  return (
    <View style={styles.viewCartWrapper}>
      <Text style={styles.text}> Keranjang Belanja </Text>
      <View>
        <Image source={cart} style={styles.imageCart} />
        <Text style={styles.notif}> {props.quantity} </Text>
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
  imageCart: {width: 100, height: 100, marginTop: 10},
  viewCartWrapper: {padding: 20, alignItems: 'center'},
});

export default Cart;
