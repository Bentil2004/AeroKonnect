import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Navigation from "./Navigation/MainStackNavigator";
import BottomTabNavigator from "./NavigationHome/BottomTabNavigator";
import MainStackNavigator from "./Navigation/MainStackNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";




const App = () => {
  return (
    <SafeAreaProvider style={styles.root}>
    <MainStackNavigator />
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ffff",
  },
});

export default App;
