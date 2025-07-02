
import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const cabanas = [
  { id: '1', nombre: 'reta', imagen: 'https://cabañasenrenta.com/wp-content/uploads/2023/03/cabanas-en-durango-amanecer-en-mexiquillo-1.jpg', descripcion: 'Información de la cabaña', },
  { id: '2', nombre: 'santillan', imagen: 'https://cabañasenrenta.com/wp-content/uploads/2023/03/cabanas-en-durango-amanecer-en-mexiquillo-1.jpg', descripcion: 'Información de la cabaña',},
  { id: '3', nombre: 'navarro', imagen: 'https://cabañasenrenta.com/wp-content/uploads/2023/03/cabanas-en-durango-amanecer-en-mexiquillo-1.jpg', descripcion: 'Información de la cabaña',},
  { id: '4', nombre: 'sanchez', imagen: 'https://cabañasenrenta.com/wp-content/uploads/2023/03/cabanas-en-durango-amanecer-en-mexiquillo-1.jpg', descripcion: 'Información de la cabaña',},
  { id: '5', nombre: 'rosales', imagen: 'https://cabañasenrenta.com/wp-content/uploads/2023/03/cabanas-en-durango-amanecer-en-mexiquillo-1.jpg', descripcion: 'Información de la cabaña',},
];

const Home = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCabins = cabanas.filter((cabana) =>
    cabana.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderCabana = ({ item }) => (  
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Detalles', { cabana: item })}
    >
      <Image source={{ uri: item.imagen }} style={styles.image} />
      <Text style={styles.title}>{item.nombre}</Text>
      <Text style={styles.title}>{item.descripcion}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar Cabaña..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredCabins}
        keyExtractor={(item) => item.id}
        renderItem={renderCabana}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

export default Home;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CAB99D',
    padding: 10,
  },
  grid: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
  },  
  card: {
    backgroundColor: '#4a6843',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 15,
    width: '48%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  title: {
    color: '#fff',
    fontSize: 14,
    padding: 10,
    textAlign: 'center',
  },
});
