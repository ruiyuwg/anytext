Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Guides](https://docs.docker.com/guides/)

- [Get started](/get-started/)
- [Manuals](/manuals/)
- [Reference](/reference/)

[Python language-specific guide](https://docs.docker.com/guides/python/)

This guide explains how to containerize Python applications using Docker.

![](https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg "Python") Python

20 minutes

[1](https://docs.docker.com/guides/python/containerize/)

[Containerize your app](https://docs.docker.com/guides/python/containerize/)

[2](https://docs.docker.com/guides/python/develop/)

[Develop your app](https://docs.docker.com/guides/python/develop/)

[3](https://docs.docker.com/guides/python/lint-format-typing/)

[Linting and typing](https://docs.docker.com/guides/python/lint-format-typing/)

[4](https://docs.docker.com/guides/python/configure-github-actions/)

[Automate your builds with GitHub Actions](https://docs.docker.com/guides/python/configure-github-actions/)

[5](https://docs.docker.com/guides/python/deploy/)

[Test your deployment](https://docs.docker.com/guides/python/deploy/)

[« Back to all guides](/guides/)

# Linting, formatting, and type checking for Python

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Prerequisites](#prerequisites)

Complete [Develop your app](https://docs.docker.com/guides/python/develop/).

## [Overview](#overview)

In this section, you'll learn how to set up code quality tools for your Python application. This includes:

- Linting and formatting with Ruff
- Static type checking with Pyright
- Automating checks with pre-commit hooks

## [Linting and formatting with Ruff](#linting-and-formatting-with-ruff)

Ruff is an extremely fast Python linter and formatter written in Rust. It replaces multiple tools like flake8, isort, and black with a single unified tool.

Before using Ruff, install it in your Python environment:

```bash
pip install ruff
```

If you're using a virtual environment, make sure it is activated so the `ruff` command is available when you run the commands below.

Create a `pyproject.toml` file:

```toml
[tool.ruff]
target-version = "py312"

[tool.ruff.lint]
select = [
    "E",  # pycodestyle errors
    "W",  # pycodestyle warnings
    "F",  # pyflakes
    "I",  # isort
    "B",  # flake8-bugbear
    "C4",  # flake8-comprehensions
    "UP",  # pyupgrade
    "ARG001", # unused arguments in functions
]
ignore = [
    "E501",  # line too long, handled by black
    "B008",  # do not perform function calls in argument defaults
    "W191",  # indentation contains tabs
    "B904",  # Allow raising exceptions without from e, for HTTPException
]
```

### [Using Ruff](#using-ruff)

Run these commands to check and format your code:

```bash
# Check for errors
ruff check .

# Automatically fix fixable errors
ruff check --fix .

# Format code
ruff format .
```

## [Type checking with Pyright](#type-checking-with-pyright)

Pyright is a fast static type checker for Python that works well with modern Python features.

Add `Pyright` configuration in `pyproject.toml`:

```toml
[tool.pyright]
typeCheckingMode = "strict"
pythonVersion = "3.12"
exclude = [".venv"]
```

### [Running Pyright](#running-pyright)

To check your code for type errors:

```bash
pyright
```

## [Setting up pre-commit hooks](#setting-up-pre-commit-hooks)

Pre-commit hooks automatically run checks before each commit. The following `.pre-commit-config.yaml` snippet sets up Ruff:

```yaml
  https: https://github.com/charliermarsh/ruff-pre-commit
  rev: v0.2.2
  hooks:
    - id: ruff
      args: [--fix]
    - id: ruff-format
```

To install and use:

```bash
pre-commit install
git commit -m "Test commit"  # Automatically runs checks
```

## [Summary](#summary)

In this section, you learned how to:

- Configure and use Ruff for linting and formatting
- Set up Pyright for static type checking
- Automate checks with pre-commit hooks

These tools help maintain code quality and catch errors early in development.

## [Next steps](#next-steps)

- [Configure GitHub Actions](https://docs.docker.com/guides/python/configure-github-actions/) to run these checks automatically
- Customize linting rules to match your team's style preferences
- Explore advanced type checking features

[Automate your builds with GitHub Actions »](https://docs.docker.com/guides/python/configure-github-actions/)

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/python/lint-format-typing.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2fpython%2flint-format-typing%2f\&labels=status%2Ftriage)

Table of contents
