# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

[0.3.0]: https://github.com/johnarp/github-profile-viewer/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/johnarp/github-profile-viewer/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/johnarp/github-profile-viewer/releases/tag/v0.1.0

## [0.3.0] - 2026-03-20

### Added

- Available for Hire, last push, gists
- README preview image

### Changes

- Token authentication (~5000 requests per hour total) instead of no authentication (~60 for your ip)
- Styling changes
- Links are clickable

### Fixed

- Site breaking when searching a user that doesn't exist
- Handles empty searches

## [0.2.0] - 2026-03-17

### Added

- Enter key to search
- Recent repositories, joined date, view on github

### Fixed

- TypeScript build error caused by untyped useState null

## [0.1.0] - 2026-03-17

### Added

- Searching any GitHub username via the api
- Results showing avatar, name, bio, location, company, email, blog, followers, following, and public repositories