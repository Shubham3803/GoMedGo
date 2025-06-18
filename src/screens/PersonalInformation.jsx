import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import StepsContainer from '../components/StepsContainer';
import DropdownInput from '../components/DropdownInput';
import ProceedBtn from '../components/ProceedBtn';
import UploadDocument from '../components/UploadDocument';
import FormInput from '../components/FormInput';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { scale, spacing, fontSize, wp, hp } from '../utils/responsive';

const PersonalInformation = () => {
  const navigation = useNavigation();
  const currentStep = 4;
  const totalSteps = 5;

  const [Category, setCategory] = useState('');
  const [nurseType, setNurseType] = useState('');
  const [hospital, setHospital] = useState('');
  const [experience, setExperience] = useState('');
  const [aboutYourself, setAboutYourself] = useState('');

  const CategoryOptions = ['Nurse', 'Attender', 'Physio', 'Lab Tachnician'];
  const nurseTypeOptions = ['Registered Nurse (RN)', 'Licensed Practical Nurse (LPN)', 'Nurse Practitioner (NP)', 'Clinical Nurse Specialist (CNS)', 'Critical Care Nurse', 'Home Care Nurse'];
  const HospitalOption = [{ type: 'input', key: 'firstName', label: 'Hospital', placeholder: 'Name' },];

  const handleFileSelect = (file) => {
    setAadharFile(file);
    console.log('Selected file:', file);
  };

  const handleProceed = () => {

    navigation.navigate('NextScreen');
  };

  const handleUploadPress = () => {
    Alert.alert(
      "Upload Document",
      "This feature will be implemented soon!",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  };

  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={scale(25)} paddingBottom={spacing.md} color="black" />
      </TouchableOpacity>

      <StepsContainer currentStep={currentStep} totalSteps={totalSteps} />

      <Text style={styles.Title}>Personal Information</Text>

      <ScrollView style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Select Your Category</Text>
            <DropdownInput
              options={CategoryOptions}
              value={Category}
              onChange={setCategory}
              placeholder="Select Category"
              containerStyle={styles.dropdownContainer}
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Select Nurse Type</Text>
            <DropdownInput
              options={nurseTypeOptions}
              value={nurseType}
              onChange={setNurseType}
              placeholder="Select Nurse Type"
              containerStyle={styles.dropdownContainer}
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Upload Documents</Text>
            <UploadDocument
              title="Upload Your Aadhar Card"
              onFileSelect={handleFileSelect}
            />

            <UploadDocument
              title="Upload Your Nurse Registration Certificate"
              onFileSelect={handleFileSelect}
            />

            <UploadDocument
              title="Upload Your Employee ID Card Image"
              onFileSelect={handleFileSelect}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Hospital Information</Text>
            <FormInput
              placeholder="Enter Hospital You are working in"
              value={hospital}
              onChangeText={(text) => setHospital(text)}
              style={styles.input}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Experience</Text>
            <FormInput
              placeholder="Enter Years of Experience"
              value={experience}
              onChangeText={(text) => setExperience(text)}
              style={styles.input}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>About Yourself</Text>
            <FormInput
              placeholder="Write about yourself"
              value={aboutYourself}
              onChangeText={(text) => setAboutYourself(text)}
              style={styles.input}
            />
          </View>

          <ProceedBtn
            onPress={() => navigation.navigate('PaymentInformation')}
            buttonTexts='Continue'
            borderRadius={scale(30)}
            height={hp(7)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    padding: spacing.md,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  arrow: {
    fontSize: scale(25),
    color: '#000',
  },
  Title: {
    fontSize: fontSize.xl,
    fontWeight: 'bold',
    marginBottom: spacing.md,
    paddingTop: spacing.sm,
    color: '#333333',
  },
  scrollContainer: {
    flex: 1,
  },
  formContainer: {
    gap: spacing.xs,
    paddingVertical: spacing.sm,
  },
  inputGroup: {
    marginBottom: spacing.xs,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: scale(8),
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    fontSize: fontSize.md,
    backgroundColor: '#FFFFFF',
  },
  inputLabel: {
    fontSize: fontSize.md,
    fontWeight: '600',
    color: '#333333',
    marginBottom: spacing.xs,
  },
  dropdownContainer: {
    marginBottom: spacing.xs,
  },
  dropdown: {
    height: hp(6),
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: scale(8),
    paddingHorizontal: spacing.md,
    backgroundColor: '#FFFFFF',
  },
  selectedTextStyle: {
    fontSize: fontSize.md,
    color: '#333333',
  },
});

export default PersonalInformation;
