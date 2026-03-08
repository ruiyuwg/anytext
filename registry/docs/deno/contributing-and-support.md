# Contributing and support

> Guide to contributing to the Deno project and ecosystem. Learn about different Deno repositories, contribution guidelines, and how to submit effective pull requests.

URL: https://docs.deno.com/runtime/contributing/

We welcome and appreciate all contributions to Deno.

This page serves as a helper to get you started on contributing.

## Projects

There are numerous repositories in the [`denoland`](https://github.com/denoland)
organization that are part of the Deno ecosystem.

Repositories have different scopes, use different programming languages and have
varying difficulty level when it comes to contributions.

To help you decide which repository might be the best to start contributing
(and/or falls into your interest), here's a short comparison (**codebases
primarily comprise the languages in bold**):

### [deno](https://github.com/denoland/deno)

This is the main repository that provides the `deno` CLI.

Languages: **Rust**, **JavaScript**, **TypeScript**

### [deno\_std](https://github.com/denoland/deno_std)

The standard library for Deno.

Languages: **TypeScript**, WebAssembly

### [fresh](https://github.com/denoland/fresh)

The next-gen web framework.

Languages: **TypeScript**, TSX

### [deno\_lint](https://github.com/denoland/deno_lint)

Linter that powers `deno lint` subcommand.

Languages: **Rust**

### [deno\_doc](https://github.com/denoland/deno_doc)

Documentation generator that powers `deno doc` subcommand, and reference
documentation on https://docs.deno.com/api, and https://jsr.io.

Languages: **Rust**

### [rusty\_v8](https://github.com/denoland/rusty_v8)

Rust bindings for the V8 JavaScript engine. Very technical and low-level.

Languages: **Rust**

### [serde\_v8](https://github.com/denoland/deno_core/tree/main/serde_v8)

Library that provides bijection layer between V8 and Rust objects. Based on
[`serde`](https://crates.io/crates/serde) library. Very technical and low-level.

Languages: **Rust**

### [deno\_docker](https://github.com/denoland/deno_docker)

Official Docker images for Deno.

## General remarks

- Read the [style guide](/runtime/contributing/style_guide).

- Please don't make [the benchmarks](https://deno.land/benchmarks) worse.

- Ask for help in the [community chat room](https://discord.gg/deno).

- If you are going to work on an issue, mention so in the issue's comments
  *before* you start working on the issue.

- If you are going to work on a new feature, create an issue and discuss with
  other contributors *before* you start working on the feature; we appreciate
  all contributions but not all proposed features will be accepted. We don't
  want you to spend hours working on code that might not be accepted.

- Please be professional in the forums. We follow
  [Rust's code of conduct](https://www.rust-lang.org/policies/code-of-conduct)
  (CoC). Have a problem? Email <ry@tinyclouds.org>.

## Submitting a pull request

Before submitting a PR to any of the repos, please make sure the following is
done:

1. Give the PR a descriptive title.

Examples of good PR title:

- fix(std/http): Fix race condition in server
- docs(console): Update docstrings
- feat(doc): Handle nested re-exports

Examples of bad PR title:

- fix #7123
- update docs
- fix bugs

2. Ensure there is a related issue and that it is referenced in the PR text.
3. Ensure there are tests that cover the changes.

## Documenting APIs

It is important to document all public APIs and we want to do that inline with
the code. This helps ensure that code and documentation are tightly coupled
together.

### JavaScript and TypeScript

All publicly exposed APIs and types, both via the `deno` module as well as the
global/`window` namespace should have JSDoc documentation. This documentation is
parsed and available to the TypeScript compiler, and therefore easy to provide
further downstream. JSDoc blocks come just prior to the statement they apply to
and are denoted by a leading `/**` before terminating with a `*/`. For example:

```ts
/** A simple JSDoc comment */
export const FOO = "foo";
```

Find more at: https://jsdoc.app/

### Rust

Use
[this guide](https://doc.rust-lang.org/rustdoc/how-to-write-documentation.html)
for writing documentation comments in Rust code.

## Profiling

When contributing to performance-sensitive parts of the codebase, it's helpful
to profile your changes to ensure they don't negatively impact performance or to
verify your optimizations are effective.

### Using Samply

[Samply](https://github.com/mstange/samply) is a sampling profiler for macOS and
Linux that works well with Deno. It produces flamegraphs that help you visualize
where CPU time is being spent.

```sh
# Basic usage
samply record -r 20000 deno run -A main.js
```

You can analyze the generated flamegraph to identify:

- Hot spots where most CPU time is spent
- Unexpected function calls
- Potential areas for optimization

When submitting performance-related contributions, including profiling data can
help the team to understand and validate your improvements.

***

# Release Schedule

> Overview of Deno's release cycle and versioning process. Learn about stable releases, canary builds, and how to manage different Deno versions including upgrading to specific builds.

URL: https://docs.deno.com/runtime/contributing/release\_schedule

A new minor release for the `deno` cli is scheduled for release every 12 weeks.

See [Milestones on Deno's GitHub](https://github.com/denoland/deno/milestones)
for the upcoming releases.

There are usually several patch releases (done weekly) after a minor release;
after that a merge window for new features opens for the upcoming minor release.

Stable releases can be found on the
[GitHub releases page](https://github.com/denoland/deno/releases).

## Canary channel

In addition to the stable channel described above, canaries are released
multiple times daily (for each commit on main). You can upgrade to the latest
canary release by running:

```console
deno upgrade --canary
```

To update to a specific canary, pass the commit hash in the `--version` option:

```console
deno upgrade --canary --version=973af61d8bb03c1709f61e456581d58386ed4952
```

To switch back to the stable channel, run `deno upgrade`.

Canaries can be downloaded from https://dl.deno.land.

***
