import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import CalculadoraScreen from './src/screens/CalculadoraScreen';
import {styles} from './src/theme/appTheme';

export default function App() {
  return (
    <View>
      <StatusBar backgroundColor="#202020" barStyle="light-content" />
      <CalculadoraScreen></CalculadoraScreen>
    </View>
  );
}
