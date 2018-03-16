/**
 * 
 */
import React, { Component } from 'react'
import { Provider } from 'react-redux'

// components
import MainRoot from './container/Main'

// apiClient redux
import { ApiClient } from './helpers'
import createStore from './redux/create'
 
const client = new ApiClient()
const store = createStore(client)

// TODO global storage

export default class extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<Provider store={store}>
				<MainRoot />
			</Provider>
		)
	}
}