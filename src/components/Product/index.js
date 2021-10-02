import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import rumah from '../../assets/images/rumah.jpg';

const Product = (props) => {
  return (
    <View style={styles.productWrapper}>
      <Image source={rumah} style={styles.houseImage} />
      <Text style={styles.houseTitle}> Rumah Mewah 3 Miliar </Text>
      <Text style={styles.houseLocation}> Purbalingga </Text>
      <TouchableOpacity onPress={props.onButtonPressed}> 
        <View style={styles.houseBuyButton}>
          <Text style={styles.houseBuyText}> Beli </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  productWrapper: {
    marginTop: 10,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#d1d8e0',
    marginHorizontal: 20,
    borderRadius: 15,
  },
  houseImage: {
    width: 200,
    height: 100,
  },
  houseTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  houseLocation: {
    fontSize: 20,
    fontStyle: 'italic',
  },
  houseBuyButton: {
    backgroundColor: 'green',
    width: 200,
    padding: 15,
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 20,
  },
  houseBuyText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Product;
