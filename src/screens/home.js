import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialButtonPurple from "../components/MaterialButtonPurple";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.bookClub}>Book Club</Text>
      <Text style={styles.welcomeToBookClub}>Welcome to Book Club</Text>
      <MaterialButtonPurple
        style={styles.materialButtonPurple}
      ></MaterialButtonPurple>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bookClub: {
    color: "#121212",
    transform: [
      {
        rotate: "11.04deg"
      }
    ],
    fontSize: 45,
    fontFamily: "georgia-regular",
    textAlign: "center",
    marginTop: 116,
    marginLeft: 84
  },
  welcomeToBookClub: {
    color: "#121212",
    fontSize: 30,
    fontFamily: "georgia-regular",
    marginTop: 280,
    alignSelf: "center"
  },
  materialButtonPurple: {
    width: 300,
    height: 66,
    marginTop: 218,
    marginLeft: 31
  }
});

export default Untitled;
