import { Text, View, StyleSheet } from "react-native";

function App() {
  return(
    <View style={styles.container}>
      <Text>Minha aplicação react Native</Text>
      <AppBar titulo="Minha Aplicação React Native" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center"},
  appBar: {height: 50, backgroundColor: "#777", justifyContent: "center", paddingLeft: 16},
  title: {fontSize: 20, fontWeight: "bold", color: "#333"},
});

function AppBar(props) {
  return(
    <View style={styles.appBar}>
      <Text style={styles.title}>{props.titulo}</Text>
    </View>
  )
}
export default App;
