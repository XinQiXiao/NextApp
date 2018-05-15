/**
 * create at 05/15/18
 */

import React, { Component } from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'
import _ from 'lodash'

// components
import { MKMapView } from '../../../../modules/mapView'

export default class Container extends Component{
	constructor(props){
		super(props)

	}	

	_onRegionChange(event){
		console.log('_onRegionChange event=>', event)
	}

	render(){
		const region = {
			latitude: 37.48,
			longitude: 122.16,
			latitudeDelta: 0.1,
			longitudeDelta: 0.1,
		}
		return (
			<View style={styles.container}>
				<MKMapView style={{flex: 1}} zoomEnabled={true} region={region}
					onRegionChange={this._onRegionChange}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	}
})