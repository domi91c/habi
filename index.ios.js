/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Animated,
  TouchableOpacity
} from 'react-native';


const styles = require('./styles');
const constants = styles.constants;

const ListContainer = require('./components/ListContainer');

const ActionButton = require('./components/ActionButton');

require('datejs');

const TimeWheel = require('./components/TimeWheel');
const LinearGradient = require('react-native-linear-gradient');
const Gradient = require('./components/Gradient');


class Habi extends Component {
  constructor() {
    super();

    //noinspection JSUnresolvedVariable
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      isStart: false,
      elapsed: '23:21',
      start: new Date(),
      hours: 0, minutes: 0, seconds: 0,
      randomNumber: 0
    };


    // var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // this.state = {dataSource: ds.cloneWithRows(['Practice guitar', 'Learn to play piano', 'Study math', 'Take swimming lessons', 'Meditate'])};
  }

  componentWillMount() {
    this.timer = setInterval(this.tick, 100);
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  tick = () => {
    t = this.getTimeRemaining(this.state.start);
    console.log();

    var d = new Date().toString("mm:ss");

    this.setState({elapsed: d});
    this.setState({seconds: new Date().getSeconds()});
    this.setState({randomNumber: Math.random() * 100});


  };


  getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  initializeClock(id, endtime) {
    // var clock = document.getElementById(id);
    var timeinterval = setInterval(() => {
      var t = this.getTimeRemaining(endtime);
      var hours = t.hours;
      var minutes = t.minutes;
      var seconds = t.seconds;
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }, 1000);
  }


  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([{title: 'Pizza'}, {title: 'Peenor'}])
    });
    console.log(this.getTimeRemaining("May 27 2016 00:31:31"));
  }


  render() {
    return (
      <LinearGradient
        start={[1, 0.0]} end={[1, 1]}
        colors={['#9FEBA5', '#ffffff', '#ffffff']}
        style={styles.linearGradient}>
        <TouchableOpacity style={styles.timerButton} underlaycolor={constants.actionColor}
                          onPress={this.props.onPress}
                          activeOpacity={.6}>
          <Text style={styles.elapsedText}>{this.props.time}</Text>
          <TimeWheel elapsedRand={this.state.randomNumber} seconds={this.state.seconds}>

          </TimeWheel>
        </TouchableOpacity>
      </LinearGradient>
    );
  }

}

AppRegistry.registerComponent('Habi', () => Habi);
