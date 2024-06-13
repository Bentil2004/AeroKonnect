import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  const handleEmailPress = () => {
    navigation.navigate('ForgotPasswordEmail');
  };

  const handlePhonePress = () => {
    navigation.navigate('ForgotPasswordPhone');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>Forgot password</Text>
        <Text style={styles.subtitle}>Please how would you like to reset your password?</Text>
        <TouchableOpacity style={styles.optionButton} onPress={handleEmailPress}>
          <Text style={styles.optionButtonText}>Reset via Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={handlePhonePress}>
          <Text style={styles.optionButtonText}>Reset via Phone</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backButtonText: {
    color: '#007bff',
    fontSize: 20,
    marginTop: 30,
  },
  container: {
    marginTop: 80,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  optionButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#E4EAF1',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  optionButtonText: {
    color: '#00527e',
    fontSize: 16,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default ForgotPasswordScreen;
