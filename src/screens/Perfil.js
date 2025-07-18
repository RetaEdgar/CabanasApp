import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

const Perfil = () => {
  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/Logo2_transparente.png')}
        style={styles.avatar}
        entering={FadeInDown.duration(800)}
      />
      <Animated.Text style={styles.nombre} entering={FadeInDown.delay(200).duration(800)}>
        Edgar Reta
      </Animated.Text>
      <Animated.Text style={styles.email} entering={FadeInDown.delay(400).duration(800)}>
        edgarreta@gmail.com
      </Animated.Text>

      <Animated.View style={styles.infoBox} entering={FadeInDown.delay(600).duration(800)}>
        <Text style={styles.label}>Cabaña asignada:</Text>
        <Text style={styles.valor}>Cabaña 3</Text>
      </Animated.View>
    </View>
  );
};

export default Perfil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 25,
    borderWidth: 3,
    borderColor: '#2E7D32',
  },
  nombre: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
  },
  infoBox: {
    width: '85%',
    backgroundColor: '#A5D6A7',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#1B5E20',
    marginBottom: 6,
  },
  valor: {
    fontSize: 17,
    color: '#2E7D32',
  },
});
