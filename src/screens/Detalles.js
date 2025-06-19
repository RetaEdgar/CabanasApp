import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Detalles = ({ route }) => {
  const { cabana } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: cabana.imagen }} style={styles.image} />
        <Text style={styles.title}>{cabana.nombre}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Reservar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Detalles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6C4A1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#4A6242',
    borderRadius: 20,
    overflow: 'hidden',
    width: 250,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  title: {
    color: 'black',
    textAlign: 'center',
    padding: 15,
    fontSize: 16,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#8A5D3B',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 20,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
