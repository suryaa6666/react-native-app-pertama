import React, {Component, useEffect, useState} from 'react';
import {Text, View, ScrollView, StyleSheet, Image} from 'react-native';

// class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('===> constructor');
//     this.state = {
//       subscriber: 100,
//     }
//   }

//   componentDidMount() {
//     console.log('===> component did mount');
//     setTimeout(() => {
//       this.setState({
//         subscriber: 10000
//       });
//     }, 2000);
//   }

//   componentDidUpdate() {
//     console.log('===> component did update')
//   }

//   componentWillUnmount() {
//     console.log('===> component will unmount');
//   }

//   render() {
//     console.log('===> render');
//     return (
//       <View>
//         <ScrollView>
//           <Text
//             style={{
//               alignSelf: 'center',
//               padding: 20,
//               fontWeight: 'bold',
//               fontSize: 20,
//             }}>
//             {' '}
//             Belajar FlexBox{' '}
//           </Text>
//           <View
//             style={{
//               flexDirection: 'row',
//               backgroundColor: '#d1d8e0',
//               alignItems: 'flex-end',
//               justifyContent: 'space-between',
//             }}>
//             <View
//               style={{
//                 backgroundColor: '#fc5c65',
//                 width: 50,
//                 height: 50,
//               }}></View>
//             <View
//               style={{
//                 backgroundColor: '#fed330',
//                 width: 50,
//                 height: 100,
//               }}></View>
//             <View
//               style={{
//                 backgroundColor: '#26de81',
//                 width: 50,
//                 height: 150,
//               }}></View>
//             <View
//               style={{
//                 backgroundColor: '#45aaf2',
//                 width: 50,
//                 height: 200,
//               }}></View>
//           </View>

//           <View style={{flexDirection: 'row', justifyContent: 'center'}}>
//             <View style={{backgroundColor: '#badc58', flex: 1, padding: 5}}>
//               <Text style={styles.text}>Beranda</Text>
//             </View>
//             <View style={{backgroundColor: '#ff7979', flex: 1, padding: 5}}>
//               <Text style={styles.text}>Video</Text>
//             </View>
//             <View style={{backgroundColor: '#7ed6df', flex: 1, padding: 5}}>
//               <Text style={styles.text}>Playlist</Text>
//             </View>
//             <View style={{backgroundColor: '#4834d4', flex: 1, padding: 5}}>
//               <Text style={styles.text}>Channel</Text>
//             </View>
//           </View>

//           <View style={{padding: 10, flexDirection: 'row'}}>
//             <Image
//               source={{
//                 uri: 'https://yt3.ggpht.com/ytc/AKedOLR7ZuOh1oE84DlgfsVR5b2BFILXOmDXvA9WxtnOyA=s88-c-k-c0x00ffffff-no-rj',
//               }}
//               style={{width: 100, height: 100}}
//             />
//             <View style={{marginLeft: 10, justifyContent: 'center'}}>
//               <Text style={styles.text}>SuryaElz</Text>
//               <Text style={styles.text}>{this.state.subscriber} Subscriber</Text>
//             </View>
//           </View>

//           <View
//             style={{
//               backgroundColor: 'red',
//               flex: 1,
//               height: 150,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
//               {' '}
//               SUBSCRIBE{' '}
//             </Text>
//           </View>
//         </ScrollView>
//       </View>
//     );
//   }
// }

const FlexBox = () => {
  const [subscriber, setSubscriber] = useState(200);
  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setSubscriber(5000);
    }, 3000);
    return() => {
      console.log('did update');
    };
  }, [subscriber]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setSubscriber(1000);
  //     console.log('did update');
  //   }, 3000);
  // }, [subscriber]);

  return (
    <View>
      <ScrollView>
        <Text
          style={{
            alignSelf: 'center',
            padding: 20,
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          {' '}
          Belajar FlexBox{' '}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#d1d8e0',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              backgroundColor: '#fc5c65',
              width: 50,
              height: 50,
            }}></View>
          <View
            style={{
              backgroundColor: '#fed330',
              width: 50,
              height: 100,
            }}></View>
          <View
            style={{
              backgroundColor: '#26de81',
              width: 50,
              height: 150,
            }}></View>
          <View
            style={{
              backgroundColor: '#45aaf2',
              width: 50,
              height: 200,
            }}></View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View style={{backgroundColor: '#badc58', flex: 1, padding: 5}}>
            <Text style={styles.text}>Beranda</Text>
          </View>
          <View style={{backgroundColor: '#ff7979', flex: 1, padding: 5}}>
            <Text style={styles.text}>Video</Text>
          </View>
          <View style={{backgroundColor: '#7ed6df', flex: 1, padding: 5}}>
            <Text style={styles.text}>Playlist</Text>
          </View>
          <View style={{backgroundColor: '#4834d4', flex: 1, padding: 5}}>
            <Text style={styles.text}>Channel</Text>
          </View>
        </View>

        <View style={{padding: 10, flexDirection: 'row'}}>
          <Image
            source={{
              uri: 'https://yt3.ggpht.com/ytc/AKedOLR7ZuOh1oE84DlgfsVR5b2BFILXOmDXvA9WxtnOyA=s88-c-k-c0x00ffffff-no-rj',
            }}
            style={{width: 100, height: 100}}
          />
          <View style={{marginLeft: 10, justifyContent: 'center'}}>
            <Text style={styles.text}>SuryaElz</Text>
            <Text style={styles.text}>{subscriber} Subscriber</Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: 'red',
            flex: 1,
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            {' '}
            SUBSCRIBE{' '}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    alignSelf: 'center',
  },
});

export default FlexBox;
