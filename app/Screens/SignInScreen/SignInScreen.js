import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomImageButton from "../../components/CustomImageButton";
import HorizontalLine from "../../components/HorizontalLine/OrDivider";

const SignInScreen = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const onSignUpPressed = () => {
    console.warn("Signup");
  };

  const onLogInPressed = () => {
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
    <View style={styles.safeArea}>
      <ImageBackground
        source={require("../../assets/CityBG.png")}
        style={styles.backgroundImage}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. {"\n"}
              Nunc vulputate libero et velit interdum, ac aliquet odio mattis.{"\n"}
              Class aptent taciti sociosqu ad litora torquent per conubia nostra,{"\n"}
              per inceptos himenaeos.
            </Text>
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
              onPress={onLogInPressed}
              bg={"transparent"}
              bordercolor="#00527e"
              txt={"#00527e"}
            />
            <HorizontalLine />

            <CustomImageButton
              text="Continue With Apple"
              onPress={onSignInApple}
              imageSource={require("../../assets/CustomLogoImages/Apple.png")}
              bgColor={"#E4EAF1"}
              txtColor={"black"}
            />

            <CustomImageButton
              text="Continue With Google"
              onPress={onSignInGoogle}
              imageSource={require("../../assets/CustomLogoImages/Google.png")}
              bgColor={"#E4EAF1"}
              txtColor={"black"}
            />

            <CustomImageButton
              text="Continue With Facebook"
              onPress={onSignInFacebook}
              imageSource={require("../../assets/CustomLogoImages/Facebook.png")}
              bgColor={"#E4EAF1"}
              txtColor={"black"}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  textContainer: {
    marginTop: '25%',
    paddingHorizontal: 20,
  },
  text: {
    textAlign: 'center',
    fontSize:20,
    color: '#00527E',
  },
  root: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
    paddingBottom: '25%',
  },
});

export default SignInScreen;
