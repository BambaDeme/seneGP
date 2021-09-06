import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "./Header";

function SettingsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.main}>
        <Text>Settings</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 2,
  },
});
export default SettingsScreen;
