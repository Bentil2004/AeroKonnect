import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import SignInScreen from "./app/Screens/SignInScreen";

const App = () => {
  return (
    <SafeAreaView>
      <SignInScreen/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0277BD',
  },
});

export default App;