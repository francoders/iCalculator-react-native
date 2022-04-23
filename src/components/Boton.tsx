import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';

//Desestructuracion.
//con signo '?' hace que sea opcional, no obligatorio
interface Props {
  texto: string;
  color?: string;
}

export function Boton({texto, color = '#2D2D2D'}: Props) {
  return (
    <View style={{...styles.boton, backgroundColor: color}}>
      <Text style={{
          ...styles.botonText,
          color: color === '#9B9B9B' ? 'black' : 'white',
        }}>{texto}</Text>
    </View>
  );
}
