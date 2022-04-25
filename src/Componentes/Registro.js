import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'

export default function Registro(props) {
    const data = props.dados
    const turno = props.turno
    const dia = props.dia

    return (
        <View>
            <View style={styles.linha}>
                <View style={styles.coluna}>
                    <Text style={styles.textoTurno}>{turno}</Text>
                </View>
                <View style={{flex: 0.3}}>
                    <Image
                        style={styles.imagem}
                        source={{
                            uri: data?data[dia][turno]['icone']: null
                        }}
                    />
                </View>
            </View>


            <View>
                <View style={styles.linha}>
                    <View style={styles.coluna}>
                        <Text>Temp Máxima:</Text>
                    </View>
                    <View style={{flex: 2.5}}>
                        <Text style={styles.texto}>
                        {data?data[dia][turno]['temp_max']: null}ºC
                        </Text>
                    </View>
                </View>

                <View style={styles.linha}>
                    <View style={styles.coluna}>
                        <Text>Temp Minima:</Text>
                    </View>
                    <View style={{flex: 2.5}}>
                        <Text style={styles.texto}>
                        {data?data[dia][turno]['temp_min']: null}ºC
                        </Text>
                    </View>
                </View>

                <View style={styles.linha}>
                    <View style={styles.coluna}>
                        <Text>Vento - Direção | Força:</Text>
                    </View>
                    <View style={{flex: 1.5}}>
                        <Text style={styles.texto}>
                        {data?data[dia][turno]['dir_vento']: null} | {data?data[dia]['manha']['int_vento']: null}
                        </Text>
                    </View>
                </View>

                <View style={styles.linha}>
                    <View style={styles.coluna}>
                        <Text>Umidade:</Text>
                    </View>
                    <View style={{flex: 4}}>
                        <Text style={styles.texto}>
                        {data?data[dia][turno]['umidade_min']: null} - {data?data[dia]['manha']['umidade_max']: null}
                        </Text>
                    </View>
                </View>

                <View style={styles.linha}>
                    <View style={styles.coluna}>
                        <Text>Resumo:</Text>
                    </View>
                    <View style={{flex: 4.5}}>
                        <Text style={styles.espacamento}>
                        {data?data[dia][turno]['resumo']: null}
                        </Text>
                    </View>
                </View>
            </View>
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
    }, coluna: {
        flex: 1
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
    }, Logo: {
        width: 50,
        height: 50,
    }, imagem: {
        width: 70,
        height: 50,
    }
});