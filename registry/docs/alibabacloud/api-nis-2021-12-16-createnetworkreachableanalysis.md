Creates a task for analyzing network reachability.

## Operation description

-   The **CreateNetworkReachableAnalysis** operation is used to create a task for analyzing the reachability of the network path that is created by calling the **CreateNetworkPath** operation and record the analysis results.
    
-   The **CreateNetworkReachableAnalysis** operation can be called to repeatedly analyze the reachability of a network path.
    
-   You can create up to 1,000 reachability analysis records within one Alibaba Cloud account.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/nis/2021-12-16/CreateNetworkReachableAnalysis)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/nis/2021-12-16/CreateNetworkReachableAnalysis)

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

nis:CreateNetworkReachableAnalysis

create

\*NetworkReachableAnalysis

`acs:nis:*:{#accountId}:networkreachableanalysis/*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

No

The ID of the region for which you want to create a task for analyzing network reachability.

cn-shanghai

NetworkPathId

string

Yes

The ID of the network path. You can call the [CreateNetworkPath](/help/en/nis/developer-reference/api-nis-2021-12-16-createnetworkpath) operation to obtain the ID of the network path.

np-b2f618ceb2c84057\*\*\*\*

Tag

array<object>

No

The tags to add to the resource.

object

No

The information of the tag.

Key

string

No

The key of the tag to add to the resource. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.

You can add up to 20 tags in each call.

Team

Value

string

No

The value of the tag to add to the resource. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `acs:` or `aliyun`. The tag value can be an empty string.

You can add up to 20 tag values in each call.

ops

## Response elements

**Element**

**Type**

**Description**

**Example**

object

NetworkReachableAnalysisId

string

The ID of the task for analyzing network reachability.

nra-2fede05617494417\*\*\*\*

RequestId

string

The request ID.

A7F0D6EC-E19E-58AC-AC9F-08036763960F

## Examples

Success response

`JSON` format

```
{
  "NetworkReachableAnalysisId": "nra-2fede05617494417****",
  "RequestId": "A7F0D6EC-E19E-58AC-AC9F-08036763960F"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

IncorrectStatus.NetworkPath

The last analysis status of %s is %s. Please try again later.

The Reachability Analyzer task %s is not completed. Try again after the task is completed.

400

QuotaExceeded.ParallelNraLimit

The maximum number of parallel reachability analysis task is exceeded.

The number of parallel Reachability Analyzer tasks exceeds the upper limit.

400

QuotaExceeded.MaxNraCount

The maximum number of reachability analysis task is exceeded.

The number of saved Reachability Analyzer tasks exceeds the upper limit.

400

IllegalParam.ZoneId

The specified available zone (%s) is invalid.

The specified zone (%s) is invalid.

400

IllegalParam.StepMinutes

The specified sampling interval (%s) is invalid.

The specified sampling interval (%s) is invalid.

400

IllegalParam.BeginTime

The specified begin time (%s) is invalid.

The specified start time (%s) is invalid.

400

IllegalParam.EndTime

The specified end time (%s) is invalid.

The specified end time (%s) is invalid.

400

Mismatch.BeginTimeAndEndTime

The specified begin time must be earlier than the end time.

The specified start time must be earlier than the end time.

400

MissingParameter.TagValue

You must specify Tag.N.Value.

400

NumberExceed.Tags

The maximum number of Tags is exceeded.

400

MissingParameter.TagKey

You must specify Tag.N.Key.

400

Duplicate.TagKey

The Tag.N.Key contains duplicate keys.

400

InvalidParameter.TagKey

The Tag.N.Key parameter is invalid.

400

InvalidParameter.TagValue

The Tag.N.Value parameter is invalid.

404

ResourceNotFound.NetworkPath

The specified resource of %s is not found.

See [Error Codes](https://api.alibabacloud.com/document/nis/2021-12-16/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/nis/2021-12-16/CreateNetworkReachableAnalysis#workbench-doc-change-demo) for a complete list.
