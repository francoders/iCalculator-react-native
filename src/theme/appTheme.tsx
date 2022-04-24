import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#101010',
    paddingHorizontal: 20,
    justifyContent: 'flex-end'
  },

  resultadoPequeño: {
    fontSize: 30,
    color: 'rgba(255,255,255, 0.5)',
    textAlign: 'right',
  },

  resultado: {
    color: 'white',
    fontSize: 50,
    textAlign: 'right',
    marginBottom: 15,
  },

  boton: {
    width: 75,
    height: 75,
    backgroundColor: '#2D2D2D',
    borderRadius: 40,
    justifyContent: 'center',
    margin: 5,
    shadowColor: 'white'
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
    bottom: 10
  },
});