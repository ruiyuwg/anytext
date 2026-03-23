Queries the compliance timeline of a specific resource in an account group. A compliance timeline is a set of compliance evaluation records for a resource. Each record includes the time and content of an evaluation.

## Operation description

In Cloud Config, each resource has its own compliance timeline, which is composed of compliance evaluation records. A record is generated each time a rule is triggered to evaluate the resource. Rules can be triggered by configuration changes, periodic executions, or manual executions.

This topic provides an example of how to query the compliance timeline for the resource `new-bucket` (an OSS bucket). The resource is in the `cn-hangzhou` region and belongs to the member account `100931896542****` within the account group `ca-5885626622af0008****`. The response shows that the resource's compliance timeline includes records with the timestamps `1625200295276` (UTC+8: 2021-07-02 12:31:35) and `1625200228510` (UTC+8: 2021-07-02 12:30:28).

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/GetAggregateResourceComplianceTimeline)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/GetAggregateResourceComplianceTimeline)

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

config:GetAggregateResourceComplianceTimeline

get

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

ResourceType

string

Yes

The resource type.

For more information about how to obtain the resource type, see [ListAggregateDiscoveredResources](/help/en/cloud-config/latest/listaggregatediscoveredresources).

ACS::OSS::Bucket

ResourceId

string

Yes

The resource ID.

For more information about how to obtain the resource ID, see [ListAggregateDiscoveredResources](/help/en/cloud-config/latest/listaggregatediscoveredresources).

new-bucket

StartTime

integer

No

The start timestamp. By default, data from the last 30 days is queried. Unit: milliseconds.

1623211156000

EndTime

integer

No

The end timestamp. By default, data up to the current time is queried. Unit: milliseconds.

1625821156000

MaxResults

integer

No

The maximum number of entries to return on each page. Valid values: 1 to 100.

10

AggregatorId

string

Yes

The ID of the account group.

For more information about how to obtain the ID of an account group, see [ListAggregators](/help/en/cloud-config/latest/listaggregators).

ca-5885626622af0008\*\*\*\*

Region

string

Yes

The ID of the region where the resource resides.

For more information about how to obtain the ID of the region where a resource resides, see [ListAggregateDiscoveredResources](/help/en/cloud-config/latest/listaggregatediscoveredresources).

cn-hangzhou

NextToken

string

No

If the output of a request is truncated, you can use this token to query the next page of results.

5OVS5J4I1/UKTkHV5oNs\*\*\*\*

ResourceAccountId

integer

No

The ID of the Alibaba Cloud account to which the resource in the account group belongs.

**Note**

Set either the ResourceAccountId or ResourceOwnerId parameter. This parameter is recommended.

100931896542\*\*\*\*

For more information about common request parameters, see [Common parameters](/help/en/cloud-config/latest/common-parameters-2).

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

8D53A78F-1EB8-4264-A554-72F07E34FAE6

ResourceComplianceTimeline

object

The compliance timeline of the resource.

NextToken

string

The token used to query the next page.

5OVS5J4I1/UKTkHV5oNs\*\*\*\*

MaxResults

integer

The maximum number of entries returned per page.

10

ComplianceList

array<object>

A list of compliance timeline entries.

object

None.

Tags

string

The tags of the resource.

{\\"\\"hc\\"\\":\[\\"\\"value2\\"\\"\]}

AccountId

string

The ID of the Alibaba Cloud account to which the resource belongs.

100931896542\*\*\*\*

AvailabilityZone

string

The zone where the resource resides.

cn-hangzhou-f

ResourceType

string

The resource type.

ACS::OSS::Bucket

ResourceCreateTime

integer

The timestamp when the resource was created. Unit: milliseconds.

1624961112000

Region

string

The ID of the region where the resource resides.

cn-hangzhou

Configuration

string

A list of rules associated with the resource and their compliance details.

