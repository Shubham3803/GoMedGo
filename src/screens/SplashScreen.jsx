// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import splash from '../assets/Images/splash.png'; // Adjust the path as necessary

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('MainTabs',{
        screen: 'MyProfile', // Navigate to MyProfile tab after splash
      }); // Navigate after 5 seconds
    }, 2000);

    return () => clearTimeout(timeout); // Cleanup on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={splash}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // or any background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: "100%",
    height: '100%'
  },
});
