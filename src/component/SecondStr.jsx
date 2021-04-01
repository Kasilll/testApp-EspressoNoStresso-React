import React from 'react'
import '../scss/SecondStr.scss'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

export default function SecondStr({ users }) {
	return (
		<div className="container__users">
			<Link to="/" className="link-to">
				<Button className="container__users__btn" variant="contained" color="secondary">
					перейти на первую страницу
				</Button>
			</Link>
			{users[0] ? (
				users.map((el) => (
					<div className="item" key={el.id}>
						{el.username}
					</div>
				))
			) : (
				<div className="no-data">Чтобы отобразить данные нужно послать запрос</div>
			)}
		</div>
	)
}
