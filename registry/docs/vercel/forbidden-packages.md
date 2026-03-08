# forbidden-packages

> **🔒 Permissions Required**: Conformance

The `forbidden-packages` rule type enables you to disallow packages from being listed as dependencies in `package.json`.

## When to use this rule type

- **Deprecating packages**
  - You want to disallow importing a deprecated package, and to recommend a
    different approach
- **Standardization**
  - You want to ensure that projects depend on the same set of packages when
    performing similar tasks (i.e. using `jest` or `vitest` consistently across
    a monorepo)
- **Visibility and approval**
  - You want to enable a workflow where team-owned packages can't be depended
    upon without acknowledgement or approval from that team. This helps owning
    teams to better plan and understand the impacts of their work

## Configuring this rule type

To create a custom `forbidden-packages` rule, you'll need to configure the below
required properties:

| Property          | Type                                                                      | Description                                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ruleType`        | `"forbidden-packages"`                                                    | The custom rule's type.                                                                                                                           |
| `ruleName`        | `string`                                                                  | The custom rule's name.                                                                                                                           |
| `categories`      | `("nextjs" \| "performance" \| "security" \| "code-health")[]` (optional) | The custom rule's categories. Default is `["code-health"]`.                                                                                       |
| `errorMessage`    | `string`                                                                  | The error message, which is shown to users when they encounter this rule.                                                                         |
| `errorLink`       | `string` (optional)                                                       | An optional link to show alongside the error message.                                                                                             |
| `description`     | `string` (optional)                                                       | The rule description, which is shown in the Vercel Compass dashboard and included in allowlist files.                                             |
| `severity`        | `"major" \| "minor"` (optional)                                           | The rule severity added to the allowlists and used to calculate a project's conformance score.                                                    |
| `packageNames`    | `string[]`                                                                | An array of exact package names or glob expressions.                                                                                              |
| `packageVersions` | `string[]` (optional)                                                     | **Added in Conformance `1.8.0`.** An optional array of exact package versions or [semver](https://docs.npmjs.com/cli/v6/using-npm/semver) ranges. |

### Example configuration

The example below configures a rule named `NO_TEAM_PACKAGES` that disallows
importing any package from the `team` workspace except for `@team/utils`.

```jsonc copy filename="conformance.config.jsonc" {4-9}
{
  "customRules": [
    {
      "ruleType": "forbidden-packages",
      "ruleName": "NO_TEAM_PACKAGES",
      "errorMessage": "Packages from the team workspace have been deprecated in favour of '@team/utils'.",
      "description": "Disallow importing packages from the team workspace.",
      "severity": "major",
      "packageNames": ["@team/*", "!@team/utils"],
    },
  ],
}
```

The next example restricts the `utils` package, only allowing versions equal
to or above `2.0.0`. This option requires Conformance `1.8.0` or later.

```jsonc copy filename="conformance.config.jsonc" {4-10}
{
  "customRules": [
    {
      "ruleType": "forbidden-packages",
      "ruleName": "NO_OLD_UTIL_PACKAGES",
      "errorMessage": "Versions of `utils` below `2.0.0` are not allowed for security reasons.",
      "description": "Disallow importing `utils` versions below version `2.0.0`.",
      "severity": "major",
      "packageNames": ["utils"],
      "packageVersions: ["<=2.0.0"]
    },
  ],
}
```

## Enabling this rule type

The example below enables the `NO_TEAM_PACKAGES` custom rule. In this example,
the custom rule is also restricted to the `dashboard` and `marketing-site`
workspaces, which is optional.

```jsonc copy filename="conformance.config.jsonc" {4-9}
{
  "overrides": [
    {
      "restrictTo": {
        "workspaces": ["dashboard", "marketing-site"],
      },
      "rules": {
        "CUSTOM.NO_TEAM_PACKAGES": true,
      },
    },
  ],
  "customRules": [
    // ...
  ],
}
```

title: "forbidden-properties"
description: "Learn how to set custom rules to disallow reading from,
writing to, and/or calling one or more properties"
last\_updated: "2026-03-08T05:03:12.596Z"
source: "https://vercel.com/docs/conformance/custom-rules/forbidden-properties"
