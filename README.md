<div align="center">

![Banner](./public/banner.png)

# GitHub Profile Viewer

Search and view GitHub profiles through a streamlined interface.

[![License](https://img.shields.io/github/license/johnarp/github-profile-viewer?style=for-the-badge)](./LICENSE)
![Version](https://img.shields.io/github/v/release/johnarp/github-profile-viewer?style=for-the-badge)

![React](https://img.shields.io/badge/React-4ec4e1?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/Typescript-3179c7?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-a356fe?style=for-the-badge&logo=vite&logoColor=white)

</div>

## ✨ Features

- Search up any GitHub user or organization
- View their information quickly through a clean interface

## 📦 Built With

| Tool | Purpose |
| - | - |
| GitHub REST API | Access profile information |

## 📸 Preview

<div style="display: flex; gap: 10px; justify-content: center">
    <img src="./public/preview-1.png" width="45%">
    <img src="./public/preview-2.png" width="45%">
</div>

## 🚀 Installation

The easiest way to access is going to the website: [https://github-profile-viewer-theta-ten.vercel.app/](https://github-profile-viewer-theta-ten.vercel.app/).

Or, if you wish to use it locally, here are the steps:

> Note: The current setup does not use VITE_ for the token and is server-side. In other words, instead of accessing GitHub's API through a token (with a high rate limit), you're instead accessing it through your IP (with a low rate limit). You may have to make changes to the code to use your own token.

### 1. Downloading the Code

Clone the repository through a terminal, such as Command Line or Powershell:

```
git clone https://github.com/johnarp/github-profile-viewer
cd github-profile-viewer
npm install
```

### 2. Run the Application

Through a terminal, navigate to the directory and use this command to run the app on your local network:

```
npm run dev
```

Then open the IP address given in a browser.

## 🗺️ Roadmap

- Website icon
- List of repos a user has starred
- Events / activity feed
- separate GitHub Repository Viewer

## 📜 Disclaimer

This project uses a shared GitHub Personal Access Token. While the rate limit is relatively high, please avoid spammy or automated usage to prevent hitting it.

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

## ⚖️ Legal

GitHub Profile Viewer is an unofficial project and is not affiliated with, endorsed by, or associated with Github Inc. or Microsoft Corporation in any way. The project uses GitHub's publicly available REST API.

"GitHub" is a trademark of Microsoft Corporation.