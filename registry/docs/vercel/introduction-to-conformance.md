# Introduction to Conformance

> **🔒 Permissions Required**: Conformance

Conformance provides tools that run automated checks on your code for product critical issues, such as performance, security, and code health. Conformance runs in the development workflow to help you:

- **Prevent issues from being merged into your codebase**: Conformance runs locally and on Continuous Integration (CI) to notify developers early and prevent issues from ever reaching production
- **Learn from expert guidance directly in your development workflow**: Conformance rules were created based on years of experience in large codebases and frontend applications, and with Vercel's deep knowledge of the framework ecosystem
- **Burn down existing issues over time**: Conformance allowlists enable you to identify and allowlist all existing errors, unblocking development and facilitating gradual error fixing over time. Developers can then incrementally improve the codebase when they have the time to work on the issues

## Getting Started

To get started with Conformance, follow the instructions on the
[Getting Started](/docs/conformance/getting-started) page.

## Conformance Rules

Conformance comes with a curated suite of rules that look
for common issues. These rules were created based on the decades of combined
experience that we have building high quality web applications.

You can learn more about the built-in Conformance rules on the
[Conformance Rules](/docs/conformance/rules) page.

## Conformance Allowlists

A core feature in Conformance is the ability to provide allowlists. This mechanism allows organizations to have developers review their conformance violations with an expert on the team before deciding whether it should be allowed. Conformance allowlists can also be added to existing issues, helping to make sure that new code follows the best practices.

Learn more about how this mechanism works on the
[Allowlists](/docs/conformance/allowlist) page.

## Customizing Conformance

Conformance can be customized to meet your repository's
needs. See [Customizing Conformance](/docs/conformance/customize) for more
information.

## More resources

- [Learn how Vercel helps organizations grow with Conformance and Code owners](https://www.youtube.com/watch?v=IFkZz3_7Poo)

title: "BFCACHE\_INTEGRITY\_NO\_UNLOAD\_LISTENERS"
description: "Disallows the use of the unload and beforeunload events to eliminate a source of eviction from the browser"
last\_updated: "2026-03-08T05:03:12.627Z"
source: "https://vercel.com/docs/conformance/rules/BFCACHE\_INTEGRITY\_NO\_UNLOAD\_LISTENERS"
