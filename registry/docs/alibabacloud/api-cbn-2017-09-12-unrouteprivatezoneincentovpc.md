Deletes a connection to PrivateZone.

## Operation description

The **UnroutePrivateZoneInCenToVpc** operation is asynchronous. The system returns a **RequestId**, while the system runs the deletion task in the background. Call the **DescribeCenPrivateZoneRoutes** operation to query the PrivateZone status.

-   The **Deleting** state indicates the PrivateZone connection is being deleted. You can only perform the query operation.
    
-   When the specified PrivateZone connection is not found, it has been deleted.
    

If the PrivateZone connection has an access region that is a Cloud Connect Network (CCN) region, you must first delete the PrivateZone connection for the CCN region before you delete the PrivateZone connections for other regions.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/UnroutePrivateZoneInCenToVpc)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/UnroutePrivateZoneInCenToVpc)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that support authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

cen:UnroutePrivateZoneInCenToVpc

delete

\*CenInstance

`acs:cen:*:{#accountId}:ceninstance/{#ceninstanceId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

CenId

string

Yes

The ID of the Cloud Enterprise Network (CEN) instance.

cen-7qthudw0ll6jmc\*\*\*\*

AccessRegionId

string

Yes

The ID of the region where the PrivateZone connection is accessed.

Call the [DescribeChildInstanceRegions](/help/en/cen/developer-reference/api-8a8d23) operation to get the region ID.

cn-hangzhou

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

C0245BEF-52AC-44A8-A776-EF96FD26A5CA

## Examples

Success response

`JSON` format

```
{
  "RequestId": "C0245BEF-52AC-44A8-A776-EF96FD26A5CA"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

409

InvalidOperation.PrivatezoneRouteExisted

Privatezone routes already existed.

The error message returned because the PrivateZone route already exists.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/UnroutePrivateZoneInCenToVpc#workbench-doc-change-demo) for a complete list.
