import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import HorizontalLine from "../../components/HorizontalLine/OrDivider";
import CustomImageButton from "../../components/CustomImageButton";

const SignUpScreen = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordRepeat, setPasswordRepeat] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordRepeatError, setPasswordRepeatError] = useState("");
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordRepeatVisibility = () => {
    setShowPasswordRepeat(!showPasswordRepeat);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const validateForm = () => {
    let valid = true;

    if (!validateEmail(Email)) {
      setEmailError("Please enter a valid email address");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!validatePassword(Password)) {
      setPasswordError("Password must be at least 8 characters long");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (Password !== PasswordRepeat) {
      setPasswordRepeatError("Passwords do not match");
      valid = false;
    } else {
      setPasswordRepeatError("");
    }

    return valid;
  };

  const onSignUpPressed = () => {
    if (validateForm()) {
      navigation.navigate('LogIn');
    }
  };

  const onTermsandConditionsPressed = () => {
    navigation.navigate('TermsAndConditions');
  };

  const LogInPressed = () => {
    navigation.navigate('LogIn');
  };

  const onSignInApple = () => {
    console.warn("Apple Login");
  };

  const onSignInGoogle = () => {
    console.warn("Google Login");
  };

  const onSignInFacebook = () => {
    console.warn("Facebook Login");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.root}>
        <Text style={styles.title}>
          <Text style={styles.UpText}> Travel Around The World With Ease</Text>{"\n"}
          Sign Up with AeroKonnect Today!
        </Text>

        <View style={styles.inputContainer}>
          <CustomInput
            placeholder="Email"
            value={Email}
            setValue={setEmail}
            bordercolor="#7D7D7D"
            borderRadius={15}
            iconName={"mail"}
          />
        </View>
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        <View style={styles.passwordInputContainer}>
          <CustomInput
            placeholder="Enter Password"
            value={Password}
            setValue={setPassword}
            secureTextEntry={!showPassword}
            bordercolor="#7D7D7D"
            borderRadius={15}
            iconName={"lock-closed"}
          />
          <MaterialCommunityIcons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="#7D7D7D"
            style={styles.eyeIcon}
            onPress={togglePasswordVisibility}
          />
        </View>
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

        <View style={styles.passwordInputContainer}>
          <CustomInput
            placeholder="Confirm Password"
            value={PasswordRepeat}
            setValue={setPasswordRepeat}
            secureTextEntry={!showPasswordRepeat}
            bordercolor="#7D7D7D"
            borderRadius={15}
            iconName={"lock-closed"}
          />
          <MaterialCommunityIcons
            name={showPasswordRepeat ? "eye-off" : "eye"}
            size={24}
            color="#7D7D7D"
            style={styles.eyeIcon}
            onPress={togglePasswordRepeatVisibility}
          />
        </View>
        {passwordRepeatError ? <Text style={styles.errorText}>{passwordRepeatError}</Text> : null}

        <CustomButton
          text="Next"
          onPress={onSignUpPressed}
          bg={"#00527e"}
          txt={"white"}
        />
      </View>

      <HorizontalLine/>

      <View style={[styles.buttonRow, isLandscape && styles.buttonRowLandscape]}>
        <CustomImageButton
          onPress={onSignInApple}
          imageSource={require("../../assets/CustomLogoImages/Apple.png")}
          bgColor={"#E4EAF1"}
          txtColor={"black"}
          style={styles.imageButton}
        />

        <CustomImageButton
          onPress={onSignInGoogle}
          imageSource={require("../../assets/CustomLogoImages/Google.png")}
          bgColor={"#E4EAF1"}
          style={styles.imageButton}
        />

        <CustomImageButton
          onPress={onSignInFacebook}
          imageSource={require("../../assets/CustomLogoImages/Facebook.png")}
          bgColor={"#E4EAF1"}
          style={styles.imageButton}
        />
      </View>

      <Text style={styles.text}>
        Already have an account?{"\n"}
        <Text style={styles.Link} onPress={LogInPressed}>
          Log in
        </Text>
      </Text>

      <View style={[styles.bottomTextContainer, isLandscape && styles.bottomTextContainerLandscape]}>
        <Text style={styles.bottomText}>
          By clicking on the next button you agree to the{"\n"}
          <Text style={styles.Link} onPress={onTermsandConditionsPressed}>
            Terms and Conditions.
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
    paddingHorizontal: 10,
  },
  root: {
    alignItems: "center",
    padding: 20,
    marginTop: 100,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  buttonRowLandscape: {
    marginVertical: 10,
  },
  imageButton: {
    width: 100,
    height: 65,
    marginHorizontal: 3,
    borderRadius: 6,
    gap: 0.8,
    padding:10,
    opacity: 1,
  },
  Link: {
    color: "#00527e",
  },
  text: {
    textAlign: "center",
    marginVertical: 20,
    bottom: "3%",
  },
  bottomTextContainer: {
    alignItems: "center",
    padding: 20,
    bottom: "2%",
  },
  bottomTextContainerLandscape: {
    paddingBottom: 20,
  },
  bottomText: {
    textAlign: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 20,
    top: -30,
    color: "#00527e",
    textAlign: "center",
  },
  UpText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#00527E',
    textAlign: 'center',
    marginTop: 100,
    alignContent: 'center',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  eyeIcon: {
    marginLeft: -35,
    alignItems: 'center',
    marginTop: -20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    marginTop: -30,
  },
});

export default SignUpScreen;
