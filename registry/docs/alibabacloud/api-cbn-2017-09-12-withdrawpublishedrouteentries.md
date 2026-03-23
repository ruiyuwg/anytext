You can call the WithdrawPublishedRouteEntries operation to revoke routes published from a Virtual Private Cloud (VPC) or Virtual Border Router (VBR) instance to Cloud Enterprise Network.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/WithdrawPublishedRouteEntries)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/WithdrawPublishedRouteEntries)

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

cen:WithdrawPublishedRouteEntries

update

\*CenInstance

`acs:cen:*:{#accountId}:ceninstance/{#ceninstanceId}`

\*VPC

`acs:vpc:*:{#accountId}:vpc/{#vpcId}`

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

The ID of the CEN instance.

cen-sxjfjkjfkjfiein\*\*\*\*

ChildInstanceId

string

Yes

The ID of the network instance.

vpc-rj9gt5nll27onu7\*\*\*\*

ChildInstanceType

string

Yes

The type of the network instance. Valid values:

-   **VPC**: virtual private cloud.
    
-   **VBR**: virtual border router.
    

VPC

ChildInstanceRegionId

string

Yes

The region ID of the network instance.

Call the [DescribeChildInstanceRegions](/help/en/cen/developer-reference/api-8a8d23) operation to obtain the region ID.

cn-hangzhou

ChildInstanceRouteTableId

string

Yes

The route table ID of the network instance.

vtb-bp174d1gje79u1g4t\*\*\*\*

DestinationCidrBlock

string

Yes

The destination CIDR block of the route entry that you want to withdraw.

172.XX.XX.0/24

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

FBDB18D8-E91E-4978-8D6C-6E2E3EE10133

## Examples

Success response

`JSON` format

```
{
  "RequestId": "FBDB18D8-E91E-4978-8D6C-6E2E3EE10133"
}
```

Error response

`JSON` format

```
{
    "RequestId": "FBDB18D8-E91E-4978-8D6C-6E2E3EE10133"
}

```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidOperation.UnsupportnexthopType

The specified next hop type is not supported by this operation.

The specified next hop type is not supported by this operation.

400

InvalidOperation.NotFoundRoute

You cannot query the system routing information of the specified instance.

400

ParameterIllegal.CenInstanceId

The parameter of CEN instance id is illegal.

400

ParameterIllegal.ChildInstanceRegionId

The parameter of child instance region id is illegal.

400

ParameterIllegal.ChildInstanceType

The parameter of child instance type is illegal.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

404

Instance.NotExist

The instance is not exist.

The error message returned because the specified instance does not exist.

409

InvalidOperation.ChildInstanceStatus

The child-instance is not in a valid state for the operation.

409

InvalidOperation.CenInstanceStatus

The CEN instance is not in a valid state for the operation.

The error message returned because the status of the CEN instance does not support this operation.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/WithdrawPublishedRouteEntries#workbench-doc-change-demo) for a complete list.
