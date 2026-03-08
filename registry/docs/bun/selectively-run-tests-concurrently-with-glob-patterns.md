# Selectively run tests concurrently with glob patterns

Source: https://bun.com/docs/guides/test/concurrent-test-glob

Set a glob pattern to decide which tests from which files run in parallel

This guide demonstrates how to use the `concurrentTestGlob` option to selectively run tests concurrently based on file naming patterns.

## Project Structure

```sh title="Project Structure" icon="folder-tree" theme={"theme":{"light":"github-light","dark":"dracula"}}
my-project/
├── bunfig.toml
├── tests/
│   ├── unit/
│   │   ├── math.test.ts          # Sequential
│   │   └── utils.test.ts         # Sequential
│   └── integration/
│       ├── concurrent-api.test.ts     # Concurrent
│       └── concurrent-database.test.ts # Concurrent
```

## Configuration

Configure your `bunfig.toml` to run test files with "concurrent-" prefix concurrently:

```toml title="bunfig.toml" icon="settings" theme={"theme":{"light":"github-light","dark":"dracula"}}
[test]
# Run all test files with "concurrent-" prefix concurrently
concurrentTestGlob = "**/concurrent-*.test.ts"
```

## Test Files

### Unit Test (Sequential)

Sequential tests are good for tests that share state or have specific ordering requirements:

```ts title="tests/unit/math.test.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { test, expect } from "bun:test";

// These tests run sequentially by default
let sharedState = 0;

test("addition", () => {
  sharedState = 5 + 3;
  expect(sharedState).toBe(8);
});

test("uses previous state", () => {
  // This test depends on the previous test's state
  expect(sharedState).toBe(8);
});
```

### Integration Test (Concurrent)

Tests in files matching the glob pattern automatically run concurrently:

```ts title="tests/integration/concurrent-api.test.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { test, expect } from "bun:test";

// These tests automatically run concurrently due to filename matching the glob pattern.
// Using test() is equivalent to test.concurrent() when the file matches concurrentTestGlob.
// Each test is independent and can run in parallel.

test("fetch user data", async () => {
  const response = await fetch("/api/user/1");
  expect(response.ok).toBe(true);
});

// can also use test.concurrent() for explicitly marking it as concurrent
test.concurrent("fetch posts", async () => {
  const response = await fetch("/api/posts");
  expect(response.ok).toBe(true);
});

// can also use test.serial() for explicitly marking it as sequential
test.serial("fetch comments", async () => {
  const response = await fetch("/api/comments");
  expect(response.ok).toBe(true);
});
```

## Running Tests

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
# Run all tests - concurrent-*.test.ts files will run concurrently
bun test

# Override: Force ALL tests to run concurrently
# Note: This overrides bunfig.toml and runs all tests concurrently, regardless of glob
bun test --concurrent

# Run only unit tests (sequential)
bun test tests/unit

# Run only integration tests (concurrent due to glob pattern)
bun test tests/integration
```

## Benefits

1. **Gradual Migration**: Migrate to concurrent tests file by file by renaming them
2. **Clear Organization**: File naming convention indicates execution mode
3. **Performance**: Integration tests run faster in parallel
4. **Safety**: Unit tests remain sequential where needed
5. **Flexibility**: Easy to change execution mode by renaming files

## Migration Strategy

To migrate existing tests to concurrent execution:

1. **Start with independent integration tests** - These typically don't share state
2. **Rename files to match the glob pattern**: `mv api.test.ts concurrent-api.test.ts`
3. **Verify tests still pass** - Run `bun test` to ensure no race conditions
4. **Monitor for shared state issues** - Watch for flaky tests or unexpected failures
5. **Continue migrating stable tests incrementally** - Don't rush the migration

## Tips

- **Use descriptive prefixes**: `concurrent-`, `parallel-`, `async-`
- **Keep related sequential tests together** in the same directory
- **Document why certain tests must remain sequential** with comments
- **Use `test.concurrent()` for fine-grained control** in sequential files
  (Note: In files matched by `concurrentTestGlob`, plain `test()` already runs concurrently)

## Multiple Patterns

You can specify multiple patterns for different test categories:

```toml title="bunfig.toml" icon="settings" theme={"theme":{"light":"github-light","dark":"dracula"}}
[test]
concurrentTestGlob = [
  "**/integration/*.test.ts",
  "**/e2e/*.test.ts",
  "**/concurrent-*.test.ts"
]
```

This configuration will run tests concurrently if they match any of these patterns:

- All tests in `integration/` directories
- All tests in `e2e/` directories
- All tests with `concurrent-` prefix anywhere in the project

# Generate code coverage reports with the Bun test runner

Source: https://bun.com/docs/guides/test/coverage

Bun's test runner supports built-in *code coverage reporting*. This makes it easy to see how much of the codebase is covered by tests and find areas that are not currently well-tested.

***

Pass the `--coverage` flag to `bun test` to enable this feature. This will print a coverage report after the test run.

The coverage report lists the source files that were executed during the test run, the percentage of functions and lines that were executed, and the line ranges that were not executed during the run.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun test --coverage
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}

test.test.ts:
✓ math > add [0.71ms]
✓ math > multiply [0.03ms]
✓ random [0.13ms]
-------------|---------|---------|-------------------
File         | % Funcs | % Lines | Uncovered Line #s
-------------|---------|---------|-------------------
All files    |   66.67 |   77.78 |
 math.ts     |   50.00 |   66.67 |
 random.ts   |   50.00 |   66.67 |
-------------|---------|---------|-------------------

 3 pass
 0 fail
 3 expect() calls
```

***

To always enable coverage reporting by default, add the following line to your `bunfig.toml`:

```toml bunfig.toml icon="settings" theme={"theme":{"light":"github-light","dark":"dracula"}}
[test]
coverage = true # always enable coverage
```

***

Refer to [Docs > Test runner > Coverage](/test/code-coverage) for complete documentation on code coverage reporting in Bun.

# Set a code coverage threshold with the Bun test runner

Source: https://bun.com/docs/guides/test/coverage-threshold

Bun's test runner supports built-in code coverage reporting via the `--coverage` flag.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun test --coverage
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
test.test.ts:
✓ math > add [0.71ms]
✓ math > multiply [0.03ms]
✓ random [0.13ms]
-------------|---------|---------|-------------------
File         | % Funcs | % Lines | Uncovered Line #s
-------------|---------|---------|-------------------
All files    |   66.67 |   77.78 |
 math.ts     |   50.00 |   66.67 |
 random.ts   |   50.00 |   66.67 |
-------------|---------|---------|-------------------

 3 pass
 0 fail
 3 expect() calls
```

***

To set a minimum coverage threshold, add the following line to your `bunfig.toml`. This requires that 90% of your codebase is covered by tests.

```toml bunfig.toml icon="settings" theme={"theme":{"light":"github-light","dark":"dracula"}}
[test]
# to require 90% line-level and function-level coverage
coverageThreshold = 0.9
```

***

If your test suite does not meet this threshold, `bun test` will exit with a non-zero exit code to signal a failure.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun test --coverage
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
<test output>
$ echo $?
1 # this is the exit code of the previous command
```

***

Different thresholds can be set for line-level and function-level coverage.

```toml bunfig.toml icon="settings" theme={"theme":{"light":"github-light","dark":"dracula"}}
[test]
# to set different thresholds for lines and functions
coverageThreshold = { lines = 0.5, functions = 0.7 }
```

***

See [Docs > Test runner > Coverage](/test/code-coverage) for complete documentation on code coverage reporting in Bun.
