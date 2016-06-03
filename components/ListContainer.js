'use strict';
import {
  DatePickerIOS,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
} from 'react-native';

import React, {Component} from 'react';
const styles = require('../styles.js');
const constants = styles.constants;

const ListItem = require('./ListItem');

class ActionButton extends React.Component {
  
  _renderItem(item) {
    return (
      <ListItem item={item} onPress={() => {}}/>
    );
  }

  render() {
    return (
      <ListView dataSource={this.props.dataSource} renderRow={this._renderItem.bind(this)} style={styles.listview}/>
    );
  }
}

module.exports = ActionButton;