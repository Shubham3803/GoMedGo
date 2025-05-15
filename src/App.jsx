import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProviderLogin from './screens/ProviderLogin';
import Account from './screens/Account';
import OtpVerification from './screens/OtpVerification';
import ProfileImage from './screens/ProfileImage';
import PersonalInfo from './screens/PersonalInfo';
import Map from './screens/Map';
import PersonalInformation from './screens/PersonalInformation';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Account"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Account"
          component={Account}
        />
        <Stack.Screen
          name="ProviderLogin"
          component={ProviderLogin}
        />
        <Stack.Screen
          name="OtpVerification"
          component={OtpVerification}
        />
        <Stack.Screen
        name='ProfileImage'
        component={ProfileImage}
        />
        <Stack.Screen
        name='PersonalInfo'
        component={PersonalInfo}
        />
        <Stack.Screen
        name='Map'
        component={Map}
        />
        <Stack.Screen
        name='PersonalInformation'
        component={PersonalInformation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
