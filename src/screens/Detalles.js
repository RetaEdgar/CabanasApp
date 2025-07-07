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
    padding: 20,
  },
  card: {
    backgroundColor: '#4A6242',
    borderRadius: 20,
    padding: 20,
    width: 300,
    alignItems: 'center',
  },
  title: {
    color: 'black',
    textAlign: 'center',
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 15,
    backgroundColor: '#8A5D3B',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tabla: {
    marginTop: 20,
    width: '100%',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#CAB99D',
    paddingBottom: 6,
  },
  etiqueta: {
    color: '#CAB99D',
    fontWeight: 'bold',
    fontSize: 14,
  },
  valor: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});

export default Detalles;
