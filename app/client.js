/**
 * 
 */
import React, { Component } from 'react'
import { Provider } from 'react-redux'

// components
import MainRoot from './container/Main'

// apiClient redux storage
import { ApiClient } from './helpers'
import createStore from './redux/create'
import storage from "./modules/storage";
 
const client = new ApiClient()
const store = createStore(client)

global.storage = storage

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