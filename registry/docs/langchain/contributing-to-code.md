# Contributing to code

Source: https://docs.langchain.com/oss/javascript/contributing/code

Code contributions are welcome! Whether you're fixing bugs, adding features, or improving performance, your contributions help deliver a better developer experience for thousands of developers.

## Getting started

Before submitting large **new features or refactors**, please first open an issue or post to [the forum](https://forum.langchain.com/) for discussion. This ensures alignment with project goals and prevents duplicate work.

### Quick fix: submit a bugfix

For simple bugfixes, you can get started immediately:

````
Before even cloning the repository, ensure you can reliably reproduce the bug. This helps confirm the issue and provides a starting point for your fix. Maintainers and other contributors should be able to reproduce the issue based on your description without additional setup or modifications.



Fork either the [LangChain](https://github.com/langchain-ai/langchainjs), [LangGraph](https://github.com/langchain-ai/langgraphjs), or [Deep Agents](https://github.com/langchain-ai/deepagentsjs) repo to your personal GitHub account



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
git clone https://github.com/your-username/name-of-forked-repo.git

# For instance, for LangChain:
git clone https://github.com/parrot123/langchainjs.git

# For LangGraph:
git clone https://github.com/parrot123/langgraphjs.git
```

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# Inside your repo, install dependencies
pnpm install
# Create a build for all packages to resolve workspace dependencies
pnpm build
```



Create a new branch for your fix. This helps keep your changes organized and makes it easier to submit a pull request later.

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
git checkout -b your-username/short-bugfix-name
```



Add [unit tests](#test-writing-guidelines) that will fail without your fix. This allows us to verify the bug is resolved and prevents regressions



Fix the bug while following our [code quality standards](#code-quality-standards). Make the **minimal change necessary** to resolve the issue. We strongly encourage contributors to comment on the issue before they start coding. For example:

> *"I'd like to work on this. My intended approach would be to \[...brief description...]. Does this align with maintainer expectations?"*

A 30-second comment often prevents wasted effort if your initial approach is wrong.



Run the build command to ensure the package still builds properly

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pnpm build
# or build a specific workspace package
pnpm --filter @langchain/core build
```



Ensure that tests pass and no regressions are introduced. Ensure all tests pass locally before submitting your PR

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pnpm lint
pnpm test

# For bugfixes involving integrations, also run:
pnpm test:int

# Or run tests in a specific workspace package
cd libs/langchain-core
pnpm test
pnpm lint

# Or run tests for a specific package from the root of the repo
pnpm --filter @langchain/core test
pnpm --filter @langchain/core lint
```



Update docstrings and/or inline comments if behavior changes



Follow the PR template provided. If applicable, reference the issue you're fixing using a [closing keyword](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword) (e.g. `Fixes #ISSUE_NUMBER`) so that the issue is automatically closed when your PR is merged.
````

### Full development setup

For ongoing development or larger contributions:

1. Review our [contribution guidelines](#contribution-guidelines) for features, bugfixes, and integrations
2. Set up your environment following our [setup guide](#development-environment) below
3. Understand the [repository structure](#repository-structure) and package organization
4. Learn our [development workflow](#development-workflow) including testing and linting

***

## Contribution guidelines

Before you start contributing to LangChain projects, take a moment to think about why you want to. If your only goal is to add a "first contribution" to your resume (or if you're just looking for a quick win) you might be better off doing a boot-camp or an online tutorial.

Contributing to open source projects takes time and effort, but it can also help you become a better developer and learn new skills. However, it's important to know that it might be harder and slower than following a training course. That said, contributing to open source is worth it if you're willing to take the time to do things well!

### Backwards compatibility

Breaking changes to public APIs are not allowed except for critical security fixes.

See our [versioning policy](/oss/javascript/versioning) for details on major version releases.

Maintain compatibility via:

```
**Always preserve**:

* Function signatures and parameter names
* Class interfaces and method names
* Return value structure and types
* Import paths for public APIs



**Acceptable modifications**:

* Adding new optional parameters/type parameters

* Adding new methods to classes

* Improving performance without changing behavior

* Adding new modules or functions



* **Would this break existing user code?**

* Check if your target is public

* Are there existing usage patterns in tests?
```

### New features

We aim to keep the bar high for new features. We generally don't accept new core abstractions from outside contributors without an existing issue that demonstrates an acute need for them. This also applies to changes to infrastructure and dependencies.

In general, feature contribution requirements include:

```
Open an issue describing:

* The problem you're solving
* Proposed API design
* Expected usage patterns



* Follow existing code patterns
* Include comprehensive tests and documentation
* Consider security implications



* How does this interact with existing features?
* Are there performance implications?
* Does this introduce new dependencies?

We will reject features that are likely to lead to security vulnerabilities or reports.
```

### Security guidelines

Security is paramount. Never introduce vulnerabilities or unsafe patterns.

Security checklist:

```
* Validate and sanitize all user inputs

* Properly escape data in templates and queries

* Never use `eval()`, as this can lead to arbitrary code execution vulnerabilities



* Use specific exception types
* Don't expose sensitive information in error messages
* Implement proper resource cleanup



* Avoid adding hard dependencies
* Keep optional dependencies minimal
* Review third-party packages for security issues
```

***

## Development environment

Our JS/TS projects uses [`pnpm`](https://pnpm.io/) for dependency management. Make sure you have the latest version installed, or run `corepack enable` (on Node 24+) to setup the required pnpm version.

We strive to keep setup consistent across all JS/TS packages. From the repo root, run:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pnpm install
pnpm --filter {package-name} test  # Verify tests pass before starting development
```

Once you've reviewed the [contribution guidelines](#contribution-guidelines), find the package directory for the component you're working on in the [repository structure](#repository-structure) section below.

***

## Repository structure

```
LangChain is organized as a monorepo with multiple packages:


  
    * **[`langchain`](https://github.com/langchain-ai/langchainjs/tree/main/langchain#readme)** (located in `libs/langchain/`): Main package with chains, agents, and retrieval logic
    * **[`@langchain/core`](https://github.com/langchain-ai/langchainjs/tree/main/langchain-core#readme)** (located in `libs/langchain-core/`): Base interfaces and core abstractions
  

  
    Located in `libs/providers/`, these are independently versioned packages for specific integrations. For example:

    * **[`@langchain/openai`](https://github.com/langchain-ai/langchainjs/tree/main/libs/langchain-openai#readme)**: [OpenAI](/oss/javascript/integrations/providers/openai) integrations
    * **[`@langchain/anthropic`](https://github.com/langchain-ai/langchainjs/tree/main/libs/langchain-anthropic#readme)**: [Anthropic](/oss/javascript/integrations/providers/anthropic) integrations
    * **[`@langchain/google`](https://github.com/langchain-ai/langchainjs/tree/main/libs/providers/langchain-google#readme)**: [Google](/oss/javascript/integrations/providers/google) integrations
  

  
    * **[`@langchain/textsplitters`](https://github.com/langchain-ai/langchainjs/tree/main/libs/langchain-textsplitters#readme)**: Text splitting utilities
    * **[`@langchain/standard-tests`](https://github.com/langchain-ai/langchainjs/tree/main/libs/langchain-standard-tests#readme)**: Standard test suites for integrations
    * **[`langchain-community`](https://github.com/langchain-ai/langchainjs/tree/main/libs/langchain-community)**: Community maintained integrations
  




LangGraph is organized as a monorepo with multiple Python packages:


  
    * **[`langgraph`](https://github.com/langchain-ai/langgraph/tree/main/libs/langgraph#readme)** (located in `libs/langgraph/`): Core framework for building stateful, multi-actor agents
    * **[`langgraph-prebuilt`](https://github.com/langchain-ai/langgraph/tree/main/libs/prebuilt#readme)** (located in `libs/prebuilt/`): High-level APIs for creating and running agents and tools
  

  
    * **[`langgraph-checkpoint`](https://github.com/langchain-ai/langgraph/tree/main/libs/checkpoint#readme)** (located in `libs/checkpoint/`): Base interfaces for checkpoint savers
    * **[`langgraph-checkpoint-postgres`](https://github.com/langchain-ai/langgraph/tree/main/libs/checkpoint-postgres#readme)** (located in `libs/checkpoint-postgres/`): Postgres implementation
    * **[`langgraph-checkpoint-sqlite`](https://github.com/langchain-ai/langgraph/tree/main/libs/checkpoint-sqlite#readme)** (located in `libs/checkpoint-sqlite/`): SQLite implementation
  

  
    * **[`langgraph-sdk`](https://github.com/langchain-ai/langgraph/tree/main/libs/sdk-py#readme)** (located in `libs/sdk-py/`): Python SDK for the Agent Server API
    * **[`langgraph-cli`](https://github.com/langchain-ai/langgraph/tree/main/libs/cli#readme)** (located in `libs/cli/`): Official command-line interface
  




Deep Agents is organized as a monorepo with multiple Python packages:


  
    * **[`deepagents`](https://github.com/langchain-ai/deepagents/tree/main/libs/deepagents#readme)** (located in `libs/deepagents/`): Core framework for building deep agents with planning, filesystem, and subagent capabilities
    * **[`deepagents-cli`](https://github.com/langchain-ai/deepagents/tree/main/libs/cli#readme)** (located in `libs/cli/`): Interactive terminal interface with conversation resume, web search, and sandboxes
  

  
    * **[`deepagents-harbor`](https://github.com/langchain-ai/deepagents/tree/main/libs/harbor#readme)** (located in `libs/harbor/`): Harbor integration with LangSmith tracing
    * **[`deepagents-acp`](https://github.com/langchain-ai/deepagents/tree/main/libs/acp#readme)** (located in `libs/acp/`): Agent Client Protocol integration
  
```

***

## Development workflow

### Running tests

Directories are relative to the package you're working in.

We favor unit tests over integration tests when possible. Unit tests run on every pull request, so they should be fast and reliable. Integration tests run on a schedule and require more setup, so they should be reserved for confirming interface points with external services.

#### Unit tests

**Location**: `src/tests/FILENAME_BEING_TESTED.test.ts`

Unit tests cover modular logic that does not require calls to outside APIs. If you add new logic, you should add a unit test. In unit tests, check pre/post processing and mock external dependencies.

**Requirements**:

- No network calls allowed
- Test all code paths including edge cases
- Use mocks for external dependencies

To run unit tests:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# Run the entire test suite
pnpm test

# Or run a specific test file
pnpm test src/tests/FILENAME_BEING_TESTED.test.ts

# Or run a specific test function
pnpm test -t "the test that should be run"
```

#### Integration tests

**Location**: `src/tests/FILENAME_BEING_TESTED.int.test.ts`

Integration tests cover logic that requires making calls to outside APIs (often integration with other services).

Integration tests require access to external services/provider APIs (which can cost money) and therefore are not run by default.

Not every code change will require an integration test, but keep in mind that we'll require/run integration tests separately as part of our review process.

**Requirements**:

- Test real integrations with external services
- Use environment variables for API keys
- Skip gracefully if credentials unavailable

To run integration tests:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pnpm test:int
```

### Code quality standards

Contributions must adhere to the following quality requirements:

````
**Required**: Complete types for all functions

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
function processDocuments(
    docs: Document[],
    processor: DocumentProcessor,
    batchSize: number = 100
): ProcessingResult {
    // ...
}
```



**Required**: [JSDocs](https://jsdoc.app/about-getting-started) for all exported functions and interfaces

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
/**
 * Document processing instance.
 */
interface FooDocumentProcessor {
    /**
     * Process documents in batches.
     *
     * @param docs - List of documents to process.
     * @returns Processing results with success/failure counts.
     */
    process(docs: Document[]): ProcessingResult;
}

/**
 * Process documents in batches.
 *
 * @param docs - List of documents to process.
 * @param processor - Document processing instance.
 * @param batchSize - Number of documents per batch.
 * @returns Processing results with success/failure counts.
 */
export function processDocuments(
    docs: Document[],
    processor: DocumentProcessor,
    batchSize: number = 100
): ProcessingResult {
    // ...
}
```



**Automated**: Formatting and linting:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pnpm lint    # Check style and types
pnpm format  # Apply formatting
```

**Standards**:

* Descriptive variable names
* Break up complex functions (aim for fewer than 20 lines)
* Follow existing patterns in the codebase
````

***

### Test writing guidelines

In order to write effective tests, there's a few good practices to follow:

- Encapsulate the test in a `describe` block that describes the component being tested
- Use natural language to describe the test name
- Be exhaustive with assertions
- Only use snapshots for reasonably sized data objects

  ```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  describe("DocumentProcessor", () => {
      it("Should handle empty document list", () => {
          const processor = new DocumentProcessor();
          const result = processor.process([]);

          expect(result.success).toBe(true);
          expect(result.processedCount).toBe(0);
          expect(result.errors).toHaveLength(0);
      });
  });
  ```

  ```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  describe("ChatOpenAI", () => {
      it("Should test with real API", () => {
          const chat = new ChatOpenAI();
          const response = chat.invoke("Hello");
      });
  });
  ```

  ```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  describe("APIService", () => {
      it("Should call with retry", () => {
          const mockClient = new MockClient();
          const service = new APIService(client: mockClient);
          const result = service.callWithRetry();
      });
  });
  ```

### Submitting your PR

Once your tests pass and code meets quality standards:

1. Push your branch and open a pull request
2. Follow the provided PR template
3. Reference related issues using a [closing keyword](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword) (e.g., `Fixes #123`)
4. Wait for CI checks to complete

If your PR includes AI-generated content, you must follow our [acceptable uses of LLMs](/oss/javascript/contributing/overview#acceptable-uses-of-llms) policy. PRs that appear to be low-effort, AI-generated spam will be closed without comment.

Address CI failures promptly. Maintainers may close PRs that do not pass CI within a reasonable timeframe.

## Getting help

Our goal is to have the most accessible developer setup possible. Should you experience any difficulty getting setup, please ask in the [community slack](https://www.langchain.com/join-community) or open a [forum post](https://forum.langchain.com/).

You're now ready to contribute high-quality code to LangChain!

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/contributing/code.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Co-marketing

Source: https://docs.langchain.com/oss/javascript/contributing/comarketing

With over 60 million monthly downloads, LangChain has a large audience of developers building LLM applications. Beyond just listing integrations, we aim to highlight high-quality, educational examples that inspire developers and advance the ecosystem.

While we occasionally share integrations, we prioritize content that provides
meaningful insights and best practices. Our main social channels are [Twitter](https://x.com/LangChain) and
[LinkedIn](https://www.linkedin.com/company/langchain/), where we highlight the best examples.

### Content we're excited to promote

```
Blogs, YouTube videos and other media showcasing educational content. Note that we prefer content that is NOT framed as "here's how to use integration XYZ", but rather "here's how to do ABC", as we find that is more educational and helpful for developers.



End-to-end applications are great resources for developers looking to build. We prefer to highlight applications that are more complex/agentic in nature, and that use [LangGraph](https://github.com/langchain-ai/langgraphjs) as the orchestration framework. We get particularly excited about anything involving:

* Long-term memory systems
* Human-in-the-loop interaction patterns
* Multi-agent architectures



We love highlighting novel research! Whether it is research built on top of LangChain or that integrates with it.
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/contributing/comarketing.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
