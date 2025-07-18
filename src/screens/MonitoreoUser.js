import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, { FadeIn, FadeOut, Layout, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const AireAcondicionado = () => {
  const [aireEncendido, setAireEncendido] = useState(false);
  const [tempActual] = useState(27);
  const [tempAire, setTempAire] = useState(25);

  const scalePower = useSharedValue(1);

  const animatedStylePower = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(scalePower.value, { duration: 200 }) }],
  }));

  const toggleAire = () => {
    scalePower.value = 1.3;
    setTimeout(() => {
      scalePower.value = 1;
    }, 200);
    setAireEncendido(!aireEncendido);
  };

  const aumentarTemp = () => {
    if (tempAire >= 30) {
      Alert.alert('Límite máximo alcanzado', 'La temperatura máxima es 30°');
      return;
    }
    setTempAire(tempAire + 1);
  };

  const disminuirTemp = () => {
    if (tempAire <= 16) {
      Alert.alert('Límite mínimo alcanzado', 'La temperatura mínima es 16°');
      return;
    }
    setTempAire(tempAire - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>ACTUAL</Text>
      <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.dataBox}>
        <Text style={styles.dataText}>{tempActual}°</Text>
      </Animated.View>

      <Text style={styles.label}>AIRE ACONDICIONADO</Text>
      <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.dataBox}>
        <Text style={styles.dataText}>{tempAire}°</Text>
      </Animated.View>

      <View style={styles.controls}>
        <Animated.View style={[styles.button, animatedStylePower]}>
          <TouchableOpacity onPress={toggleAire} activeOpacity={0.7}>
            <Icon name="power" size={50} color={aireEncendido ? '#4caf50' : '#555'} />
          </TouchableOpacity>
        </Animated.View>

        <TouchableOpacity onPress={aumentarTemp} style={styles.button} activeOpacity={0.7}>
          <Icon name="arrow-up-circle-outline" size={50} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity onPress={disminuirTemp} style={styles.button} activeOpacity={0.7}>
          <Icon name="arrow-down-circle-outline" size={50} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AireAcondicionado;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CAB99D',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  dataBox: {
    backgroundColor: '#F1F1F1',
    width: 160,
    paddingVertical: 18,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  dataText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
  },
  controls: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
  button: {
    backgroundColor: '#e3e3e3',
    borderRadius: 40,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
});
