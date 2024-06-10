import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TermsAndConditions = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Terms And Conditions: Please The G)B3 Is In The Bowl</Text>
    </View>
  )
}

export default TermsAndConditions

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'red'

    },
    text: {
        fontSize: 50,
        fontWeight: '500',
        color: '#00527E',
        textAlign: 'center',
        marginTop: 100,
        alignContent: 'center',
    },
})