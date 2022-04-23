import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';
import {Boton} from '../components/Boton';

export default function CalculadoraScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.resultadoPequeño}>1010010</Text>
      <Text style={styles.resultado}>911292</Text>

      {/**Fila de Btns */}
      <View style={styles.fila}>
        <Boton texto="C" color="#9B9B9B" />
        <Boton texto="+/-" color="#9B9B9B" />
        <Boton texto="del" color="#9B9B9B" />
        <Boton texto="/" color="#FF9427" />
      </View>

      {/**Fila de Btns */}
      <View style={styles.fila}>
        <Boton texto="7" />
        <Boton texto="8" />
        <Boton texto="9" />
        <Boton texto="X" color="#FF9427" />
      </View>

      {/**Fila de Btns */}
      <View style={styles.fila}>
        <Boton texto="4" />
        <Boton texto="5" />
        <Boton texto="6" />
        <Boton texto="-" color="#FF9427" />
      </View>

      {/**Fila de Btns */}
      <View style={styles.fila}>
        <Boton texto="1" />
        <Boton texto="2" />
        <Boton texto="3" />
        <Boton texto="+" color="#FF9427" />
      </View>

      {/**Fila de Btns */}
      <View style={styles.fila}>
        <Boton texto="0" />
        <Boton texto="." />
        <Boton texto="=" color="#FF9427" />
      </View>
    </View>
  );
}
