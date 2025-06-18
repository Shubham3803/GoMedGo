import React from 'react';
// import type {PropsWithChildren} from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ImageBackground
} from 'react-native';
import OptionCard from '../components/OptionCard';
// import { Image } from 'react-native-reanimated/lib/typescript/Animated';


function Account() {
  const navigation = useNavigation()

  return (

   
    <ScrollView style={styles.container}>

      <View style={styles.headingContainer}>
      <Text style={styles.header}>My Profile</Text>
      </View>

      <View style={styles.ImageContainer}>

        {/* <View style={styles.iconBox}
        
        ></View> */}

        <Image
          source={require('../assets/Images/display.png')}
          style={styles.profileImage}
        />

        <Text style={styles.Title}>GUEST</Text>
      </View>

      <View style={styles.card}>
       

        <OptionCard
          icon='shield'
          title='Privacy Policy'
          onPress={() => navigation.navigate('Privacy_Policy')}
        />

        <OptionCard
          icon='support'
          title='Help & Support'
          onPress={() => { }}
        />
        <OptionCard
          icon='info-circle'
          title='FAQs'
          onPress={() => { }}
        />

        <View style={styles.divider}></View>
        <OptionCard
          icon='users'
          title='About Us'
          onPress={() => { }}
        />
        <OptionCard
          icon='file-text-o'
          title='Terms & Conditions'
          onPress={() => { }}
        />
         <View style={styles.divider}></View>
        <OptionCard
          icon='sign-in'
          title='Log In'
          onPress={() => navigation.navigate('ProviderLogin')}
        />


      </View>

      
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  iconBox: {
    width: 40,
    height: 40,
    // backgroundColor: '#e5e5e5',
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    // backgroundColor: '#E5E5D6',
    // padding: 20,
  },
  card: {
    // backgroundColor: '#fff',
    padding: 2,
    borderRadius: 12,
    // justifyContent:'center',
    alignItems:'center'
  },

  divider:{
    borderWidth:1,
    borderColor:'#c1c1c1',
    width:'92%',
  },
  
  Title:{
    fontSize:20,
    fontWeight: 'semibold',
  },
  ImageContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  headingContainer:{
    alignItems:'center',
    paddingTop: 20,
    backgroundColor: '#007299',
  },
  header: {
    fontSize: 25,
    fontWeight: 'semibold',
    color: '#000000',
    paddingBottom: 20,
  },
  backgroundImage:{
    width:'100%',
    height:'100%'
  }
});

export default Account;
