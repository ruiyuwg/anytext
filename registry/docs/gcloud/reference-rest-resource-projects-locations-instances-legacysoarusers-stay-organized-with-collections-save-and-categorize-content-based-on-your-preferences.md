-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Security](https://docs.cloud.google.com/docs/security)
-   [Google Security Operations](https://docs.cloud.google.com/chronicle/docs)
-   [Reference](https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview)

Send feedback

# REST Resource: projects.locations.instances.legacySoarUsers Stay organized with collections Save and categorize content based on your preferences.

 

## Resource: LegacySoarUser

Legacy SOAR users management.

JSON representation

{
  "name": string,
  "firstName": string,
  "lastName": string,
  "socRoles": \[
    integer
  \],
  "email": string,
  "avatar": string,
  "userType": enum (`[UserType](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.legacySoarUsers#UserType)`),
  "environmentsJson": string,
  "permissionGroups": \[
    {
      object (`[PermissionGroup](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.legacySoarUsers#PermissionGroup)`)
    }
  \],
  "permissionGroupNames": \[
    string
  \],
  "accountState": enum (`[AccountState](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.legacySoarUsers#AccountState)`),
  "loginIdentifier": string,
  "providerName": string,
  "allowedPlatforms": \[
    string
  \],
  "displayName": string,
  "userFullName": string,
  "lastLoginTime": string,
  "hasAllEnvironmentsAccess": boolean
}

Fields

`name`

`string`

Identifier. The unique name(ID) of the LegacySoarUser. Format: projects/{project}/locations/{location}/instances/{instance}/legacySoarUsers/{legacySoarUser}

`firstName`

`string`

Required. User first name.

`lastName`

`string`

Required. User last name.

`socRoles[]`

`integer ([uint32](https://developers.google.com/discovery/v1/type-format) format)`

Required. User's role in the SOC team.

`email`

`string`

Required. User email.

`avatar`

`string`

Optional. Avatar of the user in base 64 format.

`userType`

``enum (`[UserType](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.legacySoarUsers#UserType)`)``

Required. User type.

`environmentsJson`

`string`

Required. User logical environments (json).

`permissionGroups[]`

``object (`[PermissionGroup](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.legacySoarUsers#PermissionGroup)`)``

Output only. User permission groups (for GET/LIST).

`permissionGroupNames[]`

`string`

Required. User permission group names (for POST/PATCH).

`accountState`

``enum (`[AccountState](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.legacySoarUsers#AccountState)`)``

Output only. User account state.

`loginIdentifier`

`string`

Required. User unique login identifier. Relevant for IDP

`providerName`

`string`

Required. User identity provider provider name.

`allowedPlatforms[]`

`string ([int64](https://developers.google.com/discovery/v1/type-format) format)`

Required. User allowed federated platforms.

`displayName`

`string`

Required. User display name.

`userFullName`

`string`

Required. User full name.

`lastLoginTime`

`string ([int64](https://developers.google.com/discovery/v1/type-format) format)`

Output only. User last login time.

`hasAllEnvironmentsAccess`

`boolean`

Output only. Determines if the user has all environments access.

## UserType

User type.

Enums

`USER_TYPE_UNSPECIFIED`

Unspecified user type.

`INTERNAL`

System managed user.

`EXTERNAL`

Identity provider managed user.

`SUPPORT`

Customer managed user.

## PermissionGroup

Permission group dto (for GET/LIST).

JSON representation

{
  "name": string,
  "id": string
}

Fields

`name`

`string`

Required. Permission group description.

`id`

`string ([int64](https://developers.google.com/discovery/v1/type-format) format)`

Required. Permission group name.

## AccountState

User account state.

Enums

`ACCOUNT_STATE_UNSPECIFIED`

Unspecified account state.

`DISABLED`

Disabled users cannot login into the system.

`PENDING`

A state where users are invited into the system before their first login.

`ACTIVE`

A state where users are actively using the system.

## Methods

### `[delete](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.legacySoarUsers/delete)`

Permanently deletes a user account identified by their resource `name`.

### `[get](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.legacySoarUsers/get)`

Retrieves detailed information about a specific user identified by their resource name.

### `[getLocalization](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.legacySoarUsers/getLocalization)`

Gets the localization settings for a specific user.

### `[getNotificationSettings](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.legacySoarUsers/getNotificationSettings)`

Gets the notification settings for a specific user.

### `[list](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.legacySoarUsers/list)`

Returns a paginated list of users within a SecOps instance.

### `[updateLocalization](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.legacySoarUsers/updateLocalization)`

Updates the localization settings for a specific user.

### `[updateNotificationSettings](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.legacySoarUsers/updateNotificationSettings)`

Updates the notification settings for a specific user.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-02-20 UTC.
