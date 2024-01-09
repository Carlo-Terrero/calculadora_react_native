import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
    texto: string
    color?: '#2D2D2D' | '#FF9427' | '#9B9B9B'
    // color?: string -> pordria ser un strin que envie el color
    ancho?: boolean;
    accion: ( numeroTexto: string) => void;
}

export const Botoncalculadora = ({texto, color= '#2D2D2D', ancho = false, accion }:Props) => {
    return (
        <TouchableOpacity
            onPress={ () => accion(texto) }
        >
            <View style={[styles.Buton,
            { backgroundColor: color},
            {width: (ancho ) ? 180 : 80}
            ]}>
                <Text style={[
                    styles.botonText,
                    {color: (color === '#9B9B9B' ? 'black' : 'white')},
                ]}>{texto}</Text>
            </View>
        </TouchableOpacity>
    )
}

//esta es otra foma de añadir estilos que es desestructurando los objetos de estilos
///

{/* <View style={
    ...styles.Buton,
    backgroundColor: color,
    width: (ancho ) ? 180 : 80
}></View>

<Text style={{
    ...styles.botonText,
    color: (color === '#9B9B9B') ? 'black' : 'white'
}}>{texto}</Text>  */}