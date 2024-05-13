import React from 'react';
import { View, StyleSheet } from 'react-native';
import AlimentosButton from './AlimentosButton';
import RopaButton from './RopaButton';
import FarmaceuticaButton from './FarmaceuticaButton';
import PapeleriaButton from './PapeleriaButton';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC8HPzmsA4MLnP-_l58UXFvIK5Jo4y-0g8 ",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "inventella-556da",
  storageBucket: "Inventella.GI",
  messagingSenderId: "233130005285",
  appId: "1:233130005285:android:5ec339737790294b7700cc"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const UserHome = () => {
  return (
    <View style={styles.container}>
      <AlimentosButton />
      <RopaButton />
      <FarmaceuticaButton />
      <PapeleriaButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserHome;
