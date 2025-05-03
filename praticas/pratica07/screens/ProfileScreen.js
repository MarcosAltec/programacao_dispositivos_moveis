import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

function ProfileScreen() {
    return(
        <View style={styles.container}>
            <Image 
            source={{ uri: 'https://via.placeholder.com/100' }} 
            style={styles.profileImage} 
            />
            <Text style={styles.name}>João da Silva</Text>
            <Text style={styles.email}>joao.silva@email.com.br</Text>
            <Text style={styles.phone}>(61) 99999-9999</Text>
    
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Editar Perfil</Text>
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
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 15,
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    email: {
      fontSize: 16,
      color: '#555',
      marginTop: 5,
    },
    phone: {
      fontSize: 16,
      color: '#555',
      marginTop: 5,
    },
    button: {
      marginTop: 20,
      padding: 10,
      backgroundColor: '#007bff',
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  });

export default ProfileScreen;