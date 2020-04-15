import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialButtonShare1 from "../components/MaterialButtonShare1";
import MaterialButtonShare3 from "../components/MaterialButtonShare3";
import MaterialButtonShare2 from "../components/MaterialButtonShare2";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Untitled3(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialButtonShare1Row}>
        <MaterialButtonShare1
          style={styles.materialButtonShare1}
        ></MaterialButtonShare1>
        <MaterialButtonShare3
          style={styles.materialButtonShare3}
        ></MaterialButtonShare3>
        <MaterialButtonShare2
          style={styles.materialButtonShare2}
        ></MaterialButtonShare2>
      </View>
      <View style={styles.icon2Row}>
        <IoniconsIcon name="md-search" style={styles.icon2}></IoniconsIcon>
        <EntypoIcon name="book" style={styles.icon}></EntypoIcon>
        <EntypoIcon name="add-to-list" style={styles.icon3}></EntypoIcon>
      </View>
      <Text style={styles.addABook}>Add a Book</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialButtonShare1: {
    width: 56,
    height: 56
  },
  materialButtonShare3: {
    width: 56,
    height: 56,
    marginLeft: 38
  },
  materialButtonShare2: {
    width: 56,
    height: 56,
    marginLeft: 44
  },
  materialButtonShare1Row: {
    height: 56,
    flexDirection: "row",
    marginTop: 650,
    marginLeft: 66,
    marginRight: 59
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 69
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 55
  },
  icon2Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 82,
    marginRight: 59
  },
  addABook: {
    color: "#121212",
    fontSize: 45,
    fontFamily: "roboto-regular",
    marginTop: -690,
    alignSelf: "center"
  }
});

export default Untitled3;