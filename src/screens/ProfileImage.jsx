import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation}  from '@react-navigation/native'
import StepsContainer from '../components/StepsContainer'
import ProceedBtn from '../components/ProceedBtn'
import AntDesign from 'react-native-vector-icons/AntDesign';

// import { Image } from 'react-native-reanimated/lib/typescript/Animated'

const ProfileImage = () => {

  const currentStep = 1
  const totalSteps = 5


const navigation = useNavigation()

  return (
    <View style={Styles.screenContainer}>

      <TouchableOpacity onPress={() => navigation.goBack()}>
      <AntDesign name="arrowleft" size={25}   paddingBottom={20} color="black" />
            </TouchableOpacity>

      <StepsContainer
      currentStep={currentStep}
      totalSteps={totalSteps}
      />


      <Text style={Styles.Title}>Upload Profile Imange</Text>
      <Text style={Styles.subTitle}>Please upload a clear Image of yours. png, jpeg are allowed.</Text>

      <View style={Styles.imageBox}>
        <Image
        source = {require('../assets/Images/uploadimage.png')}
        style={{width:100, height:100, marginTop:40}}
        />

       <ProceedBtn
      //  onPress={()=>()}
        buttonTexts='Choose Image'
        borderRadius={10}
        width={200}
        height={55}
       />

          
      </View>

       <ProceedBtn
       onPress={()=>navigation.navigate('PersonalInfo')}
        buttonTexts='Proceed'
        borderRadius={30}
        height={55}
       />

    </View>
  )
}

const Styles = StyleSheet.create({
  screenContainer:{
    padding:20,

  },
   Title: {
    fontSize: 28,
    color: '#000',
    fontWeight: '600',
    paddingTop: 20,
  },
  subTitle:{
    fontSize: 16,
    color: '#c1c1c1',
    paddingTop:20,
  },
  imageBox:{
    // flex:1,
    justifyContent:'center',
    flexDirection:'column',
    gap:30,
    alignItems:'center',
    paddingBottom:50
    

  },
  arrow:{
    fontSize: 50,
    color:'#000'
  }
  
  
})


export default ProfileImage