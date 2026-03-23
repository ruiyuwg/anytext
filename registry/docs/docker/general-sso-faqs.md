When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# General SSO FAQs

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [What SSO flows does Docker support?](#what-sso-flows-does-docker-support)

Docker supports Service Provider Initiated (SP-initiated) SSO flow. Users must sign in to Docker Hub or Docker Desktop to initiate the SSO authentication process.

## [Does Docker SSO support multi-factor authentication?](#does-docker-sso-support-multi-factor-authentication)

When an organization uses SSO, multi-factor authentication is controlled at the identity provider level, not on the Docker platform.

## [Can I retain my Docker ID when using SSO?](#can-i-retain-my-docker-id-when-using-sso)

Users with personal Docker IDs retain ownership of their repositories, images, and assets. When SSO is enforced, existing accounts with company domain emails are connected to the organization. Users signing in without existing accounts automatically have new accounts and Docker IDs created.

## [Are there any firewall rules required for SSO configuration?](#are-there-any-firewall-rules-required-for-sso-configuration)

No specific firewall rules are required as long as `login.docker.com` is accessible. This domain is commonly accessible by default, but some organizations may need to allow it in their firewall settings if SSO setup encounters issues.

## [Does Docker use my IdP's default session timeout?](#does-docker-use-my-idps-default-session-timeout)

Yes, Docker supports your IdP's session timeout using a custom `dockerSessionMinutes` SAML attribute instead of the standard `SessionNotOnOrAfter` element. See [SSO attributes](https://docs.docker.com/enterprise/security/provisioning/#sso-attributes) for more information.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/enterprise/security/single-sign-on/FAQs/general.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fenterprise%2fsecurity%2fsingle-sign-on%2ffaqs%2fgeneral%2f\&labels=status%2Ftriage)

Table of contents
