import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

const cabañas = [
  {
    id: '1',
    title: 'Cabaña 1',
    image: 'https://cabañasenrenta.com/wp-content/uploads/2023/03/cabanas-en-durango-amanecer-en-mexiquillo-1.jpg',
    temperatura: '26',
    humedad: '20',
  },
  {
    id: '2',
    title: 'Cabaña 2',
    image: 'https://cabañasenrenta.com/wp-content/uploads/2023/03/cabanas-en-durango-amanecer-en-mexiquillo-1.jpg',
    temperatura: '24',
    humedad: '30',
  },
  {
    id: '3',
    title: 'Cabaña 3',
    image: 'https://cabañasenrenta.com/wp-content/uploads/2023/03/cabanas-en-durango-amanecer-en-mexiquillo-1.jpg',
    temperatura: '25',
    humedad: '40',
  },
  {
    id: '4',
    title: 'Cabaña 4',
    image: 'https://cabañasenrenta.com/wp-content/uploads/2023/03/cabanas-en-durango-amanecer-en-mexiquillo-1.jpg',
    temperatura: '27',
    humedad: '35',
  },
  {
    id: '5',
    title: 'Cabaña 5',
    image: 'https://cabañasenrenta.com/wp-content/uploads/2023/03/cabanas-en-durango-amanecer-en-mexiquillo-1.jpg',
    temperatura: '23',
    humedad: '25',
  },
  {
    id: '6',
    title: 'Cabaña 6',
    image: 'https://cabañasenrenta.com/wp-content/uploads/2023/03/cabanas-en-durango-amanecer-en-mexiquillo-1.jpg',
    temperatura: '28',
    humedad: '45',
  },
];

const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 48) / 2; // dos columnas con márgenes

const Monitoreo = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {cabañas.map((cabana) => (
          <View key={cabana.id} style={[styles.card, { width: cardWidth }]}>
            <Image source={{ uri: cabana.image }} style={styles.image} />
            <Text style={styles.title}>{cabana.title}</Text>
            <View style={styles.dataGroup}>
              <Text style={styles.label}>🌡 Temperatura</Text>
              <Text style={styles.dataText}>{cabana.temperatura}°C</Text>
              <Text style={styles.label}>💧 Humedad</Text>
              <Text style={styles.dataText}>{cabana.humedad}%</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CAB99D',
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 12,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4E342E',
    textAlign: 'center',
    marginBottom: 8,
  },
  dataGroup: {
    alignItems: 'center',
  },
  label: {
    fontSize: 13,
    color: '#6D4C41',
    marginBottom: 2,
  },
  dataText: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
});

export default Monitoreo;
