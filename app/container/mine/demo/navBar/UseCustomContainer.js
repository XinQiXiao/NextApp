/**
 * create on 04/25/18
 * 运用router-flux 参数中带的navBar相关属性
 */
import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Button, StatusBar } from 'react-native'
import { Actions } from 'react-native-router-flux'
import _ from 'lodash'

// components
import { SafeView, RightNavBar } from '../../../../components'

// style
import { colorsCons, distancesCons, styleCons } from '../../../../constants'


class CustomContainer extends Component{
  constructor(props){
    super(props)

    this._rightClick = this._rightClick.bind(this)
  }

  componentWillMount(){
    Actions.refresh({
      // rightTitle: 'right',
      // onRight: this._rightClick,
      renderTitle: 'aaa',
      renderRightButton: ()=> {
        console.log('.......')
        return <Button title='right' onPress={this._rightClick}/>
      },
    })
  }

  _rightClick(){
    console.log('_rightClick this===>', this)
  }

  render(){
    return (
      <SafeView >
        <View style={{flex: 1}}>
          <View style={styles.container}>
            <Text>navCustom</Text>
          </View>
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

export default CustomContainer