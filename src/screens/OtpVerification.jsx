import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import OtpInput from '../components/OtpInput'
import ProceedBtn from '../components/ProceedBtn'

export default function OtpVerification() {

  const navigation = useNavigation()
  return (
    <View style={styles.screenContainer}>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.arrow}>←</Text>
      </TouchableOpacity>

      <Text style={styles.Title}>OTP Verification</Text>
      <Text style={styles.SubTitle}>Enter the Verification code we just send to you number +91 83******625</Text>

        <OtpInput/>
      
      <View style={styles.text}>
        <Text >Didn't receive code? Resend OTP in 00:57</Text>
      </View>

      <ProceedBtn
      onPress={() => navigation.navigate("ProfileImage")}
      buttonTexts='Verify'
      borderRadius={30}
      showArrow={false}
      height={55}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    padding: 20,
    height:'100%',
  },
  arrow: {
    fontSize: 50,
    color:'#654edf'
  },
  Title: {
    fontSize: 28,
    color: '#000',
    fontWeight: '600',
    paddingTop: 20,
  },
  SubTitle: {
    fontSize: 18,
    color: '#c1c1c1',
    paddingTop:20,
  },
  text:{
    fontSize:10,
    flex:1,
    alignItems:'center',
    paddingTop:20,

  }
})