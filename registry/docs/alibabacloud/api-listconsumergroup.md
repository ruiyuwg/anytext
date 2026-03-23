Queries all consumer groups of a Logstore.

## Operation description

### [](#usage-notes)Usage notes

-   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
-   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](/help/en/sls/accesskey-pair).

The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](/help/en/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service).

-   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](/help/en/sls/manage-a-project/) and [Manage a Logstore](/help/en/sls/manage-a-logstore).

### [](#authentication-resources)Authentication resources

The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.

Action

Resource

`log:ListConsumerGroup`

`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}/consumergroup/*`

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Sls/2020-12-30/ListConsumerGroup)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Sls/2020-12-30/ListConsumerGroup)

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

log:ListConsumerGroup

get

\*LogStore

`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}/consumergroup/*`

-   log:TLSVersion

none

## Request syntax

```
GET /logstores/{logstore}/consumergroups HTTP/1.1
```

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

ali-test-project

logstore

string

Yes

The name of the Logstore.

ali-test-logstore

## Response parameters

Parameter

Type

Description

Example

array

The consumer groups.

[ConsumerGroup](/help/en/sls/developer-reference/api-sls-2020-12-30-struct-consumergroup)

The information about the consumer group.

test-consumer-group

## Examples

Sample success responses

`JSON`format

```
[
  {
    "name": "test-consumer-group",
    "timeout": 300,
    "order": false
  }
]
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Sls/2020-12-30/errorCode).
