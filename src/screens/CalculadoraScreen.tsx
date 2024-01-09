import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { Botoncalculadora } from '../components/Botoncalculadora'

import { useCalculadora } from '../hooks/useCalculadora'
export const CalculadoraScreen = () => {

    const{ 
        numeroAnterior, 
        numero,
        limpiar,
        positivoNegativo,
        armarNumero,
        calcular,
        btnDelete,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar
    } = useCalculadora();

    return (
        <View style={ styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0') && (
                    <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
                )
            }
            
            <Text 
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {numero}
            </Text>

            <View style={styles.fila}>
                <Botoncalculadora texto="C" color='#9B9B9B' accion={limpiar}/>
                <Botoncalculadora texto="+/-" color='#9B9B9B' accion={positivoNegativo}/>
                <Botoncalculadora texto="del" color='#9B9B9B' accion={btnDelete}/>
                <Botoncalculadora texto="/" color="#FF9427" accion={btnDividir}/>
            </View>

            <View style={styles.fila}>
                <Botoncalculadora texto="7" accion={armarNumero} />
                <Botoncalculadora texto="8" accion={armarNumero} />
                <Botoncalculadora texto="9" accion={armarNumero} />
                <Botoncalculadora texto="X" color="#FF9427" accion={btnMultiplicar}/>
            </View>

            <View style={styles.fila}>
                <Botoncalculadora texto="4" accion={armarNumero} />
                <Botoncalculadora texto="5" accion={armarNumero} />
                <Botoncalculadora texto="6" accion={armarNumero} />
                <Botoncalculadora texto="-" color="#FF9427" accion={btnRestar}/>
            </View>

            <View style={styles.fila}>
                <Botoncalculadora texto="1" accion={armarNumero} />
                <Botoncalculadora texto="2" accion={armarNumero} />
                <Botoncalculadora texto="3" accion={armarNumero} />
                <Botoncalculadora texto="+" color="#FF9427" accion={btnSumar}/>
            </View>

            <View style={styles.fila}>
                <Botoncalculadora texto="0" accion={armarNumero} ancho/>
                <Botoncalculadora texto="." accion={armarNumero}/>
                <Botoncalculadora texto="=" color="#FF9427" accion={calcular}/>
            </View>

        </View>
    )
}
