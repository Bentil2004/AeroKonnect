import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import logoAir from "../assets/images/logoAir.jpeg";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const SignInScreen = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const { height } = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("Sign Up");
  };
  const onForgotPasswordPressed = () => {
    console.warn("Log In");
  }; 
  return (
    <View style={styles.root}>
      <Image
        source={logoAir}
        style={[StyleSheet.logoAir, { height: height * 0.3 }]}
        resizeMode="contain"
      />

      <CustomInput
        placeholder="Username"
        value={Username}
        setValue={setUsername}
      />

      <CustomInput
        placeholder="Password"
        value={Password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      
    <CustomButton text="Sign up" onPress={onSignInPressed} style={secondarybtn}/>
    <CustomButton text="Log In" onPress={onForgotPasswordPressed} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logoAir: {
    width: 100,
    maxWidth: 300,
    maxheight: 200,
  },
  secondarybtn: {
    backgroundColor: 'green'
  }
});


export default SignInScreen;
