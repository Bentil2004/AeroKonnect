import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import CustomButton from "../../components/CustomButton";

const { height } = Dimensions.get('window');

const WelcomeScreen = () => {
  const onSignUpPressed = () => {
    console.warn("Signup");
  };

  const onSkipPressed = () => {
    console.warn("Skip");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipButton} onPress={onSkipPressed}>
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/AeroKonnect.png")}
          style={styles.AeroKonnect}
          resizeMode="contain"
        />
      </View>

      <CustomButton
        text="Next"
        onPress={onSignUpPressed}
        bg={"#1f8ac0"}
        txt={"white"}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  skipButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    padding: 10,
  },
  skipButtonText: {
    color: '#1f8ac0',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50, 
  },
  AeroKonnect: {
    width: '80%',
    height: '30%',
  },
  button: {
    position: 'absolute',
    bottom: '25%', 
    left: '10%',
    width: '80%',
    borderRadius: 5,
  },
});

export default WelcomeScreen;