{\\"Compliance\\":{\\"complianceType\\":\\"COMPLIANT\\",\\"count\\":1},\\"ConfigRuleList\\":\[{\\"accountId\\":100931896542\*\*\*\*,\\"configRuleId\\":\\"cr-9524626622af003d\*\*\*\*\\",\\"configRuleArn\\":\\"acs:config::100931896542\*\*\*\*:rule/cr-9524626622af003d\*\*\*\*\\",\\"configRuleName\\":\\"OSS存储空间ACL禁止公共读写\\",\\"complianceType\\":\\"COMPLIANT\\",\\"riskLevel\\":1,\\"annotation\\":\\"\\",\\"invokingEventMessageType\\":\\"ScheduledNotification\\"}\]}

CaptureTime

integer

The timestamp when the compliance evaluation was recorded. Unit: milliseconds.

1625200295276

ConfigurationDiff

string

The details of the resource change that triggered this evaluation.

{\\"OSS存储空间ACL禁止公共读写\\":\[{\\"accountId\\":100931896542\*\*\*\*,\\"configRuleId\\":\\"cr-965f626622af003d\*\*\*\*\\",\\"configRuleArn\\":\\"acs:config::100931896542\*\*\*\*:rule/cr-965f626622af003d\*\*\*\*\\",\\"configRuleName\\":\\"OSS存储空间ACL禁止公共读写\\",\\"complianceType\\":\\"COMPLIANT\\",\\"riskLevel\\":1,\\"annotation\\":\\"\\",\\"invokingEventMessageType\\":\\"ScheduledNotification\\"},{}\]}

ResourceId

string

The resource ID.

new-bucket

ResourceName

string

The resource name.

new-bucket

ResourceStatus

string

The status of the resource. The status of a resource is defined by the corresponding Alibaba Cloud service. This parameter can be empty. For example:

-   If the resource type is ACS::ECS::Instance, this parameter can be Running or Stopped because an ECS instance is stateful.
    
-   If the resource type is ACS::OSS::Bucket, this parameter is empty because an OSS bucket is stateless.
    

null

## Examples

Success response

`JSON` format

```
{
  "RequestId": "8D53A78F-1EB8-4264-A554-72F07E34FAE6",
  "ResourceComplianceTimeline": {
    "NextToken": "5OVS5J4I1/UKTkHV5oNs****",
    "MaxResults": 10,
    "ComplianceList": [
      {
        "Tags": "{\\\"\\\"hc\\\"\\\":[\\\"\\\"value2\\\"\\\"]}",
        "AccountId": "100931896542****",
        "AvailabilityZone": "cn-hangzhou-f",
        "ResourceType": "ACS::OSS::Bucket",
        "ResourceCreateTime": 1624961112000,
        "Region": "cn-hangzhou",
        "Configuration": "{\\\"Compliance\\\":{\\\"complianceType\\\":\\\"COMPLIANT\\\",\\\"count\\\":1},\\\"ConfigRuleList\\\":[{\\\"accountId\\\":100931896542****,\\\"configRuleId\\\":\\\"cr-9524626622af003d****\\\",\\\"configRuleArn\\\":\\\"acs:config::100931896542****:rule/cr-9524626622af003d****\\\",\\\"configRuleName\\\":\\\"OSS存储空间ACL禁止公共读写\\\",\\\"complianceType\\\":\\\"COMPLIANT\\\",\\\"riskLevel\\\":1,\\\"annotation\\\":\\\"\\\",\\\"invokingEventMessageType\\\":\\\"ScheduledNotification\\\"}]}",
        "CaptureTime": 1625200295276,
        "ConfigurationDiff": "{\\\"OSS存储空间ACL禁止公共读写\\\":[{\\\"accountId\\\":100931896542****,\\\"configRuleId\\\":\\\"cr-965f626622af003d****\\\",\\\"configRuleArn\\\":\\\"acs:config::100931896542****:rule/cr-965f626622af003d****\\\",\\\"configRuleName\\\":\\\"OSS存储空间ACL禁止公共读写\\\",\\\"complianceType\\\":\\\"COMPLIANT\\\",\\\"riskLevel\\\":1,\\\"annotation\\\":\\\"\\\",\\\"invokingEventMessageType\\\":\\\"ScheduledNotification\\\"},{}]}",
        "ResourceId": "new-bucket",
        "ResourceName": "new-bucket",
        "ResourceStatus": "null"
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

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/GetAggregateResourceComplianceTimeline#workbench-doc-change-demo) for a complete list.
