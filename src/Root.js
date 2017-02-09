import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'LibKU/src/configureStore'
import routes from 'LibKU/src/routes'

const store = configureStore()

export default () => (
	<Provider store={store} key='provider'>
		{routes()}
	</Provider>
)