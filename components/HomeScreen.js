import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "./Header";
import Vol from "./smallComoponents/Vol";

function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.main}>
        <Text>Dernières annonces</Text>
        <Vol />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 2,
    padding: 20,
  },
});
export default HomeScreen;
