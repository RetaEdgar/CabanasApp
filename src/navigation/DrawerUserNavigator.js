import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Detalles from '../screens/Detalles';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeUser from '../screens/HomeUser';
import AireAcondicionado from '../screens/MonitoreoUser';
import Perfil from '../screens/Perfil';
import Ubicacion from '../screens/Ubicacion';


const Drawer = createDrawerNavigator();

const DrawerUserNavigator = () => {
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
        component={HomeUser}
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
      <Drawer.Screen
        name="MiCabaña"
        component={AireAcondicionado}
        options={{
          title: 'Temperatura   ',
          drawerIcon: ({ color, size }) => (
            <Icon name="home-outline" size={size} color={color} />
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

    </Drawer.Navigator>
  );
};

export default DrawerUserNavigator;
