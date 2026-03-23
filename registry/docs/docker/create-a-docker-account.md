When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Create a Docker account

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

You can create a free Docker account with your email address or by signing up with your Google or GitHub account. After creating a unique Docker ID, you can access all Docker products, including Docker Hub, Docker Desktop, and Docker Scout.

Your Docker ID becomes your username for hosted Docker services, and [Docker forums](https://forums.docker.com/).

> Tip
>
> Explore [Docker's subscriptions](https://www.docker.com/pricing?ref=Docs\&refAction=DocsCreateAccount) to see what else Docker can offer you.

## [Create and verify your account](#create-and-verify-your-account)

Signing up with an email address, Google, or GitHub account requires additional verification to complete account creation:

- If you sign up with Google or GitHub, you must first verify your email address with that provider.
- If you sign up with an email address, you need to follow verification steps.
  - After creating an account, Docker asks for a one-time password (OTP).
  - Find the email from Docker with your code, then return to the OTP page to paste in your OTP code.

Docker blocks sign-in until you've verified your account.

### [Sign up with your email](#sign-up-with-your-email)

1. Go to the [Docker sign-up page](https://app.docker.com/signup/) and enter a unique, valid email address.
2. Enter a username to use as your Docker ID. Once you create your Docker ID you can't reuse it in the future if you deactivate this account. Your username: - Must be between 4 and 30 characters long - Can only contain numbers and lowercase letters
3. Choose a password that's at least 9 characters long, then select **Sign Up**.
4. Verify your email address when you receive the Docker OTP verification email. This completes the registration process.

### [Sign up with Google or GitHub](#sign-up-with-google-or-github)

1. Go to the [Docker sign-up page](https://app.docker.com/signup/).
2. Select your social provider, Google or GitHub.
3. Select the social account you want to link to your Docker account.
4. Select **Authorize Docker** to let Docker access your social account information. You will be re-routed to the sign-up page.
5. Enter a username to use as your Docker ID. Your username:
   - Must be between 4 and 30 characters long
   - Can only contain numbers and lowercase letters
6. Select **Sign up**.

## [Sign in to your account](#sign-in-to-your-account)

You can sign in with your email, Google or GitHub account, or from the Docker CLI.

### [Sign in with email or Docker ID](#sign-in-with-email-or-docker-id)

1. Go to the [Docker sign in page](https://login.docker.com).
2. Enter your email address or Docker ID and select **Continue**.
3. Enter your password and select **Continue**.

To reset your password, see [Reset your password](#reset-your-password).

### [Sign in with Google or GitHub](#sign-in-with-google-or-github)

You can sign in using your Google or GitHub credentials. If your social account uses the same email address as an existing Docker ID, the accounts are automatically linked.

If no Docker ID exists, Docker creates a new account for you.

Docker doesn't support linking multiple sign-in methods to the same Docker ID.

### [Sign in using the CLI](#sign-in-using-the-cli)

Use the `docker login` command to authenticate from the command line. For details, see [`docker login`](/reference/cli/docker/login/).

> Warning
>
> The `docker login` command stores credentials in your home directory under `.docker/config.json`. The password is base64-encoded.
>
> To improve security, use [Docker credential helpers](https://github.com/docker/docker-credential-helpers). For even stronger protection, use a [personal access token](https://docs.docker.com/security/access-tokens/) instead of a password. This is especially useful in CI/CD environments or when credential helpers aren't available.

## [Reset your password](#reset-your-password)

To reset your password:

1. Go to the [Docker sign in page](https://login.docker.com/).
2. Enter your email address.
3. When prompted for your password, select **Forgot password?**.

## [Troubleshooting](#troubleshooting)

If you have a paid Docker subscription, [contact the Support team](https://hub.docker.com/support/contact/) for assistance.

All Docker users can seek troubleshooting information and support through the following resources, where Docker or the community respond on a best effort basis:

- [Docker Community Forums](https://forums.docker.com/)
- [Docker Community Slack](http://dockr.ly/comm-slack)

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/accounts/create-account.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2faccounts%2fcreate-account%2f\&labels=status%2Ftriage)

Table of contents
