import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FormInput from './FormInput';
import ProceedBtn from './ProceedBtn';
// import { Image } from 'react-native-reanimated/lib/typescript/Animated';

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


  const [upiId, setUpiId] = useState('')   // UPI ID

  const [bankName, setBankName] = useState('') // Bank Name
  const [HolderName, setHolderName] = useState('') // Account Holder Name
  const [bankAccountNumber, setBankAccountNumber] = useState('') // Bank Account Number
  const [conformBankAccountNumber, setConformBankAccountNumber] = useState('') // Conform Bank Account Number
  const [bankIFSC, setBankIFSC] = useState('') // Bank IFSC

  const handleToggle = (option) => {
    setSelected(option);
    onToggleChange(option);
    if (option === 'UPI') {
      navigation.navigate('UpiScreen');
    } else {
      navigation.navigate('BankScreen');
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.toggleContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.toggleButton,
              selected === option && { backgroundColor: activeColor }
            ]}
            onPress={() => handleToggle(option)}
          >
            <Text style={[
              styles.buttonText,
              selected === option && { color: textActiveColor }
            ]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
        </View>

      {/* UPI Section */}
      {selected === 'UPI' && (
        <View style={styles.screenContainer}>
          <View style={styles.UpiinputContainer}>
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
            onPress={() => navigation.navigate('')}
            buttonTexts="Create Account"
            showArrow={false}
            height={55}
            marginTop={20}
            borderRadius={50}
          />
        </View>
      )}

      {/* Bank Section */}

      {selected === 'BANK' && (
        <View style={styles.bankContainer}>
          <ScrollView 
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.contentContainer}>
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
            
              <Text style={styles.UPI_ID}>Conform Bank Account Number</Text>
              <FormInput
                placeholder='Re-Enter Your Bank Account Number'
                value={conformBankAccountNumber}
                onChangeText={setConformBankAccountNumber}
                width={'100%'}
                placeholderTextColor="#7f8c8d"
                inputStyle={styles.bankInput}
                borderWidth={0}
              />
            
              <Text style={styles.UPI_ID}>Bank Name </Text>
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
                placeholder="Enter Bank IFSC Code "
                value={bankIFSC}
                onChangeText={setBankIFSC}
                width={'100%'}
                placeholderTextColor="#7f8c8d"
                inputStyle={styles.bankInput}
                borderWidth={0}
              />
              <Text style={styles.subtitle}>
                By clicking on "Create Account", you accept CareAllianz <Text style={styles.highlight}>Terms and conditions</Text>
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
          </ScrollView>
        </View>
      )}
     
    </View>
  );
};

const styles = StyleSheet.create({

  // for UPI Section

  
  UpiinputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:30,
    marginTop: 30,
    borderRadius: 10,
    borderWidth: 1,
    padding:10,
  },
  
  UPI_ID: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 4,
  },
  TextInput: {
    flexDirection: 'column',
    // alignContent: 'center',
    gap: 2,
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    marginLeft: 10,
  },
  upiInput: {
    fontSize: 18,
    color: '#34495e',
    backgroundColor: '#f7f7fa',
    // borderWidth: 1,
    borderColor: '#bdbdbd',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: 190,
    marginTop: 2,
  },

  // for Bank Section

  inputContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 0,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    paddingTop:10,
  },
  contentContainer: {
    padding: 15,
    gap: 15,
  },
  
  container: {
    width: '100%',
    marginBottom: 20,
    flex: 1,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#DADADA',
    borderRadius: 30,
    gap: 0,
    width: '100%'
  },
  toggleButton: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    backgroundColor: '#DADADA',
    borderRadius: 8,
    minWidth: 177,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
  },
  
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  upiContainer: {
    padding: 10,
  },
  bankContainer: {
    flex: 1,
    width: '100%',
  },
  upiText: {
    fontSize: 16,
    color: '#666',
  },
  bankText: {
    fontSize: 16,
    color: '#666',
  },
  UpiImage:{
    width: 110,
    height: 50,
    // borderRadius: 10,
    marginRight: 10,
  },
  scrollView: {
    width: '100%',
  },
});

export default ToggleButton;