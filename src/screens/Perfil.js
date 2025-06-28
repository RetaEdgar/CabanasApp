// screens/Perfil.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Perfil = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Logo2_transparente.png')} // Usa tu propia imagen
        style={styles.avatar}
      />
      <Text style={styles.nombre}>Juan Pérez</Text>
      <Text style={styles.email}>juanperez@email.com</Text>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Tipo de usuario:</Text>
        <Text style={styles.valor}>Usuario regular</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Cabaña asignada:</Text>
        <Text style={styles.valor}>Cabaña 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    paddingTop: 50,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  email: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
  },
  infoBox: {
    width: '80%',
    backgroundColor: '#A5D6A7',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1B5E20',
  },
  valor: {
    fontSize: 15,
    color: '#2E7D32',
  },
});

export default Perfil;
