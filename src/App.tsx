import { useState } from 'react'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
	// console.log(import.meta.env.VITE_GITHUB_TOKEN)
	const [username, setUsername] = useState('')
	const [user, setUser] = useState<any>(null)
	const [repos, setRepos] = useState<any[]>([])

function formatDate(iso: string) {
	return new Date(iso).toLocaleDateString('en-US', {
		month: 'long', day: 'numeric', year: 'numeric'
	})
}

async function fetchWithFallback(url: string) {
	const primary = import.meta.env.VITE_GITHUB_TOKEN
	const secondary = import.meta.env.VITE_GITHUB_TOKEN_BACKUP

	const res = await fetch(url, { headers: {Authorization: `token ${primary}` } })

	if (res.status === 403) {
		return fetch(url, { headers: { Authorization: `token ${secondary}` } })
	}

	return res
}

async function handleSearch() {
	if (!username.trim()) return

	const [userRes, reposRes] = await Promise.all([
		fetchWithFallback(`https://api.github.com/users/${username}`),
		fetchWithFallback(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
    ])
	if (!userRes.ok) {
		setUser(null)
		setRepos([])
		return
	}
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
					placeholder='Enter a GitHub Username'
				/>
				<button onClick={handleSearch}>Search</button>
			</div>

			{user && (
				<div className='profile'>
					<img src={user.avatar_url}></img>
					<div className='profile-info'>
						<div className='profile-name-row'>
							<h2>{user.name}</h2>
							<span className={`profile-type ${user.type === 'Organization' ? 'type-org' : 'type-user'}`}>
								{user.type === 'Organization' ? 'Org' : 'User'}
							</span>
						</div>
						<a className='profile-username' href={user.html_url} target='_blank'>@{user.login}</a>
						<p>{user.bio}</p>
						{user.hireable && <p className='hireable'>Available for Hire</p>}
						
						<hr className='profile-divider'></hr>

						<div className='profile-stats'>
							<p className='profile-stat'>Location: <span>{user.location ?? '-'}</span></p>
							<p className='profile-stat'>Company: <span>{user.company ?? '-'}</span></p>
							<p className='profile-stat'>Email: <span>{user.email ?? '-'}</span></p>
							<p className='profile-stat'>Blog: <span><a className='profile-link' href={user.blog} target='_blank'>{user.blog ?? '-'}</a></span></p>
							<p className='profile-stat'>Followers: <span>{user.followers ?? '-'}</span></p>
							<p className='profile-stat'>Following: <span>{user.following ?? '-'}</span></p>
							<p className='profile-stat'>Repos: <span>{user.public_repos ?? '-'}</span></p>
							<p className='profile-stat'>Gists: <span>{user.public_gists ?? '-'}</span></p>
						</div>

						<hr className='profile-divider'></hr>

						<div className='profile-stats'>
							<p className='profile-stat'>Joined: <span>{formatDate(user.created_at)}</span></p>
							{repos.length > 0 && (
								<p className='profile-stat'>Last Push: <span>{formatDate(repos[0].pushed_at)}</span></p>
							)}
						</div>

						<hr className='profile-divider'></hr>

						<div className='repos'>
							<h3>Recent Repositories</h3>
							<div className='repos-grid'>
								{repos.map(repo => (
									<a key={repo.id} className='repo-card' href={repo.html_url} target='_blank'>
										<p className='repo-name'>{repo.name}</p>
										<p className='repo-desc'>{repo.description ?? '-'}</p>
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