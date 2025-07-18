import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, { FadeInUp } from 'react-native-reanimated';

const Ubicacion = () => {
  const ubicacion = {
    latitude: 23.725620491220205,
    longitude: -105.68312196100753,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={ubicacion} showsUserLocation={true} loadingEnabled={true}>
        <Marker coordinate={ubicacion} title="Villa Coronado" />
      </MapView>

      <Animated.View entering={FadeInUp.duration(800)} style={styles.floatingBox}>
        <Text style={styles.locationName}>Villa Coronado</Text>
        <Icon name="location-sharp" size={22} color="#d32f2f" />
      </Animated.View>
    </View>
  );
};

export default Ubicacion;

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: {
    flex: 1,
  },
  floatingBox: {
    position: 'absolute',
    bottom: 25,
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.22,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
  },
  locationName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 10,
    color: '#d32f2f',
  },
});
