import React, {Component, PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  ART
} from 'react-native';

import {Surface, Shape, Path, Transform, Group} from 'react-native/Libraries/ART/ReactNativeART';
import * as Progress from 'react-native-progress';

// import {AnimatedCircularProgress} from 'react-native-circular-progress';
// import { Surface, Shape, Path, Group } from 'react-native/Libraries/ART/ReactNativeART';

class TimeWheel extends Component {
  render() {
    return (
      <Progress.Circle animate={false} size={340} progress={( this.props.seconds/60 )} thickness={15} showsText={true}>
        <Text>
          {this.props.seconds}
        </Text>
      </Progress.Circle>
    );
  }

}


module.exports = TimeWheel;



