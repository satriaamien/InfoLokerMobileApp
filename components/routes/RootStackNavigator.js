import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from "../screen/SplashScreen";
import { StyleSheet, Text, View } from "react-native";

import Login from "../screen/Login";
import Home from "../screen/Home";
import Profil from "../screen/Profil";
import Detail from "../screen/Detail";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootStackNavigator = () => {
  const { authState } = useContext(AuthContext);
  console.log(authState);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      //   initialRouteName="Detail"
      //   <EvilIcons name="location" size={24} color="black" />
    >
      {authState.isSignedIn ? (
        <Stack.Screen name="Bottom" component={Bottom} />
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
      {/* <Stack.Screen name="Profil" component={Profil} /> */}
      <Tab.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

const Bottom = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={24} color="#7DE5ED" />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Detail"
        component={Detail}
        options={{
          tabBarLabel: "Detail",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={24} color="#7DE5ED" />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarLabel: "Profil",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={24} color="#7DE5ED" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootStackNavigator;
