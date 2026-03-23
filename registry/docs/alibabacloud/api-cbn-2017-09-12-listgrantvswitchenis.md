You can call the ListGrantVSwitchEnis operation to query which elastic network interfaces (ENIs) in a virtual private cloud (VPC) can serve as multicast sources or members.

## Operation description

Before you call the `ListGrantVSwitchEnis` operation, make sure that the VPC is connected to a Cloud Enterprise Network (CEN) instance. For more information, see [CreateTransitRouterVpcAttachment](/help/en/cen/developer-reference/api-createtransitroutervpcattachment).

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListGrantVSwitchEnis)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListGrantVSwitchEnis)

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

cen:ListGrantVSwitchEnis

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

CenId

string

Yes

The ID of the CEN instance to which the VPC is connected.

cen-a7syd349kne38g\*\*\*\*

VpcId

string

Yes

The ID of the VPC.

vpc-p0w9alkte4w2htrqe\*\*\*\*

VSwitchId

string

Yes

The ID of a vSwitch in the VPC.

You can query information about the ENIs in only one vSwitch at a time.

vsw-p0w9s2ig1jnwgrbzl\*\*\*\*

NextToken

string

No

The token that is used for the next query. Valid values:

-   If this is your first query, you do not need to specify this parameter.
    
-   If a next query is to be sent, set the value to the NextToken value that was returned from the last call.
    

AAAAAdDWBF2\*\*\*\*

MaxResults

integer

No

The maximum number of entries to return on each page. Valid values: 10 to 500.

Default value:

-   If you do not specify this parameter, the default value is 20.
    
-   If you specify a value greater than 500, the default value is 500.
    

20

NetworkInterfaceId

array

No

The ID of the ENI.

string

No

The ID of the ENI.

The system supports only ENIs that are associated with Elastic Compute Service (ECS) instances as multicast sources. The system sends multicast traffic to multicast groups from the primary private IP address of the ENI.

eni-wz9a2sgsskvw69v2\*\*\*\*

NetworkInterfaceName

string

No

The name of the ENI.

test-eni-name

PrimaryIpAddress

string

No

The primary private IPv4 address of the ENI.

192.168.XX.XX

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

DBFE1736-2F33-5309-9954-875B11E9519D

TotalCount

string

The total number of entries.

**Important**

This parameter is invalid if you use MaxResults and NextToken to perform a paged query.

6

GrantVSwitchEnis

array<object>

A list of ENI information.

object

The information about the ENI.

VpcId

string

The ID of the VPC.

vpc-p0w9alkte4w2htrqe\*\*\*\*

VSwitchId

string

The ID of the vSwitch.

vsw-p0w9s2ig1jnwgrbzl\*\*\*\*

NetworkInterfaceId

string

The ID of the ENI.

eni-p0w172vv82kxzb49\*\*\*\*

Description

string

The description of the ENI.

created by CBN

TransitRouterFlag

boolean

Indicates whether the ENI is created by a transit router.

-   **true**: The ENI is created by a transit router.
    
-   **false**: The ENI is not created by a transit router.
    

ENIs created by transit routers cannot be used as multicast sources or members.

false

NetworkInterfaceName

string

The name of the ENI.

my-eni-name

PrimaryIpAddress

string

The primary private IPv4 address of the ENI.

192.168.XX.XX

NextToken

string

The token that is used for the next query.

AAAAAdDWBF2\*\*\*\*

MaxResults

integer

The maximum number of entries returned.

20

## Examples

Success response

`JSON` format

```
{
  "RequestId": "DBFE1736-2F33-5309-9954-875B11E9519D",
  "TotalCount": "6",
  "GrantVSwitchEnis": [
    {
      "VpcId": "vpc-p0w9alkte4w2htrqe****",
      "VSwitchId": "vsw-p0w9s2ig1jnwgrbzl****",
      "NetworkInterfaceId": "eni-p0w172vv82kxzb49****",
      "Description": "created by CBN",
      "TransitRouterFlag": false,
      "NetworkInterfaceName": "my-eni-name",
      "PrimaryIpAddress": "192.168.XX.XX"
    }
  ],
  "NextToken": "AAAAAdDWBF2****",
  "MaxResults": 20
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidCenId.NotFound

The specified CenId is not found.

The error message returned because the specified CEN instance ID does not exist.

400

InvalidVpcId.NotFound

The specified VpcId is not found.

The error message returned because the specified VPC ID (VpcId) is invalid.

400

InvalidOperation.MulticastDomainAssociationNotExist

Operation is invalid because multicast association domain association not exist.

The error message returned because this operation is not supported when the specified multicast domain is not associated with the specified resource.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/ListGrantVSwitchEnis#workbench-doc-change-demo) for a complete list.
