import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const devs = [
  { id: '1', nombre: 'Reta Ravelo Edgar Jesus', imagen: require('../../assets/Logo1.png'), rol: 'Información de la cabaña', descripcion: 'Responsable del diseño visual y experiencia del usuario.' },
  { id: '2', nombre: 'Garcia Santillan Edgar Jair', imagen: require('../../assets/Logo1.png'), rol: 'Información de la cabaña', descripcion: 'Responsable del diseño visual y experiencia del usuario.' },
  { id: '3', nombre: 'Navarro Huerta Carlos Jair', imagen: require('../../assets/Logo1.png'), rol: 'Información de la cabaña', descripcion: 'Responsable del diseño visual y experiencia del usuario.' },
  { id: '4', nombre: 'Sanches Irigoyen Pablo Manuel', imagen: require('../../assets/Logo1.png'), rol: 'Información de la cabaña', descripcion: 'Responsable del diseño visual y experiencia del usuario.' },
  { id: '5', nombre: 'Rosales Garcia Matias Manuel', imagen: require('../../assets/Logo1.png'), rol: 'Información de la cabaña',descripcion: 'Responsable del diseño visual y experiencia del usuario.' }
];

const Inicio = () => {
  const navigation = useNavigation();

  const irALogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Equipo de Desarrollo</Text>

      {devs.map((dev) => (
        <View key={dev.id} style={styles.card}>
            
        <Image source={dev.imagen} style={styles.imagen} />
          <View style={styles.info}>
            <Text style={styles.nombre}>{dev.nombre}</Text>
            <Text style={styles.rol}>{dev.rol}</Text>
            <Text style={styles.descripcion}>{dev.descripcion}</Text>

          </View>
          
        </View>
      ))}

      <TouchableOpacity style={styles.boton} onPress={irALogin}>
        <Text style={styles.textoBoton}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    padding: 20,
  },
  descripcion: {
  color: '#555555',
  fontSize: 13,
  marginTop: 4,
  },

  titulo: {
    color: '#F2B811',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    padding: 22,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    alignItems: 'center',
  },
  imagen: {
    width: 80,
    height: 80,
    borderRadius: 40, // ovalada
    borderWidth: 2,
    borderColor: '#F2B811',
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  nombre: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rol: {
    color: '#BBBBBB',
    fontSize: 14,
    marginTop: 4,
  },
  boton: {
    backgroundColor: '#F2B811',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 20,
  },
  textoBoton: {
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Inicio;
