/**
 * create at 04/25/18
 */
import React, { Component } from 'react'
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import _ from 'lodash'

// style
import { colorsCons, distancesCons, styleCons } from '../../constants'

class RightNavBar extends Component{
  constructor(props){
    super(props)

    this._rightClick = this._rightClick.bind(this)
  }

  _rightClick(){
    const {rightPress} = this.props
    if(_.isFunction(rightPress)){
      rightPress()
    } else {
      console.log('RightNavBar rightPress is not a function')
    }
  }

  render(){
    console.log('right bar render')
    return (
      <TouchableHighlight onPress={this._rightClick} 
        underlayColor={colorsCons.TOUCH_BG_COLOR} style={styles.rightPress}
      >
        <View style={{flex: 1}}>
          <Text>right</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

RightNavBar.propTypes = {
  rightPress: PropTypes.func,
}

const styles = StyleSheet.create({
  rightTouch: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: distancesCons.NAVBAR_LEFT_MARGIN,
    width: distancesCons.NAV_RIGHTBAR_WIDTH,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'red'
  }
})

export default RightNavBar