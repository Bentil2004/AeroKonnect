import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Navigation from "./Navigation/IndexNavigation";
import SplashScreen from "./app/Screens/SplashScreen/SplashScreen";


const App = () => {
  return (
    <View style={styles.root}>
      <Navigation/>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "violet",
  },
});

export default App;
