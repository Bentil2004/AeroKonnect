import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ForgotPassword = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Forgot Password Please</Text>
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'red'
    },
    text: {
        fontSize: 24,
        fontWeight: '500'
    }
})