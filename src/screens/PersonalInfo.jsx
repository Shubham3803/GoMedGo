import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import StepsContainer from '../components/StepsContainer'
import ProceedBtn from '../components/ProceedBtn'
import FormInput from '../components/FormInput'
import DropdownInput from '../components/DropdownInput'
import AntDesign from 'react-native-vector-icons/AntDesign';

const PersonalInfo = () => {
  const currentStep = 2
  const totalSteps = 5

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    Age: '',
    gender: '',
    languageOne: '',
    languageTwo: '',
  });

  const navigation = useNavigation()

  const data = [
    { type: 'input', key: 'firstName', label: 'First Name', placeholder: 'Name' },
    { type: 'input', key: 'email', label: 'Email', placeholder: 'Enter email', keyboardType: 'email-address' },
    { type: 'input', key: 'Age', label: 'Age', placeholder: 'Age', keyboardType: 'numeric', maxLength: 3 },
    { type: 'dropdown', key: 'gender', label: 'Gender', options: ['male', 'female', 'other'] },
    { type: 'dropdown', key: 'languageOne', label: '1st Language', options: ['English', 'Hindi', 'Spanish', 'French', 'Tamil', 'Telugu', 'German', 'Japanese'] },
    { type: 'dropdown', key: 'languageTwo', label: '2nd Language', options: ['English', 'Hindi', 'Spanish', 'French', 'Tamil', 'Telugu', 'German', 'Japanese'] },
    { type: 'button', key: 'proceed' },
  ];

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    Alert.alert('Form Data', JSON.stringify(formData, null, 2));
  };

  const renderItem = ({ item }) => {
    switch (item.type) {
      case 'dropdown':
        return (
          <DropdownInput
            label={item.label}
            value={formData[item.key]}
            onChange={(value) => handleChange(item.key, value)}
            options={item.options}
          />
        );
      case 'button':
        return (
          <View style={styles.buttonContainer}>
            <ProceedBtn
              onPress={() => navigation.navigate('Map')}
              buttonTexts='Proceed'
              borderRadius={30}
              height={55}
            />
          </View>
        );
      default:
        return (
          <FormInput
            label={item.label}
            placeholder={item.placeholder}
            value={formData[item.key]}
            onChangeText={(text) => handleChange(item.key, text)}
            keyboardType={item.keyboardType}
          />
        );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.ScreenContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={25}   paddingBottom={20} color="black" />
        </TouchableOpacity>

        <StepsContainer
          currentStep={currentStep}
          totalSteps={totalSteps}
        />

        <Text style={styles.Title}>Personal Information</Text>

        <View style={styles.formContainer}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.key}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
            contentContainerStyle={styles.flatListContent}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ScreenContainer: {
    flex: 1,
    padding: 20,
  },
  formContainer: {
    flex: 1,
    marginVertical: 10,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  buttonContainer: {
    marginTop: 10,
    // marginBottom: 10,
  },
  arrow: {
    fontSize: 50,
    color: '#000'
  },
  Title: {
    fontSize: 28,
    color: '#000',
    fontWeight: '600',
    paddingTop: 20,
  },
  itemBox: {
    borderWidth: 1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  itemText: {
    fontSize: 18,
    color: '#333',
    placeholder: 'enter your name'
  },
})

export default PersonalInfo