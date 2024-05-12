import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, KeyboardAvoidingView } from "react-native";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import styles from "../styles/Styles";

class UserFetcher {
  constructor() {
    // Initialize Firebase
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "inventella-556da",
      storageBucket: "Inventella.GI",
      messagingSenderId: "233130005285",
      appId: "1:233130005285:android:5ec339737790294b7700cc"
    };
    
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }
    
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }
}

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const userFetcher = new UserFetcher();

  useEffect(() => {
    const unsubscribe = userFetcher.auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = async () => {
    try {
      const userCredential = await userFetcher.auth.signInWithEmailAndPassword(
        email,
        contrasena
      );
      const user = userCredential.user;

      // Consultar si el usuario es usuario
      const adminRef = userFetcher.db.collection("User");
      const q = adminRef.where("email", "==", user.email);
      const querySnapshot = await q.get();

      if (!querySnapshot.empty) {
        // Si el usuario es administrador, navegar a la pantalla de administrador
        navigation.replace("UserHome");
      } else {
        // Si el usuario no es administrador, navegar a la pantalla normal
        navigation.replace("Home");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <KeyboardAvoidingView resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={false}>
      <View
        style={{
          backgroundColor: "rgba(255,255,255,0.9)",
          borderRadius: 25,
          padding: 29,
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        <Text style={styles.title}>Inicio de sesión</Text>
        <Text style={styles.text}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.text}>Contraseña</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={contrasena}
          onChangeText={(text) => setContrasena(text)}
        />

        <View
          style={{
            fontSize: 30,
            color: "#055A87",
            marginBottom: 5,
            textAlign: "center",
          }}
        >
          <Button
            style={styles.button}
            onPress={handleLogin}
            title="Iniciar Sesión"
            color="#055A87"
          />

          <Text style={styles.text}>¿Aún no tienes una cuenta?</Text>
          <Button
            style={styles.button}
            title="Registrarme"
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
