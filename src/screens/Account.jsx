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
} from 'react-native';

import OptionCard from '../components/OptionCard';

function Account() {
  const navigation = useNavigation()

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Account</Text>

      <View style={styles.card}>

        <OptionCard
          icon='user'
          title='Patient Login/Sign Up'
          subtitle='For seamless care service'
          showAlert
          onPress={() => { }}
        />

        <OptionCard
          icon='user-md'
          title='Provider Login/Sign Up'
          subtitle='Are you a nurse/caretaker/physio?'
          onPress={() => navigation.navigate('ProviderLogin')}

        // onPress={()=>{}}
        />

        <OptionCard
          icon='phone'
          title='Call Support'
          subtitle='+91 9902580128'
          onPress={() => { }}
        />

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5D6',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 2,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    gap: 12,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    paddingBottom: 20,
  }
});

export default Account;
