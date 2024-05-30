import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const CustomButton = ({ onPress, text,type}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container , styles['container_${type}']]}>
      <Text style={[styles.text, styles['text_${type}']]}>{text}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
  },
  container_PRIMARY:{
    backgroundColor: '#496E2D',
  },
   container_SECONDARY:{
  backgroundColor:'#FFFFFF',
  borderRadius:'#496E2D',
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
  text_SECONDARY :{
    color:'#496E2D',
  },
});
export default CustomButton;
