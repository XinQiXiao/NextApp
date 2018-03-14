/**
 * create at 12/17/17
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Animated, Dimensions, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

export default class extends Component {
  static propTypes = {
    children: PropTypes.any,
    horizontalPercent: PropTypes.number,
    verticalPercent: PropTypes.number,
    jusContent: PropTypes.string,
    closePress: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.state = {
      opacity: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.opacity, {
      duration: 300,
      toValue: 1,
    }).start();
  }

  _closeModal = () => {
    Animated.timing(this.state.opacity, {
      duration: 300,
      toValue: 0,
    }).start(Actions.pop);
  }

  _renderLightBox = () => {
    const { 
      children, horizontalPercent = 1, verticalPercent = 1, jusContent = 'center' 
    } = this.props;
    const height = verticalPercent ? deviceHeight * verticalPercent : deviceHeight;
    const width = horizontalPercent ? deviceWidth * horizontalPercent : deviceWidth;
    return (
      <TouchableOpacity activeOpacity={1} 
        style={[styles.touchBg, {justifyContent: jusContent}]}
        onPress={this._closeModal}
      >
        <View
          style={{
            width,
            height,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}
        >
          {children}
          <Button title="Close" onPress={this._closeModal} />
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Animated.View style={[styles.container, { opacity: this.state.opacity }]}>
        {this._renderLightBox()}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(52,52,52,0.5)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchBg: {
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: 'rgba(255,0,0,0)',
  }
});