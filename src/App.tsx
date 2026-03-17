import { useState } from 'react'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
	const [username, setUsername] = useState('')
	const [user, setUser] = useState(null)

	async function handleSearch() {
		const response = await fetch(`https://api.github.com/users/${username}`)
		const data = await response.json()
		setUser(data)
	}

	return (
		<>
			<div className='search'>
				<input value={username} onChange={e => setUsername(e.target.value)} placeholder='Enter a GitHub Username...' />
				<button onClick={handleSearch}>Search</button>
			</div>

			{user && (
				<div className='profile'>
					<img src={user.avatar_url}></img>
					<div className='profile-info'>
						<h2>{user.name}</h2>
						<p>{user.bio}</p>
						
						<hr className='profile-divider'></hr>

						<div className='profile-stats'>
							<p className='profile-stat'>Location: <span>{user.location}</span></p>
							<p className='profile-stat'>Company: <span>{user.company}</span></p>
							<p className='profile-stat'>Email: <span>{user.email}</span></p>
							<p className='profile-stat'>Blog: <span>{user.blog}</span></p>
							<p className='profile-stat'>Followers: <span>{user.followers}</span></p>
							<p className='profile-stat'>Following: <span>{user.following}</span></p>
							<p className='profile-stat'>Repos: <span>{user.public_repos}</span></p>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default App