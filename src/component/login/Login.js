import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableHighlight, StatusBar, KeyboardAvoidingView, Navigator, TouchableOpacity } from 'react-native';
import picBedroom from '../../../images/image01.png';
import Register from '../register/Register'
import firebase from 'firebase';
import Spinner from '../Spinner'


export default class Login extends Component {

  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: "",
      error: "",
      loading: false,
    }
  }

  linker(comp) {
    this.props.navigator.push({
      component: comp
    })
  }

  onButtonPress() {
    this.setState({ error: " ", loading: true })
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
      this.setState({ error: " ", loading: false })
    }).catch(() => {
      this.setState({ loading: false, error: "Authentication Failed" })
    })
  }

  renderButton() {
    if (this.state.loading) {
      return (
      <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={styles.buttonContainer}>
        <Spinner size="small" />
      </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    )
  }


  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Image source={picBedroom} style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.text}>Room & Board</Text>
          <Text style={styles.subtext}>Login</Text>
        </View>

        <View style={styles.formContainer}>
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

        <Text style={styles.errorText}>{this.state.error}</Text>

        {this.renderButton()}

        <TouchableOpacity onPress={this.linker.bind(this, Register)} style={styles.linkContainer}>
          <Text style={styles.linkText}>Register</Text>
        </TouchableOpacity>

      </Image>
      </KeyboardAvoidingView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: '100%',
  },
  subtext: {
    color: 'white',
    fontSize: 16
  },
  errorText: {
    color: '#e74c3c',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    marginBottom: 10,
    color: 'white',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: 'center',
    flexGrow: 1,
  },
  buttonContainer: {
    backgroundColor: '#F3623C',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingVertical: 10,
    borderRadius: 5,
    height: 40,
  },
  linkContainer: {
    paddingTop: 15,
    marginBottom: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
  linkText: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.7)'
  }
})
