Queries the configuration history of a specified resource. Cloud Config records every configuration and relationship change for a resource in a configuration history. Recording starts after you enable the Cloud Config service. By default, the history is retained for 10 years.

## Operation description

Cloud Config provides a configuration history for each resource that it monitors. The details are as follows:

-   For existing resources, the configuration history starts when you enable the Cloud Config service.
    
-   For new resources created after you enable the service, the configuration history starts when the resource is created. Cloud Config records configuration changes every 10 minutes. When a configuration changes, a new node appears in the history. This node contains the resource configuration details, change details, and the associated management event.
    

This topic provides an example of how to query the configuration history for a resource named `new-bucket`. The resource is a bucket in the `cn-hangzhou` region. The response shows that the creation time of the resource is `1624961112000` (18:05:12 on June 29, 2021, UTC+8).

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/GetResourceConfigurationTimeline)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/GetResourceConfigurationTimeline)

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

config:GetResourceConfigurationTimeline

list

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ResourceId

string

Yes

The ID of the resource.

For more information, see [ListDiscoveredResources](/help/en/cloud-config/latest/listdiscoveredresources).

new-bucket

StartTime

integer

No

The start timestamp of the time range to query. The value is a UNIX timestamp in milliseconds. If you do not specify this parameter, the query starts from 30 days before the current time.

1623211156000

EndTime

integer

No

The end timestamp of the time range to query. The value is a UNIX timestamp in milliseconds. If you do not specify this parameter, the current time is used.

1625821156000

MaxResults

integer

No

The maximum number of entries to return for a single request. Valid values: 1 to 100.

10

ResourceType

string

Yes

The resource type.

For more information, see [ListDiscoveredResources](/help/en/cloud-config/latest/listdiscoveredresources).

ACS::OSS::Bucket

Region

string

Yes

The region ID.

cn-hangzhou

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. If the response of the current request is truncated, you can use this token to retrieve the next page of results.

IWBjqMYSy0is7zSMGu16\*\*\*\*

For more information, see [Common parameters](/help/en/cloud-config/latest/common-parameters-2).

## Response elements

**Element**

**Type**

**Description**

**Example**

object

None.

RequestId

string

The request ID.

ED9CD1B3-286C-4E05-A765-5E1E0B9BC2AB

ResourceConfigurationTimeline

object

The configuration history of the resource.

NextToken

string

The token that is used to retrieve the next page of results.

IWBjqMYSy0is7zSMGu16\*\*\*\*

MaxResults

integer

The maximum number of entries returned for a single request.

10

ConfigurationList

array<object>

A list of configuration history records for the resource.

object

A record in the configuration history.

Tags

string

The tags of the resource.

{\\"\\"hc\\"\\":\[\\"\\"value2\\"\\"\]}

AccountId

integer

The ID of the Alibaba Cloud account to which the resource belongs.

100931896542\*\*\*\*

ResourceEventType

string

The type of the resource change event. Valid values:

-   DISCOVERED: A resource is discovered by Cloud Config.
    
-   DISCOVERED\_REVISED: A resource is discovered by Cloud Config through a periodic reconciliation task.
    
-   MODIFY: A resource is modified.
    
-   MODIFY\_REVISED: A resource modification is recorded through a periodic reconciliation task.
    
-   REMOVE: A resource is deleted.
    

**Note**

-   To ensure data integrity, Cloud Config periodically reconciles resource data. This process can generate resource discovery events, which occur infrequently.
    
-   The time of an event generated by a reconciliation task is the time when the task discovers the change. This is later than the actual time of the change.
    

DISCOVERED

AvailabilityZone

string

The zone.

cn-hangzhou-h

ResourceType

string

The resource type.

ACS::OSS::Bucket

ResourceCreateTime

string

The timestamp when the resource was created. The value is a UNIX timestamp in milliseconds.

1624961112000

Region

string

The region ID.

cn-hangzhou

CaptureTime

string

The timestamp when the resource change snapshot was recorded. The value is a UNIX timestamp in milliseconds.

1624961156000

ConfigurationDiff

string

The details of the resource configuration change.

