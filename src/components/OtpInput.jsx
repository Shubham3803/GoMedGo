import { View, TextInput, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import { useState } from 'react'

const OtpInput = ({length = 4}) => {

const [otp , setOtp] = useState(new Array(length).fill(''));
const inputsRef = useRef([]);


  const handleChange = (text, index) => {
    if (text.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to next input
    if (text && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

    const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
     <View style={styles.otpContainer}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          style={styles.otpInput}
          keyboardType="number-pad"
          maxLength={1}
          value={digit}
          onChangeText={text => handleChange(text, index)}
          onKeyPress={e => handleKeyPress(e, index)}
          ref={ref => (inputsRef.current[index] = ref)}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: 'row',
    alignItems:'center',
    gap:8,
    justifyContent: 'center',
    marginTop: 30,
    paddingHorizontal: 5,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#007299',
    textAlign: 'center',
    fontSize: 24,
    borderRadius: 10,
  },
})

export default OtpInput;