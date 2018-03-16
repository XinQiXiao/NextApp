
import React, { Component } from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => ({
	loading: state.mine.loading
})

const mapDispatchToProps = (dispatch) => ({
	myactions: bindActionCreators({}, dispatch),
	dispatch,
})

class CurrentPage extends Component{
	constructor(props){
		super(props)

	}

	componentDidMount(){
		console.log('this.props ===>', this.props)
		console.log('global ===>', global)
	}

	render(){
		return (
			<View style={styles.container}>
				<Text>mine.</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentPage)