import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Header = () => {
  return (
    <View style={styles.main}>
      <View style={styles.top}>
        <TouchableOpacity>
          <Ionicons name="md-menu" size="50" color="#fff" />
        </TouchableOpacity>
        <Image style={styles.image} source={require("../assets/user.png")} />
      </View>

      <View style={styles.bottom}>
        <Text style={styles.welcome}>Bonjour,</Text>
        <Text style={styles.userName}>Fatima Ndiaye</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#1976D2",
    flex: 1,
    justifyContent: "space-around",
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
  },
  humburger: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: "grey",
    borderRadius: 60,
  },
  bottom: {
    paddingLeft: 20,
  },
  welcome: {
    fontFamily: "Montserrat",
    fontSize: 30,
    color: "#fff",
    lineHeight: 34.13,
    fontStyle: "normal",
    fontWeight: "500",
  },
  userName: {
    fontFamily: "Montserrat",
    fontSize: 25,
    color: "#fff",
    lineHeight: 29.26,
    fontStyle: "normal",
    fontWeight: "200",
  },
});
export default Header;
