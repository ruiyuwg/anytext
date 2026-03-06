# panicThreshold

The `panicThreshold` option controls how the React Compiler handles errors during compilation.

```js
{
  panicThreshold: "none"; // Recommended
}
```

---

## Reference {/_reference_/}

### `panicThreshold` {/_panicthreshold_/}

Determines whether compilation errors should fail the build or skip optimization.

#### Type {/_type_/}

```
'none' | 'critical_errors' | 'all_errors'
```

#### Default value {/_default-value_/}

`'none'`

#### Options {/_options_/}

- **`'none'`** (default, recommended): Skip components that can't be compiled and continue building
- **`'critical_errors'`**: Fail the build only on critical compiler errors
- **`'all_errors'`**: Fail the build on any compiler diagnostic

#### Caveats {/_caveats_/}

- Production builds should always use `'none'`
- Build failures prevent your application from building
- The compiler automatically detects and skips problematic code with `'none'`
- Higher thresholds are only useful during development for debugging

---

## Usage {/_usage_/}

### Production configuration (recommended) {/_production-configuration_/}

For production builds, always use `'none'`. This is the default value:

```js
{
  panicThreshold: "none";
}
```

This ensures:

- Your build never fails due to compiler issues
- Components that can't be optimized run normally
- Maximum components get optimized
- Stable production deployments

### Development debugging {/_development-debugging_/}

Temporarily use stricter thresholds to find issues:

```js
const isDevelopment = process.env.NODE_ENV === 'development';

{
  panicThreshold: isDevelopment ? 'critical_errors' : 'none',
  logger: {
    logEvent(filename, event) {
      if (isDevelopment && event.kind === 'CompileError') {
        // ...
      }
    }
  }
}
```

---

## Sitemap

[Overview of all docs pages](/llms.txt)
