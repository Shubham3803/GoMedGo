import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import ProviderLogin from './screens/ProviderLogin';
import My_Profile from './screens/MyProfile'; // Importing My_Profile
import ProfileImage from './screens/ProfileImage';
import PersonalInfo from './screens/PersonalInfo';
import Map from './screens/Map';
import PersonalInformation from './screens/PersonalInformation';
import PaymentInformation from './screens/PaymentInformation';
import BottomTabNavigation from './components/BottomTabNavigation';
import ToggleButton from './components/ToggleButton';
import UpiScreen from './screens/UpiScreen';
import BankScreen from './screens/BankScreen';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen'; // Importing HomeScreen
import Privacy_Policy from './components/Privacy_Policy';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Privacy_Policy" component={Privacy_Policy} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="ToggleButton" component={ToggleButton} />
          <Stack.Screen name="MainTabs" component={BottomTabNavigation} />
          <Stack.Screen name="ProviderLogin" component={ProviderLogin} />

          <Stack.Screen name="ProfileImage" component={ProfileImage} />
          <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen
            name="PersonalInformation"
            component={PersonalInformation}
          />
          <Stack.Screen
            name="PaymentInformation"
            component={PaymentInformation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
