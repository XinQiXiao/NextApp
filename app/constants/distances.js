

import {PixelRatio, Dimensions, StyleSheet, Platform} from 'react-native'
import DeviceInfo from 'react-native-device-info'

//  nav height
const NAV_HEIGHT = Platform.OS == 'ios' ? 44 : 54
// status height
const IOS_STATUS_HEIGHT = DeviceInfo.getModel()  == 'iPhone X' ? 44 : 20
const STATUS_BAR_HEIGHT = Platform.OS == 'ios' ? IOS_STATUS_HEIGHT : 0
// nav and status total height
const NAV_TOTAL_HEIGHT = NAV_HEIGHT + STATUS_BAR_HEIGHT

// tab height
const TAB_HEIGHT = 44
// tab bottom height (iPhone X 有)
const TAB_BOTTOM_HEIGHT = DeviceInfo.getModel()  == 'iPhone X' ? 34 : 0
const TAB_TOTAL_HEIGHT = TAB_HEIGHT + TAB_BOTTOM_HEIGHT

// common
const BORDER_WIDTH = (2 / PixelRatio.get()) ? (2 / PixelRatio.get()) : 1

module.exports = {
	NAV_HEIGHT,
	STATUS_BAR_HEIGHT,
	NAV_TOTAL_HEIGHT,
	TAB_HEIGHT,
	TAB_BOTTOM_HEIGHT,
	TAB_TOTAL_HEIGHT,
	BORDER_WIDTH
}