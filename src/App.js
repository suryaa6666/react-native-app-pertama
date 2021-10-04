import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';
import ReactNativeSvg from './pages/ReactNativeSvg';
import CallVanillaAPI from './pages/CallVanillaAPI';

const App = () => {
  // const[isShow, SetIsShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     SetIsShow(false);
  //   }, 5000);
  // }, []);
  return (
    <View>
      <ScrollView>
        {/* {isShow && <FlexBox />} */}
        {/* <SampleComponent /> */}
        {/* <StylingComponent /> */}
        {/* <Position /> */}
        {/* <PropDinamis /> */}
        {/* <StateDinamis /> */}
        {/* <Communication /> */}
        {/* <ReactNativeSvg /> */}
        <CallVanillaAPI />
      </ScrollView>
    </View>
  );
};

export default App;
