import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import OptionCard from '../components/OptionCard';

const { width, height } = Dimensions.get('window');

function Account() {
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    // Replace with your logout logic
    setIsLoggedIn(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require('../assets/Images/nurcesGroup.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.headingContainer}>
            <Text style={styles.header}>My Profile</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/Images/display.png')}
              style={styles.profileImage}
            />
            <Text style={styles.title}>
              {isLoggedIn ? 'User Name' : 'GUEST'}
            </Text>
          </View>

          <View style={styles.cardContainer}>
            <OptionCard
              icon="shield"
              title="Privacy Policy"
              onPress={() => navigation.navigate('Privacy_Policy')}
            />
            <OptionCard
              icon="support"
              title="Help & Support"
              onPress={() => {}}
            />
            <OptionCard icon="info-circle" title="FAQs" onPress={() => {}} />

            <View style={styles.divider} />
            <OptionCard icon="users" title="About Us" onPress={() => {}} />
            <OptionCard
              icon="file-text-o"
              title="Terms & Conditions"
              onPress={() => {}}
            />
            <View style={styles.divider} />

            {isLoggedIn ? (
              <OptionCard
                icon="sign-out"
                title="Log Out"
                onPress={handleLogout}
              />
            ) : (
              <OptionCard
                icon="sign-in"
                title="Log In"
                onPress={() => navigation.navigate('ProviderLogin')}
              />
            )}
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  headingContainer: {
    alignItems: 'center',
    paddingVertical: height * 0.025,
    backgroundColor: '#007299',
    marginBottom: 16,
  },
  header: {
    fontSize: width * 0.06,
    fontWeight: '600',
    color: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: height * 0.03,
  },
  profileImage: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: width * 0.125,
  },
  title: {
    fontSize: width * 0.05,
    fontWeight: '700',
    marginTop: 10,
    color: '#000',
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: '#c1c1c1',
    marginVertical: 10,
    width: '92%',
    alignSelf: 'center',
  },
});

export default Account;
