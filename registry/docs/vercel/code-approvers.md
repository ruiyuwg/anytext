# Code Approvers

> **🔒 Permissions Required**: Code Owners

Code Approvers are a list of [GitHub usernames or teams](https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams) that can review and accept pull request changes to a directory or file.

You can enable Code Approvers for a directory by adding a `.vercel.approvers` file to that directory in your codebase. For example, this `.vercel.approvers` file defines the GitHub team `vercel/ui-team` as an approver for the `packages/design` directory:

```sh copy filename="packages/design/.vercel.approvers"
@vercel/ui-team
```

When a team is declared as an approver, all members of that team will be able to approve changes to the directory or file and at least one member of the team must approve the changes.

## Enforcing Code Approvals

Code Approvals by the correct owners are enforced through the `Vercel – Code Owners` GitHub check added by the Vercel GitHub App.

When a pull request is opened, the GitHub App will check if the pull request contains changes to a directory or file that has Code Approvers defined.

If no Code Approvers are defined for the changes then the check will pass. Otherwise, the check will fail until the correct Code Approvers have approved the changes.

To make Code Owners required, follow the [GitHub required status checks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/troubleshooting-required-status-checks) documentation to add `Vercel – Code Owners` as a required check to your repository.

## Inheritance

Code Approvers are inherited from parent directories. If a directory does not have a `.vercel.approvers` file, then the approvers from the parent directory will be used.
Furthermore, even if a directory does have a `.vercel.approvers` file, then the approvers from a parent directory with a `.vercel.approvers` file can also approve the changed files.
This structure allows the most specific approver to review most of the code, but allows other approvers who have broader context and approval power to still review and approve the code when appropriate.

To illustrate the inheritance, the following example has two `.vercel.approvers` files.

The first file defines owners for the `packages/design` directory. The `@vercel/ui-team` can approve any change to a file under `packages/design/...`:

```sh copy filename="packages/design/.vercel.approvers"
@vercel/ui-team
```

A second `.vercel.approvers` file is declared at the root of the codebase and allows users `elmo` and `oscar` to approve changes to any part of the repository, including the `packages/design` directory.

```sh copy filename=".vercel.approvers"
@elmo
@oscar
```

The hierarchical nature of Code Owners enables many configurations in larger codebases, such as allowing individuals to approve cross-cutting changes or creating an escalation path when an approver is unavailable.

## Reviewer Selection

When a pull request is opened, the Vercel GitHub App will select the approvers for the changed files.
`.vercel.approvers` files allow extensive definitions of file mappings to possible approvers. In many cases, there will be multiple approvers for the same changed file.
The Vercel GitHub app selects the best reviewers for the pull request based on affinity of `.vercel.approvers` definitions and overall coverage of the changed files.

### Bypassing Reviewer Selection

You can skip automatic assignment of reviewers by adding `[vercel:skip:owners]` to your pull request description.

To request specific reviewers, you can override the automatic selection by including special text in your pull request description:

```text copy
[vercel:approver:@owner1]
[vercel:approver:@owner2]
```

Code Owners will still ensure that the appropriate code owners have approved the pull request before it can pass. Therefore, make sure to select reviewers who provide sufficient coverage for all files in the pull request.

## Modifiers

Modifiers enhance the behavior of Code Owners by giving more control over the behavior of approvals and reviewer selection. The available modifiers are:

