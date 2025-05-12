import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import CountryPicker, { Country } from 'react-native-country-picker-modal';
import ProceedBtn from '../components/ProceedBtn';

export default function ProviderLogin({ goBack }: { goBack: () => void })  {
  const [text, setText] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('IN');
  const [callingCode, setCallingCode] = useState('91');

  const onSelect = (country: Country) => {
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
        Join as a Nurse, CareTaker, or {'\n'} Physiotherapist and Earn Up to 50,000
      </Text>

      <Image
        source={require('../assets/Image/image.png')}
        style={{ width: 250, height: 250 }}
      />

      <Text style={styles.text}>
        Enter Phone Number To Send One Time Password
      </Text>

      <View style={styles.inputRow}>
        <CountryPicker
          withCallingCode
          withFilter
          withFlag
          withCallingCodeButton
          countryCode={countryCode}
          onSelect={onSelect}
        />
        <TextInput
          placeholder="Phone number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
        />
      </View>

       <ProceedBtn
        onPress={() => console.log('Pressed')}
        buttonTexts="Next Step"
        widthProp={300}
        heightProp={100}
        backgroundColor="#654edf"
        textStyle={{ fontSize: 18, fontWeight: '600' }}
        borderRadius={25}
        marginTop={20}
      />
      

    </View>
  );
}

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
    color: '#654edf',
    fontWeight: '600',
    paddingTop: 20,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
  },
  text: {
    fontSize: 20,
    paddingTop: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  input: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },
});
