import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';

// Initialize Firebase with your Firebase config
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

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // Navigate to UserHome upon successful login
        navigation.navigate('UserHome');
        console.log('User logged in:', user.email);
      })
      .catch((error) => {
        const errorMessage = error.message;
        Alert.alert('Error', errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