- [silent](#silent)
- [notify](#notify)
- [optional](#optional)
- [team](#team)
- [members](#members-default)
  - [not](#excluding-team-members-from-review)
- [required](#required)

Modifiers are appended to the end of a line to modify the behavior of the owner listed for that line:

```sh copy filename=".vercel.approvers"
# Approver with no modifier
@owner1
# Approver with optional modifier
@owner2:optional
```

### `silent`

The user or team is an owner for the provided code but is never requested for review. If the user is a non-silent approver in another `.vercel.approvers` file that is closer to the changed files in the directory structure, then they will still be requested for review. The `:silent` modifier can be useful when there's an individual that should be able to approve code, but does not want to receive requests, such as a manager or an old team member.

```sh copy filename=".vercel.approvers"
# This person will never be requested to review code but can still approve for owners coverage.
@owner:silent
```

### `notify`

The user or team is always notified through a comment on the pull request. These owners may still be requested for review as part of [reviewer selection](#reviewer-selection), but will still be notified even if not requested. This can be useful for teams that want to be notified on every pull request that affects their code.

```sh copy filename=".vercel.approvers"
# my-team is always notified even if leerob is selected as the reviewer.
@vercel/my-team:notify
@leerob
```

### `optional`

The user or team is never requested for review, and they are ignored as owners when computing review requirements. The owner can still approve files they have coverage over, including those that have other owners.

This can be useful while in the process of adding code owners to an existing repository or when you want to designate an owner for a directory but not block pull request reviewers on this person or team.

```sh copy filename=".vercel.approvers"
@owner:optional
```

### `members` (default)

The `:members` modifier can be used with GitHub teams to select an individual member of the team for reviewer rather than assigning it to the entire team. This can be useful when teams want to distribute the code review load across everyone on the team. This is the default behavior for team owners if the [`:team`](#team) modifier is not specified.

```sh copy filename=".vercel.approvers"
# An individual from the @acme/eng-team will be requested as a reviewer.
@acme/eng-team:members
```

#### Excluding team members from review

The `:not` modifier can be used with `:members` to exclude certain individuals on the team from review. This can be useful when there is someone on the team who shouldn't be selected for reviews, such as a person who is out of office or someone who doesn't review code every day.

```sh copy filename=".vercel.approvers"
# An individual from the @acme/eng-team, except for leerob will be requested as a reviewer.
@acme/eng-team:members:not(leerob)
# Both leerob and mknichel will not be requested for review.
@acme/eng-team:members:not(leerob):not(mknichel)
```

### `team`

The `:team` modifier can be used with GitHub teams to request the entire team for review instead of individual members from the team. This modifier must be used with team owners and can not be used with the [`:members`](#members-default) modifier.

```sh copy filename=".vercel.approvers"
# The @acme/eng-team will be requested as a reviewer.
@acme/eng-team:team
```

### `required`

This user or team is always notified (through a comment) and is a required approver on the pull request regardless of the approvals coverage of other owners. Since the owner specified with `:required` is always required regardless of the owners hierarchy, this should be rarely used because it can make some changes such as global refactorings challenging. `:required` should be usually reserved for highly sensitive changes, such as security, privacy, billing, or critical systems.

> **💡 Note:** Most of the time you don't need to specify required approvers. Non-modified
> approvers are usually enough so that correct reviews are enforced.

```sh copy filename=".vercel.approvers"
# Always notifed and are required reviewers.
# The check won't pass until both `owner1` and `owner2` approve.
@owner1:required
@owner2:required
```

When you specify a team as a required reviewer only one member of that team is required to approve.

```sh copy filename=".vercel.approvers"
# The team is notifed and are required reviewers.
# The check won't pass until one member of the team approves.
@vercel/my-team:required
```

## Patterns

The `.vercel.approvers` file supports specifying files with a limited set of glob patterns:

- [Directory](#directory-default)
- [Current Directory](#current-directory-pattern)
- [Globstar](#globstar-pattern)
- [Specifying multiple owners](#specifying-multiple-owners-for-the-same-pattern)

The patterns are case-insensitive.

### Directory (default)

The default empty pattern represents ownership of the current directory and all subdirectories.

```sh copy filename=".vercel.approvers"
# Matches all files in the current directory and all subdirectories.
@owner
```

### Current Directory Pattern

A pattern that matches a file or set of files in the current directory.

```sh copy filename=".vercel.approvers"
# Matches the single `package.json` file in the current directory only.
package.json @package-owner

# Matches all javascript files in the current directory only.
*.js @js-owner
```

### Globstar Pattern

The globstar pattern begins with `**/`. And represents ownership of files matching the glob in the current directory and its subdirectories.

```sh copy filename=".vercel.approvers"
# Matches all `package.json` files in the current directory and its subdirectories.
**/package.json @package-owner

# Matches all javascript files in the current directory and its subdirectories.
**/*.js @js-owner
```

Code Owners files are meant to encourage distributed ownership definitions
across a codebase. Thus, the globstar `**/` and `/` can only be used at the
start of a pattern. They cannot be used in the middle of a pattern to enumerate
subdirectories.

For example, the following patterns are not allowed:

```sh copy filename=".vercel.approvers"
# Instead add a `.vercel.approvers` file in the `src` directory.
src/**/*.js @js-owner

# Instead add a `.vercel.approvers` file in the `src/pages` directory.
src/pages/index.js @js-owner
```

### Specifying multiple owners for the same pattern

Each owner for the same pattern should be specified on separate lines. All
owners listed will be able to approve for that pattern.

```sh copy filename=".vercel.approvers"
# Both @package-owner and @org/team will be able to approve changes to the
# package.json file.
package.json @package-owner
package.json @org/team
```

## Wildcard Approvers

If you would like to allow a certain directory or file to be approved by anyone, you can use the wildcard owner `*`. This is useful for files that are not owned by a specific team or individual. The wildcard owner cannot be used with [modifiers](#modifiers).

```sh copy filename=".vercel.approvers"
# Changes to the `pnpm-lock.yaml` file in the current directory can be approved by anyone.
pnpm-lock.yaml *

# Changes to any README in the current directory or its subdirectories can be approved by anyone.
**/readme.md *

```

title: "Getting Started with Code Owners"
description: "Learn how to set up Code Owners for your codebase."
last\_updated: "2026-03-23T09:40:07.234Z"
source: "https://vercel.com/docs/code-owners/getting-started"
