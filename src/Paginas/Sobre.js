import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'

export default function Sobre() {

  return (
    <View style={styles.container}>
        <View style={styles.containerLogin}>
            <View style={styles.imagemContainer} >
                <Image 
                    style={styles.imagemUser} 
                    source={require('../Images/User.png')}
                />
            </View>
            <View>
                <Text style={styles.texto}>Nome: Arthur Rebonato</Text>
                <Text style={styles.texto}>RA: 1120468</Text>
                <Text style={styles.texto}>Email: 1120468@imed.edu.br</Text>
                <Text style={styles.texto}>Disciplina: Tópicos Especiais em Computação</Text>
            </View>
            <View style={styles.imagemContainer} >
                <Image 
                    style={styles.imagem} 
                    source={require('../Images/LogoImed.png')}
                />
            </View>

            <StatusBar style="auto" />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#0ed7fd'
    },
    containerLogin: {
        backgroundColor: '#fff',
        padding: 25,        
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "gray",
        margin: 5,
    }, lista: {
        height: 280
    }, imagemContainer: {
        alignItems: 'center',
        padding: 20
    }, imagemUser: {
        width: 150,
        height: 140
    }, imagem: {
        width: 120,
        height: 50
    }, texto: {
        fontSize: 16.5,
        fontWeight: "bold",
        color: "black"
    }
});