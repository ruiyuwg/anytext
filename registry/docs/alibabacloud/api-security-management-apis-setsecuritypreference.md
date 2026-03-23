Configures the security preferences.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ram/2015-05-01/SetSecurityPreference)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ram/2015-05-01/SetSecurityPreference)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

ram:SetSecurityPreference

update

\*All Resources

`*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

EnableSaveMFATicket

boolean

No

Specifies whether to remember the multi-factor authentication (MFA) devices of Resource Access Management (RAM) users for seven days. Valid values:

-   true
-   false (default)

true

AllowUserToChangePassword

boolean

No

Specifies whether RAM users can change their passwords. Valid values:

-   true (default)
-   false

true

AllowUserToManageAccessKeys

boolean

No

Specifies whether RAM users can manage their AccessKey pairs. Valid values:

-   true
-   false (default)

false

AllowUserToManagePublicKeys

boolean

No

Specifies whether RAM users can manage their public keys. Valid values:

-   true
-   false (default)

**Note** This parameter is valid only for the Japan site.

false

AllowUserToManageMFADevices

boolean

No

Specifies whether RAM users can manage their MFA devices. Valid values:

-   true (default)
-   false

true

LoginSessionDuration

integer

No

The validity period of the logon session of RAM users.

Valid values: 1 to 24. Default value: 6. Unit: hours.

6

LoginNetworkMasks

string

No

The subnet mask that specifies the IP addresses from which you can log on to the Alibaba Cloud Management Console. This parameter takes effect on password-based logon and single sign-on (SSO). However, this parameter does not take effect on API calls that are authenticated by using AccessKey pairs.

-   If you specify a subnet mask, RAM users can use only the IP addresses in the subnet mask to log on to the Alibaba Cloud Management Console.
-   If you do not specify a subnet mask, RAM users can use all IP addresses to log on to the Alibaba Cloud Management Console.

If you need to specify multiple subnet masks, separate the subnet masks with semicolons (;). Example: 192.168.0.0/16;10.0.0.0/8.

You can specify up to 40 subnet masks. The total length of the subnet masks can be a maximum of 512 characters.

10.0.0.0/8

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

SecurityPreference

object

The security preferences.

AccessKeyPreference

object

The AccessKey pair preference.

AllowUserToManageAccessKeys

boolean

Indicates whether RAM users can manage their AccessKey pairs.

false

MFAPreference

object

The MFA preference.

AllowUserToManageMFADevices

boolean

Indicates whether RAM users can manage their MFA devices.

false

LoginProfilePreference

object

The logon preference.

EnableSaveMFATicket

boolean

Indicates whether the MFA devices of RAM users are remembered.

false

LoginSessionDuration

integer

The validity period of the logon session of RAM users.

6

LoginNetworkMasks

string

The subnet mask.

10.0.0.0/8

AllowUserToChangePassword

boolean

Indicates whether RAM users can change their passwords.

true

PublicKeyPreference

object

The public key preference.

**Note** This parameter is valid only for the Japan site.

AllowUserToManagePublicKeys

boolean

Indicates whether RAM users can manage their public keys.

false

RequestId

string

The ID of the request.

A978915D-F279-4CA0-A89B-9A71219FFB3E

## Examples

Sample success responses

`JSON`format

```
{
  "SecurityPreference": {
    "AccessKeyPreference": {
      "AllowUserToManageAccessKeys": false
    },
    "MFAPreference": {
      "AllowUserToManageMFADevices": false
    },
    "LoginProfilePreference": {
      "EnableSaveMFATicket": false,
      "LoginSessionDuration": 6,
      "LoginNetworkMasks": "10.0.0.0/8",
      "AllowUserToChangePassword": true
    },
    "PublicKeyPreference": {
      "AllowUserToManagePublicKeys": false
    }
  },
  "RequestId": "A978915D-F279-4CA0-A89B-9A71219FFB3E"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ram/2015-05-01/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
