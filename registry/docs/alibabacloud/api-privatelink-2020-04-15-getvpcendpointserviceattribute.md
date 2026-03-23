Call the GetVpcEndpointServiceAttribute operation to retrieve the properties of an endpoint service.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Privatelink/2020-04-15/GetVpcEndpointServiceAttribute)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Privatelink/2020-04-15/GetVpcEndpointServiceAttribute)

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

privatelink:GetVpcEndpointServiceAttribute

get

\*VpcEndpointService

`acs:privatelink:{#regionId}:{#accountId}:vpcendpointservice/{#ServiceId}`

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

Yes

The region ID of the endpoint service.

Call the [DescribeRegions](/help/en/privatelink/api-describeregions) operation to obtain a region ID.

cn-huhehaote

ServiceId

string

Yes

The ID of the endpoint service.

epsrv-hp3vpx8yqxblby3i\*\*\*\*

RegionId

string

Yes

The region ID of the endpoint service.

Call the [DescribeRegions](/help/en/privatelink/api-describeregions) operation to obtain a region ID.

cn-huhehaote

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Payer

string

The payer. Valid values:

-   **Endpoint**: the service consumer.
    
-   **EndpointService**: the service provider.
    

Endpoint

RequestId

string

The request ID.

8D8992C1-6712-423C-BAC5-E5E817484C6B

ServiceDescription

string

The description of the endpoint service.

This is my EndpointService.

CreateTime

string

The time when the endpoint service was created.

2020-01-02T19:11:12Z

MaxBandwidth

integer

The maximum bandwidth of the endpoint connection. Unit: Mbps.

1024

MinBandwidth

integer

The minimum bandwidth of the endpoint connection. Unit: Mbps.

100

ServiceDomain

string

The domain name of the endpoint service.

epsrv-hp3vpx8yqxblby3i\*\*\*\*.cn-huhehaote.privatelink.aliyuncs.com

AutoAcceptEnabled

boolean

Indicates whether to automatically accept endpoint connections. Valid values:

-   **true**: Endpoint connections are automatically accepted.
    
-   **false**: Endpoint connections are not automatically accepted.
    

true

ZoneAffinityEnabled

boolean

Indicates whether to enable zone affinity. Valid values:

-   **true** (default): Yes.
    
-   **false**: No.
    

true

ServiceId

string

The ID of the endpoint service.

epsrv-hp3vpx8yqxblby3i\*\*\*\*

Zones

array

The zones where the service resources are available.

string

The zone where the service resource is available.

cn-huhehaote-b

ServiceBusinessStatus

string

The business status of the endpoint service. Valid values:

-   **Normal**: The endpoint service is running as expected.
    
-   **FinancialLocked**: The endpoint service is locked due to an overdue payment.
    

Normal

ServiceName

string

The name of the endpoint service.

com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3vpx8yqxblby3i\*\*\*\*

ServiceStatus

string

The status of the endpoint service. Valid values:

-   **Creating**
    
-   **Pending**
    
-   **Active**
    
-   **Deleting**
    

Active

ConnectBandwidth

integer

The default maximum bandwidth of the endpoint connection. Unit: Mbps. Valid values: 100 to **10240**.

3072

RegionId

string

The region where the endpoint service is deployed.

cn-huhehaote

ServiceType

string

The endpoint type.

-   **Interface**: an interface endpoint. You can add Classic Load Balancer (CLB), Application Load Balancer (ALB), and Network Load Balancer (NLB) instances as service resources.
    
-   **GatewayLoadBalancer**: a Gateway Load Balancer endpoint. You can add Gateway Load Balancer (GWLB) instances as service resources.
    

Interface

ServiceResourceType

string

The type of the service resource. Valid values:

-   **slb**: The service resource is a Classic Load Balancer (CLB) instance.
    
-   **alb**: The service resource is an Application Load Balancer (ALB) instance.
    
-   **nlb**: The service resource is a Network Load Balancer (NLB) instance.
    
-   **gwlb**: The service resource is a Gateway Load Balancer (GWLB) instance.
    

slb

ServiceSupportIPv6 `deprecated`

boolean

Indicates whether the endpoint service supports IPv6. Valid values:

-   **true**: Yes.
    
-   **false** (default): No.
    

false

ResourceGroupId

string

The ID of the resource group.

rg-acfmy\*\*\*\*\*

AddressIpVersion

string

The IP address version. Valid values:

-   **IPv4**
    
-   **DualStack**
    

IPv4

SupportedRegionSet

array<object>

object

ServiceRegionId `deprecated`

string

RegionServiceStatus

string

RegionBusinessStatus

string

SupportedRegionId

string

## Examples

Success response

`JSON` format

```
{
  "Payer": "Endpoint",
  "RequestId": "8D8992C1-6712-423C-BAC5-E5E817484C6B",
  "ServiceDescription": "This is my EndpointService.",
  "CreateTime": "2020-01-02T19:11:12Z",
  "MaxBandwidth": 1024,
  "MinBandwidth": 100,
  "ServiceDomain": "epsrv-hp3vpx8yqxblby3i****.cn-huhehaote.privatelink.aliyuncs.com",
  "AutoAcceptEnabled": true,
  "ZoneAffinityEnabled": true,
  "ServiceId": "epsrv-hp3vpx8yqxblby3i****",
  "Zones": [
    "cn-huhehaote-b"
  ],
  "ServiceBusinessStatus": "Normal",
  "ServiceName": "com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3vpx8yqxblby3i****",
  "ServiceStatus": "Active",
  "ConnectBandwidth": 3072,
  "RegionId": "cn-huhehaote",
  "ServiceType": "Interface",
  "ServiceResourceType": "slb",
  "ServiceSupportIPv6": false,
  "ResourceGroupId": "rg-acfmy*****",
  "AddressIpVersion": "IPv4",
  "SupportedRegionSet": [
    {
      "ServiceRegionId": "",
      "RegionServiceStatus": "",
      "RegionBusinessStatus": "",
      "SupportedRegionId": ""
    }
  ]
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

EndpointServiceNotFound

The specified Service does not exist.

The specified Service does not exist.

See [Error Codes](https://api.alibabacloud.com/document/Privatelink/2020-04-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Privatelink/2020-04-15/GetVpcEndpointServiceAttribute#workbench-doc-change-demo) for a complete list.
