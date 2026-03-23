Queries the zones that are available for an Enterprise Edition transit router in a specified region.

## Operation description

-   You can call the **ListTransitRouterAvailableResource** operation to query regular zones or zones that support the multicast feature for an Enterprise Edition transit router in a specified region.
    -   If you do not set the **SupportMulticast** parameter to **true**, the system queries only the regular zones supported by the Enterprise Edition transit router.
        
    -   If you set the **SupportMulticast** parameter to **true**, the system queries only the zones that support the multicast feature for the Enterprise Edition transit router.
        
-   On May 31, 2022, Cloud Enterprise Network (CEN) upgraded the connection pattern for Enterprise Edition transit routers and Virtual Private Clouds (VPCs). After the upgrade, you do not need to specify a primary and a secondary zone when you connect an Enterprise Edition transit router to a VPC instance. Instead, you can specify one or more zones.
    -   If your Enterprise Edition transit router has not been upgraded, you must specify a primary and a secondary zone when you connect the transit router to a VPC instance. After you call the **ListTransitRouterAvailableResource** operation, you can retrieve information about the primary and secondary zones from the **MasterZones** and **SlaveZones** parameters.
        
    -   If your Enterprise Edition transit router has been upgraded, you can specify any zone when you connect the transit router to a VPC instance. After you call the **ListTransitRouterAvailableResource** operation, you can retrieve information about the supported zones from the **AvailableZones** parameter.
        

For more information about the upgrade for Enterprise Edition transit routers, see [Upgrade of the VPC connection pattern for Enterprise Edition transit routers](/help/en/cen/product-overview/announcement-optimization-on-vpc-connected-enterprise-edition-transit-routers).

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListTransitRouterAvailableResource)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListTransitRouterAvailableResource)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

Yes

The ID of the region where the Enterprise Edition transit router is deployed.

Call the [DescribeChildInstanceRegions](/help/en/cen/developer-reference/api-8a8d23) operation to obtain region IDs.

cn-hangzhou

SupportMulticast

boolean

No

Specifies whether to query only information about zones that support the multicast feature.

-   **true**: Yes.
    
    If you enable this feature and the **ListTransitRouterAvailableResource** operation returns an empty response, it indicates that Enterprise Edition transit routers in the current region do not support the multicast feature.
    
-   **false** (default): No.
    

false

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The response.

RequestId

string

The request ID.

B4F480E0-4E76-5E43-9966-8322C28A158A

SlaveZones

array

A list of secondary zone IDs.

string

The ID of a secondary zone.

Call the [DescribeZones](/help/en/vpc/api-describezones) operation to query information about the zone.

cn-hangzhou-h

MasterZones

array

A list of primary zone IDs.

string

The ID of a primary zone.

cn-hangzhou-h

AvailableZones

array

A list of available zone IDs.

string

The ID of an available zone.

cn-hangzhou-i

SupportMulticast

boolean

Indicates whether the returned zones support the multicast feature.

false

## Examples

Success response

`JSON` format

```
{
  "RequestId": "B4F480E0-4E76-5E43-9966-8322C28A158A",
  "SlaveZones": [
    "cn-hangzhou-h"
  ],
  "MasterZones": [
    "cn-hangzhou-h"
  ],
  "AvailableZones": [
    "cn-hangzhou-i"
  ],
  "SupportMulticast": false
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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/ListTransitRouterAvailableResource#workbench-doc-change-demo) for a complete list.
