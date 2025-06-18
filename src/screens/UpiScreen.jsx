import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import FormInput from '../components/FormInput'
import ProceedBtn from '../components/ProceedBtn'

const UpiScreen = () => {
  const navigation = useNavigation()
  const [upiId, setUpiId] = useState('')

  return (
    <View style={styles.screenContainer}>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/Images/UPI.png')}
          style={styles.UpiImage}
        />

        <View style={styles.TextInput}>
          <Text style={styles.UPI_ID}>
            UPI ID
          </Text>

          <FormInput
            placeholder="Enter Your UPI ID"
            value={upiId}
            onChangeText={setUpiId}
            width={'100%'}
            placeholderTextColor="#7f8c8d"
            inputStyle={styles.upiInput}
            borderWidth={0}
          />
        </View>
      </View>

      <Text style={styles.subtitle}>
        By clicking on "Create Account", you accept CareAllianz <Text style={styles.highlight}>Terms and conditions</Text>
      </Text>

      <ProceedBtn
        onPress={() => navigation.navigate('MainTabs')}
        buttonTexts="Create Account"
        showArrow={false}
        height={55}
        marginTop={20}
        borderRadius={50}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 20
  },
  arrow: {
    fontSize: 50,
    color: '#000',
  },
  Title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    paddingTop: 15,
    color: '#333333'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 40,
    borderRadius: 10,
    borderWidth: 1,
    padding: 15
  },
 
  highlight: {
    color: '#000',
    fontWeight: '600',
  },
  UpiImage:{
    width: 110,
    height: 60,
    // borderRadius: 10,
    marginRight: 10,
  },
  
})

export default UpiScreen