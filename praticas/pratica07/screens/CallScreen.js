import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const callHistoryData = [
  { id: '1', name: 'Campos Sales', date: '28/02/2024 12:03' },
  { id: '2', name: 'Rui Barbosa', date: '04/12/2023 21:10' },
];

function CallScreen() {
    return(
    <View style={styles.container}>
        <FlatList
          data={callHistoryData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.name}>👤 {item.name} <Text style={styles.icon}>📞</Text></Text>
              <Text style={styles.date}>{item.date}</Text>
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

export default CallScreen;