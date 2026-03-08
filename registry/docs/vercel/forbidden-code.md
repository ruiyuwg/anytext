# forbidden-code

> **🔒 Permissions Required**: Conformance

The `forbidden-code` rule type enables you to disallow code and code patterns through string and regular expression matches.

## When to use this rule type

- **Disallowing comments**
  - You want to disallow `// TODO` comments
  - You want to disallow usage of `@ts-ignore`
- **Disallowing specific strings**
  - You want to enforce a certain casing for one or more strings
  - You want to disallow specific strings from being used within code

If you want to disallow specific operations on a property, you should instead
use the [`forbidden-properties`](/docs/conformance/custom-rules/forbidden-properties) rule type.

## Configuring this rule type

To create a custom `forbidden-code` rule, you'll need to configure the below
required properties:

| Property       | Type                                                                      | Description                                                                                           |
| -------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `ruleType`     | `"forbidden-code"`                                                        | The custom rule's type.                                                                               |
| `ruleName`     | `string`                                                                  | The custom rule's name.                                                                               |
| `categories`   | `("nextjs" \| "performance" \| "security" \| "code-health")[]` (optional) | The custom rule's categories. Default is `["code-health"]`.                                           |
| `errorMessage` | `string`                                                                  | The error message, which is shown to users when they encounter this rule.                             |
| `errorLink`    | `string` (optional)                                                       | An optional link to show alongside the error message.                                                 |
| `description`  | `string` (optional)                                                       | The rule description, which is shown in the Vercel Compass dashboard and included in allowlist files. |
| `severity`     | `"major" \| "minor"` (optional)                                           | The rule severity added to the allowlists and used to calculate a project's conformance score.        |
| `patterns`     | `(string \| { pattern: string, flags: string })[]`                        | An array of regular expression patterns to match against.                                             |
| `strings`      | `string[]`                                                                | An array of exact string to match against (case sensitive).                                           |

> **⚠️ Warning:** Multi-line strings and patterns are currently unsupported by this custom rule
> type.

### Example configuration

The example below configures a rule named `NO_DISALLOWED_USAGE` that disallows:

- Any usage of `"and"` at the start of a line (case-sensitive).
- Any usage of `"but"` in any case.
- Any usage of `"TODO"` (case-sensitive).

```jsonc copy filename="conformance.config.jsonc" {4-11}
{
  "customRules": [
    {
      "ruleType": "forbidden-imports",
      "ruleName": "NO_DISALLOWED_USAGE",
      "categories": ["code-health"],
      "errorMessage": "References to \"and\" at the start of a line are not allowed.",
      "description": "Disallows using \"and\" at the start of a line.",
      "severity": "major",
      "patterns": ["^and", { "pattern": "but", "flags": "i" }],
      "strings": ["TODO"],
    },
  ],
}
```

### Using flags with patterns

This custom rule type always sets the `"g"` (or global) flag for regular
expressions. This ensures that all regular expression matches are reported,
opposed to only reporting on the first match.

When providing flags through an object in `patterns`, you can omit the `"g"` as
this will automatically be set.

To learn more about regular expression flags, see [the MDN guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) on advanced searching with flags.

### Writing patterns

If you're not familiar with regular expressions, you can use tools like
[regex101](https://regex101.com/) and/or [RegExr](https://regexr.com/) to help
you understand and write regular expressions.

Regular expressions can vary in complexity, depending on what you're trying to
achieve. We've added some examples below to help you get started.

| Pattern     | Description                                                                    |
| ----------- | ------------------------------------------------------------------------------ |
| `^and`      | Matches `"and"`, but only if it occurs at the start of a line (`^`).           |
| `(B\|a)ar$` | Matches `"But"` and `"but"`, but only if it occurs at the end of a line (`$`). |
| `regexp?`   | Matches `"regexp"` and `"regex"`, with or without the `"p"` (`?`).             |
| `(?<!-)so`  | Matches `"so"`, but only when not following a hyphen (`(?<!-)`).               |

## Enabling this rule type

To enable this rule type, you can set the rule to `true`, or provide the
following configuration.

| Property | Type                  | Description                                                                                                                                                                                                     |
| -------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `paths`  | `string[]` (optional) | An optional array of exact paths or glob expressions\*. |

The example below enables the `NO_DISALLOWED_USAGE` custom rule for all files in the
`src/` directory, excluding files in `src/legacy/`. In this example, the custom
rule is also restricted to the `dashboard` and `marketing-site` workspaces,
which is optional.

```jsonc copy filename="conformance.config.jsonc" {4-9}
{
  "overrides": [
    {
      "restrictTo": {
        "workspaces": ["dashboard", "marketing-site"],
      },
      "rules": {
        "CUSTOM.NO_DISALLOWED_USAGE": {
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

This next example enables the `NO_DISALLOWED_USAGE` custom rule for all files,
and without workspace restrictions.

```jsonc copy filename="conformance.config.jsonc" {4-6}
{
  "overrides": [
    {
      "rules": {
        "CUSTOM.NO_DISALLOWED_USAGE": true,
      },
    },
  ],
  "customRules": [
    // ...
  ],
}
```

;

title: "forbidden-dependencies"
description: "Learn how to set custom rules to disallow one or more files from depending on one or more predefined module"
last\_updated: "2026-03-08T05:03:12.580Z"
source: "https://vercel.com/docs/conformance/custom-rules/forbidden-dependencies"
