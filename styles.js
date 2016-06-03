const React = require('react-native');
const {StyleSheet} = React;
const constants = {
  actionColor: '#24CE84'
};

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent'
  },
  container: {
    backgroundColor: 'transparent',
    paddingTop: 22,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    /* Rectangle 5: */
  },
  listview: {
    flex: 1,
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liContainer: {
    flex: 2,
  },
  liText: {
    color: '#333',
    fontSize: 16,
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
    backgroundColor: '#BBD3EF',
  },
});

module.exports = styles;
module.exports.constants = constants;



