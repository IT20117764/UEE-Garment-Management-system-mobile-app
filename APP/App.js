import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{useEffect, useState} from "react";
import LoginScreen from './screens/LoginScreen';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MainScreen from './screens/MainScreen';
import RegisterScreen from './screens/RegisterScreen';


//Tharuka
import Home from './screens/GlobalCompany/Home';
import Profile from './screens/GlobalCompany/Profile';
import ActiveProject from './screens/GlobalCompany/ActiveProject';
import CreateProject from './screens/GlobalCompany/CreateProject';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar hidden={true}/>

      {/* <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="MainScreen" component={MainScreen} />
          </Stack.Navigator> 
      </NavigationContainer> */}

      {/* <Home/> */}
      {/* <Profile/> */}
      <ActiveProject/>
      {/* <CreateProject/> */}
      

      

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
