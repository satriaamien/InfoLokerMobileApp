import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AuthProvider } from "./components/context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./components/routes/RootStackNavigator";

export default function App() {
  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
{
  /* <Text>Open up App.js t start working on your app!</Text> */
}
