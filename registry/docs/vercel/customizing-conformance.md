# Customizing Conformance

> **🔒 Permissions Required**: Conformance

The Conformance framework may be customized so that you can manage
rules for different workspaces in your repository or to pass configuration to
the rules.

To customize Conformance, first define a `conformance.config.jsonc` file in the root of your directory.

> **💡 Note:** Both `conformance.config.jsonc` and `conformance.config.json` are supported,
> and both support JSONC (JSON with JavaScript-style comments). We recommend
> using the `.jsonc` extension as it helps other tools (for example, VS Code) to
> provide syntax highlighting and validation.

## Enabling all rules By default

To enable all Conformance rules by default, add the `defaultRules` field to the
top level `configuration` section of the config file:

```jsonc copy filename="conformance.config.jsonc" {3}
{
  "configuration": {
    "defaultRules": "all",
  },
}
```

## Ignoring files

To exclude one or more files from Conformance, use the `ignorePatterns` field in the top level of the config file:

```jsonc copy filename="conformance.config.jsonc"
{
  "ignorePatterns": ["generated/**/*.js"],
}
```

This field accepts an array of glob patterns as strings.

## Configuring specific workspaces

Each Conformance override accepts a `restrictTo` parameter which controls what
workspaces the configuration will apply to. If no `restrictTo` is specified,
then the configuration will apply globally to every workspace.

```jsonc copy filename="conformance.config.jsonc" {5}
{
  "overrides": [
    {
      // NOTE: No `restrictTo` is specified here so this applies globally.
      "rules": {},
    },
  ],
}
```

Conformance configuration can be applied to specific workspaces using either
the name of the workspace or the directory of the workspace on the `restrictTo` field:

- Use the `workspaces` field, which accepts a list of workspace names:
  ```jsonc copy filename="conformance.config.jsonc" {4-7}
  {
    "overrides": [
      {
        "restrictTo": {
          "workspaces": ["eslint-config-custom"],
        },
        "rules": {},
      },
    ],
  }
  ```
- Use the `directories` field to specify a directory. All workspaces that live under that directory will be matched:
  ```jsonc copy filename="conformance.config.json" {4-7}
  {
    "overrides": [
      {
        "restrictTo": {
          "directories": ["configs/"],
        },
        "rules": {},
      },
    ],
  }
  ```
  This will match `configs/tsconfig` and `configs/eslint-config-custom`.
- Set the `root` field to true to match the root of the repository:
  ```jsonc copy filename="conformance.config.jsonc" {4-7}
  {
    "overrides": [
      {
        "restrictTo": {
          "root": true,
        },
        "rules": {},
      },
    ],
  }
  ```

### Configuration cascade

If multiple overrides are specified that affect the same workspace, the
configurations will be unioned together. If there are conflicts between the
overrides, the last specified value will be used.

## Managing a Conformance rule

To enable or disable a Conformance rule, use the `rules` field. This
field is an object literal where the keys are the name of the [rule](/docs/conformance/rules) and the
values are booleans or another object literal containing a [rule-specific
configuration](#configuring-a-conformance-rule).

For example, this configuration will disable the `TYPESCRIPT_CONFIGURATION` rule:

```jsonc copy filename="conformance.config.jsonc" {5}
{
  "overrides": [
    {
      "rules": {
        "TYPESCRIPT_CONFIGURATION": false,
      },
    },
  ],
}
```

All rules are enabled by default unless explicitly disabled in the config.

## Configuring a Conformance rule

Some Conformance rules can be configured to alter behavior based on the project
settings. Instead of a `boolean` being provided in the `rules` configuration,
an object literal could be passed with the configuration for that rule.

For example, this configuration will require a specific list of
ESLint plugins in every workspace:

```jsonc copy filename="conformance.config.jsonc" {6}
{
  "overrides": [
    {
      "rules": {
        "ESLINT_CONFIGURATION": {
          "requiredPlugins": ["@typescript-eslint"],
        },
      },
    },
  ],
}
```

## Adding custom error messages to Conformance rules

If you want to specify additional information or link to project-specific
documentation, you can add custom error messages to the output of any
conformance rule. These messages can be added globally to all rules or on a
per-rule basis.

To add an error message to the output of **all rules**, add `globalErrorMessage` to
the `configuration` section of the override:

```jsonc copy filename="conformance.config.jsonc" {5}
{
  "overrides": [
    {
      "configuration": {
        "globalErrorMessage": "See link_to_docs for more information.",
      },
    },
  ],
}
```

To add an error message to the output of **one
specific rule**, add an entry for that test to the `additionalErrorMessages`
field:

```jsonc copy filename="conformance.config.jsonc" {5-7}
{
  "overrides": [
    {
      "configuration": {
        "additionalErrorMessages": {
          "TYPESCRIPT_CONFIGURATION": "Please see project_link_to_typescript_docs for more information.",
        },
      },
    },
  ],
}
```

title: "Getting Started with Conformance"
description: "Learn how to set up Conformance for your codebase."
last\_updated: "2026-03-23T09:40:07.477Z"
source: "https://vercel.com/docs/conformance/getting-started"
