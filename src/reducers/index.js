import { combineReducers } from 'redux'
//import testReducers from 'LibKU/src/reducers/testReducers'
//import {fetchDbsInfo} from './testReducers'
import {fetchDbsInfo} from './fetchDbsInfo'
import {testReducers} from './testReducers'
import {createRequest} from './createRequest'


export default combineReducers({
	dbsInfo: fetchDbsInfo,
	profile: testReducers,
	req: createRequest
})

