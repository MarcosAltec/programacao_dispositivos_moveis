import { View, Text, StyleSheet } from "react-native";

function Perfil() {    
    return(
        <View style={{ flex: 1 }}>
            <View style={styles.perfil}>
                <View style={styles.photo}></View>
                <View style={styles.card}>
                    <Text>Nome</Text>
                    <Text>Email</Text>
                </View>
            </View>
            <View style={styles.skillSection}>
                <Text>Habilidades</Text>
                <View>
                    <Text>JavaScript</Text>
                    <Text>React Native</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    perfil: {
        flexDirection: "row",
        padding: 16
    },
    photo: {
        width: 80,
        height: 80,
        backgroundColor: "lightgray",
        borderRadius: 40
    },
    card: {
        justifyContent: "center",
        paddingLeft: 16
    },
    skillSection: {
        paddingLeft: 16,

    },
    skill: {
        flexDirection: "row"
    }
})
export default Perfil;