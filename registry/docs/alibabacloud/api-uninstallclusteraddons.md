Uninstalls components that you no longer need from a cluster. You must specify the name of the components and specify whether to release associated Alibaba Cloud resources from the cluster.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/UnInstallClusterAddons)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/UnInstallClusterAddons)

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

cs:UnInstallClusterAddons

delete

\*Cluster

`acs:cs:{#regionId}:{#accountId}:cluster/{#ClusterId}`

-   cs:EnableAddonLogtailDs

none

## Request syntax

```
POST /clusters/{ClusterId}/components/uninstall HTTP/1.1
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

The ID of the cluster.

c5b5e80b0b64a4bf6939d2d8fbbc5\*\*\*\*

addons

array<object>

No

The list of add-ons to uninstall.

object

No

Add-on details.

name

string

No

The name of the add-on to uninstall. You can call the [ListClusterAddonInstances](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-listclusteraddoninstances) operation to query the installed add-ons.

ack-node-problem-detector

cleanup\_cloud\_resources

boolean

No

Specifies whether to clean up related cloud resources during uninstallation.

-   true: clean up
-   false: retain

true

## Response parameters

Parameter

Type

Description

Example

object

cluster\_id

string

The cluster ID.

c5b5e80b0b64a4bf6939d2d8fbbc5\*\*\*\*

task\_id

string

The task ID.

T-66e39b39c0fdd001320005c0

request\_id

string

The request ID.

74D1512F-67DA-54E8-99EA-4D50EB4898F4

## Examples

Sample success responses

`JSON`format

```
{
  "cluster_id": "c5b5e80b0b64a4bf6939d2d8fbbc5****",
  "task_id": "T-66e39b39c0fdd001320005c0",
  "request_id": "74D1512F-67DA-54E8-99EA-4D50EB4898F4"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-12

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/UnInstallClusterAddons?updateTime=2024-12-12#workbench-doc-change-demo)

2023-08-24

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/UnInstallClusterAddons?updateTime=2023-08-24#workbench-doc-change-demo)
