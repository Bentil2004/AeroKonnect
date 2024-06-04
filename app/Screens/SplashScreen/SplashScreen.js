import { StyleSheet, Image, View } from "react-native";
import React from "react";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/AeroKonnectSplash.png")}
        style={styles.AeroKonnect}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  AeroKonnect: {
    width: "100%",
    height: "100%",
    resizeMode:"contain"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffff",
  },
});
