import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';

import { styles } from './src/theme/appTheme';
// SafeAreaView para salvar que la vista no choque arriba del todo
const App = () => {
    return (
        <SafeAreaView style={styles.frondo}>
            <StatusBar // Esta es la superior de los iconos
                backgroundColor="black"
                barStyle='light-content'
            />

            <CalculadoraScreen/>
        </SafeAreaView>
    )
}

export default App;