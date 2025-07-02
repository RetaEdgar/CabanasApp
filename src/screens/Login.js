import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

const Login = ({ navigation }) => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleLogin = () => {
    if (correo === 'Reta' && contrasena === '123') {
      navigation.replace('MainUser');
    } else if (correo === 'Admin' && contrasena === 'admin123') {
      navigation.replace('MainAdmin');
    } else {
      Alert.alert('Error', 'Correo o contraseña incorrectos.');
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
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

        <Text style={styles.label}>CONTRASEÑA:</Text>
        <TextInput
          style={styles.input}
          value={contrasena}
          onChangeText={setContrasena}
          placeholder="********"
          placeholderTextColor="#555"
          secureTextEntry
        />

        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRegister} style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Crear usuario</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CAB99D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f1f1f1',
    width: '85%',
    padding: 25,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#4a6843',
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
  secondaryButton: {
    marginTop: 12,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#8fa987',
  },
  secondaryButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});
