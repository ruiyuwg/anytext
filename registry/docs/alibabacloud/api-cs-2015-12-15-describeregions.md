Queries the list of available regions.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/DescribeRegions)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/DescribeRegions)

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

cs:DescribeRegions

get

\*All Resources

`*`

none

none

## Request syntax

```
GET /regions HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

clusterType

string

No

The type of the cluster.

Valid values:

-   ExternalKubernetes: registered clusters.
-   ManagedKubernetes: managed clusters.
-   Kubernetes: dedicated clusters.

ManagedKubernetes

profile

string

No

The subtype of the managed cluster.

Valid values:

-   Lingjun: ACK Lingjun clusters.
-   Serverless: ACK serverless clusters.
-   Default: ACK managed clusters.
-   Edge: ACK Edge clusters.

Default

acceptLanguage

string

No

The language in which the results are returned.

Valid values:

-   zh-CN
-   en-US

zh-CN

## Response parameters

Parameter

Type

Description

Example

object

Schema of Response

requestId

string

The unique ID of the request.

CE0F23E3-C5F5-5FB3-AA9F-134093C49C60

regions

array<object>

A list of available regions.

region

object

The details of a region.

regionId

string

The ID of the region.

cn-hangzhou

localName

string

The name of the region.

China (Hangzhou)

## Examples

Sample success responses

`JSON`format

```
{
  "requestId": "CE0F23E3-C5F5-5FB3-AA9F-134093C49C60",
  "regions": [
    {
      "regionId": "cn-hangzhou",
      "localName": "China (Hangzhou)"
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-01-26

Add Operation

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/DescribeRegions?updateTime=2026-01-26#workbench-doc-change-demo)
