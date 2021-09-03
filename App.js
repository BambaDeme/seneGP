import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import Login from './components/Login';
import SignUp from './components/SignUp';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export default function App() {

  const [signedIn,setSignedIn] = React.useState(false)
  return !signedIn ? (
    <>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} initialParams={{ signedIn:setSignedIn }}/>
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
      </NavigationContainer>
    </>
  ) : (
    <>
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={HomeScreen} />
        <Tab.Screen name="Historique" component={SettingsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
      </NavigationContainer>
    </>
  )
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
