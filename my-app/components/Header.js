import React from "react";

import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Список дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 40,
    height: 90,
    width:350,
    backgroundColor: "#FFC0CB",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "#000000",
  },
});
