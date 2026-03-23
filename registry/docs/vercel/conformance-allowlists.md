# Conformance Allowlists

> **🔒 Permissions Required**: Conformance

Conformance allowlists enable developers to integrate code into the codebase, bypassing specific Conformance rules when necessary. This helps with collaboration, ensures gradual rule implementation, and serves as a systematic checklist for addressing issues.

## Anatomy of an allowlist entry

An allowlist entry looks like the following:

```json filename="my-site/.allowlists"
{
  "testName": "NEXTJS_MISSING_SECURITY_HEADERS",
  "entries": [
    {
      "testName": "NEXTJS_MISSING_SECURITY_HEADERS",
      "reason": "TODO: This existed before the Conformance test was added but should be fixed.",
      "location": {
        "workspace": "dashboard",
        "filePath": "next.config.js"
      },
      "details": {
        "missingField": "headers"
      }
    }
  ]
}
```

The allowlist entry contains the following fields:

- `testName`: The name of the triggered test
- `needsResolution`: Whether the allowlist entry needs to be resolved
- `reason`: Why this code instance is allowed despite Conformance catching it
- `location`: The file path containing the error
- `details` (optionally): Details about the Conformance error

An allowlist entry will match an existing one when the `testName`, `location`,
and `details` fields all match. The `reason` is only used for documentation
purposes.

## The `needsResolution` field

This field is used by the CLI and our metrics to assess if an allowlisted issue
is something that needs to be resolved. The default value is `true`. When set
to `false`, this issue is considered to be "accepted" by the team and will not
show up in future metrics.

As this field was added after the release of Conformance, the value of this
field is considered `true` when the field is missing from an allowlist entry.

## Allowlists location

In a monorepo, Conformance allowlists are located in an `.allowlists/` directory
in the root directory of each workspace. For repository-wide rules, place allowlist entries in the top-level `.allowlists/` directory.

## Allowlisting all errors

The Conformance CLI can add an allowlist entry for all the active errors. This
can be useful when adding a new entry to the allowlist for review, or when a
new check is being added to the codebase. To add an allowlist entry for all
active errors in a package:

From the package directory:

````
```bash
pnpm i 
```


```bash
yarn i 
```


```bash
npm i 
```


```bash
bun i 
```
````

From the root of a monorepo:

````
```bash
pnpm i 
```


```bash
yarn i 
```


```bash
npm i 
```


```bash
bun i 
```
````

## Configuring Code Owners for Allowlists

You can use [Code Owners](/docs/code-owners) with allowlists for specific team reviews on updates. For instance, have the security team review security-related entries.

To configure Code Owners for all tests at the top level for the entire repository:

```text copy filename=".vercel.approvers"
**/*.allowlist.json @org/team:required
**/NO_CORS_HEADERS.* @org/security-team:required
```

For a specific workspace, add a `.vercel.approvers` file in the `.allowlists` sub-directory:

```text copy filename="apps/docs/.allowlists/.vercel.approvers"
NO_EXTERNAL_CSS_AT_IMPORTS.* @org/performance-team:required
```

The `:required` check ensures any modifications need the specified owners' review.

title: "Conformance changelog"
description: "Find out what"
last\_updated: "2026-03-23T09:40:07.363Z"
source: "https://vercel.com/docs/conformance/changelog"
