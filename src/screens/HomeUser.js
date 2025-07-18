
import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const cabanas = [
  { id: '1', nombre: 'reta', imagen: 'https://cabañasenrenta.com/wp-content/uploads/2023/03/cabanas-en-durango-amanecer-en-mexiquillo-1.jpg', descripcion: 'Información de la cabaña', },
  
];

const HomeUser = ({ navigation }) => {
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

export default HomeUser;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CAB99D',
    padding: 16,
  },
  grid: {
    paddingBottom: 30,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  card: {
    backgroundColor: '#4a6843',
    borderRadius: 20,
    overflow: 'hidden',
    width: '48%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 5,
    transform: [{ scale: 1 }],
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    color: '#fff',
    fontSize: 15,
    paddingVertical: 8,
    paddingHorizontal: 12,
    textAlign: 'center',
  },
});

