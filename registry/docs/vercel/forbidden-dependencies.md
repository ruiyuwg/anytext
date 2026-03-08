# forbidden-dependencies

> **🔒 Permissions Required**: Conformance

The `forbidden-dependencies` rule type enables you to disallow one or more files from depending on one or more predefined modules.

Unlike [`forbidden-imports`](/docs/conformance/custom-rules/forbidden-imports), this rule type will check for
indirect (or transitive) dependencies, where a module may not directly import
the disallowed dependency, but the disallowed dependency is present in the
dependency chain. This makes it slower, but more powerful than the
`forbidden-imports` rule type.

For example, below we have a `logger` utility that imports a package that may
cause security keys to be exposed.

```ts filename="src/utils/logger.ts"
import { SECURITY_KEY } from 'secret-package';
```

We can use this rule type to create a custom rule that prevents any module in
`src/app` from importing any file that depends on our potentially dangerous
`secret-package`.

```ts filename="src/app/page.ts"
import { log } from '../utils/logger';
// Would result in an error
```

## When to use this rule type

- **Performance**
  - You want to prevent importing packages that are known to increase the size
    of your client side code
  - You want to prevent using a package that is known to perform poorly in
    specific environments
- **Security**
  - You want to disallow client-side code from depending on a file that
    exposes secrets
- **Error prevention**
  - You want to prevent errors by disallowing server-side code from importing
    a module where some methods require browser APIs

## Configuring this rule type

To create a custom `forbidden-dependencies` rule, you'll need to configure
the required properties below:

| Property              | Type                                                                      | Description                                                                                                                                                                                                                                                                                                                         |
| --------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ruleType`            | `"forbidden-dependencies"`                                                | The custom rule's type.                                                                                                                                                                                                                                                                                                             |
| `ruleName`            | `string`                                                                  | The custom rule's name.                                                                                                                                                                                                                                                                                                             |
| `categories`          | `("nextjs" \| "performance" \| "security" \| "code-health")[]` (optional) | The custom rule's categories. Default is `["code-health"]`.                                                                                                                                                                                                                                                                         |
| `errorMessage`        | `string`                                                                  | The error message, which is shown to users when they encounter this rule.                                                                                                                                                                                                                                                           |
| `errorLink`           | `string` (optional)                                                       | An optional link to show alongside the error message.                                                                                                                                                                                                                                                                               |
| `description`         | `string` (optional)                                                       | The rule description, which is shown in the Vercel Compass dashboard and included in allowlist files.                                                                                                                                                                                                                               |
| `severity`            | `"major" \| "minor"` (optional)                                           | The rule severity added to the allowlists and used to calculate a project's conformance score.                                                                                                                                                                                                                                      |
| `moduleNames`         | `string[]`                                                                | An array of exact module names or glob expressions\*.                                                                                                                       |
| `paths`               | `string[]` (optional)                                                     | An optional array of exact paths or glob expressions, which restricts the paths that this custom rule applies to. This acts as the overridable default value for `paths`\*. |
| `traverseNodeModules` | `boolean` (optional)                                                      | When `true`, this rule will also traverse `node_modules` for transient dependencies.                                                                                                                                                                                                                                                |

> **⚠️ Warning:** When using `traverseNodeModules`, module names currently need to be prefixed
> with `node_modules` (i.e., `["disallowed", "node_modules/disallowed"]`). We're
> working to improve this.

### Example configuration

The example below configures a rule named `NO_SUPER_SECRET_IN_CLIENT` that
disallows depending on any package from the `super-secret` workspace except for
`@super-secret/safe-exports`.

```jsonc copy filename="conformance.config.jsonc" {4-10}
{
  "customRules": [
    {
      "ruleType": "forbidden-dependencies",
      "ruleName": "NO_SUPER_SECRET_IN_CLIENT",
      "categories": ["code-health"],
      "errorMessage": "Depending on packages from the 'super-secret' workspace may result in secrets being exposed in client-side code. Please use '@super-secret/safe-exports' instead.",
      "description": "Prevents depending on packages from the 'super-secret' workspace.",
      "severity": "major",
      "moduleNames": ["@super-secret/*", "!@super-secret/safe-exports"],
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

The example below enables the `NO_SUPER_SECRET_IN_CLIENT` custom rule for all
files in the `src/` directory, excluding test files. In this example, the
custom rule is also restricted to the `dashboard` and `marketing-site`
workspaces, which is optional.

```jsonc copy filename="conformance.config.jsonc" {4-10}
{
  "overrides": [
    {
      "restrictTo": {
        "workspaces": ["dashboard", "marketing-site"],
      },
      "rules": {
        "CUSTOM.NO_SUPER_SECRET_IN_CLIENT": {
          "paths": ["src", "!src/**/*.test.ts"],
        },
      },
    },
  ],
  "customRules": [
    // ...
  ],
}
```

This next example enables the `NO_SUPER_SECRET_IN_CLIENT` custom rule for all
files, and without workspace restrictions.

```jsonc copy filename="conformance.config.jsonc" {4-6}
{
  "overrides": [
    {
      "rules": {
        "CUSTOM.NO_SUPER_SECRET_IN_CLIENT": true,
      },
    },
  ],
  "customRules": [
    // ...
  ],
}
```

title: "forbidden-imports"
description: "Learn how to set custom rules to disallow one or more files from importing one or more predefined modules"
last\_updated: "2026-03-08T05:03:12.587Z"
source: "https://vercel.com/docs/conformance/custom-rules/forbidden-imports"
