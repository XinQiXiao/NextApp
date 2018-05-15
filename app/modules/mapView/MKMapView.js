/**
 * create at 05/15/18
 */
import React, { Component } from 'react'
import { View, Text, StyleSheet, requireNativeComponent } from 'react-native'
import PropTypes from 'prop-types'

class MapView extends Component{
	constructor(props){
		super(props)

		this._onRegionChange = this._onRegionChange.bind(this)
	}

	_onRegionChange = (event) => {
    if (!this.props.onRegionChange) {
      return;
    }

    // process raw event...
    this.props.onRegionChange(event.nativeEvent);
  }

	render(){
		const {style} = this.props
		return (
			<View style={[style]}>
				<RNTMap style={styles.map} {...this.props}
					onRegionChange={this._onRegionChange}
				/>
			</View>
		)
	}
}

MapView.propTypes = {
	/**
   * A Boolean value that determines whether the user may use pinch
   * gestures to zoom in and out of the map.
   */
	zoomEnabled: PropTypes.bool,
	/**
   * The region to be displayed by the map.
   *
   * The region is defined by the center coordinates and the span of
   * coordinates to display.
   */
	region: PropTypes.shape({
		/**
     * Coordinates for the center of the map.
     */
		latitude: PropTypes.number.isRequired,
		longitude: PropTypes.number.isRequired,
		/**
     * Distance between the minimum and the maximum latitude/longitude
     * to be displayed.
     */
		latitudeDelta: PropTypes.number.isRequired,
    longitudeDelta: PropTypes.number.isRequired,
	}),
	/**
   * Callback that is called continuously when the user is dragging the map.
   */
  onRegionChange: PropTypes.func,
	style: PropTypes.object,
}

const styles = StyleSheet.create({
	map:{
		flex: 1
	}
})

var RNTMap = requireNativeComponent('RNTMap', MapView)

export default MapView