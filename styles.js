const React = require('react-native');
const {StyleSheet} = React;

const constants = {

  actionColor: '#24CE84'
};

var styles = StyleSheet.create({
  linearGradient: {
    paddingTop: 50,
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent'

  },
  navbar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
    flexDirection: 'row'
  },
  navbarTitle: {
    color: '#444',
    fontSize: 16,
    fontWeight: "500"
  },
  statusbar: {
    backgroundColor: '#fff',
    height: 22,
  },
  center: {
    textAlign: 'center',
  },
  elapsedText: {
    color: '#fff',
    fontSize: 50,
  },
  timerButton2: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 340,
    width: 340,
    borderRadius: 340/2,
    backgroundColor: 'blue',
  },
  timerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 340,
    width: 340,
    borderRadius: 340/2,
    backgroundColor: '#9FEBA5',
  },
  progressWheel: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 340,
    width: 340,
    borderRadius: 340/2,
    backgroundColor: '#9FEBA5',
  },
  heartIcon: {
    marginTop: 40,
  },
  heartActive: {
    height: 40,
    width: 40,
    borderRadius: 40/2,
    paddingRight: 20,
  },
  //
  // signInWithFacebookButton: {
  //   backgroundColor: "#3b5998",
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'flex-start',
  //   width: 210,
  //   padding: 5,
  //   borderRadius: 3,
  //   marginTop: 10
  // },
  // signInText: {
  //   color: 'white',
  //   marginLeft: 5,
  //   fontFamily: 'HelveticaNeue-Medium',
  //   fontSize: 15
  // },
  signInWithFacebookIcon: {
    width: 100,
    height: 100,
    marginLeft: 5
  }
});

module.exports = styles;
module.exports.constants = constants;



