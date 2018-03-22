
import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native'

// components
import { ListComponent } from '../../../components'

// style
import { colorsCons, distancesCons } from '../../../constants'

const ColorIconsPath = [
	require('../../../sources/images/work/order_blue.png'),
	require('../../../sources/images/work/order_yellow.png'),
	require('../../../sources/images/work/order_green.png'),
	require('../../../sources/images/work/order_red.png')
]

class CurrentContainer extends Component{
	constructor(props){
		super(props)

		this._renderItem = this._renderItem.bind(this)
	}

	contracts = [
		{
			code: 'audit0',
			title: '审核中',
			number: 1
		},
		{
			code: 'audit1',
			title: '审核驳回',
			number: 2
		},
		{
			code: 'archive0',
			title: '未归档',
			number: 3
		},
		{
			code: 'archive1',
			title: '即将到期',
			number: 4
		},
		{
			code: 'status1',
			title: '执行中',
			number: 5
		},
		{
			code: 'all',
			title: '所有合同',
			number: 6
		}
	]

	_renderItem({item, index}){
		const curIndex = Math.floor(Math.random() * ColorIconsPath.length)
		const currentIconPath = ColorIconsPath[curIndex]
		return (
			<TouchableHighlight style={styles.itemTouch} onPress={()=>null} 
				underlayColor={colorsCons.TOUCH_BG_COLOR}
			>
				<View style={styles.itemContainerView}>
					<Image style={styles.itemIcon} source={currentIconPath} />
					<View style={styles.itemContentView}>
						<Text style={styles.itemTitle}>{item.title ? item.title : ''}</Text>
						<Text style={styles.itemCount}>{item.number ? item.number : 0}</Text>
					</View>
				</View>
			</TouchableHighlight>
		)
	}

	render(){
		return(
			<View style={styles.container}>
				<ListComponent 
					style={{flex: 1}}
					data={this.contracts}
					renderItem={this._renderItem}
					keyExtractor={(item, index)=> item.code}
				/>
			</View>
		)
	}
}

const ItemHeight = 60, ItemMargin = 15

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	itemTouch: {
		height: ItemHeight
	},
	itemIcon: {
		marginLeft: ItemMargin,
		marginRight: 20
	},
	itemContainerView: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	itemContentView: {
		flex: 1,
		height: ItemHeight,
		borderColor: colorsCons.BORDER_COLOR,
		borderBottomWidth: distancesCons.BORDER_WIDTH,
		flexDirection: 'row',
		alignItems: 'center'
	},
	itemTitle: {
		color: '#333',
		fontSize: 16,
		flex: 1
	},
	itemCount: {
		marginRight: ItemMargin,
		color: '#999',
		fontSize: 14
	}
})

export default CurrentContainer