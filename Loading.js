import React from 'react'
import { StyleSheet, Text, View, StatusBar} from "react-native";

export default function Loading() {
  return (
    <View style={Styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={Styles.text}>Getting the fucking weather</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#fdf6aa"
  },
  text: {
    color: "#2c2c2c",
    fontSize: 31
  }
})