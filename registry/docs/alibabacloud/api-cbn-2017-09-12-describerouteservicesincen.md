Queries the configurations of Alibaba Cloud services that are configured in a Basic Edition transit router.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/DescribeRouteServicesInCen)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/DescribeRouteServicesInCen)

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

cen:DescribeRouteServicesInCen

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

The ID of the Cloud Enterprise Network (CEN) instance.

cen-pfa6ugf3xl0qsd\*\*\*\*

Host

string

No

The endpoint of the Alibaba Cloud service.

The endpoint can be a domain name, an IP address, or a CIDR block.

100.118.28.0/24

HostRegionId

string

No

The ID of the region where the Alibaba Cloud service is deployed.

Call the [DescribeChildInstanceRegions](/help/en/cen/developer-reference/api-8a8d23) operation to obtain the region ID.

cn-hangzhou

AccessRegionId

string

No

The ID of the region where the cloud service is accessed.

cn-hangzhou

HostVpcId

string

No

The ID of the VPC that is associated with the Alibaba Cloud service.

vpc-bp1h8vbrbcgohcju5\*\*\*\*

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The response.

PageSize

integer

The number of entries returned per page.

10

RequestId

string

The request ID.

196C99CA-6997-5951-9721-AE89720DF856

PageNumber

integer

The page number.

1

TotalCount

integer

The total number of entries returned.

2

RouteServiceEntries

object

RouteServiceEntry

array<object>

A list of Alibaba Cloud services.

object

The configuration of the Alibaba Cloud service.

Status

string

The status of the Alibaba Cloud service.

-   **Creating**: The service is being created.
    
-   **Active**: The service is available.
    
-   **Deleting**: The service is being deleted.
    

Active

Host

string

The endpoint of the Alibaba Cloud service.

100.118.28.0/24

Description

string

The description of the Alibaba Cloud service.

descname

HostVpcId

string

The ID of the VPC that is associated with the Alibaba Cloud service.

vpc-bp1h8vbrbcgohcju5\*\*\*\*

CenId

string

The ID of the CEN instance.

cen-pfa6ugf3xl0qsd\*\*\*\*

AccessRegionId

string

The ID of the region where the cloud service is accessed.

cn-hangzhou

HostRegionId

string

The ID of the region where the Alibaba Cloud service is deployed.

cn-hangzhou

Cidrs

object

Cidr

array

A list of endpoints for the Alibaba Cloud service.

string

The endpoint of the Alibaba Cloud service.

-   If the **Host** parameter is set to an IP address or a CIDR block, **Cidrs** is the IP address or CIDR block.
    
-   If the **Host** parameter is set to a domain name, **Cidrs** is the IP address resolved from the domain name.
    

100.118.28.0/24

## Examples

Success response

`JSON` format

```
{
  "PageSize": 10,
  "RequestId": "196C99CA-6997-5951-9721-AE89720DF856",
  "PageNumber": 1,
  "TotalCount": 2,
  "RouteServiceEntries": {
    "RouteServiceEntry": [
      {
        "Status": "Active",
        "Host": "100.118.28.0/24",
        "Description": "descname",
        "HostVpcId": "vpc-bp1h8vbrbcgohcju5****",
        "CenId": "cen-pfa6ugf3xl0qsd****",
        "AccessRegionId": "cn-hangzhou",
        "HostRegionId": "cn-hangzhou",
        "Cidrs": {
          "Cidr": [
            "100.118.28.0/24"
          ]
        }
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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/DescribeRouteServicesInCen#workbench-doc-change-demo) for a complete list.
