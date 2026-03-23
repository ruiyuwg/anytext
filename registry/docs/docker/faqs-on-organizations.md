When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# FAQs on organizations

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

### [How can I see how many active users are in my organization?](#how-can-i-see-how-many-active-users-are-in-my-organization)

If your organization uses a Software Asset Management tool, you can use it to find out how many users have Docker Desktop installed. If your organization doesn't use this software, you can run an internal survey to find out who is using Docker Desktop.

For more information, see [Identify your Docker users and their Docker accounts](https://docs.docker.com/admin/organization/onboard/#step-one-identify-your-docker-users).

### [Do users need to authenticate with Docker before an owner can add them to an organization?](#do-users-need-to-authenticate-with-docker-before-an-owner-can-add-them-to-an-organization)

No. Organization owners can invite users with their email addresses, and also assign them to a team during the invite process.

### [Can I force my organization's members to authenticate before using Docker Desktop and are there any benefits?](#can-i-force-my-organizations-members-to-authenticate-before-using-docker-desktop-and-are-there-any-benefits)

Yes. You can [enforce sign-in](https://docs.docker.com/enterprise/security/enforce-sign-in/).

Some benefits of enforcing sign-in are:

- Ensures users receive the benefits of your subscription.
- Ensures security features like [Image Access Management](https://docs.docker.com/enterprise/security/hardened-desktop/image-access-management/) and [Registry Access Management](https://docs.docker.com/enterprise/security/hardened-desktop/registry-access-management/) are applied.
- Ensures you gain insights into users' activity.

### [Can I convert my personal Docker ID to an organization account?](#can-i-convert-my-personal-docker-id-to-an-organization-account)

Yes. You can convert your user account to an organization account. Once you convert a user account into an organization, it's not possible to revert it to a personal user account.

For prerequisites and instructions, see [Convert an account into an organization](https://docs.docker.com/admin/organization/convert-account/).

### [Do organization invitees take up seats?](#do-organization-invitees-take-up-seats)

Yes. A user invited to an organization will take up one of the provisioned seats, even if that user hasn’t accepted their invitation yet.

To manage invites, see [Manage organization members](https://docs.docker.com/admin/organization/members/).

### [Do organization owners take a seat?](#do-organization-owners-take-a-seat)

Yes. Organization owners occupy a seat.

### [What is the difference between user, invitee, seat, and member?](#what-is-the-difference-between-user-invitee-seat-and-member)

- User: Docker user with a Docker ID.
- Invitee: A user that an administrator has invited to join an organization but has not yet accepted their invitation.
- Seats: The number of purchased seats in an organization.
- Member: A user who has received and accepted an invitation to join an organization. Member can also refer to a member of a team within an organization.

### [If I have two organizations and a user belongs to both organizations, do they take up two seats?](#if-i-have-two-organizations-and-a-user-belongs-to-both-organizations-do-they-take-up-two-seats)

Yes. In a scenario where a user belongs to two organizations, they take up one seat in each organization.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/admin/faqs/organization-faqs.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fadmin%2ffaqs%2forganization-faqs%2f\&labels=status%2Ftriage)

Table of contents
