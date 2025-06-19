import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Detalles from '../screens/Detalles';

import Icon from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: { backgroundColor: '#C8E6C9' },
        drawerLabelStyle: { fontSize: 16 },
        headerStyle: { backgroundColor: '#4a6843' },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 22,
        },
        headerTitleAlign: 'center',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Inicio',
          drawerIcon: ({ color, size }) => (
            <Icon name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Detalles"
        component={Detalles}
        options={{
          title: 'Detalles',
          drawerItemStyle: { height: 0 }, // Oculta esta pantalla del drawer
        }}
      />
      
      
      
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
