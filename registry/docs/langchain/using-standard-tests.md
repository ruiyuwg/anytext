# Using standard tests

Source: https://docs.langchain.com/oss/javascript/contributing/standard-tests-langchain

**Standard tests ensure your integration works as expected.**

When creating either a custom class for yourself or to publish in a LangChain integration, it is necessary to add tests to ensure it works as expected. LangChain provides a comprehensive [set of tests](https://pypi.org/project/langchain-tests/) for each integration type for you. This guide will show you how to add LangChain's standard test suite to each integration type.

## Setup

First, install the required dependencies:

```
Defines the interfaces we want to import to define our custom components



Provides the standard tests and plugins necessary to run them
```

```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm install @langchain/core
npm install @langchain/standard-tests
```

```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pnpm add @langchain/core
pnpm add @langchain/standard-tests
```

```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
yarn add @langchain/core
yarn add @langchain/standard-tests
```

```bash bun theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
bun add @langchain/core
bun add @langchain/standard-tests
```

There are 2 namespaces in the `langchain-tests` package:

```
**Location**: `src.unit_tests`

Designed to test the component in isolation and without access to external services

[View API reference](https://reference.langchain.com/python/langchain_tests/unit_tests)



**Location**: `src.integration_tests`

Designed to test the component with access to external services (in particular, the external service that the component is designed to interact with)

[View API reference](https://reference.langchain.com/python/langchain_tests/integration_tests)
```

## Implementing standard tests

Depending on your integration type, you will need to implement either or both unit and integration tests.

By subclassing the standard test suite for your integration type, you get the full collection of standard tests for that type. For a test run to be successful, the a given test should pass only if the model supports the capability being tested. Otherwise, the test should be skipped.

Because different integrations offer unique sets of features, most standard tests provided by LangChain are **opt-in by default** to prevent false positives. Consequently, you will need to override properties to indicate which features your integration supports - see the below example for an illustration.

```javascript tests/chat_models.standard.int.test.ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
// Indicate that a chat model supports parallel tool calls

class ChatParrotLinkStandardIntegrationTests extends ChatModelIntegrationTests<
    ChatParrotLinkCallOptions,
    AIMessageChunk
> {
    constructor() {
        // ... other required properties

        super({
            // ... other required properties
            supportsParallelToolCalls: true,  // (The default is False)
            // ...
        });
    }
```

You should organize tests in these subdirectories relative to the root of your package:

- `tests/unit_tests` for unit tests
- `tests/integration_tests` for integration tests

To see the complete list of configurable capabilities and their defaults, visit the [API reference](https://reference.langchain.com/javascript) for standard tests.

## Sandbox integrations

Deep agents sandbox integrations use `sandboxStandardTests` from `@langchain/sandbox-standard-tests`.
Call it with a config object that includes `createSandbox`, `resolvePath`, and `closeSandbox`.
Use the [Daytona integration tests](https://github.com/langchain-ai/deepagentsjs/blob/main/libs/providers/daytona/src/sandbox.int.test.ts) as a reference implementation.
See [Contributing a sandbox integration](/oss/javascript/contributing/integrations-langchain) for publishing guidelines.

***

## Troubleshooting

For a full list of the standard test suites that are available, as well as information on which tests are included and how to troubleshoot common issues, see the [Standard Tests API Reference](https://v03.api.js.langchain.com/modules/_langchain_standard_tests.html).

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/contributing/standard-tests-langchain.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
