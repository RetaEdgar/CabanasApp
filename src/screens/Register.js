import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

const RegisterScreen = ({ navigation }) => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmacion, setConfirmacion] = useState('');

  const handleRegister = () => {
    if (!correo || !contrasena || !confirmacion) {
      Alert.alert('Error', 'Completa todos los campos.');
      return;
    }

    if (contrasena !== confirmacion) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    navigation.replace('Main');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#CAB99D' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        <Animated.View entering={FadeInUp.duration(800)} style={styles.container}>
          <Image source={require('../../assets/Logo1_transparente.png')} style={styles.logo} />
          <View style={styles.card}>
            <Text style={styles.label}>CORREO:</Text>
            <TextInput
              style={styles.input}
              value={correo}
              onChangeText={setCorreo}
              placeholder="usuario@ejemplo.com"
              placeholderTextColor="#555"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
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

            <TouchableOpacity onPress={handleRegister} style={styles.button} activeOpacity={0.8}>
              <Text style={styles.buttonText}>Crear cuenta</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  container: {
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 20,
  },
  card: {
    backgroundColor: '#f1f1f1',
    width: '85%',
    padding: 25,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#4a6843',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    color: '#000',
  },
  input: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 15,
  },
  button: {
    backgroundColor: '#4a6843',
    paddingVertical: 14,
    borderRadius: 25,
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    elevation: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
