import Axios from 'axios';
import React, {useEffect, useState} from 'react';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

import SVGUri from 'react-native-svg-uri';

const Profile = ({nama, email, bidang, onPress, onDelete}) => {
  return (
    <View style={styles.profileWrapper}>
      <TouchableOpacity onPress={onPress}>
        <SVGUri
          source={{
            uri: `https://avatars.dicebear.com/api/miniavs/${email}.svg`,
          }}
          style={styles.profileImage}
        />
      </TouchableOpacity>
      <View style={styles.profileDetailWrapper}>
        <Text style={styles.fullName}> {nama} </Text>
        <Text style={styles.email}> {email} </Text>
        <Text style={styles.field}> {bidang} </Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.deleteProfileText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const LocalAPI = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [buttonStatus, setButtonStatus] = useState({
    text: 'tambah anggota',
    buttonColor: '#00a8ff',
  });

  useEffect(() => {
    getData();
  }, []);

  const data = {
    nama,
    email,
    bidang,
  };

  const postData = () => {
    if (buttonStatus.text === 'tambah anggota') {
      Axios.post('http://10.0.2.2:3004/users', data).then(res => {
        console.log('response data : ', res.data);
        setNama('');
        setEmail('');
        setBidang('');
        getData();
      });
    } else if (buttonStatus.text === 'update anggota') {
      updateData(selectedUser);
    }
  };

  const getData = () => {
    Axios.get('http://10.0.2.2:3004/users').then(res => {
      console.log('response data : ', res.data);
      setUsers(res.data);
    });
  };

  const updateData = item => {
    Axios.put(`http://10.0.2.2:3004/users/${item.id}`, data).then(res => {
      console.log('updated data : ', res.data);
      setNama('');
      setEmail('');
      setBidang('');
      setButtonStatus({text: 'tambah anggota', buttonColor: '#00a8ff'});
      getData();
    });
  };

  const deleteData = item => {
    Axios.delete(`http://10.0.2.2:3004/users/${item.id}`).then(res => {
      console.log('deleted data : ', res.data);
      getData();
    });
  };

  const selectUser = data => {
    setNama(data.nama);
    setEmail(data.email);
    setBidang(data.bidang);
    setButtonStatus({text: 'update anggota', buttonColor: '#fbc531'});
    setSelectedUser(data);
  };

  return (
    <View style={styles.viewWrapper}>
      <ScrollView>
        <Text> {getData} </Text>
        <Text style={styles.title}> Aplikasi CRUD Profile Sederhana </Text>
        <Text style={styles.createMember}> masukkan nama anggota </Text>
        <View>
          <TextInput
            placeholder="masukkan nama..."
            style={styles.textInput}
            value={nama}
            onChangeText={value => setNama(value)}
          />
          <TextInput
            placeholder="masukkan email..."
            style={styles.textInput}
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <TextInput
            placeholder="masukkan bidang..."
            style={styles.textInput}
            value={bidang}
            onChangeText={value => setBidang(value)}
          />
          <TouchableOpacity onPress={postData}>
            <View
              style={[
                styles.buttonWrapper,
                {backgroundColor: buttonStatus.buttonColor},
              ]}>
              <Text style={styles.buttonText}> {buttonStatus.text} </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <View>
          {users.map(user => {
            return (
              <Profile
                key={user.id}
                nama={user.nama}
                email={user.email}
                bidang={user.bidang}
                onPress={() => selectUser(user)}
                onDelete={() =>
                  Alert.alert(
                    'Peringatan',
                    'Apakah anda ingin menghapus profile dengan nama ' +
                      user.nama +
                      '?',
                    [
                      {
                        text: 'Tidak',
                        onPress: () => {
                          console.log('Tidak jadi hapus');
                        },
                      },
                      {
                        text: 'Ya',
                        onPress: () => {
                          console.log(
                            'User dengan nama ' + user.nama + ' telah dihapus!',
                          );
                          deleteData(user);
                        },
                      },
                    ],
                  )
                }
              />
            );
          })}
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
    marginVertical: 5,
    borderRadius: 100,
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 18,
  },
  profileWrapper: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 1000,
    overflow: 'hidden',
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
