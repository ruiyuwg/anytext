# Experimental Rust compiler

**Type:** `boolean`\
**Default:** `false`

**Added in:** `astro@6.0.0` New

Enables using the new Rust-based compiler for Astro files. This compiler is faster, provides better error messages, and generally has better support for modern JavaScript, TypeScript, and CSS features.

In a future major version, Astro will use this new compiler by default, but you can opt in to the future behavior early using the `experimental.rustCompiler` flag.

To give feedback on the compiler, or to keep up with its development, see the [RFC for a new compiler for Astro](https://github.com/withastro/roadmap/discussions/1306) for more information and discussion.

## Usage

[Section titled “Usage”](#usage)

This experimental flag requires no specific usage and only affects which compiler Astro uses for your project.

To enable the Rust compiler, add the following to your `astro.config.mjs`:

astro.config.mjs

```diff
import { defineConfig } from "astro/config";


export default defineConfig({
+  experimental: {
+    rustCompiler: true
+  }
});
```

and then install the `@astrojs/compiler-rs` package into your project:

- npm

  ```shell
  npm install @astrojs/compiler-rs
  ```

- pnpm

  ```shell
  pnpm add @astrojs/compiler-rs
  ```

- Yarn

  ```shell
  yarn add @astrojs/compiler-rs
  ```

### Expected differences

[Section titled “Expected differences”](#expected-differences)

Unlike Astro’s current Go compiler, this experimental Rust compiler will not correct invalid HTML structure. For example, the following notable patterns will be left as written, and no longer corrected:

- `<p><div>Bad nesting</div></p>` (instead of removing the `div` from of the `p`)
- `<p>My paragraph` (instead of adding the missing closing `</p>` tag)

This means that if your Astro files contain invalid HTML, you may see a different output from the Rust compiler than you did with the previous compiler, or may encounter errors while building.

## Limitations

[Section titled “Limitations”](#limitations)

At this time, the Rust compiler does not output the required metadata for the dev toolbar audits to work correctly.
