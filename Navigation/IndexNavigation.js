 import { StyleSheet, Text, View } from 'react-native';
 import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from "../app/Screens/SignInScreen/SignInScreen";
import SignUpScreen from "../app/Screens/SignUpScreen/SignUpScreen";
import HomeScreen from "../app/Screens/HomeScreen/HomeScreen";
import NextWelcomeScreen from "../app/Screens/NextWelcomeScreen/NextWelcomeScreen";
import SplashScreen from "../app/Screens/SplashScreen/SplashScreen";
import CompletionScreen from '../app/Screens/CompletionScreen/CompletionScreen';
import LogInScreen from "../app/Screens/LogInScreen/LogInScreen"; 

const Stack = createNativeStackNavigator();

 const Navigation = () => {
   return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name='NextWelcome' component={NextWelcomeScreen} />
          <Stack.Screen name='HomeScreen' component={HomeScreen} />
          <Stack.Screen name='LogIn' component={LogInScreen} />
          <Stack.Screen name='SignIn' component={SignInScreen} />
          <Stack.Screen name='SignUp' component={SignUpScreen} />
          <Stack.Screen name='CompletionScreen' component={CompletionScreen}/>
          <Stack.Screen name='SplashScreen' component={SplashScreen} />
       </Stack.Navigator>
    </NavigationContainer>
   )
 };
 
 export default Navigation
 
 const styles = StyleSheet.create({
 })