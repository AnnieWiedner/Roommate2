import React, { Component } from 'react';
import firebase from 'firebase';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, TouchableHighlight } from 'react-native';

export default class RegisterForm extends Component {

  state = {
    email: "",
    password: "",
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar
        barStyle="light-content" />
      <TouchableHighlight>
      <TextInput
        placeholder="username or email"
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        returnKeyType="next"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={this.state.email}
        onChangeText={email => this.setState({ email })}
        style={styles.input}
      />
      </TouchableHighlight>
      <TouchableHighlight>
      <TextInput
      placeholder="password"
      placeholderTextColor="rgba(255, 255, 255, 0.7)"
      secureTextEntry
      returnKeyType="go"
      value={this.state.password}
      onChangeText={password => this.setState({ password })}
        style={styles.input}
        ref={(input)=> this.passwordInput = input}
      />
      </TouchableHighlight>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    marginBottom: 10,
    color: 'white',
    paddingHorizontal: 10,
    borderRadius: 5,
  },

})
