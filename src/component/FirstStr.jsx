import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import '../scss/FirstStr.scss'

export default function FirstStr({setUsers, users}) {
	const deleData = () => {
		if(users[0]) // если данные есть, очищаем их
			setUsers([])
	}
    const getData = () => {
		if(!users[0]) { // если данных нет, делаем запрос на их получение
			fetch('https://jsonplaceholder.typicode.com/users')
                .then((users) => users.json())
                .then((users) => setUsers([ ...users ]))
		}
        return true
    }
	return (
		<div className="container-btn">
			<Button onClick={getData} variant="contained" color="primary">
				Послать запрос
			</Button>
			<Button onClick={deleData} variant="contained" color="secondary">
				Очистить стейт
			</Button>
			<Link to="/second" className="link-to">
				<Button variant="contained">перейти на вторую страницу</Button>
			</Link>
		</div>
	)
}
