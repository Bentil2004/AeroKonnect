import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import React from 'react';

const { height } = Dimensions.get('window');

const HomeScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Text}>
      Home Page Bro
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "violet",
  },
  Text:{
    alignItems: "center",
    fontSize: "50",
  }
});

export default HomeScreen;

