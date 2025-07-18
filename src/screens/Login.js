import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert, Image, KeyboardAvoidingView, Platform } from 'react-native';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';

const Login = ({ navigation }) => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    setError('');
    if (!correo || !contrasena) {
      setError('Por favor llena todos los campos.');
      return;
    }

    if (correo === 'Reta' && contrasena === '123') {
      navigation.replace('MainUser');
    } else if (correo === 'Admin' && contrasena === 'admin123') {
      navigation.replace('MainAdmin');
    } else {
      setError('Correo o contraseña incorrectos.');
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <Animated.View entering={FadeIn.duration(600)} exiting={FadeOut.duration(300)} layout={Layout.springify()}>
        <Image source={require('../../assets/Logo1_transparente.png')} style={styles.logo} />
      </Animated.View>

      <Animated.View entering={FadeIn.duration(800).delay(300)} style={styles.card}>
        <Text style={styles.label}>CORREO:</Text>
        <TextInput
          style={styles.input}
          value={correo}
          onChangeText={setCorreo}
          placeholder="usuario@ejemplo.com"
          placeholderTextColor="#555"
          keyboardType="email-address"
          autoCapitalize="none"
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

        {error ? (
          <Animated.Text
            entering={FadeIn}
            exiting={FadeOut}
            style={styles.errorText}
          >
            {error}
          </Animated.Text>
        ) : null}

        <Pressable
          onPress={handleLogin}
          style={({ pressed }) => [
            styles.button,
            pressed && { opacity: 0.7 }
          ]}
        >
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </Pressable>

        <Pressable
          onPress={handleRegister}
          style={({ pressed }) => [
            styles.secondaryButton,
            pressed && { opacity: 0.7 }
          ]}
        >
          <Text style={styles.secondaryButtonText}>Crear usuario</Text>
        </Pressable>
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CAB99D',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f1f1f1',
    width: '100%',
    padding: 25,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#4a6843',
    shadowColor: '#4a6843',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 7,
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
    padding: 14,
    borderRadius: 20,
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryButton: {
    marginTop: 12,
    padding: 12,
    borderRadius: 20,
    backgroundColor: '#8fa987',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 3,
  },
  secondaryButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});
