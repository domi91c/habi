'use strict';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
} from 'react-native';

import React, {Component} from 'react';
const styles = require('../styles.js');
const constants = styles.constants;

class ActionButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.timerButton} underlaycolor={constants.actionColor} onPress={this.props.onPress}
                        activeOpacity={.6}>
        <Text style={styles.elapsedText}>{this.props.time}</Text>
      </TouchableOpacity>
    );
  }
}

module.exports = ActionButton;



