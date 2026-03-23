Updates cluster add-ons to newer versions for enhanced functionality.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/UpgradeClusterAddons)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/UpgradeClusterAddons)

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

cs:UpgradeK8sComponents

update

\*Cluster

`acs:cs:{#regionId}:{#accountId}:cluster/{#ClusterId}`

none

none

## Request syntax

```
POST /clusters/{ClusterId}/components/upgrade HTTP/1.1
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

The cluster ID.

cf4299b79b3e34226abfdc80a4bda\*\*\*\*

body

array<object>

No

The request parameters.

object

No

component\_name

string

Yes

The name of the component.

coredns

next\_version

string

Yes

The version to which the component can be updated. You can call the `DescribeClusterAddonsVersion` operation to query the version to which the component can be updated.

1.6.7

version

string

No

The current version of the component.

v1.6.2

config

string

No

The custom component settings that you want to use. The value is a JSON string.

{\\"CpuRequest\\":\\"800m\\"}

policy

string

No

The update policy. Valid values:

-   overwrite
-   canary

canary

## Response parameters

Parameter

Type

Description

Example

object

cluster\_id

string

The cluster ID.

cf4299b79b3e34226abfdc80a4bda\*\*\*\*

request\_id

string

The request ID.

bfd12953-31cb-42f1-8a36-7b80ec345094

task\_id

string

The task ID.

T-62a944794ee141074400\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "cluster_id": "cf4299b79b3e34226abfdc80a4bda****",
  "request_id": "bfd12953-31cb-42f1-8a36-7b80ec345094",
  "task_id": "T-62a944794ee141074400****"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-07-24

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/UpgradeClusterAddons?updateTime=2024-07-24#workbench-doc-change-demo)

2024-03-12

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/UpgradeClusterAddons?updateTime=2024-03-12#workbench-doc-change-demo)
