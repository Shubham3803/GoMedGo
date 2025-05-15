import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import StepsContainer from '../components/StepsContainer';
import DropdownInput from '../components/DropdownInput';
import ProceedBtn from '../components/ProceedBtn';
import UploadDocument from '../components/UploadDocument'; // ✅ Capitalized

const PersonalInformation = () => {
  const navigation = useNavigation();

  const currentStep = 4;
  const totalSteps = 5;

  const [formData, setFormData] = useState({
    gender: '',
    languageOne: '',
    languageTwo: '',
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <ScrollView contentContainerStyle={styles.screenContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.arrow}>←</Text>
      </TouchableOpacity>

      <StepsContainer currentStep={currentStep} totalSteps={totalSteps} />

      <Text style={styles.Title}>Personal Information</Text>

      {/* 1st Dropdown */}
      <DropdownInput
        label="Category"
        value={formData.gender}
        onChange={(value) => handleChange('gender', value)}
        options={['Nurse', 'Attender', 'Physico', 'Lab Technician']}
      />

      {/* Upload Document */}
      <UploadDocument />

      {/* Remaining Dropdowns */}
      <DropdownInput
        label="1st Language"
        value={formData.languageOne}
        onChange={(value) => handleChange('languageOne', value)}
        options={['English', 'Hindi', 'Spanish', 'French', 'Tamil', 'Telugu', 'German', 'Japanese']}
      />
      <DropdownInput
        label="2nd Language"
        value={formData.languageTwo}
        onChange={(value) => handleChange('languageTwo', value)}
        options={['English', 'Hindi', 'Spanish', 'French', 'Tamil', 'Telugu', 'German', 'Japanese']}
      />

      <ProceedBtn
        onPress={() => navigation.navigate('Map')}
        buttonTexts="Proceed"
        borderRadius={30}
        height={55}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  arrow: {
    fontSize: 50,
    color: '#654edf',
  },
  Title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingTop: 20,
  },
});

export default PersonalInformation;
