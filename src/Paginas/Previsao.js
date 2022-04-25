import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native'
import React, { useState, useLayoutEffect } from 'react'

import { getPrevisao } from '../Services/ApiPrevisao';
import Registro from '../Componentes/Registro';

export default function Previsao({navigation, route}) {

    const [previsao, setPrevisao] = useState(null)
    const code = route.params.code;

    useLayoutEffect(() => {
        getPrevisao(code)
          .then(dados => setPrevisao(dados.data[code]))
          .catch(erro => console.log(erro))
    }, [])
    
    const getCurrentDate=()=>{

      var dia = new Date().getDate();
      var mes = new Date().getMonth() + 1;
      var ano = new Date().getFullYear();

      if (mes < 10)
          return dia + '/0' + mes + '/' + ano;
      else
          return dia + '/' + mes + '/' + ano;
    }

  return (
    <View style={styles.container}>
        <View>
            <View style={styles.linha}>
              <View style={{flex: 1}}><Text>Dia:</Text></View>
              <View style={{flex: 10}}>
                <Text style={styles.texto}>
                  {getCurrentDate()} - {previsao?previsao[getCurrentDate()]['manha']['dia_semana']: null}
                </Text>
              </View>
            </View>
            <View style={styles.linha}>
              <View style={{flex: 2}}><Text>Cidade:</Text></View>
              <View style={{flex: 10}}>
                <Text style={styles.texto}>
                {previsao?previsao[getCurrentDate()]['manha']['entidade']: null} | {previsao?previsao[getCurrentDate()]['manha']['uf']: null}
                </Text>
              </View>
            </View>

            <Text>{"\n"} </Text>
            <Registro
              dados={previsao}
              turno={'manha'}
              dia={getCurrentDate()}
              navigation={navigation}
            />
            <Registro
              dados={previsao}
              turno={'tarde'}
              dia={getCurrentDate()}
              navigation={navigation}
            />
            <Registro
              dados={previsao}
              turno={'noite'}
              dia={getCurrentDate()}
              navigation={navigation}
            />
        </View>
        <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: "gray",
      margin: 5
    }, linha: {
        flexDirection: 'row'
    }, texto: {
        fontWeight: "bold", 
        color: "black"
    }, textoTurno: {
        fontSize: 18,
        fontWeight: "bold", 
        marginBottom: 20
    }, espacamento: {
        fontWeight: "bold", 
        marginBottom: 20
    }
});