import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/FlexBox';
import Position from  './pages/Position';

const App = () => {
  const[isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    }, 5000);
  }, []);
  return (
    <View>
      <ScrollView>
        {isShow && <FlexBox />}
        {/* <SampleComponent />
        <StylingComponent />
        <Position /> */}
      </ScrollView>
    </View>
  );
};

export default App;
