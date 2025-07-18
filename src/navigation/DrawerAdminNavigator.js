import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import { createDrawerNavigator, useDrawerProgress } from '@react-navigation/drawer';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Detalles from '../screens/Detalles';
import Monitoreo from '../screens/MonitoreoAdmin';
import Ubicacion from '../screens/Ubicacion';
import Perfil from '../screens/Perfil';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => {
  const progress = useDrawerProgress();

  const animatedStyles = useAnimatedStyle(() => {
    const opacity = interpolate(progress.value, [0, 1], [0, 1], Extrapolate.CLAMP);
    const translateX = interpolate(progress.value, [0, 1], [-50, 0], Extrapolate.CLAMP);
    return {
      opacity,
      transform: [{ translateX }],
    };
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#C8E6C9', justifyContent: 'space-between' }}>
      <Animated.View style={[styles.drawerContent, animatedStyles]}>
        <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
          {/* Items */}
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.item}>
            <Icon name="shield-checkmark-outline" size={22} color="#000" />
            <Text style={styles.label}>Admin Home</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Monitoreo')} style={styles.item}>
            <Icon name="pulse-outline" size={22} color="#000" />
            <Text style={styles.label}>Monitoreo</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Ubicacion')} style={styles.item}>
            <Icon name="location-outline" size={22} color="#000" />
            <Text style={styles.label}>Ubicación</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={styles.item}>
            <Icon name="person-outline" size={22} color="#000" />
            <Text style={styles.label}>Mi Perfil</Text>
          </TouchableOpacity>
        </ScrollView>
      </Animated.View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Inicio')} style={styles.logoutButton}>
          <Icon name="log-out-outline" size={20} color="#fff" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


const DrawerAdminNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: 'front',
        drawerStyle: {
          backgroundColor: '#C8E6C9',
          width: '50%',
          paddingTop: 40,
        },
        headerStyle: { backgroundColor: '#4a6843' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 22 },
        headerTitleAlign: 'center',
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Detalles" component={Detalles} options={{ drawerItemStyle: { height: 0 } }} />
      <Drawer.Screen name="Monitoreo" component={Monitoreo} />
      <Drawer.Screen name="Ubicacion" component={Ubicacion} />
      <Drawer.Screen name="Perfil" component={Perfil} />
      <Drawer.Screen name="Inicio" component={Home} options={{ drawerItemStyle: { height: 0 } }} />
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

export default DrawerAdminNavigator;
