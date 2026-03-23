You can call the UpdateContactGroupForAlert operation to specify a contact group for an alert rule in an ACK cluster.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/UpdateContactGroupForAlert)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/UpdateContactGroupForAlert)

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

cs:UpdateContactGroupForAlert

update

\*Cluster

`acs:cs:{#regionId}:{#accountId}:cluster/{#ClusterId}`

none

none

## Request syntax

```
POST /alert/{ClusterId}/alert_rule/contact_groups HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

ClusterId

string

No

The cluster ID. You can call the ListCluster operation to query the cluster ID.

ce7d08276f8a6422282c46272a84bxxxx

body

object

No

The request body parameters.

alert\_rule\_group\_name

string

No

The name of the alert contact group.

sample

contact\_group\_ids

array

No

The list of contact group IDs.

long

No

A contact group ID.

12345

cr\_name

string

No

The name of the container registry instance.

sample

namespace

string

No

The namespace in which the resource resides.

default

## Response parameters

Parameter

Type

Description

Example

object

status

boolean

The update status.

-   true: The update is successful.
-   false: The update failed.

true

msg

string

The error message returned if the call fails.

contact group illegal.

## Examples

Sample success responses

`JSON`format

```
{
  "status": true,
  "msg": "contact group illegal."
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-08-02

API Description Update. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/UpdateContactGroupForAlert?updateTime=2024-08-02#workbench-doc-change-demo)
