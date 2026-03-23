# Using standard tests

Source: https://docs.langchain.com/oss/python/contributing/standard-tests-langchain

**Standard tests ensure your integration works as expected.**

When creating either a custom class for yourself or to publish in a LangChain integration, it is necessary to add tests to ensure it works as expected. LangChain provides a comprehensive [set of tests](https://pypi.org/project/langchain-tests/) for each integration type for you. This guide will show you how to add LangChain's standard test suite to each integration type.

## Setup

First, install the required dependencies:

```
Defines the interfaces we want to import to define our custom components



Provides the standard tests and `pytest` plugins necessary to run them
```

Because added tests in new versions of `langchain-tests` can break your CI/CD pipelines, we recommend pinning to the latest version of [`langchain-tests`](https://pypi.org/project/langchain-tests/#history) to avoid unexpected changes.

```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U langchain-core
pip install -U langchain-tests
```

```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
uv add langchain-core
uv add langchain-tests
```

There are 2 namespaces in the `langchain-tests` package:

```
**Location**: `langchain_tests.unit_tests`

Designed to test the component in isolation and without access to external services

[View API reference](https://reference.langchain.com/python/langchain_tests/unit_tests)



**Location**: `langchain_tests.integration_tests`

Designed to test the component with access to external services (in particular, the external service that the component is designed to interact with)

[View API reference](https://reference.langchain.com/python/langchain_tests/integration_tests)
```

Both types of tests are implemented as [`pytest`](https://docs.pytest.org/en/stable/) class-based test suites.

## Implementing standard tests

Depending on your integration type, you will need to implement either or both unit and integration tests.

By subclassing the standard test suite for your integration type, you get the full collection of standard tests for that type. For a test run to be successful, the a given test should pass only if the model supports the capability being tested. Otherwise, the test should be skipped.

Because different integrations offer unique sets of features, most standard tests provided by LangChain are **opt-in by default** to prevent false positives. Consequently, you will need to override properties to indicate which features your integration supports - see the below example for an illustration.

```python tests/integration_tests/test_standard.py theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# Indicate that a chat model supports image inputs

class TestChatParrotLinkStandard(ChatModelIntegrationTests):
    # ... other required properties

    @property
    def supports_image_inputs(self) -> bool:
        return True  # (The default is False)
```

You should organize tests in these subdirectories relative to the root of your package:

- `tests/unit_tests` for unit tests
- `tests/integration_tests` for integration tests

To see the complete list of configurable capabilities and their defaults, visit the [API reference](https://reference.langchain.com/python/langchain_tests) for standard tests.

Here are some example implementations of standard tests from popular integrations:

```
  Unit tests
  Unit tests
  Unit tests





  Integration tests
  Integration tests
  Integration tests




Ensure your integration passes the standard test suite.
See the [Daytona integration](https://github.com/langchain-ai/deepagents/blob/main/libs/partners/daytona/tests/integration_tests/test_integration.py) as an example.

Sandbox Integration tests
```

## Sandbox integrations

Deep Agents sandbox integrations use `SandboxIntegrationTests` from `langchain_tests.integration_tests`.
Subclass it and provide a `sandbox` fixture that yields a `SandboxBackendProtocol` instance.
Use the [Daytona integration tests](https://github.com/langchain-ai/deepagents/blob/main/libs/partners/daytona/tests/integration_tests/test_integration.py) as a reference implementation.
See [Contributing a sandbox integration](/oss/python/contributing/integrations-langchain) for publishing guidelines.

***

## Running tests

If bootstrapping an integration from a template, a `Makefile` is provided that includes targets for running unit and integration tests:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
make test
make integration_test
```

Otherwise, if you follow the recommended directory structure, you can run tests with:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# Run all tests
uv run --group test pytest tests/unit_tests/
uv run --group test --group test_integration pytest -n auto tests/integration_tests/

# For certain unit tests, you may need to set certain flags and environment variables:
TIKTOKEN_CACHE_DIR=tiktoken_cache uv run --group test pytest --disable-socket --allow-unix-socket tests/unit_tests/

# Run a specific test file
uv run --group test pytest tests/integration_tests/test_chat_models.py

# Run a specific test function in a file
uv run --group test pytest tests/integration_tests/test_chat_models.py::test_chat_completions

# Run a specific test function within a class
uv run --group test pytest tests/integration_tests/test_chat_models.py::TestChatParrotLinkIntegration::test_chat_completions
```

## Troubleshooting

For a full list of the standard test suites that are available, as well as information on which tests are included and how to troubleshoot common issues, see the [Standard Tests API Reference](https://reference.langchain.com/python/langchain_tests).

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/contributing/standard-tests-langchain.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
