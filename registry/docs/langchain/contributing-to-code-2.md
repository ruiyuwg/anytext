# Contributing to code

Source: https://docs.langchain.com/oss/python/contributing/code

Code contributions are welcome! Whether you're fixing bugs, adding features, or improving performance, your contributions help deliver a better developer experience for thousands of developers.

## Getting started

Before submitting large **new features or refactors**, please first open an issue or post to [the forum](https://forum.langchain.com/) for discussion. This ensures alignment with project goals and prevents duplicate work.

### Quick fix: submit a bugfix

For simple bugfixes, you can get started immediately:

````
Before even cloning the repository, ensure you can reliably reproduce the bug. This helps confirm the issue and provides a starting point for your fix. Maintainers and other contributors should be able to reproduce the issue based on your description without additional setup or modifications.



Fork either the [LangChain](https://github.com/langchain-ai/langchain), [LangGraph](https://github.com/langchain-ai/langgraph), or [Deep Agents](https://github.com/langchain-ai/deepagents) repo to your personal GitHub account



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
git clone https://github.com/your-username/name-of-forked-repo.git

# For instance, for LangChain:
git clone https://github.com/parrot123/langchain.git
```

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# Inside your repo, initialize environment and install dependencies
uv venv && source .venv/bin/activate
uv sync --all-groups

# or, to install a specific group only:
uv sync --group test
```

You will need to install [`uv`](https://docs.astral.sh/uv/) if you haven't previously



Create a new branch for your fix. This helps keep your changes organized and makes it easier to submit a pull request later.

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
git checkout -b your-username/short-bugfix-name
```



Add [unit tests](#test-writing-guidelines) that will fail without your fix. This allows us to verify the bug is resolved and prevents regressions



Fix the bug while following our [code quality standards](#code-quality-standards). Make the **minimal change necessary** to resolve the issue. We strongly encourage contributors to comment on the issue before they start coding. For example:

> *"I'd like to work on this. My intended approach would be to \[...brief description...]. Does this align with maintainer expectations?"*

A 30-second comment often prevents wasted effort if your initial approach is wrong.



Ensure that tests pass and no regressions are introduced. Ensure all tests pass locally before submitting your PR

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
make format
make lint
make test

# For bugfixes involving integrations, also run:
make integration_tests
# (You may need to set up API testing credentials)
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

See our [versioning policy](/oss/python/versioning) for details on major version releases.

Maintain compatibility via:

```
**Always preserve**:

* Function signatures and parameter names
* Class interfaces and method names
* Return value structure and types
* Import paths for public APIs



**Acceptable modifications**:

* Adding new optional parameters

* Adding new methods to classes

* Improving performance without changing behavior

* Adding new modules or functions



* **Would this break existing user code?**

* Check if your target is public

* If needed, is it exported in `__init__.py`?

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
* Never use `eval()`, `exec()`, or `pickle` on user data, as this can lead to arbitrary code execution vulnerabilities



* Use specific exception types
* Don't expose sensitive information in error messages
* Implement proper resource cleanup



* Avoid adding hard dependencies
* Keep optional dependencies minimal
* Review third-party packages for security issues
```

***

## Development environment

Our Python projects use [`uv`](https://docs.astral.sh/uv/getting-started/installation/) for dependency management. Make sure you have the latest version installed.

We strive to keep setup consistent across all Python packages. From the package directory, run:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
uv sync --all-groups
make test  # Verify unit tests pass before starting development
```

Once you've reviewed the [contribution guidelines](#contribution-guidelines), find the package directory for the component you're working on in the [repository structure](#repository-structure) section below.

***

## Repository structure

```
LangChain is organized as a monorepo with multiple packages:


  
    * **[`langchain`](https://github.com/langchain-ai/langchain/tree/master/libs/langchain#readme)** (located in `libs/langchain/`): Main package with chains, agents, and retrieval logic
    * **[`langchain-core`](https://github.com/langchain-ai/langchain/tree/master/libs/core#readme)** (located in `libs/core/`): Base interfaces and core abstractions
  

  
    Located in `libs/partners/`, these are independently versioned packages for specific integrations. For example:

    * **[`langchain-openai`](https://github.com/langchain-ai/langchain/tree/master/libs/partners/openai#readme)**: [OpenAI](/oss/python/integrations/providers/openai) integrations
    * **[`langchain-anthropic`](https://github.com/langchain-ai/langchain/tree/master/libs/partners/anthropic#readme)**: [Anthropic](/oss/python/integrations/providers/anthropic) integrations
    * **[`langchain-google-genai`](https://github.com/langchain-ai/langchain-google/)**: [Google Generative AI](/oss/python/integrations/chat/google_generative_ai) integrations

    Many partner packages are in external repositories. Please check the [list of integrations](/oss/python/integrations/providers/overview) for details.
  

  
    * **[`langchain-text-splitters`](https://github.com/langchain-ai/langchain/tree/master/libs/text-splitters#readme)**: Text splitting utilities
    * **[`langchain-standard-tests`](https://github.com/langchain-ai/langchain/tree/master/libs/standard-tests#readme)**: Standard test suites for integrations
    * **[`langchain-community`](https://github.com/langchain-ai/langchain-community)**: Community maintained integrations (located in a separate repo)
  




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

**Location**: `tests/unit_tests/`

Unit tests cover modular logic that does not require calls to outside APIs. If you add new logic, you should add a unit test. In unit tests, check pre/post processing and mock external dependencies.

**Requirements**:

- No network calls allowed
- Test all code paths including edge cases
- Use mocks for external dependencies

To run unit tests:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
make test

# Or directly:
uv run --group test pytest tests/unit_tests

# To run a specific test:
TEST_FILE=tests/unit_tests/test_imports.py make test
```

#### Integration tests

**Location**: `tests/integration_tests/`

Integration tests cover logic that requires making calls to outside APIs (often integration with other services).

Integration tests require access to external services/provider APIs (which can cost money) and therefore are not run by default.

Not every code change will require an integration test, but keep in mind that we'll require/run integration tests separately as part of our review process.

**Requirements**:

- Test real integrations with external services
- Use environment variables for API keys
- Skip gracefully if credentials unavailable

To run integration tests:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
make integration_tests

# Or directly:
uv run --group test --group test_integration pytest --retries 3 --retry-delay 1 tests/integration_tests

# To run a specific test:
TEST_FILE=tests/integration_tests/test_openai.py make integration_tests
```

### Code quality standards

Contributions must adhere to the following quality requirements:

`````
**Required**: Complete type annotations for all functions

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
def process_documents(
    docs: list[Document],
    processor: DocumentProcessor,
    *,
    batch_size: int = 100
) -> ProcessingResult:
    """Process documents in batches.

    Args:
        docs: List of documents to process.
        processor: Document processing instance.
        batch_size: Number of documents per batch.

    Returns:
        Processing results with success/failure counts.
    """
```



**Required**: [Google-style docstrings](https://google.github.io/styleguide/pyguide.html) for all public functions.

**Guiding principle**: Docstrings describe "what"; docs on this site explain the "how" and "why."

| Content type                | Location   | Purpose                           |
| --------------------------- | ---------- | --------------------------------- |
| Parameter types             | Signature  | Auto-generates into API reference |
| Parameter descriptions      | Docstrings | Auto-generates into API reference |
| Return types and exceptions | Docstrings | API reference                     |
| Minimal usage example       | Docstrings | Show basic instantiation pattern  |
| Feature tutorials           | This site  | In-depth walkthroughs             |
| End-to-end examples         | This site  | Real-world usage patterns         |
| Conceptual explanations     | This site  | Understanding and context         |

**Docstrings should contain:**

1. One-line summary of what the class/function does
2. Link to this site for tutorials, guides, and usage patterns
3. Parameter documentation with types and descriptions
4. Return value description
5. Exceptions that may be raised
6. Single minimal example showing basic instantiation/usage as necessary


  
    ````python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
    class ChatAnthropic(BaseChatModel):
        """Interface to Claude chat models.

        See the [usage guide](https://docs.langchain.com/oss/python/integrations/chat/anthropic)
        for tutorials, feature walkthroughs, and examples.

        Args:
            model: Model identifier (e.g., `'claude-sonnet-4-6'`).
            temperature: Sampling temperature between `0` and `1`.
            max_tokens: Maximum number of tokens to generate.
            api_key: Anthropic API key.

                If not provided, reads from the `ANTHROPIC_API_KEY`
                environment variable.
            timeout: Request timeout in seconds.
            max_retries: Maximum number of retries for failed requests.

        Returns:
            A chat model instance that can be invoked with messages.

        Raises:
            ValueError: If the model identifier is not recognized.
            AuthenticationError: If the API key is invalid.

        Example:
            ```python
            from langchain_anthropic import ChatAnthropic

            model = ChatAnthropic(model="claude-sonnet-4-6")
            response = model.invoke("Hello!")
            ```
        """
    ````
  

  
    Avoid duplicating content that belongs in docstrings:

    * **Parameter types**: These are in the function signature and auto-generated into the API reference.

    * **Feature tutorials**: Don't include extended walkthroughs. Instead, link to this site:

      ```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
      """
      ...

      See the [extended thinking guide](https://docs.langchain.com/oss/integrations/chat/anthropic#extended-thinking)
      for configuration options.
      """
      ```

    * **Multiple example variations**: Include one minimal example, then link to comprehensive guides:

      ```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
      """
      Example:
          \`\`\`python
          message = HumanMessage(content=[
              {"type": "image", "url": "https://example.com/image.jpg"}
          ])
          \`\`\`

      See the [multimodal guide](https://docs.langchain.com/oss/integrations/chat/anthropic#multimodal)
      for all supported input formats.
      """
      ```

    * **Conceptual explanations**: Keep to factual parameter descriptions. Link to docs for deeper context.

    * **MkDocs-specific syntax**: Avoid `???+`, accordions, or tabs in docstrings. They don't render in IDEs.
  




**Automated**: Formatting and linting via [`ruff`](https://docs.astral.sh/ruff/)

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
make format  # Apply formatting
make lint    # Check style and types
```

**Standards**:

* Descriptive variable names
* Break up complex functions (aim for fewer than 20 lines)
* Follow existing patterns in the codebase
`````

### Dependencies

LangChain packages distinguish between **hard dependencies** and **optional dependencies** to keep packages lightweight and minimize installation overhead for users.

```
Almost all new dependencies should be optional. Use optional dependencies when:

* The dependency is only needed for specific integrations or features
* Users can meaningfully use the package without this dependency
* The dependency is large or has many transitive dependencies

**Requirements:**

* Users without the dependency installed must be able to **import** your code without any side effects (no warnings, no errors, no exceptions)
* `pyproject.toml` and `uv.lock` are **not** modified

**To add an optional dependency:**

1. Add the dependency to the appropriate testing dependencies file (e.g., `extended_testing_deps.txt`)
2. Add a unit test that at minimum attempts to import the new code. Ideally, the unit test uses lightweight fixtures to test the logic of the code.
3. Use the `@pytest.mark.requires("package_name")` decorator for any unit tests that require the dependency.



Hard dependencies are installed automatically when users install the package. Use hard dependencies only when:

* The package fundamentally cannot function without the dependency
* The dependency is small and has minimal transitive dependencies
* There is no reasonable way to make the functionality optional


  Adding hard dependencies increases install time and potential version conflicts for all users.

  Maintainers will scrutinize hard dependency additions carefully!


**To add a hard dependency:**

1. Open an issue or discussion explaining why the dependency must be hard rather than optional
2. Add the dependency to `pyproject.toml` under the appropriate section
3. Run `uv lock` to update the lockfile
4. Include comprehensive tests covering the new functionality
```

***

### Test writing guidelines

In order to write effective tests, there's a few good practices to follow:

- Use natural language to describe the test in docstrings
- Use descriptive variable names
- Be exhaustive with assertions

  ```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  def test_document_processor_handles_empty_input():
      """Test processor gracefully handles empty document list."""
      processor = DocumentProcessor()

      result = processor.process([])

      assert result.success
      assert result.processed_count == 0
      assert len(result.errors) == 0
  ```

  ```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  @pytest.mark.requires("openai")
  def test_openai_chat_integration():
      """Test OpenAI chat integration with real API."""

      chat = ChatOpenAI()
      response = chat.invoke("Hello")

      assert isinstance(response.content, str)
      assert len(response.content) > 0
  ```

  ```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  def test_retry_mechanism(mocker):
      """Test retry mechanism handles transient failures."""
      mock_client = mocker.Mock()
      mock_client.call.side_effect = [
          ConnectionError("Temporary failure"),
          {"result": "success"}
      ]

      service = APIService(client=mock_client)
      result = service.call_with_retry()

      assert result["result"] == "success"
      assert mock_client.call.call_count == 2
  ```

### Submitting your PR

Once your tests pass and code meets quality standards:

1. Push your branch and open a pull request
2. Follow the provided PR template
3. Reference related issues using a [closing keyword](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword) (e.g., `Fixes #123`)
4. Wait for CI checks to complete

If your PR includes AI-generated content, you must follow our [acceptable uses of LLMs](/oss/python/contributing/overview#acceptable-uses-of-llms) policy. PRs that appear to be low-effort, AI-generated spam will be closed without comment.

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

Source: https://docs.langchain.com/oss/python/contributing/comarketing

With over 60 million monthly downloads, LangChain has a large audience of developers building LLM applications. Beyond just listing integrations, we aim to highlight high-quality, educational examples that inspire developers and advance the ecosystem.

While we occasionally share integrations, we prioritize content that provides
meaningful insights and best practices. Our main social channels are [Twitter](https://x.com/LangChain) and
[LinkedIn](https://www.linkedin.com/company/langchain/), where we highlight the best examples.

### Content we're excited to promote

```
Blogs, YouTube videos and other media showcasing educational content. Note that we prefer content that is NOT framed as "here's how to use integration XYZ", but rather "here's how to do ABC", as we find that is more educational and helpful for developers.



End-to-end applications are great resources for developers looking to build. We prefer to highlight applications that are more complex/agentic in nature, and that use [LangGraph](https://github.com/langchain-ai/langgraph) as the orchestration framework. We get particularly excited about anything involving:

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
