import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,

} from 'react-native';


const TimeWheel = require('./TimeWheel');
const styles = require('../styles');
styles.navWrap = {flex: 1, marginTop: 70};

class NavigationBar extends Component {


  toggleNavBar() {
    this.setState({
      navigationBarHidden: !this.state.navigationBarHidden
    });
  }

  render() {
    return (
      <NavigatorIOS ref="nav"
                    itemWrapperStyle={styles.navWrap}
                    style={styles.nav}
                    initialRoute={{
                      title: "First Page",
                      component: TimeWheel,
                      passProps: {
                        toggleNavBar: this.toggleNavBar,
                      }
                    }}/>
    );
  }

}

module.exports = NavigationBar;