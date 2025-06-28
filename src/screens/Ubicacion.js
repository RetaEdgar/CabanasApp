import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';

const Ubicacion = ({ navigation }) => {
  const ubicacion = {
    latitude: 23.725620491220205,  // Reemplaza con latitud real
    longitude: -105.68312196100753, // Reemplaza con longitud real
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>UBICACION</Text>
        <Icon name="person-circle-outline" size={28} color="#fff" />
      </View> */}

      {/* Mapa */}
      <MapView style={styles.map} initialRegion={ubicacion}>
        <Marker coordinate={ubicacion} title="Villa Coronado" />
        {/* Puedes agregar más Marker si es necesario */}
      </MapView>

      {/* Caja flotante */}
      <View style={styles.floatingBox}>
        <Text style={styles.locationName}>Villa Coronado</Text>
        <Icon name="location-sharp" size={20} color="#d32f2f" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    backgroundColor: '#4a6843',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  map: {
    flex: 1,
  },
  floatingBox: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
  },
  locationName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 8,
  },
});

export default Ubicacion;
