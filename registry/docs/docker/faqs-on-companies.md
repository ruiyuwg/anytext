When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# FAQs on companies

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

### [Some of my organizations don’t have a Docker Business subscription. Can I still use a parent company?](#some-of-my-organizations-dont-have-a-docker-business-subscription-can-i-still-use-a-parent-company)

Yes, but you can only add organizations with a Docker Business subscription to a company.

### [What happens if one of my organizations downgrades from Docker Business, but I still need access as a company owner?](#what-happens-if-one-of-my-organizations-downgrades-from-docker-business-but-i-still-need-access-as-a-company-owner)

To access and manage child organizations, the organization must have a Docker Business subscription. If the organization isn’t included in this subscription, the owner of the organization must manage the organization outside of the company.

### [Do company owners occupy a subscription seat?](#do-company-owners-occupy-a-subscription-seat)

Company owners do not occupy a seat unless one of the following is true:

- They are added as a member of an organization under your company
- SSO is enabled and the company owner signs in via SSO, which automatically adds them as an organization member

Although company owners have the same access as organization owners across all organizations in the company, it's not necessary to add them to any organization. Doing so will cause them to occupy a seat.

When you first create a company, your account is both a company owner and an organization owner. In that case, your account will occupy a seat as long as you remain an organization owner.

To avoid occupying a seat, [assign another user as the organization owner](https://docs.docker.com/admin/organization/members/#update-a-member-role) and remove yourself from the organization. You'll retain full administrative access as a company owner without using a subscription seat.

### [What permissions does the company owner have in the associated/nested organizations?](#what-permissions-does-the-company-owner-have-in-the-associatednested-organizations)

Company owners can navigate to the **Organizations** page to view all their nested organizations in a single location. They can also view or edit organization members and change single sign-on (SSO) and System for Cross-domain Identity Management (SCIM) settings. Changes to company settings impact all users in each organization under the company.

For more information, see [Roles and permissions](https://docs.docker.com/enterprise/security/roles-and-permissions/).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/admin/faqs/company-faqs.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fadmin%2ffaqs%2fcompany-faqs%2f\&labels=status%2Ftriage)

Table of contents
