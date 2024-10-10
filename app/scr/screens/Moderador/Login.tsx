import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import app from "../../firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import styles from "../styles/Styles";
import { Firestore } from "firebase/firestore";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const auth = getAuth(app);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, contrasena)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Autenticado con el email", user.email);
        navigation.replace("Home");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <KeyboardAvoidingView
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={false}
    >
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
        ></TextInput>
        <Text style={styles.text}>Contraseña</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={contrasena}
          onChangeText={(text) => setContrasena(text)}
        ></TextInput>

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

const [data, setData] = useState()

async function cargarDatos(){
    const rolDeUsuario = await Firestore.collection('Moderador').get()
    setData(email)
  }

export default Login;
