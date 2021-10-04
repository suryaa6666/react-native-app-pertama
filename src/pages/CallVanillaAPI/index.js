import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Button, Image} from 'react-native';

const CallVanillaAPI = () => {
  // useEffect(() => {
  // GET
  // fetch('https://reqres.in/api/users/2')
  //   .then(response => response.json())
  //   .then(json => console.log(json));

  //   const postData = {
  //     name: 'morpheus',
  //     job: 'leader',
  //   };

  //   //POST
  //   fetch('https://reqres.in/api/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(postData),
  //   })
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log("post response:", json);
  //     });
  // }, []);

  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const getData = () => {
    fetch('https://reqres.in/api/users/2')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json.data);
      });
  };

  const [postUserData, setPostUserData] = useState({
    name: '',
    job: '',
  });

  const postData = () => {
    const dataBody = {
      name: 'morpheus',
      job: 'leader',
    };
    //POST
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataBody),
    })
      .then(response => response.json())
      .then(json => {
        console.log('post response:', json);
        setPostUserData(json);
      });
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}> Belajar Vanilla API dengan Data Dummy </Text>
      <View style={styles.wrapper}>
        <Button title="GET API DATA" onPress={getData} />
        <Text> Response GET Data : </Text>
        <Image style={styles.avatar} source={{uri: dataUser.avatar}} />
        <Text> Name : {`${dataUser.first_name} ${dataUser.last_name}`} </Text>
        <Text> Email : {dataUser.email} </Text>
      </View>
      <Button title="POST API DATA" onPress={postData} />
      <Text> Response POST Data : </Text>
      <Text> Name : {postUserData.name} </Text>
      <Text> Job : {postUserData.job} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  wrapper: {
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});

export default CallVanillaAPI;
