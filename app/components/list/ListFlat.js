
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Button, Image, StyleSheet, FlatList, ViewPropTypes } from 'react-native'

class ListFlat extends Component{
	constructor(props){
		super(props)

		this._onEndReached = this._onEndReached.bind(this)
	}

	_onEndReached(){
		const {refreshing = false, moreLoading = false, loadMoreData = ()=>null} = this.props
		// 防止多次重复加载
		if(refreshing){
			return
		}
		// console.log('_onEndReached props===>', this.props)
		if(!moreLoading){
			loadMoreData()
		}
	}

	render(){
		const {
			style, data, refreshing, keyExtractor,
			renderItem, itemSeparator, listHeader, listFooter,
			refreshLoad,
		} = this.props
		// console.log('props===>', this.props)
		return (
			<View style={style}>
				<FlatList 
					style={styles.container}
					data={data}
					renderItem={renderItem}
					keyExtractor={keyExtractor}
					ItemSeparatorComponent={itemSeparator}
					ListFooterComponent={listFooter}
					ListHeaderComponent={listHeader}
					horizontal={false}
					initialNumToRender={3}
					refreshing={refreshing}
					onRefresh={refreshLoad}
					onEndReached={this._onEndReached}
					onEndReachedThreshold={0.05}
				/>
			</View>
		)
	}
}

ListFlat.propTypes = {
	style: PropTypes.object,
	data: PropTypes.array,
	renderItem: PropTypes.func,
	itemSeparator: PropTypes.func,
	listHeader: PropTypes.func,
	listFooter: PropTypes.func,
	refreshLoad: PropTypes.func,
	loadMoreData: PropTypes.func,
	refreshing: PropTypes.bool,
	moreLoading: PropTypes.bool,
	keyExtractor: PropTypes.func,
}

ListFlat.defaultProps = {
	style: ViewPropTypes.style,
	data: [],
	renderItem: ()=>null,
	itemSeparator: ()=>null,
	listHeader: ()=>null,
	listFooter: ()=>null,
	refreshLoad: ()=>null,
	loadMoreData: ()=>null,
	refreshing: false,
	moreLoading: false,
	keyExtractor: ()=>null
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})

export default ListFlat