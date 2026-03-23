Queries the PrivateZone service configurations of a Cloud Enterprise Network (CEN) instance.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/DescribeCenPrivateZoneRoutes)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/DescribeCenPrivateZoneRoutes)

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

cen:DescribeCenPrivateZoneRoutes

get

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

PageNumber

integer

No

The page number. The default value is **1**.

1

PageSize

integer

No

The number of entries to return on each page. The default value is **10**. Valid values: **1** to **50**.

10

CenId

string

Yes

The ID of the CEN instance.

cen-7qthudw0ll6jmc\*\*\*\*

AccessRegionId

string

No

The ID of the region where you access the PrivateZone service.

You can call the [DescribeChildInstanceRegions](/help/en/cen/developer-reference/api-8a8d23) operation to query region IDs.

cn-hangzhou

HostRegionId

string

No

The ID of the region where the PrivateZone service is deployed.

cn-hangzhou

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

461EC1B5-04A8-4706-8764-8F5BCEF48A6F

PrivateZoneDnsServers

string

The IP addresses of the DNS servers for the PrivateZone service.

100.100.XX.XX/32,100.100.XX.XX/32

CenId

string

The ID of the CEN instance.

cen-7qthudw0ll6jmc\*\*\*\*

PageNumber

integer

The page number.

1

PageSize

integer

The number of entries returned per page.

10

TotalCount

integer

The total number of entries.

2

PrivateZoneInfos

object

PrivateZoneInfo

array<object>

The detailed configurations of the PrivateZone service.

object

Status

string

The status of the PrivateZone service.

-   **Creating**: The service is being created.
    
-   **Active**: The service is active.
    
-   **Deleting**: The service is being deleted.
    

Active

AccessRegionId

string

The ID of the region where you access the PrivateZone service.

cn-hangzhou

HostRegionId

string

The ID of the region where the PrivateZone service is deployed.

cn-hangzhou

HostVpcId

string

The ID of the VPC that is associated with the PrivateZone service.

vpc-bp18sth14qii3pnvo\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "461EC1B5-04A8-4706-8764-8F5BCEF48A6F",
  "PrivateZoneDnsServers": "100.100.XX.XX/32,100.100.XX.XX/32",
  "CenId": "cen-7qthudw0ll6jmc****\t",
  "PageNumber": 1,
  "PageSize": 10,
  "TotalCount": 2,
  "PrivateZoneInfos": {
    "PrivateZoneInfo": [
      {
        "Status": "Active",
        "AccessRegionId": "cn-hangzhou",
        "HostRegionId": "cn-hangzhou",
        "HostVpcId": "vpc-bp18sth14qii3pnvo****"
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

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/DescribeCenPrivateZoneRoutes#workbench-doc-change-demo) for a complete list.
