import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const LogInScreen = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordRepeat, setPasswordRepeat] = useState("");

  const onSignUpPressed = () => {
    console.warn("Signup");
  };

  const onTermsandConditionsPressed = () => {
    console.warn("Terms and Conditions");
  };

  const LogInPressed = () => {
    console.warn("Log In");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.root}>
        <Text style={styles.title}>Log into your account</Text>

        <CustomInput
          placeholder="Email"
          value={Email}
          setValue={setEmail}
          bordercolor="black"
          borderRadius="15"
          style={styles.input}
        />

        <CustomInput
          placeholder="Password"
          value={PasswordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
          bordercolor="black"
          borderRadius="15"
          style={styles.input}
        />

        <Text style={styles.Link} onPress={LogInPressed}>
          Forgot your password?
        </Text>

        <CustomButton
          text="Next"
          onPress={onSignUpPressed}
          bg={"#00527e"}
          txt={"white"}
          style={styles.button}
        />

        <Text style={styles.text}>
          Don't have an account?{" "}
          <Text style={styles.Link} onPress={LogInPressed}>
            Sign Up
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  root: {
    alignItems: "center",
    padding: 20,
    marginTop: 100,
  },
  input: {
    marginBottom: 20, 
  },
  button: {
    marginVertical: 20, 
  },
  Link: {
    color: "#00527e",
  },
  text: {
    textAlign: "center",
    marginTop: 20, 
  },
  bottomTextContainer: {
    alignItems: "center",
    padding: 20,
  },
  bottomText: {
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 20,
  },
});

export default LogInScreen;
