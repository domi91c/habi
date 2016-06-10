import React, {Component, PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  ART,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';


const styles = require('../styles');
const constants = styles.constants;

import Icon from 'react-native-vector-icons/FontAwesome';


// import {AnimatedCircularProgress} from 'react-native-circular-progress';
// import { Surface, Shape, Path, Group } from 'react-native/Libraries/ART/ReactNativeART';

class Hearts extends Component {

  _onPressButton() {
    console.log('welcome to hell');
  }

  render() {
    return (
      <TouchableOpacity
        underlaycolor={constants.actionColor}
        onPress={this.props.onPress}
        activeOpacity={.6}
        style={styles.heartIcon}>
        <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
          <Icon.Button name="heart" backgroundColor="white" color="#FF2D55" size={40}>
          </Icon.Button>
          <Icon.Button name="heart" backgroundColor="white" color="#FF2D55" size={40}>
          </Icon.Button>
          <Icon.Button name="heart" backgroundColor="white" color="#FF2D55" size={40}>
          </Icon.Button>
          <Icon.Button name="heart" backgroundColor="white" color="#FF2D55" size={40}>
          </Icon.Button>
        </View>
      </TouchableOpacity>
    );
  }

}


module.exports = Hearts;



