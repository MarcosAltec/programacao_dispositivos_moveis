import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function MeuComponente() {
  return (
    <Text style={{padding: 24, fontSize: 24, color: "white"}}>
      Olá, Turma.
    </Text>
  )
}

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "purple" }}>
      <MeuComponente />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
