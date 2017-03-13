import { combineReducers } from 'redux'
//import testReducers from 'LibKU/src/reducers/testReducers'
//import {fetchDbsInfo} from './testReducers'
import {fetchDbsInfo} from './fetchDbsInfo'


export default combineReducers({
	dbsInfo: fetchDbsInfo
})

