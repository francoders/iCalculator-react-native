import { View, Text } from 'react-native';
import React, { useRef, useState } from 'react';
import { styles } from '../theme/appTheme';
import { Boton } from '../components/Boton';
import useCalculadora from '../hooks/useCalculadora';

export default function CalculadoraScreen() {
  const {
    numeroAnterior,
    numero,
    btnMultiplicar,
    btnRestar,
    limpiar,
    numNegativo,
    limpiarUltimo,
    btnDividir,
    armarNumero,
    btnSumar,
    calcular,
  } = useCalculadora();

  return (
    <View style={styles.container}>
      <Text style={styles.resultadoPequeño}>{numeroAnterior}</Text>
      <Text
        style={styles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit={true}>
        {numero}
      </Text>

      {/**Fila de Btns */}
      <View style={styles.fila}>
        <Boton texto="C" color="#9B9B9B" onClick={limpiar} />
        <Boton texto="+/-" color="#9B9B9B" onClick={numNegativo} />
        <Boton texto="❮" color="#9B9B9B" onClick={limpiarUltimo} />
        <Boton texto="/" color="#FF9427" onClick={btnDividir} />
      </View>

      {/**Fila de Btns */}
      <View style={styles.fila}>
        <Boton texto="7" onClick={armarNumero} />
        <Boton texto="8" onClick={armarNumero} />
        <Boton texto="9" onClick={armarNumero} />
        <Boton texto="X" color="#FF9427" onClick={btnMultiplicar} />
      </View>

      {/**Fila de Btns */}
      <View style={styles.fila}>
        <Boton texto="4" onClick={armarNumero} />
        <Boton texto="5" onClick={armarNumero} />
        <Boton texto="6" onClick={armarNumero} />
        <Boton texto="-" color="#FF9427" onClick={btnRestar} />
      </View>

      {/**Fila de Btns */}
      <View style={styles.fila}>
        <Boton texto="1" onClick={armarNumero} />
        <Boton texto="2" onClick={armarNumero} />
        <Boton texto="3" onClick={armarNumero} />
        <Boton texto="+" color="#FF9427" onClick={btnSumar} />
      </View>

      {/**Fila de Btns */}
      <View style={styles.fila}>
        <Boton texto="0" ancho onClick={armarNumero} />
        <Boton texto="." onClick={armarNumero} />
        <Boton texto="=" color="#FF9427" onClick={calcular} />
      </View>
    </View>
  );
}
