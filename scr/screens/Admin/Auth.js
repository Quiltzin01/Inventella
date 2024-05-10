import {
    View,
    Text,
    KeyboardAvoidingView,
    TextInput,
    Button,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import app from "../../firebase-config";
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import { collection, query, where, getDocs } from "firebase/firestore";
  import styles from "../styles/Styles";
  
  const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const auth = getAuth(app);
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          navigation.replace("Home");
        }
      });
  
      return unsubscribe;
    }, []);
  
    const handleLogin = async () => {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          contrasena
        );
        const user = userCredential.user;
  
        // Consultar si el usuario es administrador
        const adminRef = collection(app.firestore(), "Admin");
        const q = query(adminRef, where("email", "==", user.email));
        const querySnapshot = await getDocs(q);
  
        if (querySnapshot.docs.length > 0) {
          // Si el usuario es administrador, navegar a la pantalla de administrador
          navigation.replace("AdminHome");
        } else {
          // Si el usuario no es administrador, navegar a la pantalla normal
          navigation.replace("Home");
        }
      } catch (error) {
        alert(error.message);
      }
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
  
  export default Login;
  