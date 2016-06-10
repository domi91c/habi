import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,

} from 'react-native';

const styles = require('../styles');
const constants = styles.constants;
const TimeWheel = require('./TimeWheel');
const LinearGradient = require('react-native-linear-gradient');


class InitialView extends Component {

  render() {
    return (
      <LinearGradient
        start={[1, 0.0]} end={[1, 1]}
        colors={['#9FEBA5', '#ffffff', '#ffffff']}
        style={styles.linearGradient}>
        <View style={styles.timerButton} underlaycolor={constants.actionColor}
                          activeOpacity={.6}>
          <Text style={styles.elapsedText}>{this.props.time}</Text>
          <TimeWheel elapsedRand={this.props.randomNumber} seconds={this.props.seconds}>

          </TimeWheel>
        </View>
      </LinearGradient>
    );
  }


}

module.exports = InitialView;