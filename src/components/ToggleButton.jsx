import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FormInput from './FormInput';
import ProceedBtn from './ProceedBtn';

const ToggleButton = ({
  options = ['UPI', 'BANK'],
  initialSelectedIndex = 0,
  onToggleChange = () => {},
  activeColor = '#007299',
  inactiveColor = '#DADADA',
  textActiveColor = '#FFFFFF',
  textInactiveColor = '#000000',
  containerStyle = {},
}) => {
  const [selected, setSelected] = useState(options[initialSelectedIndex]);
  const navigation = useNavigation();

  const [upiId, setUpiId] = useState('');
  const [bankName, setBankName] = useState('');
  const [HolderName, setHolderName] = useState('');
  const [bankAccountNumber, setBankAccountNumber] = useState('');
  const [conformBankAccountNumber, setConformBankAccountNumber] = useState('');
  const [bankIFSC, setBankIFSC] = useState('');

  const handleToggle = option => {
    setSelected(option);
    onToggleChange(option);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[styles.container, containerStyle]}>
        <View style={styles.toggleContainer}>
          {options.map(option => (
            <TouchableOpacity
              key={option}
              style={[
                styles.toggleButton,
                selected === option && {backgroundColor: activeColor},
              ]}
              onPress={() => handleToggle(option)}>
              <Text
                style={[
                  styles.buttonText,
                  selected === option && {color: textActiveColor},
                ]}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {selected === 'UPI' && (
          <View style={styles.screenContainer}>
            <View style={styles.UpiinputContainer}>
              {/* <Image
                source={require('../assets/Images/UPI.png')}
                style={styles.UpiImage}
              /> */}
              <View style={styles.TextInput}>
                <Text style={styles.UPI_ID}>UPI ID</Text>
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
              By clicking on "Create Account", you accept CareAllianz{' '}
              <Text style={styles.highlight}>Terms and Conditions</Text>
            </Text>
            <ProceedBtn
              onPress={() => navigation.navigate('')}
              buttonTexts="Create Account"
              showArrow={false}
              height={55}
              marginTop={20}
              borderRadius={50}
            />
          </View>
        )}

        {selected === 'BANK' && (
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.contentContainer}>
            <Text style={styles.UPI_ID}>Account Holder Name</Text>
            <FormInput
              placeholder="Enter Account Holder Name"
              value={HolderName}
              onChangeText={setHolderName}
              width={'100%'}
              placeholderTextColor="#7f8c8d"
              inputStyle={styles.bankInput}
              borderWidth={0}
            />

            <Text style={styles.UPI_ID}>Bank Account Number</Text>
            <FormInput
              placeholder="Enter Your Bank Account Number"
              value={bankAccountNumber}
              onChangeText={setBankAccountNumber}
              width={'100%'}
              placeholderTextColor="#7f8c8d"
              inputStyle={styles.bankInput}
              borderWidth={0}
            />

            <Text style={styles.UPI_ID}>Confirm Bank Account Number</Text>
            <FormInput
              placeholder="Re-Enter Your Bank Account Number"
              value={conformBankAccountNumber}
              onChangeText={setConformBankAccountNumber}
              width={'100%'}
              placeholderTextColor="#7f8c8d"
              inputStyle={styles.bankInput}
              borderWidth={0}
            />

            <Text style={styles.UPI_ID}>Bank Name</Text>
            <FormInput
              placeholder="Enter Your Bank Name"
              value={bankName}
              onChangeText={setBankName}
              width={'100%'}
              placeholderTextColor="#7f8c8d"
              inputStyle={styles.bankInput}
              borderWidth={0}
            />

            <Text style={styles.UPI_ID}>IFSC Code</Text>
            <FormInput
              placeholder="Enter Bank IFSC Code"
              value={bankIFSC}
              onChangeText={setBankIFSC}
              width={'100%'}
              placeholderTextColor="#7f8c8d"
              inputStyle={styles.bankInput}
              borderWidth={0}
            />

            <Text style={styles.subtitle}>
              By clicking on "Create Account", you accept CareAllianz{' '}
              <Text style={styles.highlight}>Terms and Conditions</Text>
            </Text>

            <ProceedBtn
              onPress={() => navigation.navigate('')}
              buttonTexts="Create Account"
              showArrow={false}
              height={55}
              marginTop={20}
              borderRadius={50}
            />
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#DADADA',
    borderRadius: 30,
    overflow: 'hidden',
    marginBottom: 20,
  },
  toggleButton: {
    paddingVertical: 15,
    paddingHorizontal: 90,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '500',
  },
  // screenContainer: {
  //   padding: 10,
  // },
  UpiinputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  UpiImage: {
    width: 110,
    height: 50,
    marginRight: 10,
  },
  TextInput: {
    flex: 1,
  },
  UPI_ID: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  upiInput: {
    fontSize: 18,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  bankInput: {
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 2,
    borderColor: '#007299',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 10,
    gap: 15,
    paddingBottom: 40,
  },
  subtitle: {
    fontSize: 20,
    color: '#555',
    marginTop: 10,
    marginBottom: 20,
  },
  highlight: {
    color: '#007299',
    textDecorationLine: 'underline',
  },
});

export default ToggleButton;
