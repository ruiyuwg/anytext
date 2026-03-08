Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# SCIM provisioning

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Subscription: Business

Requires: Docker Desktop [4.42](https://docs.docker.com/desktop/release-notes/#4420) and later

For: Administrators

Automate user management for your Docker organization using System for Cross-domain Identity Management (SCIM). SCIM automatically provisions and de-provisions users, synchronizes team memberships, and keeps your Docker organization in sync with your identity provider.

This page shows you how to automate user provisioning and de-provisioning for Docker using SCIM.

## [Prerequisites](#prerequisites)

Before you begin, you must have:

- SSO configured for your organization
- Administrator access to Docker Home and your identity provider

## [How SCIM works](#how-scim-works)

SCIM automates user provisioning and de-provisioning for Docker through your identity provider. After you enable SCIM, any user assigned to your Docker application in your identity provider is automatically provisioned and added to your Docker organization. When a user is removed from the Docker application in your identity provider, SCIM deactivates and removes them from your Docker organization.

In addition to provisioning and removal, SCIM also syncs profile updates like name changes made in your identity provider. You can use SCIM alongside Docker's default Just-in-Time (JIT) provisioning or on its own with JIT disabled.

SCIM automates:

- Creating users
- Updating user profiles
- Removing and deactivating users
- Re-activating users
- Group mapping

> Note
>
> SCIM only manages users provisioned through your identity provider after SCIM is enabled. It cannot remove users who were manually added to your Docker organization before SCIM was set up.
>
> To remove those users, delete them manually from your Docker organization. For more information, see [Manage organization members](https://docs.docker.com/admin/organization/members/).

## [Supported attributes](#supported-attributes)

SCIM uses attributes (name, email, etc.) to sync user information between your identity provider and Docker. Properly mapping these attributes in your identity provider ensures that user provisioning works smoothly and prevents issues like duplicate user accounts when using single sign-on.

Docker supports the following SCIM attributes:

Attribute

Description

`userName`

User's primary email address, used as the unique identifier

`name.givenName`

User's first name

`name.familyName`

User's surname

`active`

Indicates if a user is enabled or disabled, set to "false" to de-provision a user

For additional details about supported attributes and SCIM, see [Docker Hub API SCIM reference](/reference/api/hub/latest/#tag/scim).

> Important
>
> By default, Docker uses Just-in-Time (JIT) provisioning for SSO. If SCIM is enabled, JIT values still take precedence and will overwrite attribute values set by SCIM. To avoid conflicts, make sure your JIT attribute values match your SCIM values.
>
> Alternatively, you can disable JIT provisioning to rely solely on SCIM. For details, see [Just-in-Time](https://docs.docker.com/enterprise/security/provisioning/just-in-time/).

## [Enable SCIM in Docker](#enable-scim-in-docker)

To enable SCIM:

1. Sign in to [Docker Home](https://app.docker.com).
2. Select **Admin Console**, then **SSO and SCIM**.
3. In the **SSO connections** table, select the **Actions** icon for your connection, then select **Setup SCIM**.
4. Copy the **SCIM Base URL** and **API Token** and paste the values into your IdP.

## [Enable SCIM in your IdP](#enable-scim-in-your-idp)

The user interface for your identity provider may differ slightly from the following steps. You can refer to the documentation for your identity provider to verify. For additional details, see the documentation for your identity provider:

- [Okta](https://help.okta.com/en-us/Content/Topics/Apps/Apps_App_Integration_Wizard_SCIM.htm)
- [Entra ID/Azure AD SAML 2.0](https://learn.microsoft.com/en-us/azure/active-directory/app-provisioning/user-provisioning)

> Note
>
> Microsoft does not currently support SCIM and OIDC in the same non-gallery application in Entra ID. This page provides a verified workaround using a separate non-gallery app for SCIM provisioning. While Microsoft does not officially document this setup, it is widely used and supported in practice.

Okta Entra ID (OIDC) Entra ID (SAML 2.0)

### [Step one: Enable SCIM](#step-one-enable-scim)

1. Sign in to Okta and select **Admin** to open the admin portal.
2. Open the application you created when you configured your SSO connection.
3. On the application page, select the **General** tab, then **Edit App Settings**.
4. Enable SCIM provisioning, then select **Save**.
5. Navigate to the **Provisioning**, then select **Edit SCIM Connection**.
6. To configure SCIM in Okta, set up your connection using the following values and settings:
   - SCIM Base URL: SCIM connector base URL (copied from Docker Home)
   - Unique identifier field for users: `email`
   - Supported provisioning actions: **Push New Users** and **Push Profile Updates**
   - Authentication Mode: HTTP Header
   - SCIM Bearer Token: HTTP Header Authorization Bearer Token (copied from Docker Home)
7. Select **Test Connector Configuration**.
8. Review the test results and select **Save**.

### [Step two: Enable synchronization](#step-two-enable-synchronization)

1. In Okta, select **Provisioning**.
2. Select **To App**, then **Edit**.
3. Enable **Create Users**, **Update User Attributes**, and **Deactivate Users**.
4. Select **Save**.
5. Remove unnecessary mappings. The necessary mappings are:
   - Username
   - Given name
   - Family name
   - Email

Next, [set up role mapping](#set-up-role-mapping).

Microsoft does not support SCIM and OIDC in the same non-gallery application. You must create a second non-gallery application in Entra ID for SCIM provisioning.

### [Step one: Create a separate SCIM app](#step-one-create-a-separate-scim-app)

1. In the Azure Portal, go to **Microsoft Entra ID** > **Enterprise Applications** > **New application**.
2. Select **Create your own application**.
3. Name your application and choose **Integrate any other application you don't find in the gallery**.
4. Select **Create**.

### [Step two: Configure SCIM provisioning](#step-two-configure-scim-provisioning)

1. In your new SCIM application, go to **Provisioning** > **Get started**.
2. Set **Provisioning Mode** to **Automatic**.
3. Under **Admin Credentials**:
   - **Tenant URL**: Paste the **SCIM Base URL** from Docker Home.
   - **Secret Token**: Paste the **SCIM API token** from Docker Home.
4. Select **Test Connection** to verify.
5. Select **Save** to store credentials.

Next, [set up role mapping](#set-up-role-mapping).

1. In the Azure Portal, go to **Microsoft Entra ID** > **Enterprise Applications**, and select your Docker SAML app.
2. Select **Provisioning** > **Get started**.
3. Set **Provisioning Mode** to **Automatic**.
4. Under **Admin Credentials**:
   - **Tenant URL**: Paste the **SCIM Base URL** from Docker Home.
   - **Secret Token**: Paste the **SCIM API token** from Docker Home.
5. Select **Test Connection** to verify.
6. Select **Save** to store credentials.

Next, [set up role mapping](#set-up-role-mapping).

## [Set up role mapping](#set-up-role-mapping)

You can assign [Docker roles](https://docs.docker.com/enterprise/security/roles-and-permissions/) to users by adding optional SCIM attributes in your IdP. These attributes override default role and team values set in your SSO configuration.

> Note
>
> Role mappings are supported for both SCIM and Just-in-Time (JIT) provisioning. For JIT, role mapping applies only when the user is first provisioned.

The following table lists the supported optional user-level attributes:

Attribute

Possible values

Notes

`dockerRole`

`member`, `editor`, or `owner`

If not set, the user defaults to the `member` role. Setting this attribute overrides the default.

For role definitions, see [Roles and permissions](https://docs.docker.com/enterprise/security/roles-and-permissions/).

`dockerOrg`

Docker `organizationName` (e.g., `moby`)

Overrides the default organization configured in your SSO connection.

If unset, the user is provisioned to the default organization. If `dockerOrg` and `dockerTeam` are both set, the user is provisioned to the team within the specified organization.

`dockerTeam`

Docker `teamName` (e.g., `developers`)

Provisions the user to the specified team in the default or specified organization. If the team doesn't exist, it is automatically created.

You can still use [group mapping](https://docs.docker.com/enterprise/security/provisioning/group-mapping/) to assign users to multiple teams across organizations.

The external namespace used for these attributes is: `urn:ietf:params:scim:schemas:extension:docker:2.0:User`. This value is required in your identity provider when creating custom SCIM attributes for Docker.

Okta Entra ID/Azure AD (SAML 2.0 and OIDC)

### [Step one: Set up role mapping in Okta](#step-one-set-up-role-mapping-in-okta)

1. Setup [SSO](https://docs.docker.com/enterprise/security/single-sign-on/configure/) and SCIM first.
2. In the Okta admin portal, go to **Directory**, select **Profile Editor**, and then **User (Default)**.
3. Select **Add Attribute** and configure the values for the role, organization, or team you want to add. Exact naming isn't required.
4. Return to the **Profile Editor** and select your application.
5. Select **Add Attribute** and enter the required values. The **External Name** and **External Namespace** must be exact.
   - The external name values for organization/team/role mapping are `dockerOrg`, `dockerTeam`, and `dockerRole` respectively, as listed in the previous table.
   - The external namespace is the same for all of them: `urn:ietf:params:scim:schemas:extension:docker:2.0:User`.
6. After creating the attributes, navigate to the top of the page and select **Mappings**, then **Okta User to YOUR APP**.
7. Go to the newly created attributes and map the variable names to the external names, then select **Save Mappings**. If you're using JIT provisioning, continue to the following steps.
8. Navigate to **Applications** and select **YOUR APP**.
9. Select **General**, then **SAML Settings**, and **Edit**.
10. Select **Step 2** and configure the mapping from the user attribute to the Docker variables.

### [Step two: Assign roles by user](#step-two-assign-roles-by-user)

1. In the Okta Admin portal, select **Directory**, then **People**.
2. Select **Profile**, then **Edit**.
3. Select **Attributes** and update the attributes to the desired values.

### [Step three: Assign roles by group](#step-three-assign-roles-by-group)

1. In the Okta Admin portal, select **Directory**, then **People**.
2. Select **YOUR GROUP**, then **Applications**.
3. Open **YOUR APPLICATION** and select the **Edit** icon.
4. Update the attributes to the desired values.

If a user doesn't already have attributes set up, users who are added to the group will inherit these attributes upon provisioning.

### [Step one: Configure attribute mappings](#step-one-configure-attribute-mappings)

1. Complete the [SCIM provisioning setup](#enable-scim-in-docker).
2. In the Azure Portal, open **Microsoft Entra ID** > **Enterprise Applications**, and select your SCIM application.
3. Go to **Provisioning** > **Mappings** > **Provision Azure Active Directory Users**.
4. Add or update the following mappings:
   - `userPrincipalName` -> `userName`
   - `mail` -> `emails.value`
   - Optional. Map `dockerRole`, `dockerOrg`, or `dockerTeam` using one of the [mapping methods](#step-two-choose-a-role-mapping-method).
5. Remove any unsupported attributes to prevent sync errors.
6. Optional. Go to **Mappings** > **Provision Azure Active Directory Groups**:
   - If group provisioning causes errors, set **Enabled** to **No**.
   - If enabling, test group mappings carefully.
7. Select **Save** to apply mappings.

### [Step two: Choose a role mapping method](#step-two-choose-a-role-mapping-method)

You can map `dockerRole`, `dockerOrg`, or `dockerTeam` using one of the following methods:

#### [Expression mapping](#expression-mapping)

Use this method if you only need to assign Docker roles like `member`, `editor`, or `owner`.

1. In the **Edit Attribute** view, set the mapping type to **Expression**.
2. In the **Expression** field:
   1. If your App Roles match Docker roles exactly, use: SingleAppRoleAssignment(\[appRoleAssignments])
   2. If they don't match, use a switch expression: `Switch(SingleAppRoleAssignment([appRoleAssignments]), "My Corp Admins", "owner", "My Corp Editors", "editor", "My Corp Users", "member")`
3. Set:
   - **Target attribute**: `urn:ietf:params:scim:schemas:extension:docker:2.0:User:dockerRole`
   - **Match objects using this attribute**: No
   - **Apply this mapping**: Always
4. Save your changes.

> Warning
>
> You can't use `dockerOrg` or `dockerTeam` with this method. Expression mapping is only compatible with one attribute.

#### [Direct mapping](#direct-mapping)

Use this method if you need to map multiple attributes (`dockerRole` + `dockerTeam`).

1. For each Docker attribute, choose a unique Entra extension attribute (`extensionAttribute1`, `extensionAttribute2`, etc.).
2. In the **Edit Attribute** view:
   - Set mapping type to **Direct**.
   - Set **Source attribute** to your selected extension attribute.
   - Set **Target attribute** to one of:
     - `dockerRole: urn:ietf:params:scim:schemas:extension:docker:2.0:User:dockerRole`
     - `dockerOrg: urn:ietf:params:scim:schemas:extension:docker:2.0:User:dockerOrg`
     - `dockerTeam: urn:ietf:params:scim:schemas:extension:docker:2.0:User:dockerTeam`
   - Set **Apply this mapping** to **Always**.
3. Save your changes.

To assign values, you'll need to use the Microsoft Graph API.

### [Step three: Assign users and groups](#step-three-assign-users-and-groups)

For either mapping method:

1. In the SCIM app, go to **Users and Groups** > **Add user/group**.
2. Select the users or groups to provision to Docker.
3. Select **Assign**.

If you're using expression mapping:

1. Go to **App registrations** > your SCIM app > **App Roles**.
2. Create App Roles that match Docker roles.
3. Assign users or groups to App Roles under **Users and Groups**.

If you're using direct mapping:

1. Go to [Microsoft Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer) and sign in as a tenant admin.
2. Use Microsoft Graph API to assign attribute values. Example PATCH request:

```bash
PATCH https://graph.microsoft.com/v1.0/users/{user-id}
Content-Type: application/json

{
  "extensionAttribute1": "owner",
  "extensionAttribute2": "moby",
  "extensionAttribute3": "developers"
}
```

> Note
>
> You must use a different extension attribute for each SCIM field.

See the documentation for your IdP for additional details:

- [Okta](https://help.okta.com/en-us/Content/Topics/users-groups-profiles/usgp-add-custom-user-attributes.htm)
- [Entra ID/Azure AD](https://learn.microsoft.com/en-us/azure/active-directory/app-provisioning/customize-application-attributes#provisioning-a-custom-extension-attribute-to-a-scim-compliant-application)

## [Test SCIM provisioning](#test-scim-provisioning)

After completing role mapping, you can test the configuration manually.

Okta Entra ID/Azure AD (OIDC and SAML 2.0)

1. In the Okta admin portal, go to **Directory > People**.

2. Select a user you've assigned to your SCIM application.

3. Select **Provision User**.

4. Wait a few seconds, then check the Docker [Admin Console](https://app.docker.com/admin) under **Members**.

5. If the user doesn't appear, review logs in **Reports > System Log** and confirm SCIM settings in the app.

6. In the Azure Portal, go to **Microsoft Entra ID** > **Enterprise Applications**, and select your SCIM app.

7. Go to **Provisioning** > **Provision on demand**.

8. Select a user or group and choose **Provision**.

9. Confirm that the user appears in the Docker [Admin Console](https://app.docker.com/admin) under **Members**.

10. If needed, check **Provisioning logs** for errors.

## [Migrate existing JIT users to SCIM](#migrate-existing-jit-users-to-scim)

If you already have users provisioned through Just-in-Time (JIT) and want to enable full SCIM lifecycle management, you need to migrate them. Users originally created by JIT cannot be automatically de-provisioned through SCIM, even after SCIM is enabled.

### [Why migrate](#why-migrate)

Organizations using JIT provisioning may encounter limitations with user lifecycle management, particularly around de-provisioning. Migrating to SCIM provides:

- Automatic user de-provisioning when users leave your organization. This is the primary benefit for large organizations that need full automation.
- Continuous synchronization of user attributes
- Centralized user management through your identity provider
- Enhanced security through automated access control

> Important
>
> Users originally created through JIT provisioning cannot be automatically de-provisioned by SCIM, even after SCIM is enabled. To enable full lifecycle management including automatic de-provisioning through your identity provider, you must manually remove these users so SCIM can re-create them with proper lifecycle management capabilities.

This migration is most critical for larger organizations that require fully automated user de-provisioning when employees leave the company.

### [Prerequisites for migration](#prerequisites-for-migration)

Before migrating, ensure you have:

- SCIM configured and tested in your organization
- A maintenance window for the migration

> Warning
>
> This migration temporarily disrupts user access. Plan to perform this migration during a low-usage window and communicate the timeline to affected users.

### [Prepare for migration](#prepare-for-migration)

#### [Transfer ownership](#transfer-ownership)

Before removing users, ensure that any repositories, teams, or organization resources they own are transferred to another administrator or service account. When a user is removed from the organization, any resources they own may become inaccessible.

1. Review repositories, organization resources, and team ownership for affected users.
2. Transfer ownership to another administrator.

> Warning
>
> If ownership is not transferred, repositories owned by removed users may become inaccessible when the user is removed. Ensure all critical resources are transferred before proceeding.

#### [Verify identity provider configuration](#verify-identity-provider-configuration)

1. Confirm all JIT-provisioned users are assigned to the Docker application in your identity provider.
2. Verify identity provider group to Docker team mappings are configured and tested.

Users not assigned to the Docker application in your identity provider are not re-created by SCIM after removal.

#### [Export user records](#export-user-records)

Export a list of JIT-provisioned users from Docker Admin Console:

1. Sign in to [Docker Home](https://app.docker.com) and select your organization.
2. Select **Admin Console**, then **Members**.
3. Select **Export members** to download the member list as CSV for backup and reference.

Keep this CSV list of JIT-provisioned users as a rollback reference if needed.

### [Complete the migration](#complete-the-migration)

#### [Disable JIT provisioning](#disable-jit-provisioning)

> Important
>
> Before disabling JIT, ensure SCIM is fully configured and tested in your organization. Do not disable JIT until you have verified SCIM is working correctly.

1. Sign in to [Docker Home](https://app.docker.com) and select your organization.
2. Select **Admin Console**, then **SSO and SCIM**.
3. In the SSO connections table, select the **Actions** menu for your connection.
4. Select **Disable JIT provisioning**.
5. Select **Disable** to confirm.

Disabling JIT prevents new users from being automatically added through SSO during the migration.

#### [Remove JIT-origin users](#remove-jit-origin-users)

> Important
>
> Users originally created through JIT provisioning cannot be automatically de-provisioned by SCIM, even after SCIM is enabled. To enable full lifecycle management including automatic de-provisioning through your identity provider, you must manually remove these users so SCIM can re-create them with proper lifecycle management capabilities.

This step is most critical for large organizations that require fully automated user de-provisioning when employees leave the company.

1. Sign in to [Docker Home](https://app.docker.com) and select your organization.
2. Select **Admin Console**, then **Members**.
3. Identify and remove JIT-provisioned users in manageable batches.
4. Monitor for any errors during removal.

> Tip
>
> To efficiently identify JIT users, compare the member list exported before SCIM was enabled with the current member list. Users who existed before SCIM was enabled were likely provisioned via JIT.

#### [Verify SCIM re-provisioning](#verify-scim-re-provisioning)

After removing JIT users, SCIM automatically re-creates user accounts:

1. In your identity provider system log, confirm "create app user" events for Docker.
2. In Docker Admin Console, confirm users reappear with SCIM provisioning.
3. Verify users are added to the correct teams via group mapping.

#### [Validate user access](#validate-user-access)

Perform post-migration validation:

1. Select a subset of migrated users to test sign-in and access.
2. Verify team membership matches identity provider group assignments.
3. Confirm repository access is restored.
4. Test that de-provisioning works correctly by removing a test user from your identity provider.

Keep audit exports and logs for compliance purposes.

### [Migration results](#migration-results)

After completing the migration:

- All users in your organization are SCIM-provisioned
- User de-provisioning works reliably through your identity provider
- No new JIT users are created
- Consistent identity lifecycle management is maintained

### [Troubleshoot migration issues](#troubleshoot-migration-issues)

If a user fails to reappear after removal:

1. Check that the user is assigned to the Docker application in your identity provider.
2. Verify SCIM is enabled in both Docker and your identity provider.
3. Trigger a manual SCIM sync in your identity provider.
4. Check provisioning logs in your identity provider for errors.

For more troubleshooting guidance, see [Troubleshoot provisioning](https://docs.docker.com/enterprise/troubleshoot/troubleshoot-provisioning/).

## [Disable SCIM](#disable-scim)

If SCIM is disabled, any user provisioned through SCIM will remain in the organization. Future changes for your users will not sync from your IdP. User de-provisioning is only possible when manually removing the user from the organization.

To disable SCIM:

1. Sign in to [Docker Home](https://app.docker.com).
2. Select **Admin Console**, then **SSO and SCIM**.
3. In the **SSO connections** table, select the **Actions** icon.
4. Select **Disable SCIM**.

## [Next steps](#next-steps)

- Set up [Group mapping](https://docs.docker.com/enterprise/security/provisioning/group-mapping/).
- [Troubleshoot provisioning](https://docs.docker.com/enterprise/troubleshoot/troubleshoot-provisioning/).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/enterprise/security/provisioning/scim.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fenterprise%2fsecurity%2fprovisioning%2fscim%2f\&labels=status%2Ftriage)

Table of contents
