
import { StyleSheet, Platform } from 'react-native'

import * as colors from './colors'
import * as distances from './distances' 


const navStyle = StyleSheet.create({
  navBar: {
    backgroundColor: colors.NAVBAR_BG_COLOR,
    borderBottomWidth: distances.NAVBAR_BORDER_WIDTH,
    height: distances.NAV_HEIGHT
  },
  navTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.NAV_TITLE_COLOR,
    fontSize: 18 ,
    letterSpacing: 0.5,
    fontWeight: '500',
  },
  leftBarIcon: {
    width: 10,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backButton: {
    ...Platform.select({
      ios: {
        paddingLeft: distances.NAVBAR_LEFT_MARGIN ,  
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }, 
      android: {
        paddingLeft: distances.NAVBAR_LEFT_MARGIN,
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }
    })
  },
  rightTitle: {
    color: colors.NAV_TITLE_COLOR,
  },
  rightBarButton: {
    width: distances.NAV_BARBUTTON_WIDTH,
  }
})

export {
  navStyle
}