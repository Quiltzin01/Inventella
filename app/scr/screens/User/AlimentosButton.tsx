import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const AlimentosButton = () => {
  const handleButtonPress = async () => {
    const firebaseConfig = {
      apiKey: "AIzaSyC8HPzmsA4MLnP-_l58UXFvIK5Jo4y-0g8",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "inventella-556da",
      storageBucket: "Inventella.GI",
      messagingSenderId: "233130005285",
      appId: "1:233130005285:android:5ec339737790294b7700cc"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    try {
      const querySnapshot = await firestore().collection('alimentos_items').get();
      querySnapshot.forEach(documentSnapshot => {
        console.log('Alimentos Item ID: ', documentSnapshot.id, documentSnapshot.data());
      });
    } catch (error) {
      console.error('Error fetching alimentos items: ', error);
    }
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handleButtonPress}
    >
      <Text style={styles.buttonText}>Alimentos</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AlimentosButton;
