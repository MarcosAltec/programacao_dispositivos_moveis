import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const messagesData = [
  { id: '1', name: 'Ana Souza', time: '08:45', message: 'Oi, tudo bem?' },
  { id: '2', name: 'Carlos Lima', time: '09:30', message: 'Vamos marcar aquela reunião?' },
  { id: '3', name: 'Mariana Santos', time: '10:10', message: 'Enviei o arquivo para vc.' },
];

function ChatScreen({ navigation }) {
    return(
    <View style={styles.container}>
        <FlatList
          data={messagesData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.name}>👤 {item.name} <Text style={styles.time}>{item.time}</Text></Text>
              <Text style={styles.message}>{item.message}</Text>
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
    time: {
      fontSize: 14,
      color: '#888',
    },
    message: {
      fontSize: 16,
      color: '#555',
      marginTop: 4,
    },
  });

export default ChatScreen;