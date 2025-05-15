import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import StepsContainer from '../components/StepsContainer'
import ProceedBtn from '../components/ProceedBtn'
import FormInput from '../components/FormInput'
import DropdownInput from '../components/DropdownInput'

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
    { type: 'input', key: 'email', label: 'Email', placeholder: 'Enter email' },
    { type: 'input', key: 'Age', label: 'Age', placeholder: 'Age' },
    { type: 'dropdown', key: 'gender', label: 'Gender', options: ['male', 'female', 'other'] },
    { type: 'dropdown', key: 'languageOne', label: '1st Language', options: ['English', 'Hindi', 'Spanish', 'French', 'Tamil', 'Telugu', 'German', 'Japanese'] },
    { type: 'dropdown', key: 'languageTwo', label: '2nd Language', options: ['English', 'Hindi', 'Spanish', 'French', 'Tamil', 'Telugu', 'German', 'Japanese'] },
  ];


  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    Alert.alert('Form Data', JSON.stringify(formData, null, 2));
  };

  return (
    <View style={styles.ScreenContainer}>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.arrow}>←</Text>
      </TouchableOpacity>

      <StepsContainer
        currentStep={currentStep}
        totalSteps={totalSteps}
      />

      <Text style={styles.Title}>Personal Information</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) =>
          item.type === 'dropdown' ? (
            <DropdownInput
              label={item.label}
              value={formData[item.key]}
              onChange={(value) => handleChange(item.key, value)}
              options={item.options}
            />
          ) : (
            <FormInput
              label={item.label}
              placeholder={item.placeholder}
              value={formData[item.key]}
              onChangeText={(text) => handleChange(item.key, text)}
            />
          )
        }
      />


      <ProceedBtn
        onPress={() => navigation.navigate('Map')}
        buttonTexts='Proceed'
        borderRadius={30}
        height={55}
      />
    </View>
  )
}

const styles = StyleSheet.create({

  ScreenContainer: {
    padding: 20,

  },
  arrow: {
    fontSize: 50,
    color: '#654edf'
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