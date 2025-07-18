import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Login from '../screens/Login';
import RegisterScreen from '../screens/Register';
import DrawerUserNavigator from './DrawerUserNavigator';
import DrawerAdminNavigator from './DrawerAdminNavigator';
import Inicio from '../screens/Inicio';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerShown: false,
        // Aquí aplicamos una transición de deslizamiento suave horizontal para todas las pantallas:
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        // Para un efecto de fade puedes usar:
        // cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
      }}
    >
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="MainUser" component={DrawerUserNavigator} />
      <Stack.Screen name="MainAdmin" component={DrawerAdminNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
