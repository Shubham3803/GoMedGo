import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ProviderLogin from '../screens/ProviderLogin'
import ProceedBtn from './ProceedBtn'

const Privacy_Policy = () => {

  const navigation = useNavigation()
  return (
    <ScrollView>
        <View style={styles.headingContainer} >
      <Text style = {styles.heading}>Privacy_Policy</Text>
      <Text>Privacy Policy Generator
        Not everyone knows how to make a Privacy Policy agreement, especially with CCPA or GDPR or CalOPPA or PIPEDA or Australia's Privacy Act provisions. If you are not a lawyer or someone who is familiar to Privacy Policies, you will be clueless. Some people might even take advantage of you because of this. Some people may even extort money from you. These are some examples that we want to stop from happening to you.
        We will help you protect yourself by generating a Privacy Policy.
        Our Privacy Policy Generator can help you make sure that your business complies with the law. We are here to help you protect your business, yourself and your customers.
        Fill in the blank spaces below and we will create a personalized website Privacy Policy for your business. No account registration required. Simply generate & download a Privacy Policy in seconds!
        Small remark when filling in this Privacy Policy generator: Not all parts of this Privacy Policy might be applicable to your website. When there are parts that are not applicable, these can be removed. Optional elements can be selected in step 2. The accuracy of the generated Privacy Policy on this website is not legally binding. Use at your own risk.
        Looking for Terms and Conditions? Check out Terms and Conditions
        Not everyone knows how to make a Privacy Policy agreement, especially with CCPA or GDPR or CalOPPA or PIPEDA or Australia's Privacy Act provisions. If you are not a lawyer or someone who is familiar to Privacy Policies, you will be clueless. Some people might even take advantage of you because of this. Some people may even extort money from you. These are some examples that we want to stop from happening to you.
        We will help you protect yourself by generating a Privacy Policy.
        Our Privacy Policy Generator can help you make sure that your business complies with the law. We are here to help you protect your business, yourself and your customers.
        Fill in the blank spaces below and we will create a personalized website Privacy Policy for your business. No account registration required. Simply generate & download a Privacy Policy in seconds!
        Small remark when filling in this Privacy Policy generator: Not all parts of this Privacy Policy might be applicable to your website. When there are parts that are not applicable, these can be removed. Optional elements can be selected in step 2. The accuracy of the generated Privacy Policy on this website is not legally binding. Use at your own risk.
        Looking for Terms and Conditions? Check out Terms and Conditions  Generator.</Text>

        <ProceedBtn
          buttonTexts="Continue"
        borderRadius={30}
        marginTop={20}
        width={250}
        height={55}
        
        />



    </View>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({

headingContainer:{
  padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
},
heading: {
    fontSize: 28,
    // color: '#654edf',
    fontWeight: '600',
    paddingTop: 20,
  },

})

export default Privacy_Policy