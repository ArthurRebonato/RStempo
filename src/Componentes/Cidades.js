import { View, Text, StyleSheet, Button} from 'react-native'
import React from 'react'

export default function Cidades(props) {
    return (
        <View style={styles.container}>
            <View style={styles.linha}>
                    <View style={styles.coluna}><Text>Cidade:</Text></View>
                    <View style={styles.valor}>
                        <Text style={styles.texto}>
                            {props.cidade}
                        </Text>
                    </View>
                    <View style={styles.botao}>
                    <Button 
                        title='Saber mais'
                        color= "#4db000"
                        onPress={() => props.navigation.navigate("Previsao", {code: props.code})}
                    />
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
    }, texto: {
        fontWeight: "bold",
        color: "black"
    }, linha: {
        flexDirection: "row"
    }, coluna: {
        flex: 1
    }, valor: {
        flex: 4
    }, botao: {
        width: 100,
        height: 40
    }
});