Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Group mapping

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Subscription: Business

Requires: Docker Desktop [4.42](https://docs.docker.com/desktop/release-notes/#4420) and later

For: Administrators

Group mapping automatically synchronizes user groups from your identity provider (IdP) with teams in your Docker organization. For example, when you add a developer to the "backend-team" group in your IdP, they're automatically added to the corresponding team in Docker

This page explains how group mapping works, and how to set up group mapping.

> Tip
>
> Group mapping is ideal for adding users to multiple organizations or multiple teams within one organization. If you don't need to set up multi-organization or multi-team assignment, SCIM [user-level attributes](https://docs.docker.com/enterprise/security/provisioning/scim/#set-up-role-mapping) may be a better fit for your needs.

## [Prerequisites](#prerequisites)

Before you being, you must have:

- SSO configured for your organization
- Administrator access to Docker Home and your identity provider

## [How group mapping works](#how-group-mapping-works)

Group mapping keeps your Docker teams synchronized with your IdP groups through these key components:

- Authentication flow: When users sign in through SSO, your IdP shares user attributes with Docker including email, name, and group memberships.
- Automatic updates: Docker uses these attributes to create or update user profiles and manage team assignments based on IdP group changes.
- Unique identification: Docker uses email addresses as unique identifiers, so each Docker account must have a unique email address.
- Team synchronization: Users' team memberships in Docker automatically reflect changes made in your IdP groups.

## [Set up group mapping](#set-up-group-mapping)

Group mapping setup involves configuring your identity provider to share group information with Docker. This requires:

- Creating groups in your IdP using Docker's naming format
- Configuring attributes so your IdP sends group data during authentication
- Adding users to the appropriate groups
- Testing the connection to ensure groups sync properly

You can use group mapping with SSO only, or with both SSO and SCIM for enhanced user lifecycle management.

### [Group naming format](#group-naming-format)

Create groups in your IdP using the format: `organization:team`.

For example:

- For the "developers" team in the "moby" organization: `mobdy:developers`
- For multi-organization access: `moby:backend` and `whale:desktop`

Docker creates teams automatically if they don't already exist when groups sync.

### [Supported attributes](#supported-attributes)

Attribute

Description

`id`

Unique ID of the group in UUID format. This attribute is read-only.

`displayName`

Name of the group following the group mapping format: `organization:team`.

`members`

A list of users that are members of this group.

`members(x).value`

Unique ID of the user that is a member of this group. Members are referenced by ID.

## [Configure group mapping with SSO](#configure-group-mapping-with-sso)

Use group mapping with SSO connections that use the SAML authentication method.

> Note
>
> Group mapping with SSO isn't supported with the Azure AD (OIDC) authentication method. SCIM isn't required for these configurations.

Okta Entra ID

The user interface for your IdP may differ slightly from the following steps. Refer to the [Okta documentation](https://help.okta.com/oie/en-us/content/topics/apps/define-group-attribute-statements.htm) to verify.

To set up group mapping:

1. Sign in to Okta and open your application.
2. Navigate to the **SAML Settings** page for your application.
3. In the **Group Attribute Statements (optional)** section, configure like the following:
   - **Name**: `groups`
   - **Name format**: `Unspecified`
   - **Filter**: `Starts with` + `organization:` where `organization` is the name of your organization The filter option will filter out the groups that aren't affiliated with your Docker organization.
4. Create your groups by selecting **Directory**, then **Groups**.
5. Add your groups using the format `organization:team` that matches the names of your organization(s) and team(s) in Docker.
6. Assign users to the group(s) that you create.

The next time you sync your groups with Docker, your users will map to the Docker groups you defined.

The user interface for your IdP may differ slightly from the following steps. Refer to the [Entra ID documentation](https://learn.microsoft.com/en-us/azure/active-directory/app-provisioning/customize-application-attributes) to verify.

To set up group mapping:

1. Sign in to Entra ID and open your application.
2. Select **Manage**, then **Single sign-on**.
3. Select **Add a group claim**.
4. In the Group Claims section, select **Groups assigned to the application** with the source attribute **Cloud-only group display names (Preview)**.
5. Select **Advanced options**, then the **Filter groups** option.
6. Configure the attribute like the following:
   - **Attribute to match**: `Display name`
   - **Match with**: `Contains`
   - **String**: `:`
7. Select **Save**.
8. Select **Groups**, **All groups**, then **New group** to create your group(s).
9. Assign users to the group(s) that you create.

The next time you sync your groups with Docker, your users will map to the Docker groups you defined.

## [Configure group mapping with SCIM](#configure-group-mapping-with-scim)

Use group mapping with SCIM for more advanced user lifecycle management. Before you begin, make sure you [set up SCIM](https://docs.docker.com/enterprise/security/provisioning/scim/#enable-scim) first.

Okta Entra ID

The user interface for your IdP may differ slightly from the following steps. Refer to the [Okta documentation](https://help.okta.com/en-us/Content/Topics/users-groups-profiles/usgp-enable-group-push.htm) to verify.

To set up your groups:

1. Sign in to Okta and open your application.
2. Select **Applications**, then **Provisioning**, and **Integration**.
3. Select **Edit** to enable groups on your connection, then select **Push groups**.
4. Select **Save**. Saving this configuration will add the **Push Groups** tab to your application.
5. Create your groups by navigating to **Directory** and selecting **Groups**.
6. Add your groups using the format `organization:team` that matches the names of your organization(s) and team(s) in Docker.
7. Assign users to the group(s) that you create.
8. Return to the **Integration** page, then select the **Push Groups** tab to open the view where you can control and manage how groups are provisioned.
9. Select **Push Groups**, then **Find groups by rule**.
10. Configure the groups by rule like the following:
    - Enter a rule name, for example `Sync groups with Docker Hub`
    - Match group by name, for example starts with `docker:` or contains `:` for multi-organization
    - If you enable **Immediately push groups by rule**, sync will happen as soon as there's a change to the group or group assignments. Enable this if you don't want to manually push groups.

Find your new rule under **By rule** in the **Pushed Groups** column. The groups that match that rule are listed in the groups table on the right-hand side.

To push the groups from this table:

1. Select **Group in Okta**.
2. Select the **Push Status** drop-down.
3. Select **Push Now**.

The user interface for your IdP may differ slightly from the following steps. Refer to the [Entra ID documentation](https://learn.microsoft.com/en-us/azure/active-directory/app-provisioning/customize-application-attributes) to verify.

Complete the following before configuring group mapping:

1. Sign in to Entra ID and go to your application.
2. In your application, select **Provisioning**, then **Mappings**.
3. Select **Provision Microsoft Entra ID Groups**.
4. Select **Show advanced options**, then **Edit attribute list**.
5. Update the `externalId` type to `reference`, then select the **Multi-Value** checkbox and choose the referenced object attribute `urn:ietf:params:scim:schemas:core:2.0:Group`.
6. Select **Save**, then **Yes** to confirm.
7. Go to **Provisioning**.
8. Toggle **Provision Status** to **On**, then select **Save**.

Next, set up group mapping:

1. Go to the application overview page.
2. Under **Provision user accounts**, select **Get started**.
3. Select **Add user/group**.
4. Create your group(s) using the `organization:team` format.
5. Assign the group to the provisioning group.
6. Select **Start provisioning** to start the sync.

To verify, select **Monitor**, then **Provisioning logs** to see that your groups were provisioned successfully. In your Docker organization, you can check that the groups were correctly provisioned and the members were added to the appropriate teams.

Once complete, a user who signs in to Docker through SSO is automatically added to the organizations and teams mapped in the IdP.

> Tip
>
> [Enable SCIM](https://docs.docker.com/enterprise/security/provisioning/scim/) to take advantage of automatic user provisioning and de-provisioning. If you don't enable SCIM users are only automatically provisioned. You have to de-provision them manually.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/enterprise/security/provisioning/group-mapping.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fenterprise%2fsecurity%2fprovisioning%2fgroup-mapping%2f\&labels=status%2Ftriage)

Table of contents
