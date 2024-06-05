 import { StyleSheet, Text, View } from 'react-native';
 import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from "../app/Screens/SignInScreen/SignInScreen";
import SignUpScreen from "../app/Screens/SignUpScreen/SignUpScreen";
import WelcomeScreen from "../app/Screens/WelcomeScreen/WelcomeScreen";
import NextWelcomeScreen from "../app/Screens/NextWelcomeScreen/NextWelcomeScreen";;

import LogInScreen from "../app/Screens/LogInScreen/LogInScreen"; 

const Stack = createNativeStackNavigator();

 const Navigation = () => {
   return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name='NextWelcome' component={NextWelcomeScreen} />
          <Stack.Screen name='Welcome' component={WelcomeScreen} />
          <Stack.Screen name='SignIn' component={SignInScreen} />
          <Stack.Screen name='SignUp' component={SignUpScreen} />
          <Stack.Screen name='LogIn' component={LogInScreen} />
       </Stack.Navigator>
    </NavigationContainer>
   )
 };
 
 export default Navigation
 
 const styles = StyleSheet.create({})