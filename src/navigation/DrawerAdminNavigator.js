import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Detalles from '../screens/Detalles';
import Icon from 'react-native-vector-icons/Ionicons';
import Monitoreo from '../screens/MonitoreoAdmin';
import Ubicacion from '../screens/Ubicacion';
import Perfil from '../screens/Perfil';

const Drawer = createDrawerNavigator();

const DrawerAdminNavigator = () => {
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
          title: 'Admin Home',
          drawerIcon: ({ color, size }) => (
            <Icon name="shield-checkmark-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Detalles"
        component={Detalles}
        options={{
          title: 'Detalles',
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="Monitoreo"
        component={Monitoreo}
        options={{
          title: 'Monitoreo',
          drawerIcon: ({ color, size }) => (
            <Icon name="shield-checkmark-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Ubicacion"
        component={Ubicacion}
        options={{
          title: 'Ubicacion',
          drawerIcon: ({ color, size }) => (
            <Icon name="person-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={Perfil}
        options={{
          title: 'Mi Perfil',
          drawerIcon: ({ color, size }) => (
            <Icon name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerAdminNavigator;
