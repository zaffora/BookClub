import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialButtonShare1 from "../components/MaterialButtonShare1";
import MaterialButtonShare3 from "../components/MaterialButtonShare3";
import MaterialButtonShare2 from "../components/MaterialButtonShare2";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  SectionList,
  Text,
  TouchableOpacity
} from "react-native";

export default class Source extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Book Listing",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { textAlign: "center", flex: 1 }
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: []
    };
  }
  componentDidMount() {
    fetch("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAB0FRlzdUgtdwM9eWuXKi71OAKs5D_bSg")
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          dataSource: responseJson
        })
      })
      .catch(error => console.log(error)) //to catch the errors if any
  }
  FlatListItemSeparator = () => {
    return (
      <View style={{
        height: .5,
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
      />
    );
  }
  renderItem = (data) =>
    <TouchableOpacity style={styles.list}>
      <Text style={styles.lightText}>{data.item.volumeInfo.title}</Text>
    </TouchableOpacity>
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      )
    }
    return (
      <View style={styles.view}>
        <FlatList
          data={this.state.dataSource.items}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={item => this.renderItem(item)}
          keyExtractor={item => item.id.toString()}
        />
        <SectionList
          sections={[
            { title: 'Title: ' + this.state.dataSource.items[0].volumeInfo.title, data: this.state.dataSource.items[0].volumeInfo.authors},
            { title: 'D', data: ['Devin', 'Dan', 'Dominic'] },
            { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}

function Untitled1(props) {
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
      <Text style={styles.findABook}>Find a book</Text>
      <View style={styles.icon2Row}>
        <IoniconsIcon name="md-search" style={styles.icon2}></IoniconsIcon>
        <EntypoIcon name="book" style={styles.icon}></EntypoIcon>
        <EntypoIcon name="add-to-list" style={styles.icon3}></EntypoIcon>
      </View>
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
  findABook: {
    color: "#121212",
    fontSize: 45,
    fontFamily: "roboto-regular",
    marginTop: -633,
    alignSelf: "center"
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
    marginTop: 613,
    marginLeft: 82,
    marginRight: 59
  },
  view: {
    paddingTop: 20,
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff"
  }
});

export default Untitled1;
