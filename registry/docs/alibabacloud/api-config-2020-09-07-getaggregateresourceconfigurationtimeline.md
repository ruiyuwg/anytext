Queries the configuration history of a specific resource in a specified account group. After you enable Cloud Config, the service records all configuration and relationship changes for your resources and organizes them into a configuration history. This history is saved for 10 years by default.

## Operation description

Cloud Config provides a configuration history for each resource within the monitoring scope:

-   For resources that already exist when you enable Cloud Config, the configuration history begins when the service is enabled.
    
-   For resources that are created after you enable Cloud Config, the configuration history begins when the resources are created. Cloud Config records resource configuration changes every 10 minutes. When the configuration of a resource changes, a node appears in the configuration history. This node contains the resource configuration details, change details, and the related management event.
    

This topic provides an example of how to query the configuration history of an OSS bucket named `new-bucket`. The bucket is in the `cn-hangzhou` region, belongs to the member account `100931896542****`, and is part of the account group `ca-5885626622af0008****`. The returned result indicates that a configuration change for the resource was recorded at the UNIX timestamp `1624961112000` (UTC+8: 2021-06-29 18:05:12).

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/GetAggregateResourceConfigurationTimeline)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/GetAggregateResourceConfigurationTimeline)

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

config:GetAggregateResourceConfigurationTimeline

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

For more information, see [ListAggregateDiscoveredResources](/help/en/cloud-config/latest/listaggregatediscoveredresources).

new-bucket

StartTime

integer

No

The start time of the query. This is a UNIX timestamp in milliseconds. By default, data from the last 30 days is queried.

1623211156000

EndTime

integer

No

The end time of the query. This is a UNIX timestamp in milliseconds. By default, data up to the current time is queried.

1625821156000

MaxResults

integer

No

The maximum number of entries to return on each page. Valid values: 1 to 100.

10

ResourceType

string

Yes

The type of the resource.

For more information, see [ListAggregateDiscoveredResources](/help/en/cloud-config/latest/listaggregatediscoveredresources).

ACS::OSS::Bucket

Region

string

Yes

The ID of the region where the resource resides.

For more information, see [ListAggregateDiscoveredResources](/help/en/cloud-config/latest/listaggregatediscoveredresources).

cn-hangzhou

AggregatorId

string

Yes

The ID of the account group.

For more information, see [ListAggregators](/help/en/cloud-config/latest/listaggregators).

ca-5885626622af0008\*\*\*\*

NextToken

string

No

If the output is truncated, you can use the `NextToken` to start the next query from the truncation point.

IWBjqMYSy0is7zSMGu16\*\*\*\*

ResourceAccountId

integer

No

The ID of the Alibaba Cloud account that owns the resource in the account group.

100931896542\*\*\*\*

For more information about common request parameters, see [Common parameters](/help/en/cloud-config/latest/common-parameters-2).

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

ED9CD1B3-286C-4E05-A765-5E1E0B9BC2AB

ResourceConfigurationTimeline

object

The configuration history of the resource.

NextToken

string

The token used to start the next query.

IWBjqMYSy0is7zSMGu16\*\*\*\*

MaxResults

integer

The maximum number of entries returned on each page.

10

ConfigurationList

array<object>

A list of configuration changes.

object

N/A.

Tags

string

The tags of the resource.

{\\"\\"hc\\"\\":\[\\"\\"value2\\"\\"\]}

AccountId

integer

The ID of the Alibaba Cloud account that owns the resource.

100931896542\*\*\*\*

ResourceEventType

string

The type of the resource change event. Valid values:

-   DISCOVERED: The resource is discovered by Cloud Config.
    
-   DISCOVERED\_REVISED: The resource is discovered by Cloud Config through a periodic remediation task.
    
-   MODIFY: The resource is modified.
    
-   MODIFY\_REVISED: The resource is modified, as detected by a periodic remediation task.
    
-   REMOVE: The resource is deleted.
    

**Note**

-   To ensure data integrity, Cloud Config periodically runs remediation tasks to align data. This process may generate resource discovery events. These events occur infrequently.
    
-   The time when a resource event is generated by a periodic remediation task is the discovery time of the task. This time is later than the actual time of the resource change.
    

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

The time when the resource was created. This is a UNIX timestamp in milliseconds.

1624961112000

Region

string

The ID of the region.

cn-hangzhou

CaptureTime

string

The time when the resource change snapshot was recorded. This is a UNIX timestamp in milliseconds.

1624961156000

ConfigurationDiff

string

The details of the resource changes that triggered the evaluation.

{\\"AccessControlList\\":\[null,{\\"Grant\\":\\"private\\"}\],\\"ServerSideEncryptionRule\\":\[null,{\\"SSEAlgorithm\\":\\"None\\"}\],\\"CreationDate\\":\[null,\\"2021-06-29T10:05:12.000Z\\"\],\\"Owner\\":\[null,{\\"DisplayName\\":\\"100931896542\*\*\*\*\\",\\"ID\\":\\"100931896542\*\*\*\*\\"}\],\\"BucketPolicy\\":\[null,{\\"LogPrefix\\":\\"\\",\\"LogBucket\\":\\"\\"}\],\\"StorageClass\\":\[null,\\"Standard\\"\],\\"ExtranetEndpoint\\":\[null,\\"oss-cn-hangzhou.aliyuncs.com\\"\],\\"DataRedundancyType\\":\[null,\\"LRS\\"\],\\"AllowEmptyReferer\\":\[null,\\"true\\"\],\\"IntranetEndpoint\\":\[null,\\"oss-cn-hangzhou-internal.aliyuncs.com\\"\],\\"Name\\":\[null,\\"new-bucket\\"\],\\"Location\\":\[null,\\"oss-cn-hangzhou\\"\]}

ResourceId

string

The ID of the resource.

new-bucket

ResourceName

string

The resource name.

new-bucket

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
        "ResourceName": "new-bucket"
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

Invalid.AggregatorId.Value

The specified AggregatorId is invalid.

The specified aggregator ID does not exist or you are not authorized to use the aggregator.

400

Invalid.ResourceOwnerId.Value

The specified ResourceOwnerId is invalid.

The specified ResourceOwnerId is invalid.

404

AccountNotExisted

Your account does not exist.

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The request has failed due to a temporary failure of the server.

See [Error Codes](https://api.alibabacloud.com/document/Config/2020-09-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/GetAggregateResourceConfigurationTimeline#workbench-doc-change-demo) for a complete list.
