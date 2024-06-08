import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Navigation from "./Navigation/IndexNavigation";




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
    backgroundColor: "#ffff",
  },
});

export default App;
