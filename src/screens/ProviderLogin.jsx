import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  Dimensions,
  ScrollView,
  Platform,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import CountryPicker from 'react-native-country-picker-modal';
import OtpInput from '../components/OtpInput';
import ProceedBtn from '../components/ProceedBtn';
import AntDesign from 'react-native-vector-icons/AntDesign';

const { width } = Dimensions.get('window');

export default function ProviderLogin() {
  const navigation = useNavigation();

  const [screen, setScreen] = useState('Login');
  const [countryCode, setCountryCode] = useState('IN');
  const [callingCode, setCallingCode] = useState('91');
  const [phone, setPhone] = useState('');
  const [isSelected, setSelection] = useState(false);

  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  const onSelectCountry = country => {
    if (country?.cca2) {
      setCountryCode(country.cca2);
      setCallingCode(country.callingCode[0]);
    }
  };

  const maskPhoneNumber = number => {
    if (number.length < 4) return number;
    const firstTwo = number.slice(0, 2);
    const lastTwo = number.slice(-2);
    return `${firstTwo}******${lastTwo}`;
  };

  const handleContinue = () => {
    if (phone.length >= 8 && isSelected) {
      setScreen('Otp');
      setTimer(30);
      setCanResend(false);
    } else {
      Alert.alert(
        'Validation Error',
        'Enter a valid phone number and accept terms.',
      );
    }
  };

  const handleVerify = () => {
    // Replace with actual verification logic
    navigation.navigate('ProfileImage');
  };

  const handleResendOTP = () => {
    if (canResend) {
      setTimer(30);
      setCanResend(false);
      // Trigger your resend OTP logic here
      Alert.alert('OTP Resent', 'A new OTP has been sent to your phone.');
    }
  };

  useEffect(() => {
    let interval;
    if (screen === 'Otp' && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [screen, timer]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require('../assets/Images/nurces.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
        blurRadius={8}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {screen === 'Login' ? (
            <View style={styles.headingContainer}>
              <Text style={styles.heading}>Join as a Care Provider</Text>
              <Text style={styles.subtitle}>
                Join as a <Text style={styles.highlight}>Nurse</Text>,{' '}
                <Text style={styles.highlight}>CareTaker</Text>, or{'\n'}
                <Text style={styles.highlight}>Physiotherapist</Text> and Earn
                Up to 50,000
              </Text>

              <Image
                source={require('../assets/Images/display.png')}
                style={styles.image}
                resizeMode="contain"
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
                    onSelect={onSelectCountry}
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
                  <Text style={styles.checkboxLabel}>
                    I agree to Terms and Conditions
                  </Text>
                </View>
              </View>

              <ProceedBtn
                onPress={handleContinue}
                buttonTexts="Continue"
                borderRadius={30}
                marginTop={20}
                width={width * 0.9}
                height={55}
              />
            </View>
          ) : (
            <View style={styles.screenContainer}>
              <TouchableOpacity onPress={() => setScreen('Login')}>
                <AntDesign name="arrowleft" size={28} color="#000" />
              </TouchableOpacity>

              <Text style={styles.title}>OTP Verification</Text>

              <Text style={styles.subtitle}>
                Enter the verification code we just sent to your number{' '}
                <Text style={styles.bold}>
                  +{callingCode} {maskPhoneNumber(phone)}
                </Text>
              </Text>

              <OtpInput />

              <Text style={styles.resendText}>
                Didn't receive the code?{' '}
                {canResend ? (
                  <Text style={styles.timer} onPress={handleResendOTP}>
                    Resend OTP
                  </Text>
                ) : (
                  <Text style={styles.timer}>
                    Resend in 00:{timer < 10 ? `0${timer}` : timer}
                  </Text>
                )}
              </Text>

              <ProceedBtn
                onPress={handleVerify}
                buttonTexts="Verify"
                borderRadius={30}
                showArrow={false}
                height={55}
                width={width * 0.9}
                marginTop={30}
              />
            </View>
          )}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollContent: {
    flexGrow: 1,
    padding: width * 0.06,
  },
  headingContainer: {
    alignItems: 'center',
    gap: 20,
  },
  heading: {
    fontSize: width * 0.07,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: width * 0.045,
    color: '#000',
  },
  highlight: {
    fontWeight: '600',
    color: '#007299',
  },
  image: {
    width: width * 0.3,
    height: width * 0.3,
    marginVertical: 10,
  },
  text: {
    fontSize: width * 0.045,
    textAlign: 'center',
    marginBottom: 15,
    color: '#000',
  },
  inputRow: {
    flexDirection: 'row',
    width: '100%',
    gap: 10,
    marginVertical: 10,
  },
  country: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#007299',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    paddingVertical: Platform.OS === 'ios' ? 12 : 4,
  },
  number: {
    flex: 5,
    justifyContent: 'center',
    borderColor: '#007299',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  input: {
    fontSize: width * 0.04,
    height: 45,
    color: '#000',
  },
  checkbox: {
    alignSelf: 'flex-start',
    marginVertical: 10,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: width * 0.038,
    color: '#000',
  },
  screenContainer: {
    flex: 1,
    gap: 20,
  },
  title: {
    fontSize: width * 0.07,
    color: '#000',
    fontWeight: '600',
    paddingTop: 20,
  },
  bold: {
    fontWeight: '600',
    color: '#000',
  },
  resendText: {
    fontSize: width * 0.038,
    textAlign: 'center',
    color: '#333',
    marginTop: 20,
  },
  timer: {
    fontWeight: '600',
    color: '#007AFF',
  },
});
