import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const AlimentosButton = () => {
  const handleButtonPress = async () => {
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
