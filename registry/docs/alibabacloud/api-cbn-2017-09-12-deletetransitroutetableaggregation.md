Deletes an aggregate route.

## Operation description

-   Before you delete an aggregate route, make sure that your network has a redundant route to prevent service interruptions.
    
-   After an aggregate route is deleted, the aggregate route is automatically withdrawn from virtual private clouds (VPCs). Specific routes that fall within the aggregate route are advertised to the VPCs.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteTransitRouteTableAggregation)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteTransitRouteTableAggregation)

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

cen:DeleteTransitRouteTableAggregation

delete

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

The ID of the route table of the Enterprise Edition transit router.

vtb-6ehgc262hr170qgyc\*\*\*\*

TransitRouteTableAggregationCidr

string

Yes

The destination CIDR block of the aggregate route.

**Note**

The following CIDR blocks are not supported:

-   CIDR blocks that start with 0 or 100.64.
    
-   Multicast CIDR blocks, including 224.0.0.1 to 239.255.255.254.
    

192.168.10.0/24

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Default values:

-   **false** (default): performs only a dry run.
    
-   **true**: performs a dry run and performs the actual request. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
    

false

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

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

InstanceNotExist.AggregationRoute

This aggregation route is not exist.

The error message returned because the aggregated route does not exist.

400

InstanceNotExist.TransitRouteTable

The transitRouter route table is not exist.

The error message returned because the specified transit router route table does not exist.

400

IncorrectStatus.TransitRouteTable

The status of transitRouter route table is invalid.

The error message returned because the status of the transit router route table does not support this operation. Try again later.

400

InstanceNotExist.TransitRouter

The transitRouter is not exist.

The error message returned because the specified transit router does not exist.

400

IncorrectStatus.TransitRouter

The status of transitRouter is invalid.

The error message returned because the status of the transit router does not support this operation. Try again later.

400

IllegalParam.TransitRouteTableAggregationCidr

The param TransitRouteTableAggregationCidr is illegal.

400

InstanceNotExist.TrRouteTableAggregationCidr

The aggregation route does not exist.

The aggregation route does not exist.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

400

IncorrectStatus.TransitRouteTableAggregationCidr

Route table aggregation cidr status is invalid.

The error message returned because the status of The aggregate route does not support the operation. Please try again later.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/DeleteTransitRouteTableAggregation#workbench-doc-change-demo) for a complete list.
