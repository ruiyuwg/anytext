[Skip to content](#start-of-content)

You signed in with another tab or window. Reload to refresh your session. You signed out in another tab or window. Reload to refresh your session. You switched accounts on another tab or window. Reload to refresh your session. Dismiss alert

[angular](/angular) / **[angular](/angular/angular)** Public

- [Notifications](/login?return_to=%2Fangular%2Fangular) You must be signed in to change notification settings
- [Fork 27.1k](/login?return_to=%2Fangular%2Fangular)
- [Star 100k](/login?return_to=%2Fangular%2Fangular)

[](/angular/angular)

## FilesExpand file tree

 main

/

# CONTRIBUTING.md

Copy path

BlameMore file actions

BlameMore file actions

## Latest commit

## History

[History](/angular/angular/commits/main/CONTRIBUTING.md)

[](/angular/angular/commits/main/CONTRIBUTING.md)History

257 lines (163 loc) · 11.8 KB

 main

/

# CONTRIBUTING.md

Top

## File metadata and controls

- Preview

- Code

- Blame

257 lines (163 loc) · 11.8 KB

[Raw](https://github.com/angular/angular/raw/refs/heads/main/CONTRIBUTING.md)

Copy raw file

Download raw file

Outline

Edit and raw actions

# Contributing to Angular

[](#contributing-to-angular)

We would love for you to contribute to Angular and help make it even better than it is today! As a contributor, here are the guidelines we would like you to follow:

- [Code of Conduct](#coc)
- [Question or Problem?](#question)
- [Issues and Bugs](#issue)
- [Feature Requests](#feature)
- [Submission Guidelines](#submit)
- [Coding Rules](#rules)
- [Commit Message Guidelines](#commit)
- [Signing the CLA](#cla)

## Code of Conduct

[](#-code-of-conduct)

Help us keep Angular open and inclusive. Please read and follow our [Code of Conduct](https://github.com/angular/code-of-conduct/blob/main/CODE_OF_CONDUCT.md).

## Got a Question or Problem?

[](#-got-a-question-or-problem)

Do not open issues for general support questions as we want to keep GitHub issues for bug reports and feature requests. Instead, we recommend using [Stack Overflow](https://stackoverflow.com/questions/tagged/angular) to ask support-related questions. When creating a new question on Stack Overflow, make sure to add the `angular` tag.

Stack Overflow is a much better place to ask questions since:

- there are thousands of people willing to help on Stack Overflow
- questions and answers stay available for public viewing so your question/answer might help someone else
- Stack Overflow's voting system assures that the best answers are prominently visible.

To save your and our time, we will systematically close all issues that are requests for general support and redirect people to Stack Overflow.

If you would like to chat about the question in real-time, you can reach out via [the Angular community Discord server](https://discord.gg/angular).

## Found a Bug?

[](#-found-a-bug)

If you find a bug in the source code, you can help us by [submitting an issue](#submit-issue) to our [GitHub Repository](https://github.com/angular/angular). Even better, you can [submit a Pull Request](#submit-pr) with a fix.

## Missing a Feature?

[](#-missing-a-feature)

You can *request* a new feature by [submitting an issue](#submit-issue) to our GitHub Repository. If you would like to *implement* a new feature, please consider the size of the change in order to determine the right steps to proceed:

- For a **Major Feature**, first open an issue and outline your proposal so that it can be discussed. This process allows us to better coordinate our efforts, prevent duplication of work, and help you to craft the change so that it is successfully accepted into the project.

  **Note**: Adding a new topic to the documentation, or significantly re-writing a topic, counts as a major feature.

- **Small Features** can be crafted and directly [submitted as a Pull Request](#submit-pr).

## Submission Guidelines

[](#-submission-guidelines)

### Submitting an Issue

[](#-submitting-an-issue)

Before you submit an issue, please search the issue tracker. An issue for your problem might already exist and the discussion might inform you of workarounds readily available.

We want to fix all the issues as soon as possible, but before fixing a bug, we need to reproduce and confirm it. In order to reproduce bugs, we require that you provide a minimal reproduction. Having a minimal reproducible scenario gives us a wealth of important information without going back and forth to you with additional questions.

A minimal reproduction allows us to quickly confirm a bug (or point out a coding problem) as well as confirm that we are fixing the right problem.

We require a minimal reproduction to save maintainers' time and ultimately be able to fix more bugs. Often, developers find coding problems themselves while preparing a minimal reproduction. We understand that sometimes it might be hard to extract essential bits of code from a larger codebase, but we really need to isolate the problem before we can fix it.

Unfortunately, we are not able to investigate / fix bugs without a minimal reproduction, so if we don't hear back from you, we are going to close an issue that doesn't have enough info to be reproduced.

You can file new issues by selecting from our [new issue templates](https://github.com/angular/angular/issues/new/choose) and filling out the issue template.

### Contribution Quality

[](#-contribution-quality)

We strongly value open source contribution and pull requests from community contributors. Please note that every pull request is reviewed and merged by an actual person on the team, which does take time and effort. That is time and effort that does take away from other valuable work. With that in mind we have an minimum set of expectations that are required of any community contribution pull request that is opened.

1. Search [GitHub](https://github.com/angular/angular/pulls) for an open or closed PR that relates to your submission.

   - You don't want to duplicate existing efforts.

2. Be sure that an issue or pull request clearly describes the problem you're fixing, or documents the design for the feature you'd like to add. Issues require a *minimal* reproduction.

3. Discussing the design in an issue upfront helps to ensure that we're ready to accept your work. Pull requests are not the right place to do design work.

   - When in doubt, open an issue first before doing any sort of speculative implementation work

4. Ideally the PR should be tied to an issue, but this is not required

5. The change should improve code quality (i.e. addressing a TODO) or should impact / improve a feature

6. Micro optimizations will only be accepted if they are validated by an actual benchmark

7. Do not open pull requests that are addressing feature requests that are not labeled as "help wanted" as they usually need additional design work before we could accept pull requests

8. The change should be well tested

If your pull request does not meet these minimum expectations, we may close your PR. Also, if your PR introduces a breaking change, it's possible the level of churn this breaking change causes may block our ability to move forward with it. We may close your PR in that situation, as well. Otherwise, we're excited to see your contributions and enthusiasm for Angular!

### Submitting a Pull Request (PR)

[](#-submitting-a-pull-request-pr)

Before you submit your Pull Request (PR) consider the following guidelines:

1. Please sign our [Contributor License Agreement (CLA)](#cla) before sending PRs. We cannot accept code without a signed CLA. Make sure you author all contributed Git commits with email address associated with your CLA signature.

2. [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) the [angular/angular](https://github.com/angular/angular/fork) repo.

3. In your forked repository, make your changes in a new git branch:

   git checkout -b my-fix-branch main

4. Create your patch, **including appropriate test cases**.

5. Follow our [Coding Rules](#rules).

6. Run the full Angular test suite, as described in the [developer documentation](/angular/angular/blob/main/contributing-docs/building-and-testing-angular.md), and ensure that all tests pass.

7. Commit your changes using a descriptive commit message that follows our [commit message conventions](/angular/angular/blob/main/contributing-docs/commit-message-guidelines.md). Adherence to these conventions is necessary because release notes are automatically generated from these messages.

   git commit --all

   Note: the optional commit `--all` command line option will automatically "add" and "rm" edited files.

8. Push your branch to GitHub:

   git push origin my-fix-branch

9. In GitHub, send a pull request to `angular:main`.

### Reviewing a Pull Request

[](#reviewing-a-pull-request)

The Angular team reserves the right not to accept pull requests from community members who haven't been good citizens of the community. Such behavior includes not following the [Angular code of conduct](https://github.com/angular/code-of-conduct) and applies within or outside of Angular managed channels.

#### Addressing review feedback

[](#addressing-review-feedback)

If we ask for changes via code reviews then:

1. Make the required updates to the code.

2. Re-run the Angular test suites to ensure tests are still passing.

3. Create a fixup commit and push to your GitHub repository (this will update your Pull Request):

   git commit --all --fixup HEAD
   git push

   For more info on working with fixup commits see [here](/angular/angular/blob/main/contributing-docs/using-fixup-commits.md).

That's it! Thank you for your contribution!

##### Updating the commit message

[](#updating-the-commit-message)

A reviewer might often suggest changes to a commit message (for example, to add more context for a change or adhere to our [commit message guidelines](/angular/angular/blob/main/contributing-docs/commit-message-guidelines.md)). In order to update the commit message of the last commit on your branch:

1. Check out your branch:

   git checkout my-fix-branch

2. Amend the last commit and modify the commit message:

   git commit --amend

3. Push to your GitHub repository:

   git push --force-with-lease

> NOTE:\
> If you need to update the commit message of an earlier commit, you can use `git rebase` in interactive mode. See the [git docs](https://git-scm.com/docs/git-rebase#_interactive_mode) for more details.

#### After your pull request is merged

[](#after-your-pull-request-is-merged)

After your pull request is merged, you can safely delete your branch and pull the changes from the main (upstream) repository:

- Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

  git push origin --delete my-fix-branch

- Check out the main branch:

  git checkout main -f

- Delete the local branch:

  git branch -D my-fix-branch

- Update your local `main` with the latest upstream version:

  git pull --ff upstream main

## Coding Rules

[](#-coding-rules)

To ensure consistency throughout the source code, keep these rules in mind as you are working:

- All features or bug fixes **must be tested** by one or more specs (unit-tests).

- All public API methods **must be documented**.

- We follow [Google's TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html), but wrap all code at **100 characters**.

  An automated formatter is available, see [building-and-testing-angular.md](/angular/angular/blob/main/contributing-docs/building-and-testing-angular.md#formatting-your-source-code).

## Commit Message Guidelines

[](#-commit-message-guidelines)

We have very precise rules over how our Git commit messages must be formatted:

```
<type>(<scope>): <short summary>
```

See [Commit Message Guidelines](/angular/angular/blob/main/contributing-docs/commit-message-guidelines.md) for details.

## Signing the CLA

[](#-signing-the-cla)

Please sign our Contributor License Agreement (CLA) before sending pull requests. For any code changes to be accepted, the CLA must be signed. It's a quick process, we promise!

- For individuals, we have a [simple click-through form](https://cla.developers.google.com/about/google-individual).
- For corporations, we'll need you to [print, sign and one of scan+email, fax or mail the form](https://cla.developers.google.com/about/google-corporate).

If you have more than one GitHub accounts, or multiple email addresses associated with a single GitHub account, you must sign the CLA using the primary email address of the GitHub account used to author Git commits and send pull requests.

The following documents can help you sort out issues with GitHub accounts and multiple email addresses:

- <https://help.github.com/articles/setting-your-commit-email-address-in-git/>
- <https://stackoverflow.com/questions/37245303/what-does-usera-committed-with-userb-13-days-ago-on-github-mean>
- <https://help.github.com/articles/about-commit-email-addresses/>
- <https://help.github.com/articles/blocking-command-line-pushes-that-expose-your-personal-email-address/>

You can’t perform that action at this time.
