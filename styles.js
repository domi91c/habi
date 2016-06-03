const React = require('react-native');
const {StyleSheet} = React;
const constants = {
  actionColor: '#24CE84'
};

var styles = StyleSheet.create({
  linearGradient: {
    backgroundColor: 'transparent',
    paddingTop: 22,
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
  timerButton: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 340,
    width: 340,
    borderRadius: 170,
    backgroundColor: '#9FEBA5',
  },
});

module.exports = styles;
module.exports.constants = constants;



