import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import MyProfile from '../screens/MyProfile';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

//  Dummy HomeScreen

// const HomeScreen = () => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>HomeScreen</Text>
//   </View>
// )

const BottomTabNavigation = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
    initialRouteName="MyProfile"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#007299',
        tabBarInactiveTintColor: '#8e8e93',
        tabBarStyle: {
          height: 60,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'MyProfile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          // if (route.name === 'Account') {
          //   iconName = focused ? 'person' : 'person-outline';
          // } else if (route.name === 'Home') {
          //   iconName = focused ? 'home' : 'home-outline';
          // }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name='MyProfile' component={MyProfile}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigation;