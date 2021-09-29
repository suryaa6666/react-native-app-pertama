import React, {Component} from 'react';
import {Text, View, Image, TextInput, } from 'react-native';
import elzgamelogo from './assets/elzgamestudio.png';
import rumah from './assets/rumah.jpg';

const App = () => {
  return <StylingReactNativeComponent />;
};

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

const SampleComponent = () => {
  return (
    <View>
      <View
        style={{
          width: 1000,
          height: 70,
          backgroundColor: '#0984e3',
          marginBottom: 30,
        }}>
        <Photo />
      </View>
      <Profile />
      <Home />
      <Text> Cintara </Text>
      <Text> Surya </Text>
      <Text> Elidanto </Text>
      <TextInput
        style={{borderWidth: 1}}
        placeholder={'masukkan nama...'}
        onTouchStart={() => console.log('menyentuh textinput username...')}
      />
      <KotakHijau />
    </View>
  );
};

const Home = () => {
  return <Text> Halo Tuanku!</Text>;
};

const Photo = () => {
  return (
    <View>
      <Image source={elzgamelogo} style={{width: 140, height: 70}} />
      {/* <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}> ELZGAME STUDIO </Text> */}
    </View>
  );
};

class KotakHijau extends Component {
  render() {
    return (
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'green',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', marginTop: 25}}>
          {' '}
          Ini adalah kotak hijau!{' '}
        </Text>
      </View>
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Image
          source={{uri: 'https://placeimg.com/100/100/people'}}
          style={{width: 50, height: 50, borderRadius: 100}}
        />
        <Text> Cintara Surya Elidanto </Text>
      </View>
    );
  }
}

export default App;
