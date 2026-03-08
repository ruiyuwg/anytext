Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# SSO identity provider FAQs

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Can I use multiple identity providers with Docker SSO?](#can-i-use-multiple-identity-providers-with-docker-sso)

Yes, Docker supports multiple IdP configurations. A domain can be associated with multiple IdPs. Docker supports Entra ID (formerly Azure AD) and identity providers that support SAML 2.0.

## [Can I change my identity provider after configuring SSO?](#can-i-change-my-identity-provider-after-configuring-sso)

Yes. Delete your existing IdP configuration in your Docker SSO connection, then [configure SSO using your new IdP](https://docs.docker.com/enterprise/security/single-sign-on/connect/). If you had already turned on enforcement, turn off enforcement before updating the provider connection.

## [What information do I need from my identity provider to configure SSO?](#what-information-do-i-need-from-my-identity-provider-to-configure-sso)

To turn on SSO in Docker, you need the following from your IdP:

- SAML: Entity ID, ACS URL, Single Logout URL, and the public X.509 certificate
- Entra ID (formerly Azure AD): Client ID, Client Secret, AD Domain

## [What happens if my existing certificate expires?](#what-happens-if-my-existing-certificate-expires)

If your certificate expires, contact your identity provider to retrieve a new X.509 certificate. Then update the certificate in the [SSO configuration settings](https://docs.docker.com/enterprise/security/single-sign-on/manage/#manage-sso-connections) in the Docker Admin Console.

## [What happens if my IdP goes down when SSO is turned on?](#what-happens-if-my-idp-goes-down-when-sso-is-turned-on)

If SSO is enforced, users can't access Docker Hub when your IdP is down. Users can still access Docker Hub images from the CLI using personal access tokens.

If SSO is turned on but not enforced, users can fall back to username/password authentication.

## [Do bot accounts need seats to access organizations using SSO?](#do-bot-accounts-need-seats-to-access-organizations-using-sso)

Yes, bot accounts need seats like regular users, requiring a non-aliased domain email in the IdP and using a seat in Docker Hub. You can add bot accounts to your IdP and create access tokens to replace other credentials.

## [Does SAML SSO use Just-in-Time provisioning?](#does-saml-sso-use-just-in-time-provisioning)

The SSO implementation uses Just-in-Time (JIT) provisioning by default. You can optionally turn off JIT in the Admin Console if you turn on auto-provisioning using SCIM. See [Just-in-Time provisioning](/security/for-admins/provisioning/just-in-time/).

## [My Entra ID SSO connection isn't working and shows an error. How can I troubleshoot this?](#my-entra-id-sso-connection-isnt-working-and-shows-an-error-how-can-i-troubleshoot-this)

Confirm that you've configured the necessary API permissions in Entra ID for your SSO connection. You need to grant administrator consent within your Entra ID tenant. See [Entra ID (formerly Azure AD) documentation](https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/grant-admin-consent?pivots=portal#grant-admin-consent-in-app-registrations).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/enterprise/security/single-sign-on/FAQs/idp-faqs.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fenterprise%2fsecurity%2fsingle-sign-on%2ffaqs%2fidp-faqs%2f\&labels=status%2Ftriage)

Table of contents
