import { useRef, useState } from 'react';

enum Operadores {
    sumar,
    restar,
    multiplicar,
    dividir,
}

export default function useCalculadora() {

    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('0');

    const ultimaOperacion = useRef<Operadores>();

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    };

    const limpiarUltimo = () => {
        let negativo = '';
        let numeroTemporal = numero;

        if (numero.includes('-')) {
            negativo = '-';
            numeroTemporal = numero.substring(1);
        }

        if (numeroTemporal.length > 1) {
            setNumero(negativo + numeroTemporal.slice(0, -1));
        } else {
            setNumero('0');
        }
    };

    const armarNumero = (numeroTexto: string) => {
        // No aceptar doble punto
        if (numero.includes('.') && numeroTexto === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {
            //Primer punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto);

                //evaluar si es difetente de 0 y no tiene punto.
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto);

                //evitar 000.0
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero);
            } else {
                setNumero(numero + numeroTexto);
            }
        } else {
            setNumero(numero + numeroTexto);
        }
    };

    const numNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ' '));
        } else {
            setNumero('-' + numero);
        }
    };

    const cambiarNumAnterior = () => {
        //No pasa . si termina en .
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1));
        } else {
            setNumeroAnterior(numero);
        }

        setNumeroAnterior(numero);
        setNumero('0');
    };

    const btnDividir = () => {
        cambiarNumAnterior();
        ultimaOperacion.current = Operadores.dividir;
    };

    const btnMultiplicar = () => {
        cambiarNumAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    };

    const btnRestar = () => {
        cambiarNumAnterior();
        ultimaOperacion.current = Operadores.restar;
    };

    const btnSumar = () => {
        cambiarNumAnterior();
        ultimaOperacion.current = Operadores.sumar;
    };

    const calcular = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`);
                break;
            case Operadores.restar:
                setNumero(`${num2 - num1}`);
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`);
                break;
            case Operadores.dividir:
                setNumero(`${num2 / num1}`);
                break;
        }
        setNumeroAnterior('0');
    };

    return {
        numeroAnterior,
        numero,
        limpiar,
        numNegativo,
        limpiarUltimo,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
    };
}
