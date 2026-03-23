Queries the details of a project.

## Operation description

### [](#usage-notes)Usage notes

Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Sls/2020-12-30/GetProject)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Sls/2020-12-30/GetProject)

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

log:GetProject

get

\*Project

`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`

-   log:TLSVersion

none

## Request parameters

Parameter

Type

Required

Description

Example

project

string

Yes

The name of the project.

ali-project-test

## Response parameters

Parameter

Type

Description

Example

headers

object

Server

string

The name of the server.

nginx

Content-Type

string

The content type of the response body.

application/json

Content-Length

string

The content length of the response body.

0

Connection

string

Indicates whether the connection is persistent. Valid values:

-   close: The connection is non-persistent. A new TCP connection is established for each HTTP request.
-   keep-alive: The connection is persistent. After a TCP connection is established, the connection remains open, and no more time or bandwidth is consumed to establish new connections.

close

Date

string

The time at which the response was returned.

Sun, 27 May 2018 08:25:04 GMT

x-log-requestid

string

The request ID.

5B0A6B60BB6EE39764D458B5

[project](/help/en/sls/developer-reference/api-sls-2020-12-30-struct-project)

The details of the project.

{ "createTime": "2020-11-18 16:55:57", "description": "test", "lastModifyTime": "2020-11-18 17:07:26", "owner": "174\*\*\*\*745", "projectName": "ali-project-test", "region": "cn-hangzhou", "status": "Normal" }

## Examples

Sample success responses

`JSON`format

```
{
  "createTime": "2021-07-07 14:08:09",
  "lastModifyTime": "2022-04-18 13:30:19",
  "description": "Description of my-project",
  "owner": "",
  "projectName": "ali-test-project",
  "region": "cn-hangzhou",
  "status": "Normal",
  "resourceGroupId": "rg-acf******sq",
  "dataRedundancyType": "LRS",
  "quota": {
    "key": ""
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Sls/2020-12-30/errorCode).
