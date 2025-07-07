import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmacion, setConfirmacion] = useState('');

  const handleRegister = () => {
    if (!correo || !contrasena || !confirmacion) {
      alert('Completa todos los campos.');
      return;
    }

    if (contrasena !== confirmacion) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    navigation.replace('Main'); 
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Logo1_transparente.png')} style={styles.logo} />
      <View style={styles.card}>
        <Text style={styles.label}>CORREO:</Text>
        <TextInput
          style={styles.input}
          value={correo}
          onChangeText={setCorreo}
          placeholder="usuario@ejemplo.com"
          placeholderTextColor="#555"
        />

        <Text style={styles.label}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          value={contrasena}
          onChangeText={setContrasena}
          placeholder="********"
          placeholderTextColor="#555"
          secureTextEntry
        />

        <Text style={styles.label}>Confirmar contraseña:</Text>
        <TextInput
          style={styles.input}
          value={confirmacion}
          onChangeText={setConfirmacion}
          placeholder="********"
          placeholderTextColor="#555"
          secureTextEntry
        />

        <TouchableOpacity onPress={handleRegister} style={styles.button}>
          <Text style={styles.buttonText}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CAB99D',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      backgroundColor: '#f1f1f1',
      width: '85%',
      padding: 25,
      borderRadius: 20,
      borderWidth: 4,
      borderColor: '#4a6843',
    },
    logo: {
      width: 160,
      height: 160,
      resizeMode: 'contain',
      marginBottom: 20,
    },
    label: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 6,
      color: '#000',
    },
    input: {
      borderWidth: 2,
      borderColor: '#000',
      borderRadius: 20,
      paddingHorizontal: 15,
      paddingVertical: 8,
      marginBottom: 16,
      backgroundColor: '#fff',
      color: '#000',
    },
    button: {
      backgroundColor: '#4a6843',
      padding: 12,
      borderRadius: 20,
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
  