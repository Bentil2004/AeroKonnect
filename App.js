import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import SignInScreen from "./app/Screens/SignInScreen/SignInScreen";
import SignUpScreen from "./app/Screens/SignUpScreen/SignUpScreen";
import WelcomeScreen from "./app/Screens/WelcomeScreen/WelcomeScreen";
import NextWelcomeScreen from "./app/Screens/NextWelcomeScreen/NextWelcomeScreen";;
import SplashScreen from "./app/Screens/SplashScreen/SplashScreen";
import LogInScreen from "./app/Screens/LogInScreen/LogInScreen";
const App = () => {
  return (
    <View style={styles.root}>
      <NextWelcomeScreen/>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#white",
  },
});

export default App;
