import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";

const CustomImageButton = ({
  onPress,
  text,
  imageSource,
  bgColor,
  txtColor,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bgColor }]}
      onPress={onPress}
    >
      <Image source={imageSource} style={styles.buttonImage} />
      <Text style={[styles.buttonText, { color: txtColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginVertical: 5,
    borderRadius: 15,
    width: "100%",
  },
  buttonImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default CustomImageButton;
