# Security Policy

## Supported Versions

| Version | Supported |
| ------- | --------- |
| 0.1.x   | Yes       |

## Reporting a Vulnerability

If you discover a security vulnerability, please report it responsibly:

1. **Do not** open a public GitHub issue.
2. Email the maintainer directly or use [GitHub's private vulnerability reporting](https://github.com/ruiyuwg/anytext/security/advisories/new).
3. Include a description of the vulnerability and steps to reproduce.

You can expect an initial response within 72 hours. We will work with you to understand the issue and coordinate a fix before any public disclosure.

## Scope

This project is a CLI tool that fetches documentation from a static registry on GitHub. Security concerns include:

- Cache directory permissions (`~/.anytext/`)
- Network requests to the registry (fetching manifest and docs)
- Command-line argument handling
