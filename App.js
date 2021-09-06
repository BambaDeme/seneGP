import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./components/HomeScreen";
import SettingsScreen from "./components/SettingsScreen";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import Ionicons from "react-native-vector-icons/Ionicons";
import SearchScreen from "./components/SearchScreen";
import HistoryScreen from "./components/HistoryScreen";

// test
export default function App() {
  // on utilise le hook pour initialiser une variable signedIn à false
  // cette vraiable vérifie si l'utilisateur est connecté ou pas
  const [signedIn, setSignedIn] = React.useState(false);

  // le retour conditionnel
  // si l'utilisateur n'est pas connecté on affiche la navigation du login
  return !signedIn ? (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            initialParams={{ signedIn: setSignedIn }}
          />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  ) : (
    /* si le user est connecté on entre dans l'app*/
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "ios-home" : "ios-home";
              } else if (route.name === "Search") {
                iconName = "search";
              } else if (route.name === "Historique") {
                iconName = "archive";
              } else if (route.name === "Settings") {
                iconName = "ios-settings-sharp";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#1976D2",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Historique"
            component={HistoryScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

/*import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
