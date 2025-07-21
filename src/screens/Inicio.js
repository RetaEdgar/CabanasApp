import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';

const devs = [
  { id: '1', nombre: 'Reta Ravelo Edgar Jesus', imagen: require('../../assets/reta_formal.jpg'), rol: ' ', descripcion: 'Responsable del FrontEnd de la aplicacion movil y avances de los integrantes' },
  { id: '2', nombre: 'Garcia Santillan Edgar Jair', imagen: require('../../assets/Logo1.png'), rol: 'FrontEnd', descripcion: 'Responsable del diseño visual de la pagina web y experiencia del usuario.' },
  // { id: '3', nombre: 'Navarro Huerta Carlos Jair', imagen: require('../../assets/Logo1.png'), rol: 'BackEnd', descripcion: 'Responsable de la funcionalidad de las aplicaciones.' },
  { id: '4', nombre: 'Sanches Irigoyen Pablo Manuel', imagen: require('../../assets/Logo1.png'), rol: 'FullStack', descripcion: 'Responsable del diseño de la pagina web y conexion a BackEnd.' },
  { id: '5', nombre: 'Rosales Garcia Matias Manuel', imagen: require('../../assets/matias.jpeg'), rol: 'IoT y BackEnd',descripcion: 'Responsable de la conexion entre la base de datos y el prototipo de IoT.' }
];

const Inicio = () => {
  const navigation = useNavigation();

  const irALogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView style={styles.container}>
      <Animated.Text entering={FadeInDown.duration(800)} style={styles.titulo}>Equipo de Desarrollo</Animated.Text>

      {devs.map((dev, index) => (
        <Animated.View key={dev.id} entering={FadeInUp.delay(index * 200)} style={styles.card}>
          <Image source={dev.imagen} style={styles.imagen} />
          <View style={styles.info}>
            <Text style={styles.nombre}>{dev.nombre}</Text>
            <Text style={styles.rol}>{dev.rol}</Text>
            <Text style={styles.descripcion}>{dev.descripcion}</Text>
          </View>
        </Animated.View>
      ))}

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.boton}
        onPress={irALogin}
      >
        <Animated.Text entering={FadeInUp.delay(devs.length * 200)} style={styles.textoBoton}>Iniciar Sesión</Animated.Text>
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
    shadowColor: '#F2B811',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  imagen: {
    width: 80,
    height: 80,
    borderRadius: 40,
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
