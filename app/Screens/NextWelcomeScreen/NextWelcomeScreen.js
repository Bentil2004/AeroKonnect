import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import React from 'react';
import CustomButton from "../../components/CustomButton";

const { height, width } = Dimensions.get('window');

const NextWelcomeScreen = () => {

  const onSkipPressed = () => {
    console.warn("Skip");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Airplanemodel.jpg")}
        style={styles.AirplaneBG}
        resizeMode="cover"
      />
      <TouchableOpacity style={styles.skipButton} onPress={onSkipPressed}>
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>

      
      <View style={styles.UpperTextContainer}>
        <Text style={styles.UpperText}>
         AEROKONNECT{"\n"}
         <Text style={styles.Slogan}>Seamless  Travels,  Boundless  Horizons</Text>
          </Text>
      </View> 

      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>
          The Day You will meet your crush at a public rest room what will you do.{"\n"}
          Terms and Conditions.The Boy Who Gave It To Me Last Time Nu.{"\n"}
          The number of Days It Takes for an Elephant to give birth.
          </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
 
  AirplaneBG: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    resizeMode:"cover"
  },
  bottomText: {
    textAlign: 'center',
    color:'#00527E',
    fontSize: 16,
  },
  bottomTextContainer: {
    position: 'absolute',
    bottom: '20%', 
    left: '10%',
    width: '80%',
    borderRadius: 5,
  },
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
    color: '#00527E',
    fontSize: 20,
  },
  Slogan:{
 alignContent: 'center',
 fontSize: 16,
  },
  UpperText:{
    fontSize: 24,
    fontWeight: '500',
    color:'#00527E',
    textAlign: 'center',
    marginTop: 100,
    alignContent: 'center',
  }
});

export default NextWelcomeScreen;


