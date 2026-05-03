export default async function handler(req, res) {
	const { path } = req.query;
	if (!path) return res.status(400).json({ error: 'Missing path' });

	const token = process.env.GITHUB_TOKEN;
	const backup = process.env.GITHUB_TOKEN_BACKUP;

	async function fetchGitHub(t) {
		return fetch(`https://api.github.com/${path}`, {
			headers: { Authorization: `token ${t}` }
		});
	}

	let response = await fetchGitHub(token);
	if (response.status === 403) response = await fetchGitHub(backup);

	const data = await response.json();
	res.status(response.status).json(data);
}