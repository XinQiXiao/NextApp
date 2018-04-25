/**
 * create on 04/25/18
 * 运用router-flux 参数中带的navBar相关属性
 */
import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import _ from 'lodash'

// components
import { SafeView } from '../../../../components'


class SystemContainer extends Component{
  constructor(props){
    super(props)

    this._changeRightBar = this._changeRightBar.bind(this)
  }

  showRight = false

  componentDidMount(){
    //必须在此处bind上下文，否则在_handleRightClick调用的是global上下文
    Actions.refresh({
      onRight: this._rightClick.bind(this)
    })
  }

  _rightClick(state){
    console.log('_rightClick state===>', state)
  }

  _changeRightBar(){
    const {rightChangeBack} = this.props
    this.showRight = !this.showRight
    console.log('_changeRightBar showRight===>', this.showRight)
    if(_.isFunction(rightChangeBack)){
      rightChangeBack(this.showRight)
    }
  }

  render(){
    return (
      <SafeView>
        <View style={styles.container}>
          <Button title='controlRightBar' onPress={this._changeRightBar}/>
          <Text>navSystem</Text>
        </View>
      </SafeView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center'
  }
})

export default SystemContainer