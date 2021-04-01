import './scss/App.scss'
import { Link, Route } from 'react-router-dom'
import React from 'react'
import FirstStr from './component/FirstStr'
import SecondStr from './component/SecondStr'

function App() {
  const [ users, setUsers ] = React.useState([]) // стейт для хранения данных

	return (
		<div className="app">
			<div className="app__header">
				<ul>
          			<Link className="link-to" to="/" ><li>первая страница</li> </Link>
					<Link className="link-to" to="/second"><li>вторая страница</li></Link> 
				</ul>
			</div>
			<div className="app__content">
				<Route exact path="/" component={() => <FirstStr setUsers={setUsers} users={users} />} />
        		<Route exact path="/second" component={() => <SecondStr users={users} />} />
			</div>
		</div>
	)
}

export default App
