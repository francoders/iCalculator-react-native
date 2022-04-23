import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#101010',
    paddingHorizontal: 10,
  },

  resultadoPequeño: {
    fontSize: 20,
    color: 'rgba(255,255,255, 0.5)',
    textAlign: 'right',
  },

  resultado: {
    color: 'white',
    fontSize: 40,
    textAlign: 'right',
  },

  boton: {
    width: 75,
    height: 75,
    backgroundColor: '#2D2D2D',
    borderRadius: 30,
    justifyContent: 'center',
    margin: 5
  },

  botonText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

//Ahora craremos componente de botones
