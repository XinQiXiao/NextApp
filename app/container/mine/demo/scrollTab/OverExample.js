/**
 * create at 05/31/18
 * the demo form react-native-scrollable-tab-view/Example/OverlayExample.js
 * url: https://github.com/skv-headless/react-native-scrollable-tab-view/blob/master/Example/OverlayExample.js
 */

import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import Icon from 'react-native-vector-icons/Ionicons'

// Using tabBarPosition='overlayTop' or 'overlayBottom' lets the content show through a
// semitransparent tab bar. Note that if you build a custom tab bar component, its outer container
// must consume a 'style' prop (e.g. <View style={this.props.style}) to support this feature.
export default () => {
  return <ScrollableTabView
    style={styles.container}
    renderTabBar={()=><DefaultTabBar backgroundColor='rgba(255, 255, 255, 0.7)' />}
    tabBarPosition='overlayTop'
  >
    <ScrollView tabLabel='iOS'>
      <Icon name='logo-apple' color='black' size={100} style={styles.icon} />
      <Icon name='ios-phone-portrait' color='black' size={100} style={styles.icon} />
      <Icon name='logo-apple' color='#DBDDDE' size={100} style={styles.icon} />
      <Icon name='ios-phone-portrait' color='#DBDDDE' size={100} style={styles.icon} />
    </ScrollView>
    <ScrollView tabLabel='Android'>
      <Icon name='logo-android' color='#A4C639' size={100} style={styles.icon} />
      <Icon name='logo-android' color='black' size={100} style={styles.icon} />
      <Icon name='logo-android' color='brown' size={100} style={styles.icon} />
    </ScrollView>
  </ScrollableTabView>
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  icon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
})