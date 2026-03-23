When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Configure single sign-on

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Subscription: Business

Requires: Docker Desktop [4.42](https://docs.docker.com/desktop/release-notes/#4420) and later

For: Administrators

Learn how to set up single sign-on (SSO) for your Docker organization by adding and verifying the domains your members use to sign in.

## [Step one: Add a domain](#step-one-add-a-domain)

> Note
>
> Docker supports multiple identity provider (IdP) configurations. You can associate one domain with more than one IdP.

To add a domain:

1. Sign in to [Docker Home](https://app.docker.com) and choose your organization. If it's part of a company, select the company first to manage the domain at that level.
2. Select **Admin Console**, then **Domain management**.
3. Select **Add a domain**.
4. Enter your domain in the text box and select **Add domain**.
5. In the modal, copy the **TXT Record Value** provided for domain verification.

## [Step two: Verify your domain](#step-two-verify-your-domain)

To confirm domain ownership, add a TXT record to your Domain Name System (DNS) host using the TXT Record Value from Docker. DNS propagation can take up to 72 hours. Docker automatically checks for the record during this time.

> Tip
>
> When adding a record name, **use `@` or leave it empty** for root domains like `example.com`. **Avoid common values** like `docker`, `docker-verification`, `www`, or your domain name itself. Always **check your DNS provider's documentation** to verify their specific record name requirements.

AWS Route 53 Google Cloud DNS GoDaddy Other providers

1. To add your TXT record to AWS, see [Creating records by using the Amazon Route 53 console](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-creating.html).

2. Wait up to 72 hours for TXT record verification.

3. After the record is live, go to **Domain management** in the [Admin Console](https://app.docker.com/admin) and select **Verify**.

4. To add your TXT record to Google Cloud DNS, see [Verifying your domain with a TXT record](https://cloud.google.com/identity/docs/verify-domain-txt).

5. Wait up to 72 hours for TXT record verification.

6. After the record is live, go to **Domain management** in the [Admin Console](https://app.docker.com/admin) and select **Verify**.

7. To add your TXT record to GoDaddy, see [Add a TXT record](https://www.godaddy.com/help/add-a-txt-record-19232).

8. Wait up to 72 hours for TXT record verification.

9. After the record is live, go to **Domain management** in the [Admin Console](https://app.docker.com/admin) and select **Verify**.

10. Sign in to your domain host.

11. Add a TXT record to your DNS settings and save the record.

12. Wait up to 72 hours for TXT record verification.

13. After the record is live, go to **Domain management** in the [Admin Console](https://app.docker.com/admin) and select **Verify**.

## [Next steps](#next-steps)

- [Connect Docker and your IdP](https://docs.docker.com/enterprise/security/single-sign-on/connect/).
- [Troubleshoot](https://docs.docker.com/enterprise/troubleshoot/troubleshoot-sso/) SSO issues.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/enterprise/security/single-sign-on/configure.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fenterprise%2fsecurity%2fsingle-sign-on%2fconfigure%2f\&labels=status%2Ftriage)

Table of contents
