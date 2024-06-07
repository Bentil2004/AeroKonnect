import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Lottie from "lottie-react-native";
import CustomButton from "../../components/CustomButton";




const CompletionScreen = () => {

  const onHomePressed = () => {
    console.warn("Home");
  };
  
  return (
    <SafeAreaView style={styles.root}>
      <Lottie
        style={styles.animation}
        source={require('../../assets/ConfirmationPulse.json')}
        autoPlay
        loop
      />

      <Text style={styles.text}>Your account has been{"\n"}succesfully created</Text>

      <CustomButton
        text="Next"
        onPress={onHomePressed}
        bg={"#00527e"}
        style={styles.button}
        txt={"white"}
      /> 
  </SafeAreaView>
  );
};

export default CompletionScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  animation: {
    width: "100%",
    height: 250,
  },
  button: {
    position: 'absolute',
    left: '10%',
    width: '80%',
    borderRadius: 5,  
    marginBottom: '50',
    bottom: '30',  
  },
  text: {
    color:'black',
    textAlign: "center",
    padding: 10,
    alignItems: 'center',
    fontSize: 20,
    marginTop: 20,
    position: 'absolute',
    bottom: '40%', 
    left: '10%',
    width: '80%',
  },
});
