When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# SSO domain FAQs

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Can I add sub-domains?](#can-i-add-sub-domains)

Yes, you can add sub-domains to your SSO connection. All email addresses must use domains you've added to the connection. Verify that your DNS provider supports multiple TXT records for the same domain.

## [Do I need to keep the DNS TXT record permanently?](#do-i-need-to-keep-the-dns-txt-record-permanently)

You can remove the TXT record after one-time verification to add the domain. However, if your organization changes identity providers and needs to set up SSO again, you'll need to verify the domain again.

## [Can I verify the same domain for multiple organizations?](#can-i-verify-the-same-domain-for-multiple-organizations)

You can't verify the same domain for multiple organizations at the organization level. To verify one domain for multiple organizations, you must have a Docker Business subscription and create a company. Companies allow centralized management of organizations and domain verification at the company level.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/enterprise/security/single-sign-on/FAQs/domain-faqs.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fenterprise%2fsecurity%2fsingle-sign-on%2ffaqs%2fdomain-faqs%2f\&labels=status%2Ftriage)

Table of contents
