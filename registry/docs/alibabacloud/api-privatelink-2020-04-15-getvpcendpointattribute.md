Queries the attributes of a specified endpoint.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Privatelink/2020-04-15/GetVpcEndpointAttribute)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Privatelink/2020-04-15/GetVpcEndpointAttribute)

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

privatelink:GetVpcEndpointAttribute

get

\*VpcEndpoint

`acs:privatelink:{#regionId}:{#accountId}:vpcendpoint/{#EndpointId}`

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

The ID of the region where the endpoint is located.

You can call the [DescribeRegions](/help/en/vpc/developer-reference/api-vpc-2016-04-28-describeregions) operation to obtain the region ID.

cn-huhehaote

EndpointId

string

Yes

The ID of the endpoint.

ep-hp33b2e43fays7s8\*\*\*\*

RegionId

string

Yes

The ID of the region where the endpoint is located.

You can call the [DescribeRegions](/help/en/vpc/developer-reference/api-vpc-2016-04-28-describeregions) operation to obtain the region ID.

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

EndpointDomain

string

The domain name of the endpoint.

ep-hp33b2e43fays7s8\*\*\*\*.epsrv-hp3xdsq46ael67lo\*\*\*\*.cn-huhehaote.privatelink.aliyuncs.com

RequestId

string

The request ID.

8D8992C1-6712-423C-BAC5-E5E817484C6B

CreateTime

string

The time when the endpoint was created.

2021-09-24T18:00:07Z

ResourceOwner

boolean

Indicates whether the endpoint and the endpoint service belong to the same Alibaba Cloud account. Valid values:

-   **true**
    
-   **false**
    

true

EndpointBusinessStatus

string

The business status of the endpoint. Valid values:

-   **Normal**: The endpoint is running as expected.
    
-   **FinancialLocked**: The endpoint is locked due to an overdue payment.
    

Normal

EndpointDescription

string

The description of the endpoint.

This is my Endpoint.

ServiceId

string

The ID of the endpoint service with which the endpoint is associated.

epsrv-hp3vpx8yqxblby3i\*\*\*\*

EndpointStatus

string

The status of the endpoint. Valid values:

-   **Creating**
    
-   **Active**
    
-   **Pending**
    
-   **Deleting**
    

Active

VpcId

string

The ID of the virtual private cloud (VPC) to which the endpoint belongs.

vpc-fdfhkjafhjvcvdjf\*\*\*\*

EndpointName

string

The name of the endpoint.

test

ZonePrivateIpAddressCount

integer

The number of private IP addresses of the elastic network interface (ENI) in each zone. The value is always **1**.

1

EndpointType

string

The type of the endpoint. Valid values:

-   **Interface**: an interface endpoint.
    
-   **Reverse**: a reverse endpoint.
    
-   **GatewayLoadBalancer**: a Gateway Load Balancer endpoint (GWLBe).
    

Interface

ServiceName

string

The name of the endpoint service with which the endpoint is associated.

com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3xdsq46ael67lo\*\*\*\*

Bandwidth

integer

The connection bandwidth of the endpoint. Unit: Mbps.

1024

EndpointId

string

The endpoint ID.

ep-hp33b2e43fays7s8\*\*\*\*

RegionId

string

The ID of the region to which the endpoint belongs.

cn-huhehaote

ConnectionStatus

string

The state of the endpoint connection. Valid values:

-   **Pending**
    
-   **Connecting**
    
-   **Connected**
    
-   **Disconnecting**
    
-   **Disconnected**
    
-   **Deleting**
    
-   **ServiceDeleted**
    

Connected

ZoneAffinityEnabled

boolean

Indicates whether the domain name of the endpoint service is resolved to the IP address of the endpoint in the nearest zone. Valid values:

-   **true**
    
-   **false**
    

true

ResourceGroupId

string

The resource group ID.

rg-acfmz7nocpei\*\*\*

PolicyDocument

string

The RAM access policy. For more information about policy elements, see [Basic elements of a policy](/help/en/ram/policy-elements).

{ "Version": "1", "Statement": \[ { "Effect": "Allow", "Action": \[ "oss:List\*", "oss:PutObject", "oss:GetObject" \], "Resource": \[ "acs:oss:oss-\*:\*:pvl-policy-test/policy-test.txt" \], "Principal": { "RAM": \[ "acs:ram::14199xxxxxx:\*" \] } } \] }

AddressIpVersion

string

The IP address version. Valid values:

-   **IPv4**
    
-   **DualStack**
    

IPv4

ServiceRegionId

string

CrossRegionBandwidth

integer

## Examples

Success response

`JSON` format

```
{
  "Payer": "Endpoint",
  "EndpointDomain": "ep-hp33b2e43fays7s8****.epsrv-hp3xdsq46ael67lo****.cn-huhehaote.privatelink.aliyuncs.com",
  "RequestId": "8D8992C1-6712-423C-BAC5-E5E817484C6B",
  "CreateTime": "2021-09-24T18:00:07Z",
  "ResourceOwner": true,
  "EndpointBusinessStatus": "Normal",
  "EndpointDescription": "This is my Endpoint.",
  "ServiceId": "epsrv-hp3vpx8yqxblby3i****",
  "EndpointStatus": "Active",
  "VpcId": "vpc-fdfhkjafhjvcvdjf****",
  "EndpointName": "test",
  "ZonePrivateIpAddressCount": 1,
  "EndpointType": "Interface",
  "ServiceName": "com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3xdsq46ael67lo****",
  "Bandwidth": 1024,
  "EndpointId": "ep-hp33b2e43fays7s8****",
  "RegionId": "cn-huhehaote",
  "ConnectionStatus": "Connected",
  "ZoneAffinityEnabled": true,
  "ResourceGroupId": "rg-acfmz7nocpei***",
  "PolicyDocument": "{\n  \"Version\": \"1\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"oss:List*\",\n        \"oss:PutObject\",\n        \"oss:GetObject\"\n      ],\n      \"Resource\": [\n        \"acs:oss:oss-*:*:pvl-policy-test/policy-test.txt\"\n      ],\n      \"Principal\": {\n        \"RAM\": [\n          \"acs:ram::14199xxxxxx:*\"\n        ]\n      }\n    }\n  ]\n}",
  "AddressIpVersion": "IPv4",
  "ServiceRegionId": "",
  "CrossRegionBandwidth": 0
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

EndpointNotFound

The specified Endpoint does not exist.

The specified Endpoint does not exist.

400

EndpointConnectionNotFound

The specified endpoint connection does not exist.

The specified endpoint connection does not exist.

See [Error Codes](https://api.alibabacloud.com/document/Privatelink/2020-04-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Privatelink/2020-04-15/GetVpcEndpointAttribute#workbench-doc-change-demo) for a complete list.
