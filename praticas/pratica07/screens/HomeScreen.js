import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HomeScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao Meu App!</Text>
            <Text style={styles.subtitle}>Navegue pelo menu lateral para</Text>
            <Text style={styles.subtitle}>acessar seu perfil.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      textAlign: 'center',
      color: '#555',
    },
  });

export default HomeScreen;