{\\"AccessControlList\\":\[null,{\\"Grant\\":\\"private\\"}\],\\"ServerSideEncryptionRule\\":\[null,{\\"SSEAlgorithm\\":\\"None\\"}\],\\"CreationDate\\":\[null,\\"2021-06-29T10:05:12.000Z\\"\],\\"Owner\\":\[null,{\\"DisplayName\\":\\"100931896542\*\*\*\*\\",\\"ID\\":\\"100931896542\*\*\*\*\\"}\],\\"BucketPolicy\\":\[null,{\\"LogPrefix\\":\\"\\",\\"LogBucket\\":\\"\\"}\],\\"StorageClass\\":\[null,\\"Standard\\"\],\\"ExtranetEndpoint\\":\[null,\\"oss-cn-hangzhou.aliyuncs.com\\"\],\\"DataRedundancyType\\":\[null,\\"LRS\\"\],\\"AllowEmptyReferer\\":\[null,\\"true\\"\],\\"IntranetEndpoint\\":\[null,\\"oss-cn-hangzhou-internal.aliyuncs.com\\"\],\\"Name\\":\[null,\\"new-bucket\\"\],\\"Location\\":\[null,\\"oss-cn-hangzhou\\"\]}

ResourceId

string

The resource ID.

new-bucket

ResourceName

string

The resource name.

new-bucket

Relationship

string

Details of related resources, including their region ID, relationship, resource ID, and resource type.

""

RelationshipDiff

string

The changes to the related resources.

""

## Examples

Success response

`JSON` format

```
{
  "RequestId": "ED9CD1B3-286C-4E05-A765-5E1E0B9BC2AB",
  "ResourceConfigurationTimeline": {
    "NextToken": "IWBjqMYSy0is7zSMGu16****",
    "MaxResults": 10,
    "ConfigurationList": [
      {
        "Tags": "{\\\"\\\"hc\\\"\\\":[\\\"\\\"value2\\\"\\\"]}",
        "AccountId": 0,
        "ResourceEventType": "DISCOVERED",
        "AvailabilityZone": "cn-hangzhou-h",
        "ResourceType": "ACS::OSS::Bucket",
        "ResourceCreateTime": "1624961112000",
        "Region": "cn-hangzhou",
        "CaptureTime": "1624961156000",
        "ConfigurationDiff": "{\\\"AccessControlList\\\":[null,{\\\"Grant\\\":\\\"private\\\"}],\\\"ServerSideEncryptionRule\\\":[null,{\\\"SSEAlgorithm\\\":\\\"None\\\"}],\\\"CreationDate\\\":[null,\\\"2021-06-29T10:05:12.000Z\\\"],\\\"Owner\\\":[null,{\\\"DisplayName\\\":\\\"100931896542****\\\",\\\"ID\\\":\\\"100931896542****\\\"}],\\\"BucketPolicy\\\":[null,{\\\"LogPrefix\\\":\\\"\\\",\\\"LogBucket\\\":\\\"\\\"}],\\\"StorageClass\\\":[null,\\\"Standard\\\"],\\\"ExtranetEndpoint\\\":[null,\\\"oss-cn-hangzhou.aliyuncs.com\\\"],\\\"DataRedundancyType\\\":[null,\\\"LRS\\\"],\\\"AllowEmptyReferer\\\":[null,\\\"true\\\"],\\\"IntranetEndpoint\\\":[null,\\\"oss-cn-hangzhou-internal.aliyuncs.com\\\"],\\\"Name\\\":[null,\\\"new-bucket\\\"],\\\"Location\\\":[null,\\\"oss-cn-hangzhou\\\"]}",
        "ResourceId": "new-bucket",
        "ResourceName": "new-bucket",
        "Relationship": "\"\"",
        "RelationshipDiff": "\"\""
      }
    ]
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

NoPermission

You are not authorized to perform this operation.

You are not authorized to perform this operation.

400

MemberNotBelongToMaster

The specified member does not belong to your organization.

404

AccountNotExisted

Your account does not exist.

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The request has failed due to a temporary failure of the server.

See [Error Codes](https://api.alibabacloud.com/document/Config/2020-09-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/GetResourceConfigurationTimeline#workbench-doc-change-demo) for a complete list.
