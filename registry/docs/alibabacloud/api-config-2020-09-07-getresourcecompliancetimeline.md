Queries the compliance evaluation history of a specified resource. The history is a set of compliance evaluation records that contain the timestamp and details of each evaluation.

## Operation description

In Cloud Config, each resource has its own compliance evaluation history. A compliance evaluation record is generated when a rule is triggered to evaluate a resource. The collection of these records forms the compliance evaluation history of the resource. Rules can be triggered by configuration changes, periodic execution, or manual execution.

This topic provides an example of how to query the compliance evaluation history of the resource `new-bucket`, which is an Object Storage Service (OSS) bucket in the `cn-hangzhou` region. The returned result shows that the compliance evaluation history of the resource includes records with the timestamps `1625200295276` (UTC+8: 2021-07-02 12:31:35) and `1625200228510` (UTC+8: 2021-07-02 12:30:28).

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/GetResourceComplianceTimeline)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/GetResourceComplianceTimeline)

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

config:GetResourceComplianceTimeline

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

ResourceType

string

Yes

The resource type.

For more information about how to obtain the resource type, see [ListDiscoveredResources](/help/en/cloud-config/latest/listdiscoveredresources).

ACS::OSS::Bucket

ResourceId

string

Yes

The resource ID.

For more information about how to obtain the resource ID, see [ListDiscoveredResources](/help/en/cloud-config/latest/listdiscoveredresources).

new-bucket

StartTime

integer

No

The start timestamp. If you do not set this parameter, the system queries data from the last 30 days. Unit: milliseconds.

1623211156000

EndTime

integer

No

The end timestamp. If you do not set this parameter, the system queries data generated up to the time of the API call. Unit: milliseconds.

1625821156000

MaxResults

integer

No

The maximum number of entries to return on a single page. Valid values: 1 to 100.

10

Region

string

Yes

The region ID.

cn-hangzhou

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. If the return value is truncated, use this token to initiate another request to retrieve the remaining entries.

IWBjqMYSy0is7zSMGu16\*\*\*\*

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

8D53A78F-1EB8-4264-A554-72F07E34FAE6

ResourceComplianceTimeline

object

The compliance evaluation history of the resource.

NextToken

string

The token that you use to retrieve the next page of results.

5OVS5J4I1/UKTkHV5oNs\*\*\*\*

MaxResults

integer

The maximum number of entries returned per page.

10

ComplianceList

array<object>

The list of compliance evaluation history records.

object

Tags

string

The resource tags.

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

The region ID.

cn-hangzhou

Configuration

string

The list of rules associated with the resource and the compliance details of the rules.

{\\"Compliance\\":{\\"complianceType\\":\\"COMPLIANT\\",\\"count\\":1},\\"ConfigRuleList\\":\[{\\"accountId\\":100931896542\*\*\*\*,\\"configRuleId\\":\\"cr-9524626622af003d\*\*\*\*\\",\\"configRuleArn\\":\\"acs:config::100931896542\*\*\*\*:rule/cr-9524626622af003d\*\*\*\*\\",\\"configRuleName\\":\\"OSS存储空间ACL禁止公共读写\\",\\"complianceType\\":\\"COMPLIANT\\",\\"riskLevel\\":1,\\"annotation\\":\\"\\",\\"invokingEventMessageType\\":\\"ScheduledNotification\\"}\]}

CaptureTime

integer

The timestamp when the compliance evaluation of the resource was recorded. Unit: milliseconds.

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

The resource status. The resource status is defined by each Alibaba Cloud service. This parameter can be empty. For example:

-   If the resource type is \`ACS::ECS::Instance\`, this parameter can be \`Running\` or \`Stopped\` because ECS instances are stateful.
    
-   If the resource type is \`ACS::OSS::Bucket\`, this parameter is empty because OSS buckets are stateless.
    

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

404

AccountNotExisted

Your account does not exist.

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The request has failed due to a temporary failure of the server.

See [Error Codes](https://api.alibabacloud.com/document/Config/2020-09-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/GetResourceComplianceTimeline#workbench-doc-change-demo) for a complete list.
