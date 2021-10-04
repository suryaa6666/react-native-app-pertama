import Axios from 'axios';
import React, {useState} from 'react';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import SVGUri from 'react-native-svg-uri';

const Profile = () => {
  return (
    <View style={styles.profileWrapper}>
      <SVGUri
        source={{uri: 'https://avatars.dicebear.com/img/favicon.svg'}}
        style={styles.profileImage}
      />
      <View style={styles.profileDetailWrapper}>
        <Text style={styles.fullName}> Nama Lengkap </Text>
        <Text style={styles.email}> Email </Text>
        <Text style={styles.field}> Bidang </Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.deleteProfileText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const LocalAPI = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');
  
  const submit = () => {
    const data = {
      nama,
      email,
      bidang,
    };


    Axios.post('http://10.0.2.2:3004/users', data).then(res => {
      console.log('response data : ', res.data);
      setNama('');
      setEmail('');
      setBidang('');
    });
  };

  return (
    <View style={styles.viewWrapper}>
      <ScrollView>
        <Text style={styles.title}> Aplikasi CRUD Profile Sederhana </Text>
        <Text style={styles.createMember}> masukkan nama anggota </Text>
        <View>
          <TextInput placeholder="masukkan nama..." style={styles.textInput} value={nama} onChangeText={(value) => setNama(value)}/>
          <TextInput placeholder="masukkan email..." style={styles.textInput} value={email} onChangeText={(value) => setEmail(value)}/>
          <TextInput placeholder="masukkan bidang..." style={styles.textInput} value={bidang} onChangeText={(value) => setBidang(value)}/>
          <TouchableOpacity onPress={submit}>
            <View style={styles.buttonWrapper}>
              <Text style={styles.buttonText}> (+) tambah anggota </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <View>
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  viewWrapper: {
    padding: 20,
  },
  createMember: {
    fontSize: 18,
    fontStyle: 'italic',
    alignSelf: 'center',
    marginVertical: 10,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  horizontalLine: {
    borderWidth: 1,
    marginVertical: 10,
  },
  buttonWrapper: {
    backgroundColor: '#12CBC4',
    paddingVertical: 10,
    borderRadius: 100,
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 18,
  },
  profileWrapper: {
    flexDirection: 'row',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  fullName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 17,
  },
  field: {
    fontSize: 17,
  },
  profileDetailWrapper: {
    justifyContent: 'center',
    flex: 1,
  },
  deleteProfileText: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LocalAPI;
