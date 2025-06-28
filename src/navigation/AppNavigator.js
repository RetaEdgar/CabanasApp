import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import RegisterScreen from '../screens/Register';
import DrawerUserNavigator from './DrawerUserNavigator';
import DrawerAdminNavigator from './DrawerAdminNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="MainUser" 
        component={DrawerUserNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="MainAdmin" 
        component={DrawerAdminNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
