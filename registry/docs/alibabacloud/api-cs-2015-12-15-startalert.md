Activates the specified alert rule(s).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/StartAlert)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/StartAlert)

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

cs:StartAlert

update

\*Cluster

`acs:cs:{#regionId}:{#accountId}:cluster/{#ClusterId}`

none

none

## Request syntax

```
POST /alert/{ClusterId}/alert_rule/start HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

ClusterId

string

Yes

The instance ID. You can call the ListClusters operation to query the cluster ID.

c245ff43c717f494489f42f5f1575e98d

body

object

No

The request body parameters.

alert\_rule\_group\_name

string

No

The name of the alert rule group.

sample

alert\_rule\_name

string

No

The name of the alert rule.

sample

## Response parameters

Parameter

Type

Description

Example

object

status

boolean

The status.

true

msg

string

The message returned.

success

## Examples

Sample success responses

`JSON`format

```
{
  "status": true,
  "msg": "success"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-10

API Description Update

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/StartAlert?updateTime=2025-02-10#workbench-doc-change-demo)

2024-08-02

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/StartAlert?updateTime=2024-08-02#workbench-doc-change-demo)

2024-02-27

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/StartAlert?updateTime=2024-02-27#workbench-doc-change-demo)
