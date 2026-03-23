Re-advertises an aggregate route.

## Operation description

For aggregate routes that failed to be advertised or were partially advertised, fix the route issue and call the **RefreshTransitRouteTableAggregation** operation to re-advertise the aggregate routes to virtual private clouds (VPCs). If you use the following solutions, the aggregate route is automatically advertised without manual operations:

-   Delete associated forwarding correlations
    
-   Disable route synchronization
    
-   Delete the VPC route table
    
-   Delete the aggregate route
    

You can call the **DescribeTransitRouteTableAggregationDetail** operation to view the advertisement status of the aggregate route.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/RefreshTransitRouteTableAggregation)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/RefreshTransitRouteTableAggregation)

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

cen:RefreshTransitRouteTableAggregation

update

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

TransitRouteTableId

string

Yes

The route table ID of the Enterprise Edition transit router.

vtb-iq8qgruq1ry8jc7vt\*\*\*\*

TransitRouteTableAggregationCidr

string

Yes

The destination CIDR block of the aggregate route.

192.168.53.0/24

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

Use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note**

When left empty, the system automatically uses the RequestId as the ClientToken. The RequestId is different for each API request.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The returned result.

RequestId

string

The request ID.

0C2EE7A8-74D4-4081-8236-CEBDE3BBCF50

## Examples

Success response

`JSON` format

```
{
  "RequestId": "0C2EE7A8-74D4-4081-8236-CEBDE3BBCF50"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InstanceNotExist.TransitRouteTable

The transitRouter route table is not exist.

The error message returned because the specified transit router route table does not exist.

400

IncorrectStatus.TransitRouteTable

The status of transitRouter route table is invalid.

The error message returned because the status of the transit router route table does not support this operation. Try again later.

400

InstanceNotExist.AggregationRoute

The aggregation route is not exist.

The error message returned because the aggregated route does not exist.

400

InstanceNotExist.TransitRouter

The transitRouter is not exist.

The error message returned because the specified transit router does not exist.

400

IllegalParam.TransitRouteTableAggregationCidr

The param TransitRouteTableAggregationCidr is illegal.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

400

InvalidCidrBlock

The transitRouteTableAggregationCidr is invalid.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/RefreshTransitRouteTableAggregation#workbench-doc-change-demo) for a complete list.
