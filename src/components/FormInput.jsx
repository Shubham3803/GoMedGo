import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const FormInput = ({lable, value, onChangeText, placeholder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{lable}</Text>
       <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
    </View>
  )
}


const styles = StyleSheet.create({

container: {
   marginBottom: 5
   },
  label: { 
    fontWeight: 'bold', 
    marginBottom: 5,
   },
  input: {
    borderWidth: 1, 
    borderColor: '#888', 
    padding: 15, 
    borderRadius: 8,
  },

})

export default FormInput