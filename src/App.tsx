import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProviderLogin from './screens/ProviderLogin.tsx';
import Account from './Account.tsx'

const navigation = useNavigation()
const Stack = createStackNavigator();


function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Account'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name='Acoount'
          component={Account}
        />
        {/* <Stack.Screen
          name='ProviderLogin'
          component={ProviderLogin}
          screenOptions={{ headerShown: false }}
        /> */}

      </Stack.Navigator>
    </NavigationContainer> >
  );
};

export default App;
