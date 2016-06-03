import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const LinearGradient = require('react-native-linear-gradient');
const styles = require('../styles');

class Gradient extends Component {

  render() {
    return (
      <View style={styles.loginContainer}>
        <TouchableOpacity onPress={this.login}>
{ /*          <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
            <Text style={styles.buttonText}>
              Sign in with Facebook
            </Text>
          </LinearGradient>*/ }
        </TouchableOpacity>
      </View>

    );
  }

}

module.exports = Gradient;