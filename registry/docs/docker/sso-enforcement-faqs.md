Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# SSO enforcement FAQs

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Does Docker SSO support authenticating through the command line?](#does-docker-sso-support-authenticating-through-the-command-line)

When SSO is enforced, [passwords are prevented from accessing the Docker CLI](/security/security-announcements/#deprecation-of-password-logins-on-cli-when-sso-enforced). You must use a personal access token (PAT) for CLI authentication instead.

Each user must create a PAT to access the CLI. To learn how to create a PAT, see [Manage personal access tokens](/security/access-tokens/). Users who already used a PAT before SSO enforcement can continue using that PAT.

## [How does SSO affect automation systems and CI/CD pipelines?](#how-does-sso-affect-automation-systems-and-cicd-pipelines)

Before enforcing SSO, you must [create personal access tokens](/security/access-tokens/) to replace passwords in automation systems and CI/CD pipelines.

## [Can I turn on SSO without enforcing it immediately?](#can-i-turn-on-sso-without-enforcing-it-immediately)

Yes, you can turn on SSO without enforcement. Users can choose between Docker ID (standard email and password) or domain-verified email address (SSO) at the sign-in screen.

## [SSO is enforced, but a user can sign in using a username and password. Why is this happening?](#sso-is-enforced-but-a-user-can-sign-in-using-a-username-and-password-why-is-this-happening)

Guest users who aren't part of your registered domain but have been invited to your organization don't sign in through your SSO identity provider. SSO enforcement only applies to users who belong to your verified domain.

## [Can I test SSO functionality before going to production?](#can-i-test-sso-functionality-before-going-to-production)

Yes, you can create a test organization with a 5-seat Business subscription. When testing, turn on SSO but don't enforce it, or all domain email users will be forced to sign in to the test environment.

## [What is enforcing SSO versus enforcing sign-in?](#what-is-enforcing-sso-versus-enforcing-sign-in)

These are separate features you can use independently or together:

- Enforcing SSO ensures users sign in using SSO credentials instead of their Docker ID, enabling better credential management.
- Enforcing sign-in to Docker Desktop ensures users always sign in to accounts that are members of your organization, so security settings and subscription benefits are always applied.

For more details, see [Enforce sign-in for Desktop](https://docs.docker.com/enterprise/security/enforce-sign-in/#enforcing-sign-in-versus-enforcing-single-sign-on-sso).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/enterprise/security/single-sign-on/FAQs/enforcement-faqs.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fenterprise%2fsecurity%2fsingle-sign-on%2ffaqs%2fenforcement-faqs%2f\&labels=status%2Ftriage)

Table of contents
