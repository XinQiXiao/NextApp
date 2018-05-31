/**
 * create at 05/31/18
 * the demo form react-native-scrollable-tab-view
 */

const React = require('react');
const ReactNative = require('react-native');
const {
 TouchableOpacity,
  View,
} = ReactNative;

const Button = (props) => {
  return <TouchableOpacity {...props}>
    {props.children}
  </TouchableOpacity>;
};

module.exports = Button;