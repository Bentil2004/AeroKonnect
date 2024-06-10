 import { StyleSheet, Text, View } from 'react-native';
 import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from "../app/Screens/SignInScreen/SignInScreen";
import SignUpScreen from "../app/Screens/SignUpScreen/SignUpScreen";
import NextWelcomeScreen from "../app/Screens/NextWelcomeScreen/NextWelcomeScreen";
import SplashScreen from "../app/Screens/SplashScreen/SplashScreen";
import CompletionScreen from '../app/Screens/CompletionScreen/CompletionScreen';
import LogInScreen from "../app/Screens/LogInScreen/LogInScreen"; 
import BottomTabNavigator from '../NavigationHome/BottomTabNavigator';
import Notification from '../app/Screens/Notification/Notification';
import ForgotPassword from '../app/Screens/ForgotPassword/ForgotPassword';
import TermsAndConditions from '../app/Screens/TermsAndConditions/TermsAndConditions';



const Stack = createNativeStackNavigator();

 const MainStackNavigator = () => {
   return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name='BottomTab' component={BottomTabNavigator} />
          <Stack.Screen name='SplashScreen' component={SplashScreen} />
          <Stack.Screen name='SignUp' component={SignUpScreen} />
          <Stack.Screen name='NextWelcome' component={NextWelcomeScreen} />
          <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
          <Stack.Screen name='TermsAndConditions' component={TermsAndConditions} />
          <Stack.Screen name='SignIn' component={SignInScreen} />
          <Stack.Screen name='LogIn' component={LogInScreen} />
          <Stack.Screen name='CompletionScreen' component={CompletionScreen}/>
          <Stack.Screen name='Notification' component={Notification}/>
       </Stack.Navigator>
    </NavigationContainer>
   )
 };
 
 export default MainStackNavigator;
 