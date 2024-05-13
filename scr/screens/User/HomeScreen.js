import React from 'react';
import { View, StyleSheet } from 'react-native';
import AlimentosButton from './AlimentosButton';
import RopaButton from './RopaButton';
import FarmaceuticaButton from './FarmaceuticaButton';
import PapeleriaButton from './PapeleriaButton';
import firebase from 'firebase';

const firebaseConfig = {
  // Your Firebase config
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
