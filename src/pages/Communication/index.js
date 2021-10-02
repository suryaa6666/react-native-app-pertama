import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Product from '../../components/Product';
import Cart from '../../components/Cart';

const Communication = () => {
  const [totalProduct, setTotalProduct] = useState(0);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}> Belajar Materi Communication </Text>
      <View style={styles.wrapper}>
        <Product
          onButtonPressed={() => {
            setTotalProduct(totalProduct + 1);
          }}
        />
        <Cart quantity={totalProduct} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  wrapper: {
    padding: 20,
  },
});

export default Communication;
