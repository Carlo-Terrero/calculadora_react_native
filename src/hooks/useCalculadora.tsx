import { useRef, useState } from "react";

enum Operadores {
    sumar,
    restar,
    multiplicar,
    dividir
}

export const useCalculadora = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('10');

    const ultimaOperacion = useRef<Operadores>();

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }

    const btnDelete = () => {
        let negativo = '';
        let numeroTemp = numero;

        if(numero.includes('-')){
            negativo = '-';
            numeroTemp = numero.substring(1);
        }

        if(numeroTemp.length === 1 && numero !== '0'){
            setNumero('0')
        }else if(numeroTemp.length > 1){
            setNumero( negativo + numeroTemp.slice(0, numeroTemp.length -1))
        }
    }

    const armarNumero = (numeroTexto: string) => {
        // No aceptar doble punto
        if(numero.includes('.') && numeroTexto === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {

            //punto decimal
            if(numeroTexto === '.'){
                setNumero(numero + numeroTexto);
                
                // Evaluar si es otro cero y hay un punto
            }else if(numeroTexto === '0' && numero.includes('.')){
                setNumero(numero + numeroTexto);

                // Evaluar si es diferente de cero y no tiene un punto
            }else if( numeroTexto !== '0' && !numero.includes('.')){
                setNumero(numeroTexto);

                // Evitar 0000.0
            }else if(numeroTexto === '0' && !numero.includes('.')){
                setNumero(numero);
            }else{
                setNumero(numero + numeroTexto);
            }

        }else{
            setNumero(numero + numeroTexto);
        }
    }

    const positivoNegativo = () => {
        if (numero.includes('-')){
            setNumero(numero.replace('-', ''));
        } else {
            setNumero( '-' + numero);
        }
    }

    const cambiarNumeroPorAnterior = () => {
        if(numero.endsWith('.')){
            setNumeroAnterior( numero.slice(0,-1));
        } else {
            setNumeroAnterior( numero );
        }
        setNumero('0');
    }

    const btnDividir = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }

    const btnMultiplicar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }

    const btnRestar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    }

    const btnSumar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }

    const calcular = () => {
        
        const num1 = Number(numeroAnterior);
        const num2 = Number(numero);

        if(numeroAnterior === '0') return;

        switch ( ultimaOperacion.current){
            case Operadores.sumar:
                setNumero( `${num1 + num2}`)
                break
            case Operadores.restar:
                setNumero( `${num1 - num2}`)
                break
            case Operadores.multiplicar:
                setNumero( `${num1 * num2}`)
                break
            case Operadores.dividir:
                setNumero( `${num1 / num2}`)
                break
        }

        setNumeroAnterior('0');
    }

    return {
        numeroAnterior,
        numero,
        ultimaOperacion,
        limpiar,
        btnDelete,
        armarNumero,
        positivoNegativo,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
    }
}
