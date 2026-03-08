# forbidden-imports

> **🔒 Permissions Required**: Conformance

The `forbidden-imports` rule type enables you to disallow one or more files from importing one or more predefined modules.

Unlike [`forbidden-dependencies`](/docs/conformance/custom-rules/forbidden-dependencies), this rule type won't
check for indirect (transitive) dependencies. This makes this rule faster, but
limits its effectiveness.

## When to use this rule type

- **Deprecating packages or versions**
  - You want to disallow importing a deprecated package, and to recommend a
    different approach
- **Recommending an alternative package**
  - You want to require that users import custom/wrapped methods from
    `test-utils` instead of directly from a testing library

If you want to prevent depending on a module for performance or security
reasons, you should instead use the
[`forbidden-dependencies`](/docs/conformance/custom-rules/forbidden-dependencies) rule type.

## Configuring this rule type

To create a custom `forbidden-imports` rule, you'll need to configure the below
required properties:

| Property                   | Type                                                                      | Description                                                                                                                                                                                                                                                                                                                                                           |
| -------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ruleType`                 | `"forbidden-imports"`                                                     | The custom rule's type.                                                                                                                                                                                                                                                                                                                                               |
| `ruleName`                 | `string`                                                                  | The custom rule's name.                                                                                                                                                                                                                                                                                                                                               |
| `categories`               | `("nextjs" \| "performance" \| "security" \| "code-health")[]` (optional) | The custom rule's categories. Default is `["code-health"]`.                                                                                                                                                                                                                                                                                                           |
| `errorMessage`             | `string`                                                                  | The error message, which is shown to users when they encounter this rule.                                                                                                                                                                                                                                                                                             |
| `errorLink`                | `string` (optional)                                                       | An optional link to show alongside the error message.                                                                                                                                                                                                                                                                                                                 |
| `description`              | `string` (optional)                                                       | The rule description, which is shown in the Vercel Compass dashboard and included in allowlist files.                                                                                                                                                                                                                                                                 |
| `severity`                 | `"major" \| "minor"` (optional)                                           | The rule severity added to the allowlists and used to calculate a project's conformance score.                                                                                                                                                                                                                                                                        |
| `moduleNames`              | `string[]`                                                                | An array of exact module names or glob expressions\*.                                                                                                                                                         |
| `importNames`              | `string[]` (optional)                                                     | An array of exact module names of import names.                                                                                                                                                                                                                                                                                                                       |
| `paths`                    | `string[]` (optional)                                                     | **Added in Conformance `1.4.0`.** An optional array of exact paths or glob expressions, which restricts the paths that this custom rule applies to. This acts as the overridable default value for `paths`\*. |
| `disallowDefaultImports`   | `boolean` (optional)                                                      | Flags default imports (i.e. `import foo from 'foo';`) as errors.                                                                                                                                                                                                                                                                                                      |
| `disallowNamespaceImports` | `boolean` (optional)                                                      | Flags namespace imports (i.e. `import * as foo from 'foo';`) as errors.                                                                                                                                                                                                                                                                                               |

Note that when using `moduleNames` alone, imports are not allowed at all from
that module. When used with conditions like `importNames`, the custom rule will
only report an error when those conditions are also met.

### Example configuration

The example below configures a rule named `NO_TEAM_IMPORTS` that disallows
importing any package from the `team` workspace except for `@team/utils`. It also
configures a rule that disallows importing `oldMethod` from `@team/utils`, but
restricts that rule to the `src/new/` directory.

```jsonc copy filename="conformance.config.jsonc" {4-20}
{
  "customRules": [
    {
      "ruleType": "forbidden-imports",
      "ruleName": "NO_TEAM_IMPORTS",
      "categories": ["security"],
      "errorMessage": "Packages from the team workspace have been deprecated in favour of '@team/utils'.",
      "description": "Disallows importing packages from the team workspace.",
      "severity": "major",
      "moduleNames": ["@team/*", "!@team/utils"],
    },
    {
      "ruleType": "forbidden-imports",
      "ruleName": "NO_TEAM_OLD_METHOD_IMPORTS",
      "categories": ["performance"],
      "errorMessage": "'oldMethod' has been deprecated in favour of 'newMethod'.",
      "description": "Disallows using the deprecated method 'oldMethod' from '@team/utils'.",
      "severity": "minor",
      "moduleNames": ["@team/utils"],
      "importNames": ["oldMethod"],
      "paths": ["src/new/**"],
    },
  ],
}
```

## Enabling this rule type

To enable this rule type, you can set the rule to `true`, or provide the
following configuration.

| Property | Type                  | Description                                                                                                                                                                                                                                                                 |
| -------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `paths`  | `string[]` (optional) | An optional array of exact paths or glob expressions, which restricts the paths that this custom rule applies to\*. |

The example below enables the `NO_TEAM_IMPORTS` custom rule for all files in the
`src/` directory, excluding files in `src/legacy/`. In this example, the custom
rule is also restricted to the `dashboard` and `marketing-site` workspaces,
which is optional.

```jsonc copy filename="conformance.config.jsonc" {4-10}
{
  "overrides": [
    {
      "restrictTo": {
        "workspaces": ["dashboard", "marketing-site"],
      },
      "rules": {
        "CUSTOM.NO_TEAM_IMPORTS": {
          "paths": ["src", "!src/legacy"],
        },
      },
    },
  ],
  "customRules": [
    // ...
  ],
}
```

;

title: "forbidden-packages"
description: "Learn how to set custom rules to disallow packages from being listed as dependencies."
last\_updated: "2026-03-08T05:03:12.591Z"
source: "https://vercel.com/docs/conformance/custom-rules/forbidden-packages"
