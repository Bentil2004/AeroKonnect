import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get('window');

const NextWelcomeScreen = () => {
  const navigation = useNavigation();

  const onSkipPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Airplanemodel.jpg")}
        style={styles.AirplaneBG}
        resizeMode="cover"
      />

      <View style={styles.touchableWrapper}>
        <TouchableOpacity style={styles.skipButton} onPress={onSkipPressed}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.upperTextContainer}>
        <Text style={styles.upperText}>
          AEROKONNECT{"\n"}
          <Text style={styles.slogan}>Seamless  Travels,  Boundless  Horizons</Text>
        </Text>
      </View> 

      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>
        Book. Fly. Enjoy. Discover new Destinations Effortless reservations ,{"\n"} 
        Tailored experiences just for you.Your Adventure Awaits!
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
  touchableWrapper: {
    ...StyleSheet.absoluteFillObject, 
    zIndex: 1,
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
  slogan: {
    alignContent: 'center',
    fontSize: 16,
  },
  upperText: {
    fontSize: 24,
    fontWeight: '500',
    color:'#00527E',
    textAlign: 'center',
    marginTop: 100,
    alignContent: 'center',
  }
});

export default NextWelcomeScreen;


