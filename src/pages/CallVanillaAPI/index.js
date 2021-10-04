import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const CallVanillaAPI = () => {
  useEffect(() => {
    // GET
    // fetch('https://reqres.in/api/users/2')
    //   .then(response => response.json())
    //   .then(json => console.log(json));

    const postData = {
      name: 'morpheus',
      job: 'leader',
    };

    //POST
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then(response => response.json())
      .then(json => {
        console.log("post response:", json);
      });
  }, []);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}> Belajar Vanilla API dengan Data Dummy </Text>
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
});

export default CallVanillaAPI;
