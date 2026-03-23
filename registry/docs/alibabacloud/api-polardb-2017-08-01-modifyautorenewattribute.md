Sets the auto-renewal status for a subscription PolarDB cluster.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyAutoRenewAttribute)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyAutoRenewAttribute)

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

polardb:ModifyAutoRenewAttribute

update

\*dbcluster

`acs:polardb:{#regionId}:{#accountId}:dbcluster/{#dbclusterId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DBClusterIds

string

Yes

The ID of the database cluster.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

RegionId

string

Yes

The region ID. The ID cannot be more than 50 characters long.

**Note**

Call the [DescribeRegions](/help/en/polardb/api-polardb-2017-08-01-describeregions) operation to query available regions.

cn-hangzhou

RenewalStatus

string

No

The auto-renewal status. Valid values:

-   **AutoRenewal**: Enables auto-renewal.
    
-   **Normal**: Enables manual renewal.
    
-   **NotRenewal**: Does not renew the cluster after it expires.
    

Default value: **AutoRenewal**.

**Note**

If you set this parameter to **NotRenewal**, the system stops sending expiration notifications. The system sends only a non-renewal notification three days before the expiration date.

AutoRenewal

Duration

string

No

The auto-renewal period. Valid values:

-   If **PeriodUnit** is set to **Month**, valid values are `[1,2,3,6,12]`.
    
-   If **PeriodUnit** is set to **Year**, valid values are `[1-3]`.
    

Default value: **1**.

1

PeriodUnit

string

No

The unit of the renewal period. Valid values:

-   **Year**
    
-   **Month**
    

Default value: **Month**.

Month

ResourceGroupId

string

No

The ID of the resource group.

rg-\*\*\*\*\*\*\*\*\*\*\*\*

CloudProvider

string

No

ENS

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

4CE6DF97-AEA4-484F-906F-C407EE\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "4CE6DF97-AEA4-484F-906F-C407EE******"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidRenewalStatus.Malformed

The specified parameter RenewalStatus is not valid.

The specified RenewalStatus parameter is invalid.

400

InvalidPeriodUnit.Malformed

The specified parameter PeriodUnit is not valid.

The specified PeriodUnit parameter is invalid.

400

InvalidDuration.Malformed

The specified parameter Duration is not valid.

The specified Duration parameter is invalid.

403

OperationDenied.DBClusterPayType

The operation is not permitted due to the pay type of cluster.

This operation is not supported by the billing method of the cluster.

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

The specified DBClusterId parameter is invalid.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/ModifyAutoRenewAttribute#workbench-doc-change-demo) for a complete list.
