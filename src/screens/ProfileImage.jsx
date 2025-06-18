import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import StepsContainer from '../components/StepsContainer';
import ProceedBtn from '../components/ProceedBtn';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

const ProfileImage = () => {
  const currentStep = 1;
  const totalSteps = 5;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require('../assets/Images/nurces.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
        blurRadius={8}>
        <View style={styles.overlay}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <AntDesign name="arrowleft" size={width * 0.06} color="#000" />
          </TouchableOpacity>

          <StepsContainer currentStep={currentStep} totalSteps={totalSteps} />

          <Text style={styles.title}>Upload Profile Image</Text>
          <Text style={styles.subtitle}>
            Please upload a clear image of yourself. Only PNG or JPEG files are
            allowed.
          </Text>

          <View style={styles.imageBox}>
            <View style={styles.uploadIcon}>
              <Image
                source={require('../assets/Images/uploadimage.png')}
                style={styles.uploadImage}
                resizeMode="contain"
              />
            </View>
            <View style={styles.chooseBtn}>
              <ProceedBtn
                buttonTexts="Choose Image"
                borderRadius={10}
                width={width * 0.5}
                height={50}
              />
            </View>
          </View>

          <View style={styles.proceedBtn}>
            <ProceedBtn
              onPress={() => navigation.navigate('PersonalInfo')}
              buttonTexts="Proceed"
              borderRadius={30}
              height={55}
              width={width * 0.9}
            />
          </View>
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
    width: width,
    height: height,
  },
  overlay: {
    flex: 1,
    paddingHorizontal: width * 0.06,
    paddingTop: height * 0.03,
  },
  backButton: {
    marginBottom: height * 0.02,
  },
  title: {
    fontSize: width * 0.065,
    color: '#000',
    fontWeight: '600',
    marginTop: height * 0.01,
  },
  subtitle: {
    fontSize: width * 0.04,
    color: '#333',
    marginTop: height * 0.01,
    marginBottom: height * 0.04,
  },
  imageBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.02,
    marginBottom: height * 0.05,
  },
  uploadIcon: {
    width: width * 0.18,
    height: width * 0.18,
    backgroundColor: '#007299',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  uploadImage: {
    width: '80%',
    height: '80%',
  },
  chooseBtn: {
    flex: 1,
    marginLeft: width * 0.04,
  },
  proceedBtn: {
    alignItems: 'center',
  },
});

export default ProfileImage;
