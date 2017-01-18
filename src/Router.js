import React from 'react'
import {Scene , Router} from 'react-native-router-flux'
import Home from './Home'
import About from './About'
import Rule from './Rule'
import Intro from './Intro'
import Comment from './Comment'
import Database from './Database'
import Request from './Request'
import Reserve from './Reserve'
import Search from './Search'
import Delivery from './Delivery'
import Interlibloan from './Interlibloan'

const RouterComponent = () => {
	return (
			<Router sceneStyle={{paddingTop: 60}}>
				<Scene key='Home' component={Home} title='Home' />
				<Scene key='About' component={About} title='About' />
				<Scene key='Rule' component={Rule} title='Rule' />
				<Scene key='Intro' component={Intro} title='Intro' />
				<Scene key='Comment' component={Comment} title='Comment' />
				<Scene key='Database' component={Database} title='Database' />
				<Scene key='Request' component={Request} title='Request' />
				<Scene key='Reserve' component={Reserve} title='Reserve' />
				<Scene key='Search' component={Search} title='Search' />
				<Scene key='Delivery' component={Delivery} title='Delivery' />
				<Scene key='Interlibloan' component={Interlibloan} title='Interlibloan' />
			</Router>
		)
}

export default RouterComponent