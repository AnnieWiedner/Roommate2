import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Navigator
} from 'react-native';
import Splash from './Splash';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import Login from './src/component/login/Login';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyBMCMQtsLKK8NUgUYd_ph7YBYS72n59dmI',
  authDomain: 'authentication-760d5.firebaseapp.com',
  databaseURL: 'https://authentication-760d5.firebaseio.com/',
  storageBucket: 'authentication-760d5.appspot.com'
})

export default class Roommate extends Component {

  renderScene(route, navigator){
    return <route.component navigator={navigator} />
  }

  render() {
    return (
      <NavigationExperimental.Navigator
        initialRoute={{component: Login}}
        renderScene={this.renderScene.bind(this)} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});

AppRegistry.registerComponent('Roommate', () => Roommate);
