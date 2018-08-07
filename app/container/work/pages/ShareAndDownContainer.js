/**
 * create at 08/07/18
 */
import React, { Component } from 'react'
import { View, StyleSheet, Button} from 'react-native'

// components
import { SafeView } from '../../../components'

// module
import { nativeShareFile, nativeSystemShare } from '../../../modules'

class Container extends Component{
	_shareClick = async ()=>{
		try{
			await nativeSystemShare({title: '分享', url: 'https://www.baidu.com'})
		} catch(e){
			console.log('_shareClick e=>', e)
		}
	}

	_fileShareClick = async ()=>{
		try{
			await nativeShareFile()
		} catch(e){
			console.log('_fileShareClick e=>', e)
		}
	}

	render(){
		return (
			<SafeView >
				<View style={styles.container}>
					<Button title="分享" onPress={this._shareClick}/>
					<Button title="文件分享" onPress={this._fileShareClick}/>
				</View>
			</SafeView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		flexDirection: 'column',
		justifyContent: 'space-around',
	}
})

export default Container