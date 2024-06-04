import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomImageButton from "../../components/CustomImageButton";
import HorizontalLine from "../../components/HorizontalLine/OrDivider";

const SignInScreen = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const { height } = useWindowDimensions();

  const onSignUpPressed = () => {
    console.warn("Signup");
  };

  const onForgotPasswordPressed = () => {
    console.warn("Log In");
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
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/AeroKonnectSplash.png")}
            style={[styles.AeroKonnect, { height: height * 0.3 }]} 
            resizeMode="contain"
          />
        </View>

        <View style={styles.root}>
          <CustomButton
            text="Sign up"
            onPress={onSignUpPressed}
            bg={"#00527e"}
            txt={"white"}
          />

          <CustomButton
            text="Log In"
            onPress={onForgotPasswordPressed}
            bg={"white"}
            bordercolor="#00527e"
            txt={"#00527e"}
          />
          <HorizontalLine />

          <CustomImageButton
            text="Continue With Apple"
            onPress={onSignInApple}
            imageSource={require("../../assets/CustomLogoImages/Apple.png")}
            bgColor={"#00527e"}
            bordercolor= {"#1f8ac0"}
            txtColor={"white"}
          />

          <CustomImageButton
            text="Continue With Google"
            onPress={onSignInGoogle}
            imageSource={require("../../assets/CustomLogoImages/Google.png")}
            bgColor={"#00527e"}
            txtColor={"white"}
          />

          <CustomImageButton
            text="Continue With Facebook"
            onPress={onSignInFacebook}
            imageSource={require("../../assets/CustomLogoImages/Facebook.png")}
            bgColor={"#00527e"}
            txtColor={"white"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginTop:50 
  },
  root: {
    alignItems: "center",
    padding: 20,
    marginTop:100
  },
  AeroKonnect: {
    width: '100%',
    height: undefined,
    aspectRatio: 1, 
  },
});

export default SignInScreen;

