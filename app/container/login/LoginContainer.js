
import React, { Component } from 'react'
import {View, Text, Image, StyleSheet, Button} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// components
import { SafeView } from '../../components'

const mapStateToProps = state => ({
	loading: state.login.loading
})

const mapDispatchToProps = (dispatch) => ({
	myactions: bindActionCreators({}, dispatch),
	dispatch,
})

class CurrentPage extends Component{
	constructor(props){
		super(props)

		this.pageName = 'mine demo'
	}

	render(){
		return(
			<SafeView >
				<View style={styles.container}>
					<Text>login.</Text>
					<Button title="back" onPress={Actions.pop}/>
					<Button title="main" onPress={Actions.main}/>
				</View>
			</SafeView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f00'
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentPage)