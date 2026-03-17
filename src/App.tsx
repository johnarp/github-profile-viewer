import { useState } from 'react'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
	const [username, setUsername] = useState('')
	const [user, setUser] = useState<any>(null)
	const [repos, setRepos] = useState<any[]>([])

async function handleSearch() {
	const [userRes, reposRes] = await Promise.all([
		fetch(`https://api.github.com/users/${username}`),
		fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
    ])
    const userData = await userRes.json()
    const reposData = await reposRes.json()
    setUser(userData)
    setRepos(reposData)
}

	return (
		<>
			<div className='search'>
				<input value={username} 
					onChange={e => setUsername(e.target.value)}
					onKeyDown={e => e.key === 'Enter' && handleSearch()}
					placeholder='Enter a GitHub Username...'
				/>
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

						<hr className='profile-divider'></hr>

						<div className='profile-stats'>
							<p className='profile-stat'>Joined: <span>{user.created_at}</span></p>
							<p className='profile-stat'>View on GitHub: <span>{user.html_url}</span></p>
						</div>

						<hr className='profile-divider'></hr>

						<div className='repos'>
							<h3>Recent Repositories</h3>
							<div className='repos-grid'>
								{repos.map(repo => (
									<a key={repo.id} className='repo-card' href={repo.html_url} target='_blank'>
										<p className='repo-name'>{repo.name}</p>
										<p className='repo-desc'>{repo.description}</p>
										<div className='repo-meta'>
											{repo.language && <span>{repo.language}</span>}
											<span>★ {repo.stargazers_count}</span>
										</div>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default App