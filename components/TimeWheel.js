import React, {Component, PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  ART,
  TouchableOpacity
} from 'react-native';

import {Surface, Shape, Path, Transform, Group} from 'react-native/Libraries/ART/ReactNativeART';
import * as Progress from 'react-native-progress';
const styles = require('../styles');
const constants = styles.constants;

// import {AnimatedCircularProgress} from 'react-native-circular-progress';
// import { Surface, Shape, Path, Group } from 'react-native/Libraries/ART/ReactNativeART';

class TimeWheel extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.timerButton}
                        underlaycolor={constants.actionColor}
                        onPress={this.props.onPress}
                        activeOpacity={.6}>
        <Progress.Circle animate={false}
                         size={330}
                         progress={( this.props.seconds/60 )}
                         thickness={15}
                         showsText={true}
                         borderColor=""
                         color='white'
        >
        </Progress.Circle>
      </TouchableOpacity>
    );
  }

}


module.exports = TimeWheel;



