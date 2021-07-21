import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class HearingIssueScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render(){
    return(
      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> Hearing Issue </Text>
        <TouchableOpacity style = {styles.likeButtonLiked} onPress = {() => 
            this.props.navigation.navigate("SignLanguageScreen")
          }>
          <Text>Hello</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  likeButtonLiked: {
        width: 160,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#eb3948",
        borderRadius: 30
    },
})