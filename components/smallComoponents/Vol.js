import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
const Vol = (props) => {
  const { depart, arrive } = props;
  return (
    <View style={styles.main}>
      <View style={styles.villes}>
        <Text style={styles.ville}>Paris</Text>
        <Text>------</Text>
        <Text style={styles.ville}>Dakar</Text>
      </View>
      <View style={styles.pays}>
        <Text style={styles.pay}>France</Text>
        <Text style={styles.pay}>Senegal</Text>
      </View>
      <View style={styles.dates}>
        <Text style={styles.date}>Mar,20 Juin</Text>
        <Text style={styles.date}>Mer,21 juin</Text>
      </View>
      <View style={styles.infos}>
        <Text>
          <Text style={styles.weightNumber}>90 Kg </Text>
          <Text>disponibes</Text>
        </Text>
        <Text style={styles.price}>8,00 €/ Kg</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    margin: 10,
    shadowColor: "blue",
    shadowOffset: { with: -2, height: 4 },
  },
  villes: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ville: {
    color: "#1976D2",
    fontSize: 20,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 22,
  },
  pays: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 17,
  },
  pay: {
    color: "#ABABAB",
    fontSize: 12,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 15,
  },
  dates: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 17,
  },
  date: {
    color: "#6A6A6A",
    fontSize: 10,
    fontWeight: "bold",
    lineHeight: 12,
    fontStyle: "normal",
  },
  infos: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weightNumber: {
    color: "#1976D2",
  },
  price: {
    color: "#1976D2",
  },
});
export default Vol;
