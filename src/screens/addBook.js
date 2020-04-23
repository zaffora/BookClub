import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialButtonShare1 from "../components/MaterialButtonShare1";
import MaterialButtonShare3 from "../components/MaterialButtonShare3";
import MaterialButtonShare2 from "../components/MaterialButtonShare2";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet,
	TextInput,
	Alert
} from 'react-native';

import { db } from '../config';

let addItem = item => {
	db.ref('/items').push({
		name: item
	});
};

export default class AddItem extends Component {
	state = {
		name: ''
	};

	handleChange = e => {
		this.setState({
			name: e.nativeEvent.text
		});
	};
	handleSubmit = () => {
		addItem(this.state.name);
		Alert.alert('Item saved successfully');
	};

	render() {
		return (
			<View style={styles.main}>
				<Text style={styles.title}>Add Item</Text>
				<TextInput style={styles.itemInput} onChange={this.handleChange} />
				<TouchableHighlight
					style={styles.button}
					underlayColor="white"
					onPress={this.handleSubmit}
				>
					<Text style={styles.buttonText}>Add</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

function Untitled3(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialButtonShare1Row}>
      <MaterialButtonShare1
          style={styles.materialButtonShare1}
          onPress={() => this.props.navigation.navigate('find')}
        ></MaterialButtonShare1>
        <MaterialButtonShare3
          style={styles.materialButtonShare3}
          onPress={() => this.props.navigation.navigate('myBooks')}
        ></MaterialButtonShare3>
        <MaterialButtonShare2
          style={styles.materialButtonShare2}
          onPress={() => this.props.navigation.navigate('addBook')}
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
  main: {
		flex: 1,
		padding: 30,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: '#6565fc'
  },
  title: {
		marginBottom: 20,
		fontSize: 25,
		textAlign: 'center'
  },
  itemInput: {
		height: 50,
		padding: 4,
		marginRight: 5,
		fontSize: 23,
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 8,
		color: 'white'
  },
  buttonText: {
		fontSize: 18,
		color: '#111',
		alignSelf: 'center'
	},
	button: {
		height: 45,
		flexDirection: 'row',
		backgroundColor: 'white',
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		marginTop: 10,
		alignSelf: 'stretch',
		justifyContent: 'center'
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
