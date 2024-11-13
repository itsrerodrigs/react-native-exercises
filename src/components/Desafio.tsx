import {Text, View, StyleSheet} from "react-native";

export const Desafio = () => {
    return (
    <View style={styles.container}>
        <View style={styles.statusBar}>
        </View>
        <View style={styles.superior}>
        <View style={styles.quadrado} />
        <View style={styles.retangulo} />
    </View>
    <View style={styles.menu}>
        <View style={styles.esq} />
        <View style={styles.dir} />
    </View>
    <View style={styles.feed}>
      <View style={styles.bloco} />
      <View style={styles.bloco} />
      <View style={styles.bloco} />
      <View style={styles.bloco} />
      <View style={styles.bloco} />
      <View style={styles.bloco} />
      <View style={styles.bloco} />
      <View style={styles.bloco} />
      <View style={styles.bloco} />
    </View>
    <View style={styles.footer} />
  </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    statusBar: {
        height: "10%",
        backgroundColor: "#E6E6FA",
    },
    superior: {
        flex: 2,
        backgroundColor: "#FBFBEF",
        alignItems: "center",
        justifyContent: "center",
    },
    quadrado: {
        width: "30%",
        height: "50%",
        padding: 10,
        backgroundColor: "#CDA4DE",
    },
    retangulo: {
        width: "60%",
        height: "20%",
        padding: 1,
        marginTop: "4%",
        backgroundColor: "#B3E5FC",
    },
    menu: {
        flex: 0.7,
        flexDirection: "row",
        backgroundColor: "#A9F5E1",
    },
    esq: {
        backgroundColor: "#CDB4DB",
        width: "50%",
        height: "90%",
    },
    dir: {
        backgroundColor: "#FFAFCC",
        width: "50%",
        height: "90%",
    },
    feed: {
        flex: 5,
        flexDirection: "row",
        flexWrap: "wrap", 
        alignContent: "space-evenly",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#FBFBEF",
        padding: 1,
    },
    bloco: {
        width: "28%",
        height: 100,
        backgroundColor: "#CDA4DE",
        borderRadius: 10,
        marginBottom: 6,
    },
    footer: {
        flex: 1,
        backgroundColor: "#BDE0FE",
    },
});

