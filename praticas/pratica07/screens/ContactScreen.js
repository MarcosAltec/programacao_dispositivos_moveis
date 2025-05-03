import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const contactsData = [
  { id: '1', name: 'Nome do Contato 1', phone: '(99) 99999-9999' },
  { id: '2', name: 'Nome do Contato 2', phone: '(99) 99999-9999' },
  { id: '3', name: 'Nome do Contato 3', phone: '(99) 99999-9999' },
];

function ContactScreen() {
    return(
    <View style={styles.container}>
        <FlatList
          data={contactsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.name}>👤 {item.name}</Text>
              <Text style={styles.phone}>{item.phone}</Text>
            </View>
          )}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    item: {
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    phone: {
      fontSize: 14,
      color: '#555',
      marginTop: 4,
    },
  });

export default ContactScreen;