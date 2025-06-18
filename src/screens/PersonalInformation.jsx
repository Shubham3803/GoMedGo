import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import StepsContainer from '../components/StepsContainer';
import DropdownInput from '../components/DropdownInput';
import ProceedBtn from '../components/ProceedBtn';
import UploadDocument from '../components/UploadDocument';
import FormInput from '../components/FormInput';

const {width, height} = Dimensions.get('window');

const PersonalInformation = () => {
  const navigation = useNavigation();
  const currentStep = 4;
  const totalSteps = 5;

  const [Category, setCategory] = useState('');
  const [nurseType, setNurseType] = useState('');
  const [hospital, setHospital] = useState('');
  const [experience, setExperience] = useState('');
  const [aboutYourself, setAboutYourself] = useState('');

  const CategoryOptions = ['Nurse', 'Attender', 'Physio', 'Lab Technician'];
  const nurseTypeOptions = [
    'Registered Nurse (RN)',
    'Licensed Practical Nurse (LPN)',
    'Nurse Practitioner (NP)',
    'Clinical Nurse Specialist (CNS)',
    'Critical Care Nurse',
    'Home Care Nurse',
  ];

  const handleFileSelect = file => {
    console.log('Selected file:', file);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require('../assets/Images/nurcesGroup.png')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <TouchableOpacity
          style={{marginBottom: height * 0.02}}
          onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>

          <StepsContainer currentStep={currentStep} totalSteps={totalSteps} />

          <Text style={styles.title}>Personal Information</Text>

          <View style={styles.formContainer}>
            <View>
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

            <View>
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

            <View>
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

            <View>
              <Text style={styles.inputLabel}>Hospital Information</Text>
              <FormInput
                placeholder="Enter Hospital You are working in"
                value={hospital}
                onChangeText={setHospital}
                style={styles.input}
              />
            </View>

            <View>
              <Text style={styles.inputLabel}>Experience</Text>
              <FormInput
                placeholder="Enter Years of Experience"
                value={experience}
                onChangeText={setExperience}
                style={styles.input}
              />
            </View>

            <View>
              <Text style={styles.inputLabel}>About Yourself</Text>
              <FormInput
                placeholder="Write about yourself"
                value={aboutYourself}
                onChangeText={setAboutYourself}
                style={styles.input}
              />
            </View>

            <ProceedBtn
              onPress={() => navigation.navigate('PaymentInformation')}
              buttonTexts="Continue"
              borderRadius={30}
              height={height * 0.05}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    width: width,
    height: height,
  },
  scrollContainer: {
    paddingHorizontal: width * 0.05,
    paddingBottom: height * 0.05,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginBottom: height * 0.02,
    color: '#222',
    textAlign: 'center',
  },
  formContainer: {
    rowGap: height * 0.02,
  },
  inputLabel: {
    fontSize: width * 0.04,
    fontWeight: '600',
    color: '#333',
    marginBottom: height * 0.01,
  },
  input: {
    borderWidth: 1,
    borderColor: '#007299',
    borderRadius: 10,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.015,
    fontSize: width * 0.04,
    backgroundColor: '#fff',
  },
  dropdownContainer: {
    marginBottom: 0, // moved spacing to form container
  },
  dropdown: {
    height: height * 0.06,
    borderWidth: 1,
    borderColor: '#007299',
    borderRadius: 10,
    paddingHorizontal: width * 0.04,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  selectedTextStyle: {
    fontSize: width * 0.04,
    color: '#333',
  },
});


export default PersonalInformation;
