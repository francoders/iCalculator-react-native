import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../theme/appTheme';

//Desestructuracion.
//con signo '?' hace que sea opcional, no obligatorio
interface Props {
  texto: string;
  color?: string;
  ancho?: boolean;
  onClick: (numeroTexto: string) => void;
}

export function Boton({
  texto,
  color = '#2D2D2D',
  ancho = false,
  onClick,
}: Props) {
  return (
    <TouchableOpacity onPress={() => onClick(texto)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 170 : 80,
        }}>
        <Text
          style={{
            ...styles.botonText,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
