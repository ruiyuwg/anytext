Deletes a task for analyzing network reachability.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/nis/2021-12-16/DeleteNetworkReachableAnalysis)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/nis/2021-12-16/DeleteNetworkReachableAnalysis)

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

nis:DeleteNetworkReachableAnalysis

delete

\*NetworkReachableAnalysis

`acs:nis:*:{#accountId}:networkreachableanalysis/{#NetworkReachableAnalysisId}`

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

The ID of the region for which you want to delete a task for analyzing network reachability.

cn-shanghai

NetworkReachableAnalysisIds

array

Yes

The IDs of the tasks for analyzing network reachability.

string

No

The ID of the task for analyzing network reachability. You can call the [CreateNetworkReachableAnalysis](/help/en/nis/developer-reference/api-nis-2021-12-16-createnetworkreachableanalysis) operation to obtain the ID of the task for analyzing network reachability.

\[\\"nra-be3cff6bed3049f5\*\*\*\*\\"\]

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

4838F3F2-30E1-5D82-B25A-B9FE33BC3E25

Data

boolean

Result of operation.

-   **true**: Delete Success.
    
-   **false**: Delete Fail.
    

true

## Examples

Success response

`JSON` format

```
{
  "RequestId": "4838F3F2-30E1-5D82-B25A-B9FE33BC3E25",
  "Data": true
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

IllegalParam.DiskCategory

The specified disk category (%s) is invalid.

The specified disk category (%s) is invalid.

400

SizeExceeds.Zones

The length of the specified available zones exceeds the limit.

The specified number of zones exceeds the upper limit.

400

SizeExceeds.DiskCategories

The length of the specified disk categories exceeds the limit.

The specified number of disk categories exceeds the upper limit.

400

OperationDenied.ZonesConflict

The specified available zones do not belong to the same region.

The specified zones do not belong to the same region.

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

IllegalParam.NetworkReachableAnalysisId

The parameter (%s) cannot be empty.

The parameter (%s) cannot be empty.

403

Forbidden.NetworkReachableAnalysisId

The user does not have permission on the instance parameter (%s).

The user does not have permission to the resource (%s).

404

ResourceNotFound.NetworkReachableAnalysisId

The instance resource (%s) does not exist.

The resource (%s) does not exist.

See [Error Codes](https://api.alibabacloud.com/document/nis/2021-12-16/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/nis/2021-12-16/DeleteNetworkReachableAnalysis#workbench-doc-change-demo) for a complete list.
