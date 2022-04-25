import { StatusBar } from 'expo-status-bar';
import { StyleSheet ,View, Button } from 'react-native'
import React, { useLayoutEffect } from 'react'

import Cidades from '../Componentes/Cidades'

export default function Menu({navigation}) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
            <Button color={"#fc0000"} onPress={() => navigation.replace("Login")} title="Sair"/>
            ),
        })
        navigation.setOptions({
            headerLeft: () => (
            <Button color={"#00c5f7"} onPress={() => navigation.navigate("Sobre")} title="Sobre"/>
            ),
        })
    }, [])

  return (

    <View style={styles.container}>
        <Cidades cidade="Passo Fundo" code="4314100" navigation={navigation}/>
        <Cidades cidade="Marau" code="4311809" navigation={navigation}/>
        <Cidades cidade="Carazinho" code="4304705" navigation={navigation}/>
        <Cidades cidade="Soledade" code="4320800" navigation={navigation}/>
        <Cidades cidade="Erechim" code="4307005" navigation={navigation}/>

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    }
  });