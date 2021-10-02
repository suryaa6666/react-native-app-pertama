import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, Button, ScrollView} from 'react-native';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text style={styles.counter}>{number}</Text>
      <Button
        title="Tambah Angka"
        onPress={() => {
          console.log('tombol ditekan functional component counter');
          setNumber(number + 1);
        }}
      />
    </View>
  );
};

class CounterClass extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <View>
        <Text style={styles.counter}>{this.state.number}</Text>
        <Button
          title="Tambah Angka"
          onPress={() => {
            console.log('tombol ditekan class component counter');
            this.setState({number: this.state.number + 1});
          }}
        />
      </View>
    );
  }
}

const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <View style={{backgroundColor: 'black', padding: 20}}>
          <Text style={[styles.title, {color: 'white'}]}>
            Belajar Materi State Dinamis
          </Text>
        </View>
        <View style={{backgroundColor: 'yellow', padding: 20, marginTop: 20}}>
          <Text style={styles.title}>Functional Component (Hooks) Counter</Text>
        </View>
        <Counter />
        <Counter />
        <View style={{backgroundColor: 'yellow', padding: 20, marginTop: 20}}>
          <Text style={styles.title}>Class Component Counter</Text>
        </View>
        <CounterClass />
        <CounterClass />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  counter: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 20,
  },
  wrapper: {
    padding: 20,
  },
});

export default StateDinamis;
