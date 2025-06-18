import { View, Text, stylesheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import StepsContainer from '../components/StepsContainer'
import MapView from 'react-native-maps'
import ProceedBtn from '../components/ProceedBtn'
import AntDesign from 'react-native-vector-icons/AntDesign';
const Map = () => {

  const navigation = useNavigation()

  const currentStep = 3
  const totalSteps = 5

  return (
    <View style={styles.screenContainer}>

      <TouchableOpacity onPress={() => navigation.goBack()}>
      <AntDesign name="arrowleft" size={25}   paddingBottom={20} color="black" />
      </TouchableOpacity>

      <StepsContainer
        currentStep={currentStep}
        totalSteps={totalSteps}
      />
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      <ProceedBtn
    
       onPress={()=>navigation.navigate('PersonalInformation')}       
      buttonTexts={'Conform Location & Proceed'}
      borderRadius={30}
      showArrow={false}
      height={55}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    padding: 20,
  },
  arrow: {
    fontSize: 50,
    color: '#000'
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 200,
  },
})

export default Map