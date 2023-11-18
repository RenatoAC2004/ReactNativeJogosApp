import React from 'react'; 

import { createStackNavigator } from '@react-navigation/stack'; 

import { NavigationContainer } from '@react-navigation/native'; 

 

import HomeScreen from './Screens/HomeScreen'; 

import AddJogosScreen from './Screens/AddJogosScreen'; 

import EditJogosScreen from './Screens/EditJogosScreen'; 

import ViewJogosScreen from './Screens/ViewJogosScreen'; 

 

const Stack = createStackNavigator(); 

 

function AppNavigator() { 

 return ( 

  <NavigationContainer> 

   <Stack.Navigator initialRouteName="Home"> 

    <Stack.Screen name="Home" component={HomeScreen} /> 

    <Stack.Screen name="AddJogos" component={AddJogosScreen} /> 

    <Stack.Screen name="EditJogos" component={EditJogosScreen} /> 

    <Stack.Screen name="ViewJogos" component={ViewJogosScreen} /> 

   </Stack.Navigator> 

  </NavigationContainer> 

 ); 

} 

 

export default AppNavigator;