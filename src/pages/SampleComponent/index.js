import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import elzgamelogo from '../../assets/images/elzgamestudio.png';

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

  export default SampleComponent;