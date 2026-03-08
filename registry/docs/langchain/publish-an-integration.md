# Publish an integration

Source: https://docs.langchain.com/oss/python/contributing/publish-langchain

**Make your integration available to the community.**

**Do not submit integration PRs to the LangChain or Deep Agents repositories.**

New integrations should be published as **standalone PyPI packages** under your own GitHub organization or account (e.g., `langchain-yourservice`), not as PRs to the [`langchain-ai/langchain`](https://github.com/langchain-ai/langchain) repository.

The main repository only contains a small subset of first-party integrations (like OpenAI, Anthropic, and Ollama) maintained by the LangChain team.

Now that your package is implemented and tested, you can publish it and add documentation to make it discoverable by the community.

## Publishing your package

This guide assumes you have already implemented your package and written tests for it. If you haven't, please refer to the [implementation guide](/oss/python/contributing/implement-langchain) and [testing guide](/oss/python/contributing/standard-tests-langchain).

For the purposes of this guide, we'll be using PyPI as the package registry. You may choose to publish to other registries if you prefer; instructions will vary.

### Setup credentials

First, make sure you have a PyPI account:

```
    Go to the [PyPI website](https://pypi.org/) and create an account
  

  
    Verify your email address by clicking the link that PyPI emails to you
  

  
    Go to your account settings and click "Generate Recovery Codes" to enable 2FA. To generate an API token, you **must** have 2FA enabled
  

  
    Go to your account settings and [generate a new API token](https://pypi.org/manage/account/token/)
  
```

### Build and publish

Helpful guide from `uv` on how to build and publish a package to PyPI.

## Adding documentation

To add documentation for your package to this site under the [integrations tab](/oss/python/integrations/providers/overview), you will need to create the relevant documentation pages and open a PR in the [LangChain docs repository](https://github.com/langchain-ai/docs).

### Writing docs

Depending on the type of integration you have built, you will need to create different types of documentation pages. LangChain provides templates for different types of integrations to help you get started.

To reference existing documentation, you can look at the [list of integrations](/oss/python/integrations/providers/overview) and find similar ones to yours.

To view a given documentation page in raw markdown, use the dropdown button next to "Copy page" on the top right of the page and select "View as Markdown".

### Submit a PR to the docs repo

Make a fork of the [LangChain docs repository](https://github.com/langchain-ai/docs) (not the main `langchain` repo) under a personal GitHub account, and clone it locally. Create a new branch for your integration. Copy the template and modify it using your favorite markdown text editor. Make sure to refer to and follow the [documentation guide](/oss/python/contributing/documentation) when writing your documentation.

This PR is for **documentation only**. Your integration package itself should live in its own repository under your GitHub organization or account, published to PyPI as a standalone package.

We may reject PRs or ask for modification if:

- CI checks fail
- Severe grammatical errors or typos are present
- [Mintlify components](/oss/python/contributing/documentation#mintlify-components) are used incorrectly
- Pages are missing a [frontmatter](/oss/python/contributing/documentation#page-structure)
- [Localization](/oss/python/contributing/documentation#localization) is missing (where applicable)
- [Code examples](/oss/python/contributing/documentation#in-code-documentation) do not run or have errors
- [Quality standards](/oss/python/contributing/documentation#quality-standards) are not met

Please be patient as we handle a large volume of PRs. We will review your PR as soon as possible and provide feedback or merge it. **Do not repeatedly tag maintainers about your PR.**

If your PR includes AI-generated content, you must follow our [acceptable uses of LLMs](/oss/python/contributing/overview#acceptable-uses-of-llms) policy.

***

## Next steps

**Congratulations!** Your integration is now published and documented, making it available to the entire LangChain community.

Get in touch with the LangChain marketing team to explore co-marketing opportunities.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/contributing/publish-langchain.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
