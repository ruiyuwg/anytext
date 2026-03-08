Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Activity logs

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Subscription: Team Business

For: Administrators

Activity logs display a chronological list of activities that occur at organization and repository levels. The activity log provides organization owners with a record of all member activities.

With activity logs, owners can view and track:

- What changes were made
- The date when a change was made
- Who initiated the change

For example, activity logs display activities such as the date when a repository was created or deleted, the member who created the repository, the name of the repository, and when there was a change to the privacy settings.

Owners can also see the activity logs for their repository if the repository is part of the organization subscribed to a Docker Business or Team subscription.

## [Access activity logs](#access-activity-logs)

Docker Home API

To view activity logs in Docker Home:

1. Sign in to [Docker Home](https://app.docker.com) and select your organization.
2. Select **Admin Console**, then **Activity logs**.

To view activity logs using the Docker Hub API, use the [Audit logs endpoints](https://docs.docker.com/reference/api/hub/latest/#tag/audit-logs).

## [Filter and customize activity logs](#filter-and-customize-activity-logs)

> Important
>
> Docker Home retains activity logs for 30 days. To retrieve activities beyond 30 days, you must use the [Docker Hub API](https://docs.docker.com/reference/api/hub/latest/#tag/audit-logs).

By default, the **Activity** tab displays all recorded events within the last 30 days. To narrow your view, use the calendar to select a specific date range. The log updates to show only the activities that occurred during that period.

You can also filter by activity type. Use the **All Activities** drop-down to focus on organization-level, repository-level, or billing-related events. In Docker Hub, when viewing a repository, the **Activities** tab only shows events for that repository.

After selecting a category—**Organization**, **Repository**, or **Billing**—use the **All Actions** drop-down to refine the results even further by specific event type.

> Note
>
> Events triggered by Docker Support appear under the username **dockersupport**.

## [Types of activity log events](#types-of-activity-log-events)

Refer to the following section for a list of events and their descriptions:

### [Organization events](#organization-events)

Event

Description

Team Created

Activities related to the creation of a team

Team Updated

Activities related to the modification of a team

Team Deleted

Activities related to the deletion of a team

Team Member Added

Details of the member added to your team

Team Member Removed

Details of the member removed from your team

Team Member Invited

Details of the member invited to your team

Organization Member Added

Details of the member added to your organization

Organization Member Removed

Details about the member removed from your organization

Member Role Changed

Details about the role changed for a member in your organization

Organization Created

Activities related to the creation of a new organization

Organization Settings Updated

Details related to the organization setting that was updated

Registry Access Management enabled

Activities related to enabling Registry Access Management

Registry Access Management disabled

Activities related to disabling Registry Access Management

Registry Access Management registry added

Activities related to the addition of a registry

Registry Access Management registry removed

Activities related to the removal of a registry

Registry Access Management registry updated

Details related to the registry that was updated

Single Sign-On domain added

Details of the single sign-on domain added to your organization

Single Sign-On domain removed

Details of the single sign-on domain removed from your organization

Single Sign-On domain verified

Details of the single sign-on domain verified for your organization

Access token created

Access token created in organization

Access token updated

Access token updated in organization

Access token deleted

Access token deleted in organization

Policy created

Details of adding a settings policy

Policy updated

Details of updating a settings policy

Policy deleted

Details of deleting a settings policy

Policy transferred

Details of transferring a settings policy to another owner

Create SSO Connection

Details of creating a new org/company SSO connection

Update SSO Connection

Details of updating an existing org/company SSO connection

Delete SSO Connection

Details of deleting an existing org/company SSO connection

Enforce SSO

Details of toggling enforcement on an existing org/company SSO connection

Enforce SCIM

Details of toggling SCIM on an existing org/company SSO connection

Refresh SCIM Token

Details of a SCIM token refresh on an existing org/company SSO connection

Change SSO Connection Type

Details of a connection type change on an existing org/company SSO connection

Toggle JIT provisioning

Details of a JIT toggle on an existing org/company SSO connection

### [Repository events](#repository-events)

> Note
>
> Event descriptions that include a user action can refer to a Docker username, personal access token (PAT) or organization access token (OAT). For example, if a user pushes a tag to a repository, the event would include the description: `<user-access-token>` pushed the tag to the repository.

Event

Description

Repository Created

Activities related to the creation of a new repository

Repository Deleted

Activities related to the deletion of a repository

Repository Updated

Activities related to updating the description, full description, or status of a repository

Privacy Changed

Details related to the privacy policies that were updated

Tag Pushed

Activities related to the tags pushed

Tag Deleted

Activities related to the tags deleted

Categories Updated

Activities related to setting or updating categories of a repository

### [Billing events](#billing-events)

Event

Description

Plan Upgraded

Occurs when your organization’s billing plan is upgraded to a higher tier plan.

Plan Downgraded

Occurs when your organization’s billing plan is downgraded to a lower tier plan.

Seat Added

Occurs when a seat is added to your organization’s billing plan.

Seat Removed

Occurs when a seat is removed from your organization’s billing plan.

Billing Cycle Changed

Occurs when there is a change in the recurring interval that your organization is charged.

Plan Downgrade Canceled

Occurs when a scheduled plan downgrade for your organization is canceled.

Seat Removal Canceled

Occurs when a scheduled seat removal for an organization’s billing plan is canceled.

Plan Upgrade Requested

Occurs when a user in your organization requests a plan upgrade.

Plan Downgrade Requested

Occurs when a user in your organization requests a plan downgrade.

Seat Addition Requested

Occurs when a user in your organization requests an increase in the number of seats.

Seat Removal Requested

Occurs when a user in your organization requests a decrease in the number of seats.

Billing Cycle Change Requested

Occurs when a user in your organization requests a change in the billing cycle.

Plan Downgrade Cancellation Requested

Occurs when a user in your organization requests a cancellation of a scheduled plan downgrade.

Seat Removal Cancellation Requested

Occurs when a user in your organization requests a cancellation of a scheduled seat removal.

### [Offload events](#offload-events)

Event

Description

Offload Lease Start

Occurs when an Offload lease is started in your organization.

Offload Lease End

Occurs when an Offload lease is ended in your organization.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/admin/organization/activity-logs.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fadmin%2forganization%2factivity-logs%2f\&labels=status%2Ftriage)

Table of contents
