Checks whether the user has permissions to access the current resource or page.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/CheckRole)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/CheckRole)

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

hbr:CheckRole

none

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

CheckRoleType

string

No

The type of the role. Valid values:

-   EcsRole: a role with the permissions to access Elastic Compute Service (ECS) resources
-   CsgRole: a role with the permissions to perform Cloud Storage Gateway (CSG) backup
-   NasRole: a role with the permissions to perform NAS backup
-   OssRole: a role with the permissions to perform Object Storage Service (OSS) backup
-   UdmRole: a role with the permissions to perform ECS instance backup
-   VMwareLocalRole: a role with the permissions to back up on-premises VMware virtual machines (VMs)
-   VMwareCloudRole: a role with the permissions to back up VMs deployed on Alibaba Cloud VMware Service (ACVS)
-   EcsBackupRole: a role with the permissions to perform ECS backup
-   OtsRole: a role with the permissions to perform Tablestore backup
-   CrossAccountRole: a role with the permissions to perform cross-account backup

OssRole

CrossAccountUserId

long

No

The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.

158975xxxxx4625

CrossAccountRoleName

string

No

The name of the Resource Access Management (RAM) role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.

BackupRole

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

2F63CA9B-744E-51C0-A638-27882BB03078

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
-   false

true

## Examples

Sample success responses

`JSON`format

```
{
  "Code": 200,
  "Message": "successful",
  "RequestId": "2F63CA9B-744E-51C0-A638-27882BB03078",
  "Success": true
}
```

## Error codes

HTTP status code

Error code

Error message

Description

200

CrossAccountBackupSlrNotExist

AliyunServiceRoleForHbrCrossAccountBackup doesn't exist, please create this role.

AliyunServiceRoleForHbrCrossAccountBackup the role does not exist, create this service association role.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
