A consumer sends a heartbeat to the server to maintain its active status.

## Operation description

### API description

-   The Host consists of a project name and a Simple Log Service Endpoint. You must specify the project in the Host.
    
-   A consumer sends heartbeats to the server at fixed intervals to maintain its connection. If the server does not receive a heartbeat from the consumer within a specified period, the consumer is deleted.
    
-   Obtain an AccessKey pair. For more information, see [AccessKey pair](/help/en/sls/accesskey-pair).
    

An AccessKey pair of an Alibaba Cloud account has permissions for all API operations. This poses a high security threat. We recommend that you create and use a RAM user to call API operations or perform routine O&M. The RAM user must have permissions to manage Simple Log Service resources. For more information, see [Create and authorize a RAM user](/help/en/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service).

-   Obtain the project name, region, and Logstore name. For more information, see [Manage a project](/help/en/sls/manage-a-project/) and [Manage a Logstore](/help/en/sls/manage-a-logstore).
    
-   Obtain the consumer group name. For more information, see [ListConsumerGroup](/help/en/sls/api-listconsumergroup).
    

### Authorization information

The following table describes the authorization information for this operation. Add this information to the Action element of a RAM policy to grant a RAM user or RAM role the permissions to call this API operation.

Action

Resource in an authorization policy

`log:ConsumerGroupHeartBeat`

`acs:log:${regionId}:${accountId}:project/{#ProjectName}/logstore/{#LogstoreName}/consumergroup/{#ConsumerGroupName}`

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Sls/2020-12-30/ConsumerGroupHeartBeat)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Sls/2020-12-30/ConsumerGroupHeartBeat)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

log:ConsumerGroupHeartBeat

none

\*All Resource

`*`

-   log:TLSVersion

None

## Request syntax

```
POST /logstores/{logstore}/consumergroups/{consumerGroup}?type=heartbeat HTTP/1.1
```

## **Path Parameters**

**Parameter**

**Type**

**Required**

**Description**

**Example**

logstore

string

Yes

The name of the Logstore.

ali-test-logstore

consumerGroup

string

Yes

The name of the consumer group. The name must be unique within a project.

consumer\_group\_test

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

project

string

Yes

The name of the project.

ali-test-project

consumer

string

Yes

The consumer.

consumer\_1

body

array

Yes

The list of shard IDs that are being consumed.

integer

No

The list of shard IDs that are being consumed.

\[0\]

## Response elements

**Element**

**Type**

**Description**

**Example**

array

The list of all shard IDs that are consumed by the consumer.

integer

The list of all shard IDs that are consumed by the consumer.

\[0\]

## Examples

Success response

`JSON` format

```
[
  0
]
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Sls/2020-12-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Sls/2020-12-30/ConsumerGroupHeartBeat#workbench-doc-change-demo) for a complete list.
