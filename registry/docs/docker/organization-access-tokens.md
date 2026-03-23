When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Organization access tokens

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Subscription: Team Business

Organization access tokens (OATs) provide secure, programmatic access to Docker Hub for automated systems, CI/CD pipelines, and other business-critical tasks. Unlike personal access tokens tied to individual users, OATs are associated with your organization and can be managed by any organization owner.

> Warning
>
> Organization access tokens are incompatible with Docker Desktop, Image Access Management, and Registry Access Management. If you use these features, use [personal access tokens](https://docs.docker.com/security/access-tokens/) instead.

## [Who should use organization access tokens?](#who-should-use-organization-access-tokens)

Use OATs for automated systems that need Docker Hub access without depending on individual user accounts:

- CI/CD pipelines: Build and deployment systems that push and pull images
- Production systems: Applications that pull images during deployment
- Monitoring tools: Systems that need to check repository status or pull images
- Backup systems: Tools that periodically pull images for archival
- Integration services: Third-party tools that integrate with your Docker Hub repositories

## [Key benefits](#key-benefits)

Benefits of using organization access tokens include:

- Organizational ownership: Not tied to individual users who might leave the company
- Shared management: All organization owners can create and manage OATs
- Separate usage limits: OATs have their own Docker Hub rate limits, not counting against personal accounts
- Better security audit: Track when tokens were last used and identify suspicious activity
- Granular permissions: Limit access to specific repositories and operations

## [Prerequisites](#prerequisites)

To create and use organization access tokens, you must have:

- A Docker Team or Business subscription
- Owner permissions
- Repositories you want to grant access to

## [Create an organization access token](#create-an-organization-access-token)

Owners can create tokens with these limits:

- Team subscription: Up to 10 OATs per organization
- Business subscription: Up to 100 OATs per organization

Expired tokens count toward your total limit.

To create an OAT:

1. Sign in to [Docker Home](https://app.docker.com/) and select your organization.
2. Select **Admin Console**, then **Access tokens**.
3. Select **Generate access token**.
4. Configure token details:
   - Label: Descriptive name indicating the token's purpose
   - Description (optional): Additional details
   - Expiration date: When the token should expire
5. Expand the **Repository** drop-down to set access permissions:
   1. Optional. Select **Read public repositories** for access to public repositories.
   2. Select **Add repository** and choose a repository from the drop-down.
   3. Set permissions for each repository: **Image Pull** or **Image Push**.
   4. Add up to 50 repositories as needed.
6. Optional. Configure organization management permissions by expanding the **Organization** drop-down and selecting the **Allow management access to this organization's resources**:
   - **Member Edit**: Edit members of the organization
   - **Member Read**: Read members of the organization
   - **Invite Edit**: Invite members to the organization
   - **Invite Read**: Read invites to the organization
   - **Group Edit**: Edit groups of the organization
   - **Group Read**: Read groups of the organization
7. Select **Generate token**. Copy the token that appears on the screen and save it. You won't be able to retrieve the token once you exit the screen.

> Important
>
> Treat organization access tokens like passwords. Store them securely in a credential manager and never commit them to source code repositories.

## [Use organization access tokens](#use-organization-access-tokens)

Sign in to the Docker CLI using your organization access token:

```console
$ docker login --username <YOUR_ORGANIZATION_NAME>
Password: [paste your OAT here]
```

When prompted for a password, enter your organization access token.

## [Modify existing tokens](#modify-existing-tokens)

To manage existing tokens:

1. Sign in to [Docker Home](https://app.docker.com/) and select your organization.
2. Select **Admin Console**, then **Access tokens**.
3. Select the actions menu in the token row, you can:
   - **Edit**
   - **Deactivate**
   - **Delete**
4. Select **Save** after making changes to a token.

## [Organization access token best practices](#organization-access-token-best-practices)

- Regular token rotation: Set reasonable expiration dates and rotate tokens regularly to minimize security risks.
- Principle of least privilege: Grant only the minimum repository access and permissions needed for each use case.
- Monitor token usage: Regularly review when tokens were last used to identify unused or suspicious tokens.
- Secure storage: Store tokens in secure credential management systems, never in plain text or source code.
- Immediate revocation: Deactivate or delete tokens immediately if they're compromised or no longer needed.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/enterprise/security/access-tokens.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fenterprise%2fsecurity%2faccess-tokens%2f\&labels=status%2Ftriage)

Table of contents
