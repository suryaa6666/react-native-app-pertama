import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Ilustrasi from '../../assets/images/ilustrasivideo.svg';

const ReactNativeSvg = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}> React Native SVG </Text>
      <Ilustrasi width={400} height={200} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  wrapper: {
    padding: 10,
    alignItems: 'center',
  },
});

export default ReactNativeSvg;
