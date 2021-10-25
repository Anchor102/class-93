import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Touchable } from 'react-native';

export default class HomeScreen extends React.Component{

  constructor(){
    super()
    this.state = {
      word: "",
      definition: "",
      text: ""
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <View style = {styles.boxContainer}>
          <TextInput placeholder = "Enter The Word Here" onChangeText ={(input)=>{
            this.setState({word: input})
          }}  
          style = {styles.inputBox}
          />
          <TouchableOpacity style = {styles.button} onPress  = {()=>{this.setState({text: this.state.word})}} >
            <Text style = {styles.searchText}> Search </Text>
          </TouchableOpacity>
        </View>
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  inputBox: {
    textAlign: 'center',
    alignSelf: 'center',
    width: "80%",
    height: 40,
    borderWidth: 5,
    
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    margin: 10

  }, 
  boxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row"
  },
   searchText: {
     fontSize: 12,
     fontWeight: "bold"
   }
});
