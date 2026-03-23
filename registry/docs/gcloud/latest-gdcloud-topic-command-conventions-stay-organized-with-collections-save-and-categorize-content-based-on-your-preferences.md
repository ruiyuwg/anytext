-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Distributed, hybrid, and multicloud](https://docs.cloud.google.com/docs/dhm-cloud)
-   [Google Distributed Cloud](https://docs.cloud.google.com/distributed-cloud/docs)
-   [Air-gapped](https://docs.cloud.google.com/distributed-cloud/hosted/docs/latest/gdch)
-   [1.15.3 (Latest)](https://docs.cloud.google.com/distributed-cloud/hosted/docs/latest/gdch)
-   [Reference](https://docs.cloud.google.com/distributed-cloud/hosted/docs/latest/gdch/reference/reference-overview)

Send feedback

# gdcloud topic command-conventions Stay organized with collections Save and categorize content based on your preferences.

## NAME

gdcloud topic command-conventions - Supplementary help for gdcloud command-conventions.

## DESCRIPTION

The gdcloud CLI command design follows a common set of principles and conventions. This document describes them in detail.

Conventions are goals rather than rules. For any exceptions, refer to the information provided for individual commands by using the `--help` flag.

## COMMAND HIERARCHY

gdcloud CLI commands are organized as a tree with gdcloud at the root, command groups in the inner nodes, and commands at the leaf nodes. Group commands are executable, but only for displaying the help text. All groups and commands have a `--help` flag that displays the help text as standard output. The help text is derived from the running executable, so they are always up-to-date, even when switching between multiple release installations.

## COMMAND LINE

Every gdcloud command follows the same form

```
gdcloud GROUP GROUP ... COMMAND POSITIONAL ... FLAG ...
```

Flag and positional arguments can be intermixed, but for consistency, positionals are usually displayed first in order, followed by flags in any order.

## COMMAND USAGE NOTATION

Command usage is a shorthand notation that contains the full command name, the positional arguments, and the flag arguments in group sorted order. Optional arguments are enclosed in `[ ... ]`. For example

```
gdcloud foo bar NAME [--format=FORMAT]
```

This is the usage for the `gdcloud foo bar` command with a required `NAME` positional argument, an optional `EXTRA` positional argument, and an optional `--format` flag argument.

## Positional Arguments

Positional arguments are ordered and must be specified in the order listed in the command usage and help document argument definition list.

## Flag Arguments

Flag names are lowercase with a `--` prefix. Multi-word flags use `-` (hyphen/dash) as a word separator. Following UNIX convention, if a flag is repeated on the command line, then only the rightmost occurrence takes effect. No diagnostic is emitted. This makes it easy to set up command aliases and wrapper scripts that provide default flag values; values that can easily be overridden by specifying them on the alias or wrapper script command line.

## Boolean Flags

While many boolean flags have an implied value of `false`, some are `true` by default. The presence of `--flag` sets the flag to `true` or `false`, depending on the value implied by the name of the flag.

## Valued Flags

Non-boolean flags have an explicit value. The value can be specified by placing the value as the next argument after the flag `--flag value`.

If the value is an integer, then it must be `0` or above. Negative integers are not accepted.

## Output

The standard output is for explicit information requested by the command. Depending on the context, there might be guarantees on the output format to support deterministic parsing. Certain commands do return resources and these resources are listed as standard output usually using either a command-specific table format or the default YAML format. Moreover, the `--format` flag can be used to change or configure these default output formats. The `yaml`, `json`, and `csv` output `--format` values guarantee that successful command completion results in standard output data that can be parsed using the respective format. A detailed explanation of the capabilities of the `--format` flag can be found with the `gdcloud topic formats` command. For commands that do not return resources, the output is defined in the command's `--help` flag. The standard error is reserved for diagnostics. In general, the format of standard error data might change from release to release. Users must not script against specific content, or even the existence of output to the standard error at all. The only reliable error indicator is the exit status. No gdcloud CLI commands should crash with an uncaught exception. However, if the gdcloud CLI does crash, the stack trace is intercepted and written to the log file, and a crash diagnostic is written to the standard error.

## Exit Status

Exit status `0` indicates success. Any other exit status indicates an error. Command-specific diagnostics will explain the nature of the error and how to correct it.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
