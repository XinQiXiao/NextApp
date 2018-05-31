/**
 * create at 05/31/18
 * the demo form react-native-scrollable-tab-view
 */

const React = require('react');
const ReactNative = require('react-native');
const {
  TouchableNativeFeedback,
  View,
} = ReactNative;

const Button = (props) => {
  return <TouchableNativeFeedback
    delayPressIn={0}
    background={TouchableNativeFeedback.SelectableBackground()} // eslint-disable-line new-cap
    {...props}
  >
    {props.children}
  </TouchableNativeFeedback>;
};

module.exports = Button;