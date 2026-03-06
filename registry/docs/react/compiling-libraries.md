# Compiling Libraries

This guide helps library authors understand how to use React Compiler to ship optimized library code to their users.

## Why Ship Compiled Code? {/_why-ship-compiled-code_/}

As a library author, you can compile your library code before publishing to npm. This provides several benefits:

- **Performance improvements for all users** - Your library users get optimized code even if they aren't using React Compiler yet
- **No configuration required by users** - The optimizations work out of the box
- **Consistent behavior** - All users get the same optimized version regardless of their build setup

## Setting Up Compilation {/_setting-up-compilation_/}

Add React Compiler to your library's build process:

npm install -D babel-plugin-react-compiler@latest

Configure your build tool to compile your library. For example, with Babel:

```js
// babel.config.js
module.exports = {
  plugins: ["babel-plugin-react-compiler"],
  // ... other config
};
```

## Backwards Compatibility {/_backwards-compatibility_/}

If your library supports React versions below 19, you'll need additional configuration:

### 1. Install the runtime package {/_install-runtime-package_/}

We recommend installing react-compiler-runtime as a direct dependency:

npm install react-compiler-runtime@latest

```json
{
  "dependencies": {
    "react-compiler-runtime": "^1.0.0"
  },
  "peerDependencies": {
    "react": "^17.0.0 || ^18.0.0 || ^19.0.0"
  }
}
```

### 2. Configure the target version {/_configure-target-version_/}

Set the minimum React version your library supports:

```js
{
  target: '17', // Minimum supported React version
}
```

## Testing Strategy {/_testing-strategy_/}

Test your library both with and without compilation to ensure compatibility. Run your existing test suite against the compiled code, and also create a separate test configuration that bypasses the compiler. This helps catch any issues that might arise from the compilation process and ensures your library works correctly in all scenarios.

## Troubleshooting {/_troubleshooting_/}

### Library doesn't work with older React versions {/_library-doesnt-work-with-older-react-versions_/}

If your compiled library throws errors in React 17 or 18:

1. Verify you've installed `react-compiler-runtime` as a dependency
2. Check that your `target` configuration matches your minimum supported React version
3. Ensure the runtime package is included in your published bundle

### Compilation conflicts with other Babel plugins {/_compilation-conflicts-with-other-babel-plugins_/}

Some Babel plugins may conflict with React Compiler:

1. Place `babel-plugin-react-compiler` early in your plugin list
2. Disable conflicting optimizations in other plugins
3. Test your build output thoroughly

### Runtime module not found {/_runtime-module-not-found_/}

If users see "Cannot find module 'react-compiler-runtime'":

1. Ensure the runtime is listed in `dependencies`, not `devDependencies`
2. Check that your bundler includes the runtime in the output
3. Verify the package is published to npm with your library

## Next Steps {/_next-steps_/}

- Learn about [debugging techniques](/learn/react-compiler/debugging) for compiled code
- Check the [configuration options](/reference/react-compiler/configuration) for all compiler options
- Explore [compilation modes](/reference/react-compiler/compilationMode) for selective optimization

---

## Sitemap

[Overview of all docs pages](/llms.txt)
