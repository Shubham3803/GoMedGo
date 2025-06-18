

import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import ProceedBtn from '../components/ProceedBtn'
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import { useState } from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import { Country, CountryCode } from 'react-native-country-picker-modal';

const ProviderLogin = () => {
  const [countryCode, setCountryCode] = useState('IN');
  const [callingCode, setCallingCode] = useState('91');
  const [phone, setPhone] = useState('');
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();

  const onSelect = (country) => {
    if (country && country.cca2) {
      console.log('Selected country: ', country); // For debugging
      setCountryCode(country.cca2); // Set the 2-letter country code (e.g., 'IN')
      setCallingCode(country.callingCode[0]); // Set the calling code (e.g., '91')
    }
  };

  return (
    <View style={styles.headingContainer}>

      <Text style={styles.heading}>Join as a Care Provider</Text>
      <Text style={styles.subtitle}>
        Join as a <Text style={styles.highlight}>Nurse</Text>, <Text style={styles.highlight}>CareTaker</Text>, or{'\n'}
        <Text style={styles.highlight}>Physiotherapist</Text> and Earn Up to 50,000
      </Text>

      <Image
        source={require('../assets/Images/display.png')}
        style={{ width: 200, height: 200, }}
      />

      <Text style={styles.text}>
        Enter Phone Number To Send One Time Password
      </Text>

      <View style={styles.inputRow}>
        <View style={styles.country}>
          <CountryPicker
            withCallingCode
            withFilter
            withFlag
            withCallingCodeButton
            countryCode={countryCode}
            onSelect={onSelect}
            containerButtonStyle={styles.countryPickerButton}
          />
        </View>

        <View style={styles.number}>
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor="#000"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
          />
        </View>
      </View>


      <View style={styles.checkbox}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              tintColors={{ true: '#61d9f4', false: '#ccc' }}
            />
            <Text style={{ marginLeft: 8 }}>
              I agree to Terms and Conditions
            </Text>
          </View>
        </View>


      <ProceedBtn
        onPress={() => navigation.navigate("OtpVerification")}
        buttonTexts="Continue"
        borderRadius={30}
        marginTop={20}
        width={250}
        height={55}
      />
    </View>
  )
}

export default ProviderLogin

const styles = StyleSheet.create({
  headingContainer: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
  },
  heading: {
    fontSize: 28,
    // color: '#654edf',
    fontWeight: '600',
    paddingTop: 20,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
  },
  highlight: {
    // color: '#654edf',
    fontWeight: '600',
  },
  text: {
    fontSize: 20,
    paddingTop: 20,
  },
  inputRow: {
    flexDirection: 'row',
    gap: 10,
  },
  country: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  number: {
    alignItems: 'flex-start',
    borderColor: '#ccc',
    flex: 7,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  checkbox: {
    alignItems: 'flex-start',
  },
  inputRow: {
    flexDirection: 'row',
    gap: 10,
  },
  input: {
    marginLeft: 5,
    flex: 1,
    fontSize: 16,
  }
})