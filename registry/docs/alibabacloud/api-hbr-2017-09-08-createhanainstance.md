Registers an SAP HANA instance.

## Operation description

To register an SAP HANA instance, you must configure the SAP HANA connection information. After the SAP HANA instance is registered, Cloud Backup installs a backup client on the node of the SAP HANA instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/CreateHanaInstance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/CreateHanaInstance)

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

hbr:CreateHanaInstance

create

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

VaultId

string

Yes

The ID of the backup vault.

v-0003v4a\*\*\*\*\*\*gfv2

HanaName

string

No

The name of the SAP HANA instance.

HANA-DEV

Host

string

No

The private or internal IP address of the host where the primary node of the SAP HANA instance resides.

47.100.XX.XX

InstanceNumber

integer

No

The instance number of the SAP HANA system.

00

UserName

string

No

The username of the SYSTEMDB database.

admin

Password

string

No

The password that is used to connect with the SAP HANA database.

\*\*\*\*\*\*\*\*\*\*\*\*

UseSsl

boolean

No

Specifies whether to connect with the SAP HANA database over Secure Sockets Layer (SSL).

true

ValidateCertificate

boolean

No

Specifies whether to verify the SSL certificate of the SAP HANA database.

false

AlertSetting

string

No

The alert settings. Valid value: INHERITED, which indicates that the Cloud Backup client sends alert notifications by using the same method configured for the backup vault.

INHERITED

EcsInstanceId

string

No

The IDs of the ECS instances that host the SAP HANA instance to be registered. Cloud Backup installs backup clients on the specified ECS instances.

\[\\"i-uf6ir9y\*\*\*\*\*\*hvisj\\"\]

Sid

string

No

The security identifier (SID) of the SAP HANA database. For more information, see [How to find sid user and instance number of HANA db?](https://answers.sap.com/questions/555192/how-to-find-sid-user-and-instance-number-of-hana-d.html?spm=a2c4g.11186623.0.0.55c34b4ftZeXNK).

HXE

ResourceGroupId

string

No

The ID of the resource group.

rg-acfm4ebtpkzx7zy

CrossAccountType

string

No

The backup type. Valid values:

-   **SELF\_ACCOUNT**: Data is backed up within the same Alibaba Cloud account.
-   **CROSS\_ACCOUNT**: Data is backed up across Alibaba Cloud accounts.

CROSS\_ACCOUNT

CrossAccountUserId

long

No

The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.

158975xxxxx4625

CrossAccountRoleName

string

No

The name of the Resource Access Management (RAM) role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.

hbrcrossrole

## Response parameters

Parameter

Type

Description

Example

object

Code

string

The response code. The status code 200 indicates that the request was successful.

200

Message

string

The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.

successful

RequestId

string

The request ID.

EB526A5D-1FE2-51C1-B790-1732C1DBA969

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
-   false

true

ClusterId

string

The ID of the SAP HANA instance.

cl-000dp1sz\*\*\*\*\*\*6hn

## Examples

Sample success responses

`JSON`format

```
{
  "Code": 200,
  "Message": "successful",
  "RequestId": "EB526A5D-1FE2-51C1-B790-1732C1DBA969",
  "Success": true,
  "ClusterId": "cl-000dp1sz******6hn"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-05-22

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/CreateHanaInstance?updateTime=2024-05-22#workbench-doc-change-demo)
