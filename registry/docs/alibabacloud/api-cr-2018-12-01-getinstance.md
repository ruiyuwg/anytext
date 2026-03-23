The ID of the resource group to which the instance belongs.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/cr/2018-12-01/GetInstance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/cr/2018-12-01/GetInstance)

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

cr:GetInstance

get

\*Instance

`acs:cr:{#regionId}:{#accountId}:instance/{#InstanceId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

InstanceId

string

Yes

The ID of the Container Registry instance.

cri-xkx6vujuhay0\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

ModifiedTime

long

The time when the instance was last modified.

1571926560000

RequestId

string

The request ID.

6EF34B18-4228-470C-860C-D28597CF010E

CreateTime

long

The time when the instance was created.

1571926439000

InstanceName

string

The name of the instance.

shanghai-instance1

InstanceSpecification

string

The edition of the instance. Valid values: Enterprise\_Basic: Basic Edition instances Enterprise\_Standard: Standard Edition instances Enterprise\_Advanced: Advanced Edition instances

Enterprise\_Basic

InstanceStatus

string

The status of the instance. Valid values:

-   `PENDING`: The instance is being initialized.
-   `INIT_ERROR`: The instance failed to be initialized.
-   `STARTING`: The instance is being started.
-   `RUNNING`: The instance is running.
-   `STOPPING`: The instance is being stopped.
-   `STOPPED`: The instance is stopped.
-   `DELETING`: The instance is being deleted.
-   `DELETED`: The instance is deleted.

RUNNING

InstanceId

string

The ID of the Container Registry instance.

cri-xkx6vujuhay0\*\*\*\*

IsSuccess

boolean

Indicates whether the request is successful. Valid values:

-   `true`: The request is successful.
-   `false`: The request fails.

true

ResourceGroupId

string

The ID of the resource group to which the instance belongs.

rg-acfmv36i4isx\*\*\*\*

InstanceIssue

string

The issue occurs on the instance.

The issue occurs on the instance. Valid values: OSS\_TOO\_MANY\_BUCKETS: The number of Object Storage Service (OSS) buckets exceeds the upper limit. OSS\_BUCKET\_ALREADY\_EXISTS: An OSS bucket that has the duplicate name already exists. OSS\_SERVICE\_ROLE\_UNAUTHORIZED: The OSS service-linked role is not granted permissions. USER\_NOT\_REGISTERED\_BY\_REAL\_NAME: The Alibaba Cloud account has not passed a real name verification.

Tags

array<object>

The tags of the instance.

Tag

object

The tag of the instance.

TagKey

string

The tag key.

test\_key

TagValue

string

The tag value.

test\_value

## Examples

Sample success responses

`JSON`format

```
{
  "ModifiedTime": 1571926560000,
  "RequestId": "6EF34B18-4228-470C-860C-D28597CF010E",
  "CreateTime": 1571926439000,
  "InstanceName": "shanghai-instance1",
  "InstanceSpecification": "Enterprise_Basic",
  "Code": "success",
  "InstanceStatus": "RUNNING",
  "InstanceId": "cri-xkx6vujuhay0****",
  "IsSuccess": true,
  "ResourceGroupId": "rg-acfmv36i4isx****",
  "InstanceIssue": "The issue occurs on the instance. Valid values: OSS_TOO_MANY_BUCKETS: The number of Object Storage Service (OSS) buckets exceeds the upper limit. OSS_BUCKET_ALREADY_EXISTS: An OSS bucket that has the duplicate name already exists. OSS_SERVICE_ROLE_UNAUTHORIZED: The OSS service-linked role is not granted permissions. USER_NOT_REGISTERED_BY_REAL_NAME: The Alibaba Cloud account has not passed a real name verification.\n",
  "Tags": [
    {
      "TagKey": "test_key",
      "TagValue": "test_value"
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

403

NoPrivilege

Access denied for this user.

500

SystemError

Unknown error.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/cr/2018-12-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-06-30

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/cr/2018-12-01/GetInstance?updateTime=2023-06-30#workbench-doc-change-demo)
