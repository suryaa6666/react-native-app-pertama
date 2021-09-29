import React from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import exampleImage from './assets/elzgamestudio.png';

const exampleImageUri = Image.resolveAssetSource(exampleImage).uri;

const App = () => {
  return (
    <View>
      <View style={{width: 1000, height: 70, backgroundColor: '#0984e3'}}>
        <Photo />
      </View>
      <Home />
      <Text> Cintara </Text>
      <Text> Surya </Text>
      <Text> Elidanto </Text>
      <TextInput style={{borderWidth: 1}} placeholder={'masukkan nama...'} onTouchStart={() => console.log("menyentuh textinput username...")}/>
    </View>
  );
};

const Home = () => {
  return <Text> Halo Tuanku!</Text>;
};

const Photo = () => {
  return (
    <View>
      <Image source={{uri: exampleImageUri}} style={{width: 140, height: 70}}  />
      {/* <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}> ELZGAME STUDIO </Text> */}
    </View>
  );
};

export default App;
