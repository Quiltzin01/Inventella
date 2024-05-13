import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import LoginScreen from "./scr/screens/User/LoginScreen";
import UserHome from "./scr/screens/User/UserHome";
import AlimentosButton from "./scr/screens/User/AlimentosButton";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="UserHome" component={UserHome} />
          <Stack.Screen name="AlimentosButton" component={AlimentosButton} />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
