Updates the deletion protection status of the specified resources. You can enable or disable deletion protection for namespaces and Services. You can call this operation to enable deletion protection for namespaces or Services that involve businesses-critical and sensitive data to avoid incurring maintenance costs caused by accidental namespace or Service deletion.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/UpdateResourcesDeleteProtection)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/UpdateResourcesDeleteProtection)

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

cs:UpdateResourcesDeleteProtection

update

\*Cluster

`acs:cs:{#regionId}:{#accountId}:cluster/{#ClusterId}`

none

none

## Request syntax

```
PUT /clusters/{ClusterId}/resources/protection HTTP/1.1
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

c850429a2287b4d968e27e87a4921\*\*\*\*

body

object

No

The request body that specifies the status of deletion protection for the specified resource.

namespace

string

No

The namespace to which the resource belongs.

default

resource\_type

string

Yes

The type of resource for which deletion protection is enabled or disabled. You can specify namespaces or Services.

services

resources

array

No

The resources list.

string

No

The name of the resource.

test

enable

boolean

No

Specifies whether to enable deletion protection. Set the value to true to enable deletion protection and set the value to false to disable deletion protection.

true

## Response parameters

Parameter

Type

Description

Example

object

Schema of Response

requestId

string

Id of the request

0527ac9a-c899-4341-a21a-xxxxxxxxx

namespace

string

The namespace to which the resource belongs.

default

resource\_type

string

The type of resource for which deletion protection is enabled or disabled.

namespaces

resources

array

The list of resources whose deletion protection status is updated.

resources

string

The name of the resource whose deletion protection status is updated.

test1

protection

string

Indicates the status of deletion protection. A value of true indicates that deletion protection is enabled and a value of false indicates that deletion protection is disabled.

Enumeration Value:

-   enable: deletion protection is enabled..
-   disable: deletion protection is disabled..

enable

## Examples

Sample success responses

`JSON`format

```
{
  "requestId": "0527ac9a-c899-4341-a21a-xxxxxxxxx",
  "namespace": "default",
  "resource_type": "namespaces",
  "resources": [
    "test1"
  ],
  "protection": "enable"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
