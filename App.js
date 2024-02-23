import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, Button } from 'react-native';
import styles from './src/assets/css/style'; // Importa o arquivo de estilo


export default function App() {


  button = () => {
    alert("Login");
  }

  return (
    <View style={styles.container}>
      <ImageBackground 
        style={styles.body}
        source={require('./src/assets/images/fundo.jpg')}>

        <View style={styles.submenu}>
            <Image 
            style={{width: 400, height: 50,}}
            source={require('./src/assets/images/sesi-senai.jpg')}/>

            <View style={{gap: 10,}} >
                  <TextInput
                  placeholder='Digite seu E-mail'
                  style={styles.input}
                  />
                  <TextInput
                  secureTextEntry={true}
                  placeholder='Digite sua senha'
                  style={styles.input}
                  />
                  <Button
                  placeholder='Login'
                  title='Login'
                  onPress={button} 
                  />  
            </View>
            
        </View>
        </ImageBackground>
      </View>
  );
}