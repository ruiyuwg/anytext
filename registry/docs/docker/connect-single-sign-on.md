Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Connect single sign-on

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Subscription: Business

Requires: Docker Desktop [4.42](https://docs.docker.com/desktop/release-notes/#4420) and later

For: Administrators

Setting up a single sign-on (SSO) connection involves configuring both Docker and your identity provider (IdP). This guide walks you through setup in Docker, setup in your IdP, and final connection.

> Tip
>
> You’ll copy and paste values between Docker and your IdP. Complete this guide in one session with separate browser windows open for Docker and your IdP.

## [Supported identity providers](#supported-identity-providers)

Docker supports any SAML 2.0 or OIDC-compatible identity provider. This guide provides detailed setup instructions for the most commonly used providers: Okta and Microsoft Entra ID.

If you're using a different IdP, the general process remains the same:

1. Configure the connection in Docker.
2. Set up the application in your IdP using the values from Docker.
3. Complete the connection by entering your IdP's values back into Docker.
4. Test the connection.

## [Prerequisites](#prerequisites)

Before you begin:

- Verify your domain
- Set up an account with your identity provider (IdP)
- Complete the steps in the [Configure single sign-on](https://docs.docker.com/enterprise/security/single-sign-on/configure/) guide

## [Step one: Create an SSO connection in Docker](#step-one-create-an-sso-connection-in-docker)

> Note
>
> You must [verify at least one domain](https://docs.docker.com/enterprise/security/single-sign-on/configure/) before creating an SSO connection.

1. Sign in to [Docker Home](https://app.docker.com) and choose your organization.
2. Select **Admin Console**, then **SSO and SCIM**.
3. Select **Create Connection** and provide a name for the connection.
4. Select an authentication method: **SAML** or **Azure AD (OIDC)**.
5. Copy the required values for your IdP:
   - Okta SAML: **Entity ID**, **ACS URL**
   - Azure OIDC: **Redirect URL**

Keep this window open to paste values from your IdP later.

## [Step two: Create an SSO connection in your IdP](#step-two-create-an-sso-connection-in-your-idp)

Use the following tabs based on your IdP provider.

Okta SAML Entra ID SAML 2.0 Azure Connect (OIDC)

1. Sign in to your Okta account and open the Admin portal.

2. Select **Administration** and then **Create App Integration**.

3. Select **SAML 2.0**, then **Next**.

4. Name your app "Docker".

5. Optional. Upload a logo.

6. Paste values from Docker:
   - Docker ACS URL -> **Single Sign On URL**
   - Docker Entity ID -> **Audience URI (SP Entity ID)**

7. Configure the following settings:
   - Name ID format: `EmailAddress`
   - Application username: `Email`
   - Update application on: `Create and update`

8. Optional. Add SAML attributes. See [SSO attributes](https://docs.docker.com/enterprise/security/provisioning/#sso-attributes).

9. Select **Next**.

10. Select the **This is an internal app that we have created** checkbox.

11. Select **Finish**.

12. Sign in to Microsoft Entra (formerly Azure AD).

13. Select **Default Directory** > **Add** > **Enterprise Application**.

14. Choose **Create your own application**, name it "Docker", and choose **Non-gallery**.

15. After creating your app, go to **Single Sign-On** and select **SAML**.

16. Select **Edit** on the **Basic SAML configuration** section.

17. Edit **Basic SAML configuration** and paste values from Docker:
    - Docker Entity ID -> **Identifier**
    - Docker ACS URL -> **Reply URL**

18. Optional. Add SAML attributes. See [SSO attributes](https://docs.docker.com/enterprise/security/provisioning/#sso-attributes).

19. Save the configuration.

20. From the **SAML Signing Certificate** section, download your **Certificate (Base64)**.

### [Register the app](#register-the-app)

1. Sign in to Microsoft Entra (formerly Azure AD).
2. Select **App Registration** > **New Registration**.
3. Name the application "Docker".
4. Set account types and paste the **Redirect URI** from Docker.
5. Select **Register**.
6. Copy the **Client ID**.

### [Create client secrets](#create-client-secrets)

1. In your app, go to **Certificates & secrets**.
2. Select **New client secret**, describe and configure duration, then **Add**.
3. Copy the **value** of the new secret.

### [Set API permissions](#set-api-permissions)

1. In your app, go to **API permissions**.
2. Select **Grant admin consent** and confirm.
3. Select **Add a permissions** > **Delegated permissions**.
4. Search and select `User.Read`.
5. Confirm that admin consent is granted.

## [Step three: Connect Docker to your IdP](#step-three-connect-docker-to-your-idp)

Complete the integration by pasting your IdP values into Docker.

Okta SAML Entra ID SAML 2.0 Azure Connect (OIDC)

1. In Okta, select your app and go to **View SAML setup instructions**.

2. Copy the **SAML Sign-in URL** and **x509 Certificate**.

   > Important
   >
   > Copy the entire certificate, including `----BEGIN CERTIFICATE----` and `----END CERTIFICATE----` lines.

3. Return to the Docker Admin Console.

4. Paste the **SAML Sign-in URL** and **x509 Certificate** values.

5. Optional. Select a default team.

6. Review and select **Create connection**.

7. Open your downloaded **Certificate (Base64)** in a text editor.

8. Copy the following values:

   - From Azure AD: **Login URL**
   - **Certificate (Base64)** contents

   > Important
   >
   > Copy the entire certificate, including `----BEGIN CERTIFICATE----` and `----END CERTIFICATE----` lines.

9. Return to the Docker Admin Console.

10. Paste the **Login URL** and **Certificate (Base64)** values.

11. Optional. Select a default team.

12. Review and select **Create connection**.

13. Return to the Docker Admin Console.

14. Paste the following values:
    - **Client ID**
    - **Client Secret**
    - **Azure AD Domain**

15. Optional. Select a default team.

16. Review and select **Create connection**.

## [Step four: Test the connection](#step-four-test-the-connection)

1. Open an incognito browser window.
2. Sign in to the Admin Console using your **domain email address**.
3. The browser will redirect to your identity provider's sign in page to authenticate. If you have [multiple IdPs](#optional-configure-multiple-idps), choose the sign sign-in option **Continue with SSO**.
4. Authenticate through your domain email instead of using your Docker ID.

If you're using the CLI, you must authenticate using a personal access token.

## [Optional: Configure multiple IdPs](#optional-configure-multiple-idps)

Docker supports multiple IdP configurations. To use multiple IdPs with one domain:

- Repeat Steps 1-4 on this page for each IdP.
- Each connection must use the same domain.
- Users will select **Continue with SSO** to choose their IdP at sign in.

## [Optional: Enforce SSO](#optional-enforce-sso)

> Important
>
> If SSO is not enforced, users can still sign in using Docker usernames and passwords.

Enforcing SSO requires users to use SSO when signing into Docker. This centralizes authentication and enforces policies set by the IdP.

1. Sign in to [Docker Home](https://app.docker.com/) and select your organization or company.
2. Select **Admin Console**, then **SSO and SCIM**.
3. In the SSO connections table, select the **Action** menu, then **Enable enforcement**.
4. Follow the on-screen instructions.
5. Select **Turn on enforcement**.

When SSO is enforced, your users are unable to modify their email address and password, convert a user account to an organization, or set up 2FA through Docker Hub. If you want to use 2FA, you must enable 2FA through your IdP.

## [Next steps](#next-steps)

- [Provision users](https://docs.docker.com/enterprise/security/provisioning/).
- [Enforce sign-in](https://docs.docker.com/enterprise/security/enforce-sign-in/).
- [Create personal access tokens](https://docs.docker.com/enterprise/security/access-tokens/).
- [Troubleshoot SSO](https://docs.docker.com/enterprise/troubleshoot/troubleshoot-sso/) issues.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/enterprise/security/single-sign-on/connect.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fenterprise%2fsecurity%2fsingle-sign-on%2fconnect%2f\&labels=status%2Ftriage)

Table of contents
