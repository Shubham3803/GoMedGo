import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import StepsContainer from '../components/StepsContainer';
import ToggleButton from '../components/ToggleButton';
import AntDesign from 'react-native-vector-icons/AntDesign';

// import  Image  from 'react-native-reanimated/lib/typescript/Animated'

const PaymentInformation = () => {
  const navigation = useNavigation();
  const currentStep = 5;
  const totalSteps = 5;

  const handleToggleChange = option => {
    console.log('Selected payment method:', option);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require('../assets/Images/nurcesGroup.png')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.screenContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign
              name="arrowleft"
              size={25}
              marginBottom={20}
              color="black"
            />
          </TouchableOpacity>

          <StepsContainer currentStep={currentStep} totalSteps={totalSteps} />

          <Text style={styles.Title}>Payment Information</Text>

          <ToggleButton
            options={['UPI', 'BANK']}
            initialSelectedIndex={0}
            onToggleChange={handleToggleChange}
            inactiveColor="#DADADA"
            textActiveColor="#FFFFFF"
            textInactiveColor="#000000"
          />
        </View>
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
  },
  screenContainer: {
    flex: 1,
    padding: 20,
  },
  Title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    paddingTop: 15,
    color: '#333333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginTop: 20,
  },
  highlight: {
    color: '#000',
    fontWeight: '600',
  },
});

export default PaymentInformation;
