import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

function RecoverScreen({ navigation }) {
    return(
    <View style={styles.container}>
        <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Recuperar Senha</Text>
        </TouchableOpacity>
  
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.link}>Voltar para o Login</Text>
        </TouchableOpacity>
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
    input: {
      width: '100%',
      padding: 10,
      marginVertical: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    button: {
      width: '100%',
      padding: 10,
      backgroundColor: '#007bff',
      borderRadius: 5,
      alignItems: 'center',
      marginVertical: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    link: {
      color: '#007bff',
      marginTop: 10,
    },
  });

export default RecoverScreen;