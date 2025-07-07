import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeUser from '../screens/HomeUser';
import Detalles from '../screens/Detalles';
import AireAcondicionado from '../screens/MonitoreoUser';
import Perfil from '../screens/Perfil';
import Ubicacion from '../screens/Ubicacion';
import Inicio from '../screens/Inicio';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#C8E6C9' }}>
      <ScrollView contentContainerStyle={styles.drawerContent}>
        {/* Aquí se agregan automáticamente los items del drawer */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.item}
        >
          <Icon name="home-outline" size={22} color="#000" />
          <Text style={styles.label}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('MiCabaña')}
          style={styles.item}
        >
          <Icon name="thermometer-outline" size={22} color="#000" />
          <Text style={styles.label}>Temperatura</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Perfil')}
          style={styles.item}
        >
          <Icon name="person-outline" size={22} color="#000" />
          <Text style={styles.label}>Mi Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Ubicacion')}
          style={styles.item}
        >
          <Icon name="location-outline" size={22} color="#000" />
          <Text style={styles.label}>Ubicación</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Botón Log Out al fondo */}
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Inicio')}
          style={styles.logoutButton}
        >
          <Icon name="log-out-outline" size={20} color="#fff" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const DrawerUserNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: 'front',
        drawerStyle: {
          backgroundColor: '#C8E6C9',
          width: '50%', // drawer a la mitad de pantalla
          paddingTop: 40,
        },
        headerStyle: { backgroundColor: '#4a6843' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 22 },
        headerTitleAlign: 'center',
      }}
    >
      <Drawer.Screen name="Home" component={HomeUser} />
      <Drawer.Screen name="Detalles" component={Detalles} options={{ drawerItemStyle: { height: 0 } }} />
      <Drawer.Screen name="MiCabaña" component={AireAcondicionado} />
      <Drawer.Screen name="Perfil" component={Perfil} />
      <Drawer.Screen name="Ubicacion" component={Ubicacion} />
      <Drawer.Screen name="Inicio" component={HomeUser} options={{ drawerItemStyle: { height: 0 } }} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    marginLeft: 15,
    color: '#000',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#A5D6A7',
    padding: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4a6843',
    padding: 10,
    borderRadius: 8,
  },
  logoutText: {
    color: '#fff',
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default DrawerUserNavigator;
