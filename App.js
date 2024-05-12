import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <StatusBar style="auto" />

        <Stack.Navigator initialRouteName = "usuariobase" >

        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
