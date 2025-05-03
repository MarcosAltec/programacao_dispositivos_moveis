import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const playlistsData = [
  { id: '1', name: 'Playlist 1', songsCount: 10 },
  { id: '2', name: 'Playlist 2', songsCount: 5 },
  { id: '3', name: 'Playlist 3', songsCount: 8 },
];

function PlaylistScreen() {
    return(
    <View style={styles.container}>
        <FlatList
          data={playlistsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>🎼 {item.name}</Text>
              <Text style={styles.count}>{item.songsCount} músicas</Text>
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
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    count: {
      fontSize: 16,
      color: '#555',
    },
  });

export default PlaylistScreen;