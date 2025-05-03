import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const favoriteSongsData = [
  { id: '1', title: 'Música Favorita 1', artist: 'Artista 1' },
  { id: '2', title: 'Música Favorita 2', artist: 'Artista 2' },
];

function FavoriteScreen() {
    return(
    <View style={styles.container}>
        <FlatList
          data={favoriteSongsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>🎵 {item.title}</Text>
              <Text style={styles.artist}>{item.artist}</Text>
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
    artist: {
      fontSize: 16,
      color: '#555',
    },
  });

export default FavoriteScreen;