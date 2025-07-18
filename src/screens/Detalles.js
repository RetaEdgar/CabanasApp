import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Detalles = () => {
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  const detallesReserva = {
    nombre: 'Edgar Reta',
    llegada: '2025-07-10',
    salida: '2025-07-15',
  };

  const toggleDetalles = () => {
    setMostrarDetalles(!mostrarDetalles);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Reserva Confirmada</Text>

        <TouchableOpacity style={styles.button} onPress={toggleDetalles}>
          <Text style={styles.buttonText}>Ver detalles de la reserva</Text>
        </TouchableOpacity>

        {mostrarDetalles && (
          <View style={styles.tabla}>
            <View style={styles.fila}>
              <Text style={styles.etiqueta}>A nombre de:</Text>
              <Text style={styles.valor}>{detallesReserva.nombre}</Text>
            </View>
            <View style={styles.fila}>
              <Text style={styles.etiqueta}>Fecha de llegada:</Text>
              <Text style={styles.valor}>{detallesReserva.llegada}</Text>
            </View>
            <View style={styles.fila}>
              <Text style={styles.etiqueta}>Fecha de salida:</Text>
              <Text style={styles.valor}>{detallesReserva.salida}</Text>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#CAB99D',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: '#4A6242',
    borderRadius: 20,
    padding: 24,
    width: 320,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#8A5D3B',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tabla: {
    marginTop: 24,
    width: '100%',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CAB99D',
    paddingBottom: 6,
  },
  etiqueta: {
    color: '#CAB99D',
    fontWeight: 'bold',
    fontSize: 15,
  },
  valor: {
    color: '#FFFFFF',
    fontSize: 15,
  },
});


export default Detalles;
